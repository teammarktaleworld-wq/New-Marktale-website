// 'use client';

// import React, { useState, useRef, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
// import { cn } from '@/lib/utils';
// import {
//   Menu, X, LogIn, LogOut, LayoutDashboard,
//   User, ChevronDown, Loader2, Shield,
// } from 'lucide-react';
// import { signOut, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// import { auth } from '@/lib/firebase';
// import { useAuth } from '@/hooks/useAuth';
// import AnnouncementBar from './AnnouncementBar';

// const googleProvider = new GoogleAuthProvider();
// googleProvider.setCustomParameters({ prompt: 'select_account' });

// export default function Navbar() {
//   const { scrollY } = useScroll();
//   const [background,     setBackground]     = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [dropdownOpen,   setDropdownOpen]   = useState(false);
//   const [googleLoading,  setGoogleLoading]  = useState(false);
//   const [googleError,    setGoogleError]    = useState<string | null>(null);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   const { user, userDoc, loading, isAdmin } = useAuth();

//   useMotionValueEvent(scrollY, 'change', (latest) => setBackground(latest > 50));

//   useEffect(() => {
//     function handleClick(e: MouseEvent) {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
//         setDropdownOpen(false);
//     }
//     document.addEventListener('mousedown', handleClick);
//     return () => document.removeEventListener('mousedown', handleClick);
//   }, []);

//   const navLinks = [
//     { name: 'Home',       href: '/' },
//     { name: 'About Us',   href: '/about' },
//     { name: 'Services',   href: '/services' },
//     { name: 'Projects',   href: '/projects' },
//     { name: 'Awards',     href: '/awards' },
//     { name: 'Careers',    href: '/careers' },
//     { name: 'Blogs',      href: '/blog' },
//     { name: 'Contact Us', href: '/contact' },
//   ];

//   // ── Handlers ────────────────────────────────────────────────────────────────

//   const handleGoogleSignIn = async () => {
//     setGoogleError(null);
//     setGoogleLoading(true);
//     try {
//       await signInWithPopup(auth, googleProvider);
//       setMobileMenuOpen(false);
//     } catch (err: any) {
//       if (
//         err?.code !== 'auth/popup-closed-by-user' &&
//         err?.code !== 'auth/cancelled-popup-request'
//       ) {
//         setGoogleError('Sign-in failed. Please try again.');
//       }
//     } finally {
//       setGoogleLoading(false);
//     }
//   };

//   const handleSignOut = async () => {
//     await signOut(auth);
//     setDropdownOpen(false);
//     setMobileMenuOpen(false);
//   };

//   const getInitials = (name: string | null) => {
//     if (!name) return '?';
//     return name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2);
//   };

//   // ── Shared Google button ─────────────────────────────────────────────────

//   const GoogleSignInButton = ({ fullWidth = false }: { fullWidth?: boolean }) => (
//     <div className={cn('flex flex-col', fullWidth && 'w-full')}>
//       <button
//         onClick={handleGoogleSignIn}
//         disabled={googleLoading}
//         className={cn(
//           'flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/15',
//           'bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-200',
//           'text-white text-sm font-medium disabled:opacity-60 disabled:cursor-not-allowed',
//           fullWidth && 'w-full justify-center py-3',
//         )}
//       >
//         {googleLoading ? (
//           <Loader2 size={16} className="animate-spin" />
//         ) : (
//           <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
//             <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
//             <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
//             <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
//           </svg>
//         )}
//         {googleLoading ? 'Signing in…' : 'Sign in with Google'}
//       </button>
//       {googleError && (
//         <p className="mt-1.5 text-xs text-red-400 text-center">{googleError}</p>
//       )}
//     </div>
//   );

//   return (
//     <motion.nav
//       className="fixed top-0 left-0 right-0 z-50 bg-kestone-black transition-all duration-300"
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <AnnouncementBar />

//       <div className={cn('w-full transition-all duration-300', background ? 'py-4 shadow-md' : 'py-6')}>
//         <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">

