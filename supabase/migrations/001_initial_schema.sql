-- Profiles table
create table public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  email text,
  display_name text,
  avatar_url text,
  tier text default 'free' check (tier in ('free', 'premium')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Licence keys table (for plugin activation)
create table public.licence_keys (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade,
  key text unique not null,
  plugin text check (plugin in ('airliner_copilot', 'cessna_instructor', 'all')),
  is_active boolean default true,
  created_at timestamptz default now()
);

-- Course progress table
create table public.course_progress (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade,
  course text not null,
  chapter_or_module int not null,
  lesson int not null,
  completed boolean default false,
  completed_at timestamptz,
  unique(user_id, course, chapter_or_module, lesson)
);

-- Row Level Security
alter table public.profiles enable row level security;
alter table public.licence_keys enable row level security;
alter table public.course_progress enable row level security;

create policy "Users can view own profile" on public.profiles
  for select using (auth.uid() = id);
create policy "Users can update own profile" on public.profiles
  for update using (auth.uid() = id);

create policy "Users can view own licences" on public.licence_keys
  for select using (auth.uid() = user_id);

create policy "Users can view own progress" on public.course_progress
  for select using (auth.uid() = user_id);
create policy "Users can update own progress" on public.course_progress
  for all using (auth.uid() = user_id);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, display_name)
  values (new.id, new.email, new.raw_user_meta_data->>'display_name');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
