import type { Metadata } from "next";
import ForgotPasswordForm from "./ForgotPasswordForm";

export const metadata: Metadata = {
  title: "Reset Password — Skye",
};

export default function ForgotPasswordPage() {
  return (
    <div className="w-full max-w-md">
      <div className="bg-[#111827] border border-[#1F2937] rounded-2xl p-8">
        <h1 className="font-heading text-2xl font-bold text-white mb-1">Reset your password</h1>
        <p className="text-[#A0AEC0] text-sm mb-8">
          Enter your email and we&apos;ll send you a reset link
        </p>
        <ForgotPasswordForm />
      </div>
    </div>
  );
}
