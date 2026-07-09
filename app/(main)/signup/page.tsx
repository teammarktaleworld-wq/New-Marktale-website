// app/signup/page.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
    createUserWithEmailAndPassword,
    signInWithPopup,
    updateProfile,
} from 'firebase/auth';
import { auth, googleProvider } from '@/lib/firebase';
import { Eye, EyeOff, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function SignupPage() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [googleLoading, setGoogleLoading] = useState(false);
    const [error, setError] = useState('');

    const parseError = (code: string) => {
        const map: Record<string, string> = {
            'auth/email-already-in-use': 'An account with this email already exists.',
            'auth/invalid-email': 'Invalid email address.',
            'auth/weak-password': 'Password should be at least 6 characters.',
        };
        return map[code] ?? 'Something went wrong. Please try again.';
    };

    const passwordStrength = () => {
        if (!password) return 0;
        let score = 0;
        if (password.length >= 8) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;
        return score;
    };

    const strengthLabel = ['', 'Weak', 'Fair', 'Good', 'Strong'];
    const strengthColors = ['', 'bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500'];

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        setLoading(true);
        try {
            const cred = await createUserWithEmailAndPassword(auth, email, password);
            if (name) await updateProfile(cred.user, { displayName: name });
            router.push('/admin');
        } catch (err: any) {
            setError(parseError(err.code));
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignup = async () => {
        setError('');
        setGoogleLoading(true);
        try {
            await signInWithPopup(auth, googleProvider);
            router.push('/admin');
        } catch (err: any) {
            if (err.code !== 'auth/popup-closed-by-user') {
                setError(parseError(err.code));
            }
        } finally {
            setGoogleLoading(false);
        }
    };

    const strength = passwordStrength();

    return (
        <div className="min-h-screen bg-kestone-black flex items-center justify-center px-4 py-12">
            {/* Background accent */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl" />
                <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-kestone-red/10 blur-3xl" />
            </div>

            <div className="relative w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-10">
                    <span className="text-3xl font-black text-white tracking-tight">
                        Mark<span className="text-blue-500">Tale</span>
                    </span>
                    <p className="mt-2 text-white/40 text-sm uppercase tracking-widest font-medium">
                        Admin Portal
                    </p>
                </div>

                {/* Card */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                    <h1 className="text-2xl font-bold text-white mb-1">Create account</h1>
                    <p className="text-white/40 text-sm mb-8">Get access to the admin dashboard</p>

                    {/* Error */}
                    {error && (
                        <div className="flex items-center gap-2.5 bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-lg px-4 py-3 mb-6">
                            <AlertCircle size={15} className="shrink-0" />
                            {error}
                        </div>
                    )}

                    {/* Google */}
                    <button
                        onClick={handleGoogleSignup}
                        disabled={googleLoading || loading}
                        className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 font-semibold rounded-xl py-3 px-4 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-6"
                    >
                        {googleLoading ? <Loader2 size={18} className="animate-spin" /> : <GoogleIcon />}
                        Continue with Google
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex-1 h-px bg-white/10" />
                        <span className="text-white/30 text-xs uppercase tracking-widest">or</span>
                        <div className="flex-1 h-px bg-white/10" />
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSignup} className="space-y-4">
                        <div>
                            <label className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Your Full Name"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 text-sm outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="you@marktale.in"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 text-sm outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder="Min. 8 characters"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-12 text-white placeholder:text-white/20 text-sm outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                                >
                                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                            {/* Strength meter */}
                            {password && (
                                <div className="mt-2">
                                    <div className="flex gap-1 mb-1">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div
                                                key={i}
                                                className={`h-1 flex-1 rounded-full transition-all ${i <= strength ? strengthColors[strength] : 'bg-white/10'}`}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-xs text-white/30">{strengthLabel[strength]}</p>
                                </div>
                            )}
                        </div>

                        <div>
                            <label className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                    placeholder="Re-enter password"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-12 text-white placeholder:text-white/20 text-sm outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all"
                                />
                                {confirmPassword && (
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                        {confirmPassword === password ? (
                                            <CheckCircle2 size={16} className="text-green-500" />
                                        ) : (
                                            <AlertCircle size={16} className="text-red-400" />
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading || googleLoading}
                            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl py-3 px-4 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
                        >
                            {loading ? (
                                <>
                                    <Loader2 size={16} className="animate-spin" />
                                    Creating account…
                                </>
                            ) : (
                                'Create Account'
                            )}
                        </button>
                    </form>

                    <p className="text-center text-white/30 text-sm mt-6">
                        Already have an account?{' '}
                        <Link href="/login" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

function GoogleIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4" />
            <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853" />
            <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" />
            <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335" />
        </svg>
    );
}