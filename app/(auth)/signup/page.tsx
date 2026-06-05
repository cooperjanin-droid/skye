import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Create Account — Skye",
};

export default function SignupPage() {
  return (
    <div className="w-full max-w-md">
      <div className="bg-[#111827] border border-[#1F2937] rounded-2xl p-8">
        <h1 className="font-heading text-2xl font-bold text-white mb-1">Create your account</h1>
        <p className="text-[#A0AEC0] text-sm mb-8">Start free — no credit card required</p>

        {/* Google OAuth */}
        <button className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 rounded-lg py-2.5 px-4 text-sm font-medium hover:bg-gray-50 transition-colors mb-6 border border-gray-200">
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/>
            <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"/>
            <path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"/>
            <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"/>
          </svg>
          Sign up with Google
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-[#1F2937]" />
          <span className="text-xs text-[#A0AEC0]">or</span>
          <div className="flex-1 h-px bg-[#1F2937]" />
        </div>

        <form className="space-y-4" noValidate>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#A0AEC0] mb-1.5">
              Email address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              className="w-full bg-[#0A0E1A] border border-[#1F2937] text-white placeholder:text-[#A0AEC0]/50 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B7BF6] focus:border-[#3B7BF6] transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#A0AEC0] mb-1.5">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="new-password"
              required
              className="w-full bg-[#0A0E1A] border border-[#1F2937] text-white placeholder:text-[#A0AEC0]/50 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B7BF6] focus:border-[#3B7BF6] transition-colors"
              placeholder="At least 8 characters"
            />
          </div>

          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-[#A0AEC0] mb-1.5">
              Confirm password
            </label>
            <input
              id="confirm-password"
              type="password"
              autoComplete="new-password"
              required
              className="w-full bg-[#0A0E1A] border border-[#1F2937] text-white placeholder:text-[#A0AEC0]/50 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B7BF6] focus:border-[#3B7BF6] transition-colors"
              placeholder="••••••••"
            />
          </div>

          {/* Terms checkbox */}
          <div className="flex items-start gap-3 pt-1">
            <input
              id="terms"
              type="checkbox"
              required
              className="mt-0.5 w-4 h-4 rounded border border-[#1F2937] bg-[#0A0E1A] text-[#3B7BF6] focus:ring-[#3B7BF6] focus:ring-offset-[#0A0E1A]"
            />
            <label htmlFor="terms" className="text-xs text-[#A0AEC0] leading-relaxed">
              I agree to the{" "}
              <Link href="/terms" className="text-[#3B7BF6] hover:text-[#00D4FF] transition-colors">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-[#3B7BF6] hover:text-[#00D4FF] transition-colors">
                Privacy Policy
              </Link>
            </label>
          </div>

          <Button type="submit" variant="primary" size="lg" className="w-full mt-2">
            Create Account
          </Button>
        </form>

        <p className="text-center text-sm text-[#A0AEC0] mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-[#3B7BF6] hover:text-[#00D4FF] transition-colors font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
