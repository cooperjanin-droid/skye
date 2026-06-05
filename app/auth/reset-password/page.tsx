"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { createClient } from "@/lib/supabase/client";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleReset(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setLoading(true);
    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0E1A] flex flex-col">
      <header className="px-6 py-5 border-b border-[#1F2937]">
        <Link href="/" className="inline-flex items-center gap-2 font-heading font-bold text-lg text-white hover:text-[#3B7BF6] transition-colors">
          <span aria-hidden="true">✈</span>
          <span>Skye</span>
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-[#111827] border border-[#1F2937] rounded-2xl p-8">
            <h1 className="font-heading text-2xl font-bold text-white mb-1">Set new password</h1>
            <p className="text-[#A0AEC0] text-sm mb-8">Choose a strong password for your account</p>

            {error && (
              <div className="mb-4 p-3 bg-red-900/20 border border-red-500/30 rounded-lg text-sm text-red-400">
                {error}
              </div>
            )}

            <form onSubmit={handleReset} className="space-y-4" noValidate>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#A0AEC0] mb-1.5">
                  New password
                </label>
                <input
                  id="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#0A0E1A] border border-[#1F2937] text-white placeholder:text-[#A0AEC0]/50 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B7BF6] focus:border-[#3B7BF6] transition-colors"
                  placeholder="At least 8 characters"
                />
              </div>

              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-[#A0AEC0] mb-1.5">
                  Confirm new password
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-[#0A0E1A] border border-[#1F2937] text-white placeholder:text-[#A0AEC0]/50 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B7BF6] focus:border-[#3B7BF6] transition-colors"
                  placeholder="••••••••"
                />
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full mt-2" disabled={loading}>
                {loading ? "Updating…" : "Update Password"}
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
