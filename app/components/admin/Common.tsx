"use client";

import { CSSProperties } from "react";

// ── Styles ─────────────────────────────────────────────────
export const S = {
  root: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "'Inter', 'DM Sans', 'Segoe UI', sans-serif",
    background: "#000000",
    color: "#E2E8F0",
  },
  sidebar: {
    width: 280,
    minHeight: "100vh",
    background: "#0A0A0A",
    borderRight: "1px solid #1A1A1A",
    display: "flex",
    flexDirection: "column" as const,
    flexShrink: 0,
    position: "sticky" as const,
    top: 0,
    maxHeight: "100vh",
    overflowY: "auto" as const,
  },

  // ADD these icons to your existing Icons object in Common.tsx
  // if they don't already exist:

  Upload: () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  ),

  logo: {
    padding: "24px 24px 20px",
    borderBottom: "1px solid #1A1A1A",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoMark: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  logoBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    background: "linear-gradient(135deg, #F59E0B, #3B82F6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: 18,
    color: "#FFFFFF",
  },
  logoImage: {},
  logoText: {
    fontSize: 20,
    fontWeight: 700,
    color: "#F8FAFC",
    letterSpacing: "-0.4px",
  },
  logoSub: {
    fontSize: 10,
    color: "#64748B",
    letterSpacing: "1px",
    textTransform: "uppercase" as const,
    marginTop: 2,
  },
  navSection: { padding: "20px 16px" },
  navLabel: {
    fontSize: 10,
    color: "#475569",
    letterSpacing: "1.5px",
    textTransform: "uppercase" as const,
    padding: "0 12px",
    marginBottom: 12,
  },
  navItem: (active: boolean) => ({
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "10px 16px",
    borderRadius: 10,
    cursor: "pointer",
    fontSize: 14,
    fontWeight: active ? 600 : 500,
    color: active ? "#3B82F6" : "#94A3B8",
    background: active ? "rgba(59,130,246,0.1)" : "transparent",
    border: active ? "1px solid rgba(59,130,246,0.2)" : "1px solid transparent",
    transition: "all 0.2s",
    marginBottom: 4,
    ":hover": {
      background: "#1A1A1A",
    },
  }),
  navIcon: { fontSize: 18, width: 22, display: "flex", alignItems: "center" },
  sidebarFooter: {
    marginTop: "auto",
    padding: "20px 20px",
    borderTop: "1px solid #1A1A1A",
  },
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column" as const,
    overflow: "hidden",
  },
  topbar: {
    background: "#0A0A0A",
    borderBottom: "1px solid #1A1A1A",
    padding: "14px 28px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: 700,
    color: "#F8FAFC",
    letterSpacing: "-0.3px",
  },
  breadcrumb: { fontSize: 12, color: "#475569", marginTop: 2 },
  avatar: (bg?: string) => ({
    width: 38,
    height: 38,
    borderRadius: "50%",
    background: bg || "#1E3A5F",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 13,
    fontWeight: 600,
    color: "#F8FAFC",
    flexShrink: 0,
  }),
  badge: (color?: string) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "2px 10px",
    borderRadius: 20,
    fontSize: 11,
    fontWeight: 600,
    background: color ? color + "22" : "#3B82F622",
    color: color || "#3B82F6",
    border: `1px solid ${color ? color + "44" : "#3B82F644"}`,
  }),
  content: { flex: 1, padding: "24px 28px", overflowY: "auto" as const },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: 20,
    marginBottom: 28,
  },
  statCard: {
    background: "#0A0A0A",
    border: "1px solid #1A1A1A",
    borderRadius: 14,
    padding: "20px 24px",
    position: "relative" as const,
    overflow: "hidden",
    transition: "all 0.2s",
    ":hover": {
      borderColor: "#3B82F6",
      transform: "translateY(-2px)",
    },
  },
  statNum: { fontSize: 30, fontWeight: 700, color: "#F8FAFC", lineHeight: 1 },
  statLabel: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 8,
    textTransform: "uppercase" as const,
    letterSpacing: "0.5px",
  },
  statAccent: (c: string) => ({
    position: "absolute" as const,
    top: 0,
    left: 0,
    width: "100%",
    height: 3,
    background: c,
  }),
  statIcon: {
    position: "absolute" as const,
    top: 16,
    right: 16,
    opacity: 0.3,
  },
  card: {
    background: "#0A0A0A",
    border: "1px solid #1A1A1A",
    borderRadius: 14,
    overflow: "hidden",
  },
  cardHeader: {
    padding: "16px 24px",
    borderBottom: "1px solid #1A1A1A",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardTitle: { fontSize: 14, fontWeight: 600, color: "#E2E8F0" },
  table: { width: "100%", borderCollapse: "collapse" as const },
  th: {
    padding: "12px 20px",
    fontSize: 11,
    fontWeight: 600,
    color: "#475569",
    textTransform: "uppercase" as const,
    letterSpacing: "0.8px",
    textAlign: "left" as const,
    borderBottom: "1px solid #1A1A1A",
    background: "#050505",
  },
  td: {
    padding: "14px 20px",
    fontSize: 13,
    color: "#CBD5E1",
    borderBottom: "1px solid #0F0F0F",
    verticalAlign: "middle" as const,
  },
  btn: (variant: "primary" | "ghost" | "danger" | "success" | "warning") => {
    const variants = {
      primary: { background: "#3B82F6", color: "#FFFFFF", border: "none" },
      ghost: {
        background: "transparent",
        color: "#94A3B8",
        border: "1px solid #1A1A1A",
      },
      danger: {
        background: "transparent",
        color: "#EF4444",
        border: "1px solid #EF444433",
      },
      success: {
        background: "transparent",
        color: "#10B981",
        border: "1px solid #10B98133",
      },
      warning: {
        background: "transparent",
        color: "#F59E0B",
        border: "1px solid #F59E0B33",
      },
    };
    return {
      ...variants[variant],
      padding: "7px 14px",
      borderRadius: 8,
      fontSize: 12,
      fontWeight: 500,
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      transition: "all 0.2s",
      ":hover": {
        opacity: 0.85,
        transform: "translateY(-1px)",
      },
    };
  },
  input: {
    background: "#050505",
    border: "1px solid #1A1A1A",
    borderRadius: 8,
    padding: "10px 14px",
    fontSize: 13,
    color: "#E2E8F0",
    outline: "none",
    width: "100%",
    transition: "all 0.2s",
    ":focus": {
      borderColor: "#3B82F6",
      boxShadow: "0 0 0 2px rgba(59,130,246,0.2)",
    },
  },
  select: {
    background: "#050505",
    border: "1px solid #1A1A1A",
    borderRadius: 8,
    padding: "10px 14px",
    fontSize: 13,
    color: "#E2E8F0",
    outline: "none",
  },
  modal: {
    position: "fixed" as const,
    inset: 0,
    background: "rgba(0,0,0,0.9)",
    backdropFilter: "blur(8px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    padding: 20,
  },
  modalBox: {
    background: "#0A0A0A",
    border: "1px solid #1A1A1A",
    borderRadius: 16,
    padding: 28,
    width: "100%",
    maxWidth: 540,
    maxHeight: "90vh",
    overflowY: "auto" as const,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 700,
    color: "#F8FAFC",
    marginBottom: 20,
  },
  formGroup: { marginBottom: 16 },
  label: {
    display: "block",
    fontSize: 11,
    fontWeight: 600,
    color: "#64748B",
    marginBottom: 6,
    textTransform: "uppercase" as const,
    letterSpacing: "0.5px",
  },
  searchBar: {
    background: "#050505",
    border: "1px solid #1A1A1A",
    borderRadius: 8,
    padding: "9px 14px",
    fontSize: 13,
    color: "#E2E8F0",
    outline: "none",
    width: 240,
    transition: "all 0.2s",
    ":focus": {
      borderColor: "#3B82F6",
    },
  },
  tag: (c: string) => ({
    display: "inline-block",
    padding: "3px 12px",
    borderRadius: 20,
    fontSize: 11,
    fontWeight: 600,
    background: c + "18",
    color: c,
    border: `1px solid ${c}30`,
  }),
  sectionTitle: {
    fontSize: 24,
    fontWeight: 700,
    color: "#F8FAFC",
    marginBottom: 4,
    letterSpacing: "-0.3px",
  },
  sectionSub: { fontSize: 13, color: "#475569", marginBottom: 24 },
};