//           {/* Logo */}
//           <Link href="/" className="relative block w-40 h-12">
//             <Image src="/images/image.png" alt="MarkTale" fill className="object-contain"
//               sizes="(max-width: 768px) 160px, 160px" />
//           </Link>

//           {/* ── Desktop nav ─────────────────────────────────────────────────── */}
//           <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
//             {navLinks.map((link) => (
//               <div key={link.name} className="relative group">
//                 <Link href={link.href}
//                   className="relative text-white font-body text-sm font-medium hover:text-white
//                     transition-colors duration-200 flex items-center gap-1 group">
//                   {link.name}
//                   <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-kestone-red
//                     scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
//                 </Link>
//               </div>
//             ))}

//             <Link href="/contact"
//               className="inline-block px-6 py-2 bg-white text-black font-heading font-bold
//                 text-sm rounded-full hover:bg-gray-200 transition-colors">
//               Let&apos;s Talk
//             </Link>

//             {/* Auth */}
//             {!loading && (
//               user ? (
//                 <div className="relative" ref={dropdownRef}>
//                   {/* Avatar button */}
//                   <button
//                     onClick={() => setDropdownOpen(!dropdownOpen)}
//                     className="flex items-center gap-2 rounded-full pl-1 pr-3 py-1
//                       border border-white/15 hover:border-white/30 transition-colors
//                       bg-white/5 hover:bg-white/10"
//                   >
//                     {user.photoURL ? (
//                       <Image src={user.photoURL} alt={user.displayName ?? 'User'}
//                         width={28} height={28} className="rounded-full object-cover" />
//                     ) : (
//                       <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center
//                         justify-center text-white text-xs font-bold">
//                         {getInitials(user.displayName)}
//                       </div>
//                     )}
//                     <span className="text-white text-sm font-medium max-w-[100px] truncate">
//                       {user.displayName?.split(' ')[0] ?? user.email?.split('@')[0]}
//                     </span>
//                     {/* Role badge */}
//                     {isAdmin && (
//                       <span className="text-[10px] font-bold bg-blue-600/30 text-blue-400
//                         border border-blue-500/40 rounded-full px-1.5 py-0.5 leading-none">
//                         Admin
//                       </span>
//                     )}
//                     <ChevronDown size={14}
//                       className={cn('text-white/50 transition-transform duration-200',
//                         dropdownOpen && 'rotate-180')} />
//                   </button>

//                   {/* Dropdown */}
//                   <AnimatePresence>
//                     {dropdownOpen && (
//                       <motion.div
//                         initial={{ opacity: 0, y: 8, scale: 0.95 }}
//                         animate={{ opacity: 1, y: 0, scale: 1 }}
//                         exit={{ opacity: 0, y: 8, scale: 0.95 }}
//                         transition={{ duration: 0.15 }}
//                         className="absolute right-0 mt-2 w-56 bg-[#111] border border-white/10
//                           rounded-xl shadow-2xl overflow-hidden"
//                       >
//                         {/* User info header */}
//                         <div className="px-4 py-3 border-b border-white/10">
//                           <div className="flex items-center gap-2.5">
//                             {user.photoURL ? (
//                               <Image src={user.photoURL} alt="avatar"
//                                 width={32} height={32} className="rounded-full object-cover" />
//                             ) : (
//                               <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center
//                                 justify-center text-white text-xs font-bold flex-shrink-0">
//                                 {getInitials(user.displayName)}
//                               </div>
//                             )}
//                             <div className="min-w-0">
//                               <p className="text-white text-sm font-semibold truncate">
//                                 {user.displayName ?? 'User'}
//                               </p>
//                               <p className="text-white/40 text-xs truncate">{user.email}</p>
//                             </div>
//                           </div>
//                           {/* Role pill */}
//                           <div className="mt-2.5 flex items-center gap-1.5">
//                             <span className={cn(
//                               'inline-flex items-center gap-1 text-[10px] font-bold uppercase',
//                               'tracking-wider rounded-full px-2 py-0.5',
//                               isAdmin
//                                 ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
//                                 : 'bg-white/10 text-white/50 border border-white/15',
//                             )}>
//                               {isAdmin && <Shield size={9} />}
//                               {userDoc?.role ?? 'user'}
//                             </span>
//                             {userDoc?.lastLoginAt && (
//                               <span className="text-[10px] text-white/30">
//                                 Login #{userDoc.loginCount}
//                               </span>
//                             )}
//                           </div>
//                         </div>

