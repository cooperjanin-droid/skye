import type { Metadata } from "next";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Log In — Skye",
};

export default function LoginPage() {
  return (
    <div className="w-full max-w-md">
      <div className="bg-[#111827] border border-[#1F2937] rounded-2xl p-8">
        <h1 className="font-heading text-2xl font-bold text-white mb-1">Welcome back</h1>
        <p className="text-[#A0AEC0] text-sm mb-8">Sign in to your Skye account</p>
        <LoginForm />
      </div>
    </div>
  );
}
