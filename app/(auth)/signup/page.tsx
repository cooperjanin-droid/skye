import type { Metadata } from "next";
import SignupForm from "./SignupForm";

export const metadata: Metadata = {
  title: "Create Account — Skye",
};

export default function SignupPage() {
  return (
    <div className="w-full max-w-md">
      <div className="bg-[#111827] border border-[#1F2937] rounded-2xl p-8">
        <h1 className="font-heading text-2xl font-bold text-white mb-1">Create your account</h1>
        <p className="text-[#A0AEC0] text-sm mb-8">Start free — no credit card required</p>
        <SignupForm />
      </div>
    </div>
  );
}