//                         <div className="py-1.5">
//                           <Link href="/profile" onClick={() => setDropdownOpen(false)}
//                             className="flex items-center gap-3 px-4 py-2.5 text-white/70
//                               hover:text-white hover:bg-white/5 text-sm transition-colors">
//                             <User size={15} /> My Profile
//                           </Link>

//                           {/* Admin dashboard — only visible to admins */}
//                           {isAdmin && (
//                             <Link href="/admin/dashboard" onClick={() => setDropdownOpen(false)}
//                               className="flex items-center gap-3 px-4 py-2.5 text-blue-400
//                                 hover:text-blue-300 hover:bg-blue-500/5 text-sm transition-colors">
//                               <LayoutDashboard size={15} /> Admin Dashboard
//                             </Link>
//                           )}

//                           <button onClick={handleSignOut}
//                             className="w-full flex items-center gap-3 px-4 py-2.5 text-red-400
//                               hover:text-red-300 hover:bg-red-500/5 text-sm transition-colors">
//                             <LogOut size={15} /> Sign Out
//                           </button>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               ) : (
//                 <GoogleSignInButton />
//               )
//             )}
//           </div>

//           {/* ── Mobile right ────────────────────────────────────────────────── */}
//           <div className="lg:hidden flex items-center gap-3">
//             {!loading && (
//               user ? (
//                 <Link href="/profile">
//                   {user.photoURL ? (
//                     <Image src={user.photoURL} alt="Profile" width={32} height={32}
//                       className="rounded-full object-cover border border-white/20" />
//                   ) : (
//                     <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center
//                       justify-center text-white text-xs font-bold border border-white/20">
//                       {getInitials(user.displayName)}
//                     </div>
//                   )}
//                 </Link>
//               ) : (
//                 <button onClick={handleGoogleSignIn} disabled={googleLoading}
//                   className="text-white/70 hover:text-white transition-colors disabled:opacity-50"
//                   aria-label="Sign in with Google">
//                   {googleLoading
//                     ? <Loader2 size={22} className="animate-spin" />
//                     : <LogIn size={22} />}
//                 </button>
//               )
//             )}
//             <button className="text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}>
//               {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ── Mobile drawer ───────────────────────────────────────────────────── */}
//       {mobileMenuOpen && (
//         <motion.div
//           initial={{ opacity: 0, height: 0 }}
//           animate={{ opacity: 1, height: '100vh' }}
//           exit={{ opacity: 0, height: 0 }}
//           className="lg:hidden bg-kestone-black border-t border-gray-800 absolute
//             inset-x-0 top-[100%] z-40 overflow-y-auto"
//         >
//           <div className="flex flex-col p-6 space-y-4">
//             {navLinks.map((link) => (
//               <Link key={link.name} href={link.href}
//                 className="text-white font-body text-lg font-medium hover:text-kestone-red"
//                 onClick={() => setMobileMenuOpen(false)}>
//                 {link.name}
//               </Link>
//             ))}

//             <Link href="/contact"
//               className="inline-block px-6 py-2 bg-white text-black font-heading font-bold
//                 text-sm rounded-full hover:bg-gray-200 transition-colors text-center"
//               onClick={() => setMobileMenuOpen(false)}>
//               Let&apos;s Talk
//             </Link>

