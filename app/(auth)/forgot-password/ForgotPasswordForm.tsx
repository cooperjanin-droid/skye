"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { createClient } from "@/lib/supabase/client";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleReset(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback?next=/auth/reset-password`,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setSuccess(true);
    }
  }

  if (success) {
    return (
      <div className="text-center py-4">
        <div className="w-12 h-12 bg-green-900/30 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="font-heading text-lg font-bold text-white mb-2">Check your email</h2>
        <p className="text-sm text-[#A0AEC0]">
          We sent a password reset link to{" "}
          <span className="text-white font-medium">{email}</span>.
        </p>
        <p className="text-xs text-[#A0AEC0] mt-4">
          <Link href="/login" className="text-[#3B7BF6] hover:text-[#00D4FF] transition-colors">
            Back to sign in
          </Link>
        </p>
      </div>
    );
  }

  return (
    <>
      {error && (
        <div className="mb-4 p-3 bg-red-900/20 border border-red-500/30 rounded-lg text-sm text-red-400">
          {error}
        </div>
      )}

      <form onSubmit={handleReset} className="space-y-4" noValidate>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#A0AEC0] mb-1.5">
            Email address
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-[#0A0E1A] border border-[#1F2937] text-white placeholder:text-[#A0AEC0]/50 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B7BF6] focus:border-[#3B7BF6] transition-colors"
            placeholder="you@example.com"
          />
        </div>

        <Button type="submit" variant="primary" size="lg" className="w-full mt-2" disabled={loading}>
          {loading ? "Sending…" : "Send Reset Link"}
        </Button>
      </form>

      <p className="text-center text-sm text-[#A0AEC0] mt-6">
        <Link href="/login" className="text-[#3B7BF6] hover:text-[#00D4FF] transition-colors font-medium">
          Back to sign in
        </Link>
      </p>
    </>
  );
}