// ── Icons ─────────────────────────────────────────────────
export const Icons = {
  Dashboard: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  Blog: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <path d="M4 4h16v16H4z" />
      <path d="M8 8h8M8 12h6M8 16h4" />
    </svg>
  ),
  Services: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H5.78a1.65 1.65 0 0 0-1.51 1 1.65 1.65 0 0 0 .33 1.82l.03.03A10 10 0 0 0 12 17.66a10 10 0 0 0 6.37-2.63z" />
      <path d="M5.78 9h12.44a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.03-.03A10 10 0 0 0 12 2.34a10 10 0 0 0-6.37 2.63l-.03.03a1.65 1.65 0 0 0-.33 1.82A1.65 1.65 0 0 0 5.78 9z" />
    </svg>
  ),
  Team: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Settings: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H5.78a1.65 1.65 0 0 0-1.51 1 1.65 1.65 0 0 0 .33 1.82l.03.03A10 10 0 0 0 12 17.66a10 10 0 0 0 6.37-2.63z" />
      <path d="M5.78 9h12.44a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.03-.03A10 10 0 0 0 12 2.34a10 10 0 0 0-6.37 2.63l-.03.03a1.65 1.65 0 0 0-.33 1.82A1.65 1.65 0 0 0 5.78 9z" />
    </svg>
  ),
  Edit: () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M17 3l4 4-7 7H10v-4l7-7z" />
      <path d="M4 20h16" />
    </svg>
  ),
  Delete: () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M4 7h16M10 11v6M14 11v6M5 7l1 13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-13" />
      <path d="M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
    </svg>
  ),
  Add: () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),
  Save: () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
      <polyline points="17 21 17 13 7 13 7 21" />
      <polyline points="7 3 7 8 15 8" />
    </svg>
  ),
  Check: () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  Dot: () => (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
      <circle cx="4" cy="4" r="3" />
    </svg>
  ),
  Search: () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  ChevronRight: () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  ),
  Mail: () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 7L2 7" />
    </svg>
  ),
  ViewSite: () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
  Refresh: () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M23 4v6h-6" />
      <path d="M1 20v-6h6" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  ),
};