//             {/* Mobile auth section */}
//             {!loading && (
//               <div className="border-t border-white/10 pt-4 space-y-3">
//                 {user ? (
//                   <>
//                     {/* User card */}
//                     <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
//                       {user.photoURL ? (
//                         <Image src={user.photoURL} alt="Profile" width={40} height={40}
//                           className="rounded-full" />
//                       ) : (
//                         <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center
//                           justify-center text-white text-sm font-bold flex-shrink-0">
//                           {getInitials(user.displayName)}
//                         </div>
//                       )}
//                       <div className="min-w-0">
//                         <p className="text-white font-semibold text-sm truncate">
//                           {user.displayName ?? 'User'}
//                         </p>
//                         <p className="text-white/40 text-xs truncate">{user.email}</p>
//                         <span className={cn(
//                           'inline-flex items-center gap-1 mt-1 text-[10px] font-bold',
//                           'uppercase tracking-wider rounded-full px-2 py-0.5',
//                           isAdmin
//                             ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
//                             : 'bg-white/10 text-white/50 border border-white/15',
//                         )}>
//                           {isAdmin && <Shield size={9} />}
//                           {userDoc?.role ?? 'user'}
//                         </span>
//                       </div>
//                     </div>

//                     <Link href="/profile"
//                       className="flex items-center gap-2 text-white/70 text-base font-medium"
//                       onClick={() => setMobileMenuOpen(false)}>
//                       <User size={18} /> My Profile
//                     </Link>

//                     {/* Admin dashboard link — only for admins */}
//                     {isAdmin && (
//                       <Link href="/admin/dashboard"
//                         className="flex items-center gap-2 text-blue-400 text-base font-medium"
//                         onClick={() => setMobileMenuOpen(false)}>
//                         <LayoutDashboard size={18} /> Admin Dashboard
//                       </Link>
//                     )}

//                     <button onClick={handleSignOut}
//                       className="flex items-center gap-2 text-red-400 text-base font-medium">
//                       <LogOut size={18} /> Sign Out
//                     </button>
//                   </>
//                 ) : (
//                   <GoogleSignInButton fullWidth />
//                 )}
//               </div>
//             )}
//           </div>
//         </motion.div>
//       )}
//     </motion.nav>
//   );
// }

