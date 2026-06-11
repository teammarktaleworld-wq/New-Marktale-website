"use client";

// ─── Shared token styles (same as BlogsView) ──────────────────────────────────
const c = {
  bg: "#0F1C2E",
  surface: "#0A1628",
  border: "#1E293B",
  borderMid: "#334155",
  text: "#F1F5F9",
  muted: "#94A3B8",
  faint: "#475569",
  primary: "#3B82F6",
  danger: "#EF4444",
  success: "#10B981",
  warning: "#F59E0B",
};

// ─── Dummy data ───────────────────────────────────────────────────────────────
const STATS = [
  {
    label: "Total Articles",
    value: "48",
    delta: "+6 this month",
    color: c.primary,
    icon: "✍️",
  },
  {
    label: "Published",
    value: "31",
    delta: "+3 this week",
    color: c.success,
    icon: "✅",
  },
  {
    label: "Drafts",
    value: "17",
    delta: "4 need review",
    color: c.warning,
    icon: "📝",
  },
  {
    label: "Total Enquiries",
    value: "124",
    delta: "+12 unread",
    color: "#EC4899",
    icon: "💬",
  },
];

const RECENT_BLOGS = [
  {
    title: "10 Habits of Highly Effective Leaders",
    category: "Leadership",
    status: "Published",
    date: "Jun 1, 2026",
    author: "Sarah K.",
  },
  {
    title: "The Future of Remote Work in 2026",
    category: "Career Growth",
    status: "Published",
    date: "May 28, 2026",
    author: "James R.",
  },
  {
    title: "Mastering Deep Work — A Practical Guide",
    category: "Productivity",
    status: "Draft",
    date: "May 25, 2026",
    author: "Mia T.",
  },
  {
    title: "Why Mindset Beats Skill Every Time",
    category: "Mindset",
    status: "Published",
    date: "May 22, 2026",
    author: "Ravi S.",
  },
  {
    title: "Tech Trends Reshaping Business in 2026",
    category: "Technology",
    status: "Draft",
    date: "May 20, 2026",
    author: "Sarah K.",
  },
];

const RECENT_ENQUIRIES = [
  {
    name: "Arjun Mehta",
    email: "arjun@example.com",
    message: "Interested in guest blogging opportunities.",
    status: "New",
    time: "2h ago",
  },
  {
    name: "Priya Sharma",
    email: "priya@example.com",
    message: "Can you share your media kit?",
    status: "Replied",
    time: "5h ago",
  },
  {
    name: "Tom Williams",
    email: "tom@example.com",
    message: "Partnership enquiry for our SaaS product.",
    status: "New",
    time: "1d ago",
  },
  {
    name: "Fatima Al-Hassan",
    email: "fatima@example.com",
    message: "Love your content on leadership topics!",
    status: "Archived",
    time: "2d ago",
  },
];

const ACTIVITY = [
  {
    text: 'New article published: "10 Habits of Leaders"',
    time: "2h ago",
    dot: c.success,
  },
  { text: "Enquiry from Arjun Mehta received", time: "3h ago", dot: "#EC4899" },
  {
    text: 'Draft saved: "Tech Trends Reshaping Business"',
    time: "6h ago",
    dot: c.warning,
  },
  {
    text: 'Article updated: "Future of Remote Work"',
    time: "1d ago",
    dot: c.primary,
  },
  { text: "New enquiry from Tom Williams", time: "1d ago", dot: "#EC4899" },
  { text: "Category added: Wellness", time: "3d ago", dot: c.faint },
];

const catColors: Record<string, string> = {
  Leadership: "#6366F1",
  "Career Growth": "#10B981",
  Productivity: "#F59E0B",
  Mindset: "#EC4899",
  Technology: "#3B82F6",
  Business: "#8B5CF6",
  Wellness: "#14B8A6",
  Finance: "#F97316",
};