// ── Confirm Dialog ─────────────────────────────────────────────────
export function ConfirmDialog({
  message,
  onConfirm,
  onCancel,
}: {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <div style={S.modal}>
      <div style={{ ...S.modalBox, maxWidth: 360 }}>
        <div style={{ fontSize: 28, marginBottom: 12 }}>⚠️</div>
        <div
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: "#F8FAFC",
            marginBottom: 8,
          }}
        >
          Confirm Delete
        </div>
        <div style={{ fontSize: 13, color: "#94A3B8", marginBottom: 24 }}>
          {message}
        </div>
        <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
          <button style={S.btn("ghost")} onClick={onCancel}>
            Cancel
          </button>
          <button style={S.btn("danger")} onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Color Helpers ─────────────────────────────────────────────────
export const CAT_COLORS: Record<string, string> = {
  "Email Marketing": "#F59E0B",
  "Performance Marketing": "#3B82F6",
  "SEO Strategy": "#10B981",
  Tech: "#8B5CF6",
  Startups: "#EF4444",
  AI: "#06B6D4",
  Design: "#EC4899",
  "Case Study": "#F97316",
  Branding: "#84CC16",
};

export const AVATAR_COLORS = [
  "#3B82F6",
  "#10B981",
  "#8B5CF6",
  "#F59E0B",
  "#EF4444",
  "#EC4899",
  "#06B6D4",
];

export function catColor(cat: string): string {
  return CAT_COLORS[cat] || "#6B7280";
}