"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  LogIn,
  LogOut,
  LayoutDashboard,
  ChevronDown,
  Loader2,
  Shield,
} from "lucide-react";
import { signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuth } from "@/hooks/useAuth";
import AnnouncementBar from "./AnnouncementBar";

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export default function Navbar() {
  const { scrollY } = useScroll();
  const [background, setBackground] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [googleError, setGoogleError] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { user, userDoc, loading, isAdmin } = useAuth();

  useMotionValueEvent(scrollY, "change", (latest) =>
    setBackground(latest > 50),
  );

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      )
        setDropdownOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Awards", href: "/awards" },
    { name: "Careers", href: "/careers" },
    { name: "Blogs", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  // ── Handlers ────────────────────────────────────────────────────────────────

  const handleGoogleSignIn = async () => {
    setGoogleError(null);
    setGoogleLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      setMobileMenuOpen(false);
    } catch (err: any) {
      if (
        err?.code !== "auth/popup-closed-by-user" &&
        err?.code !== "auth/cancelled-popup-request"
      ) {
        setGoogleError("Sign-in failed. Please try again.");
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const getInitials = (name: string | null) => {
    if (!name) return "?";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  // ── Shared Google button ─────────────────────────────────────────────────

  const GoogleSignInButton = ({
    fullWidth = false,
  }: {
    fullWidth?: boolean;
  }) => (
    <div className={cn("flex flex-col", fullWidth && "w-full")}>
      <button
        onClick={handleGoogleSignIn}
        disabled={googleLoading}
        className={cn(
          "flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/15",
          "bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-200",
          "text-white text-sm font-medium disabled:opacity-60 disabled:cursor-not-allowed",
          fullWidth && "w-full justify-center py-3",
        )}
      >
        {googleLoading ? (
          <Loader2 size={16} className="animate-spin" />
        ) : (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
        )}
        {googleLoading ? "Signing in…" : "Sign in with Google"}
      </button>
      {googleError && (
        <p className="mt-1.5 text-xs text-red-400 text-center">{googleError}</p>
      )}
    </div>
  );

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-kestone-black transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AnnouncementBar />

      <div
        className={cn(
          "w-full transition-all duration-300",
          background ? "py-4 shadow-md" : "py-6",
        )}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative block w-40 h-12">
            <Image
              src="/images/image.png"
              alt="MarkTale"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 160px, 160px"
            />
          </Link>

          {/* ── Desktop nav ─────────────────────────────────────────────────── */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className="relative text-white font-body text-sm font-medium hover:text-white
                    transition-colors duration-200 flex items-center gap-1 group"
                >
                  {link.name}
                  <span
                    className="absolute left-0 -bottom-1 w-full h-[2px] bg-kestone-red
                    scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
                  />
                </Link>
              </div>
            ))}

            <Link
              href="/contact"
              className="inline-block px-6 py-2 bg-white text-black font-heading font-bold
                text-sm rounded-full hover:bg-gray-200 transition-colors"
            >
              Let&apos;s Talk
            </Link>

            {/* Auth */}
            {!loading &&
              (user ? (
                <div className="relative" ref={dropdownRef}>
                  {/* Avatar button */}
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-2 rounded-full pl-1 pr-3 py-1
                      border border-white/15 hover:border-white/30 transition-colors
                      bg-white/5 hover:bg-white/10"
                  >
                    {user.photoURL ? (
                      <Image
                        src={user.photoURL}
                        alt={user.displayName ?? "User"}
                        width={28}
                        height={28}
                        className="rounded-full object-cover"
                      />
                    ) : (
                      <div
                        className="w-7 h-7 rounded-full bg-blue-600 flex items-center
                        justify-center text-white text-xs font-bold"
                      >
                        {getInitials(user.displayName)}
                      </div>
                    )}
                    <span className="text-white text-sm font-medium max-w-[100px] truncate">
                      {user.displayName?.split(" ")[0] ??
                        user.email?.split("@")[0]}
                    </span>
                    {/* Role badge */}
                    {isAdmin && (
                      <span
                        className="text-[10px] font-bold bg-blue-600/30 text-blue-400
                        border border-blue-500/40 rounded-full px-1.5 py-0.5 leading-none"
                      >
                        Admin
                      </span>
                    )}
                    <ChevronDown
                      size={14}
                      className={cn(
                        "text-white/50 transition-transform duration-200",
                        dropdownOpen && "rotate-180",
                      )}
                    />
                  </button>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-2 w-56 bg-[#111] border border-white/10
                          rounded-xl shadow-2xl overflow-hidden"
                      >
                        {/* User info header */}
                        <div className="px-4 py-3 border-b border-white/10">
                          <div className="flex items-center gap-2.5">
                            {user.photoURL ? (
                              <Image
                                src={user.photoURL}
                                alt="avatar"
                                width={32}
                                height={32}
                                className="rounded-full object-cover"
                              />
                            ) : (
                              <div
                                className="w-8 h-8 rounded-full bg-blue-600 flex items-center
                                justify-center text-white text-xs font-bold flex-shrink-0"
                              >
                                {getInitials(user.displayName)}
                              </div>
                            )}
                            <div className="min-w-0">
                              <p className="text-white text-sm font-semibold truncate">
                                {user.displayName ?? "User"}
                              </p>
                              <p className="text-white/40 text-xs truncate">
                                {user.email}
                              </p>
                            </div>
                          </div>
                          {/* Role pill */}
                          <div className="mt-2.5 flex items-center gap-1.5">
                            <span
                              className={cn(
                                "inline-flex items-center gap-1 text-[10px] font-bold uppercase",
                                "tracking-wider rounded-full px-2 py-0.5",
                                isAdmin
                                  ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                                  : "bg-white/10 text-white/50 border border-white/15",
                              )}
                            >
                              {isAdmin && <Shield size={9} />}
                              {userDoc?.role ?? "user"}
                            </span>
                            {userDoc?.lastLoginAt && (
                              <span className="text-[10px] text-white/30">
                                Login #{userDoc.loginCount}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="py-1.5">
                          {/* Admin dashboard — only visible to admins */}
                          {isAdmin && (
                            <Link
                              href="/admin/dashboard"
                              onClick={() => setDropdownOpen(false)}
                              className="flex items-center gap-3 px-4 py-2.5 text-blue-400
                                hover:text-blue-300 hover:bg-blue-500/5 text-sm transition-colors"
                            >
                              <LayoutDashboard size={15} /> Admin Dashboard
                            </Link>
                          )}

                          <button
                            onClick={handleSignOut}
                            className="w-full flex items-center gap-3 px-4 py-2.5 text-red-400
                              hover:text-red-300 hover:bg-red-500/5 text-sm transition-colors"
                          >
                            <LogOut size={15} /> Sign Out
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <GoogleSignInButton />
              ))}
          </div>

          {/* ── Mobile right ────────────────────────────────────────────────── */}
          <div className="lg:hidden flex items-center gap-3">
            {!loading && !user && (
              <button
                onClick={handleGoogleSignIn}
                disabled={googleLoading}
                className="text-white/70 hover:text-white transition-colors disabled:opacity-50"
                aria-label="Sign in with Google"
              >
                {googleLoading ? (
                  <Loader2 size={22} className="animate-spin" />
                ) : (
                  <LogIn size={22} />
                )}
              </button>
            )}
            <button
              className="text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile drawer ───────────────────────────────────────────────────── */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "100vh" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-kestone-black border-t border-gray-800 absolute
            inset-x-0 top-[100%] z-40 overflow-y-auto"
        >
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white font-body text-lg font-medium hover:text-kestone-red"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              className="inline-block px-6 py-2 bg-white text-black font-heading font-bold
                text-sm rounded-full hover:bg-gray-200 transition-colors text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Let&apos;s Talk
            </Link>

            {/* Mobile auth section */}
            {!loading && (
              <div className="border-t border-white/10 pt-4 space-y-3">
                {user ? (
                  <>
                    {/* User card */}
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                      {user.photoURL ? (
                        <Image
                          src={user.photoURL}
                          alt="Profile"
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      ) : (
                        <div
                          className="w-10 h-10 rounded-full bg-blue-600 flex items-center
                          justify-center text-white text-sm font-bold flex-shrink-0"
                        >
                          {getInitials(user.displayName)}
                        </div>
                      )}
                      <div className="min-w-0">
                        <p className="text-white font-semibold text-sm truncate">
                          {user.displayName ?? "User"}
                        </p>
                        <p className="text-white/40 text-xs truncate">
                          {user.email}
                        </p>
                        <span
                          className={cn(
                            "inline-flex items-center gap-1 mt-1 text-[10px] font-bold",
                            "uppercase tracking-wider rounded-full px-2 py-0.5",
                            isAdmin
                              ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                              : "bg-white/10 text-white/50 border border-white/15",
                          )}
                        >
                          {isAdmin && <Shield size={9} />}
                          {userDoc?.role ?? "user"}
                        </span>
                      </div>
                    </div>

                    {/* Admin dashboard link — only for admins */}
                    {isAdmin && (
                      <Link
                        href="/admin/dashboard"
                        className="flex items-center gap-2 text-blue-400 text-base font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <LayoutDashboard size={18} /> Admin Dashboard
                      </Link>
                    )}

                    <button
                      onClick={handleSignOut}
                      className="flex items-center gap-2 text-red-400 text-base font-medium"
                    >
                      <LogOut size={18} /> Sign Out
                    </button>
                  </>
                ) : (
                  <GoogleSignInButton fullWidth />
                )}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