export default function DashboardView() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {/* ── Header ──────────────────────────────────────────────────── */}
      <div>
        <div
          style={{
            fontSize: 20,
            fontWeight: 800,
            color: c.text,
            marginBottom: 4,
            letterSpacing: "-0.02em",
          }}
        >
          Good morning, Admin 👋
        </div>
        <div style={{ fontSize: 12, color: c.faint }}>
          Here's what's happening with Marktale today.
        </div>
      </div>

      {/* ── Stats ───────────────────────────────────────────────────── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 14,
        }}
      >
        {STATS.map((s) => (
          <div
            key={s.label}
            style={{
              background: c.surface,
              border: `1px solid ${c.border}`,
              borderRadius: 14,
              padding: "18px 20px",
              borderTop: `3px solid ${s.color}`,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 12,
              }}
            >
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: c.faint,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                }}
              >
                {s.label}
              </span>
              <span style={{ fontSize: 18 }}>{s.icon}</span>
            </div>
            <div
              style={{
                fontSize: 28,
                fontWeight: 800,
                color: c.text,
                lineHeight: 1,
                marginBottom: 6,
              }}
            >
              {s.value}
            </div>
            <div style={{ fontSize: 11, color: s.color, fontWeight: 600 }}>
              {s.delta}
            </div>
          </div>
        ))}
      </div>

      {/* ── Two-column layout ────────────────────────────────────────── */}
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 16 }}
      >
        {/* Recent Articles */}
        <div
          style={{
            background: c.surface,
            border: `1px solid ${c.border}`,
            borderRadius: 14,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 20px",
              borderBottom: `1px solid ${c.border}`,
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 700, color: c.text }}>
              Recent Articles
            </div>
            <button
              style={{
                fontSize: 11,
                color: c.primary,
                fontWeight: 600,
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              View all →
            </button>
          </div>
          <table
            style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}
          >
            <thead>
              <tr style={{ background: c.bg }}>
                {["Article", "Category", "Author", "Date", "Status"].map(
                  (h, i) => (
                    <th
                      key={h}
                      style={{
                        padding: "10px 16px",
                        textAlign: "left",
                        fontSize: 10,
                        fontWeight: 700,
                        color: c.faint,
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        borderBottom: `1px solid ${c.border}`,
                      }}
                    >
                      {h}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {RECENT_BLOGS.map((b, i) => (
                <tr key={i} style={{ borderBottom: `1px solid ${c.bg}` }}>
                  <td style={{ padding: "12px 16px", maxWidth: 220 }}>
                    <div
                      style={{
                        fontWeight: 600,
                        color: c.text,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {b.title}
                    </div>
                  </td>
                  <td style={{ padding: "12px 16px" }}>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "2px 8px",
                        borderRadius: 4,
                        fontSize: 11,
                        fontWeight: 600,
                        background: `${catColors[b.category] ?? c.faint}18`,
                        color: catColors[b.category] ?? c.faint,
                        border: `1px solid ${catColors[b.category] ?? c.faint}30`,
                      }}
                    >
                      {b.category}
                    </span>
                  </td>
                  <td
                    style={{
                      padding: "12px 16px",
                      color: c.muted,
                      fontSize: 12,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {b.author}
                  </td>
                  <td
                    style={{
                      padding: "12px 16px",
                      color: c.faint,
                      fontSize: 12,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {b.date}
                  </td>
                  <td style={{ padding: "12px 16px" }}>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 5,
                        padding: "3px 10px",
                        borderRadius: 20,
                        fontSize: 11,
                        fontWeight: 600,
                        ...(b.status === "Published"
                          ? {
                              background: "#10B98115",
                              color: "#10B981",
                              border: "1px solid #10B98130",
                            }
                          : {
                              background: "#F59E0B15",
                              color: "#F59E0B",
                              border: "1px solid #F59E0B30",
                            }),
                      }}
                    >
                      <span
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: "currentColor",
                          display: "inline-block",
                        }}
                      />
                      {b.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Activity feed */}
        <div
          style={{
            background: c.surface,
            border: `1px solid ${c.border}`,
            borderRadius: 14,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "16px 20px",
              borderBottom: `1px solid ${c.border}`,
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 700, color: c.text }}>
              Recent Activity
            </div>
          </div>
          <div style={{ padding: "8px 0" }}>
            {ACTIVITY.map((a, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 12,
                  padding: "10px 20px",
                  borderBottom:
                    i < ACTIVITY.length - 1 ? `1px solid ${c.bg}` : "none",
                }}
              >
                <div style={{ flexShrink: 0, marginTop: 4 }}>
                  <div
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: a.dot,
                    }}
                  />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: 12,
                      color: c.muted,
                      lineHeight: 1.5,
                      marginBottom: 2,
                    }}
                  >
                    {a.text}
                  </div>
                  <div
                    style={{ fontSize: 10, color: c.faint, fontWeight: 600 }}
                  >
                    {a.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Recent Enquiries strip ───────────────────────────────────── */}
      <div
        style={{
          background: c.surface,
          border: `1px solid ${c.border}`,
          borderRadius: 14,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 20px",
            borderBottom: `1px solid ${c.border}`,
          }}
        >
          <div style={{ fontSize: 14, fontWeight: 700, color: c.text }}>
            Recent Enquiries
          </div>
          <button
            style={{
              fontSize: 11,
              color: c.primary,
              fontWeight: 600,
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            View all →
          </button>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 0,
          }}
        >
          {RECENT_ENQUIRIES.map((e, i) => {
            const statusColor =
              e.status === "New"
                ? "#EC4899"
                : e.status === "Replied"
                  ? c.success
                  : c.faint;
            return (
              <div
                key={i}
                style={{
                  padding: "16px 20px",
                  borderRight:
                    i < RECENT_ENQUIRIES.length - 1
                      ? `1px solid ${c.border}`
                      : "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 8,
                  }}
                >
                  <div style={{ fontSize: 13, fontWeight: 700, color: c.text }}>
                    {e.name}
                  </div>
                  <span
                    style={{
                      fontSize: 9,
                      fontWeight: 700,
                      padding: "2px 7px",
                      borderRadius: 20,
                      background: `${statusColor}18`,
                      color: statusColor,
                      border: `1px solid ${statusColor}30`,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {e.status}
                  </span>
                </div>
                <div style={{ fontSize: 11, color: c.faint, marginBottom: 6 }}>
                  {e.email}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: c.muted,
                    lineHeight: 1.5,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {e.message}
                </div>
                <div style={{ fontSize: 10, color: c.faint, marginTop: 8 }}>
                  {e.time}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
