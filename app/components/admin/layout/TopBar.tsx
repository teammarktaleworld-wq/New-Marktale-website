// // marktaleworld_updated-\app\components\admin\layout\TopBar.tsx

// "use client";

// import { useState } from "react";

// const c = {
//   bg:      "#0F1C2E",
//   surface: "#0A1628",
//   border:  "#1E293B",
//   text:    "#F1F5F9",
//   muted:   "#94A3B8",
//   faint:   "#475569",
//   primary: "#3B82F6",
// };

// type Props = {
//   title: string;
//   notificationCount?: number;
// };

// export default function TopBar({ title, notificationCount = 3 }: Props) {
//   const [bellRing, setBellRing] = useState(false);

//   const handleBell = () => {
//     setBellRing(true);
//     setTimeout(() => setBellRing(false), 600);
//   };

//   const label = title.charAt(0).toUpperCase() + title.slice(1);

//   return (
//     <>
//       <style>{`
//         @keyframes ring {
//           0%,100% { transform: rotate(0); }
//           20% { transform: rotate(14deg); }
//           40% { transform: rotate(-12deg); }
//           60% { transform: rotate(8deg); }
//           80% { transform: rotate(-4deg); }
//         }
//         .ringing { animation: ring 0.6s ease-in-out; }
//       `}</style>

//       <header style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         padding: "0 24px",
//         height: 56,
//         background: c.bg,
//         borderBottom: `1px solid ${c.border}`,
//         flexShrink: 0,
//       }}>
//         {/* Left: title + breadcrumb */}
//         <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//           <span style={{ fontSize: 11, color: c.faint, fontWeight: 600 }}>Marktale</span>
//           <span style={{ color: c.faint, fontSize: 11 }}>/</span>
//           <span style={{ fontSize: 14, fontWeight: 700, color: c.text }}>{label}</span>
//         </div>

//         {/* Right: actions */}
//         <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//           {/* Search pill */}
//           <div style={{
//             display: "flex", alignItems: "center", gap: 8,
//             background: "#0A1628", border: `1px solid ${c.border}`,
//             borderRadius: 8, padding: "6px 12px", cursor: "pointer",
//           }}>
//             <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={c.faint} strokeWidth="2">
//               <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
//             </svg>
//             <span style={{ fontSize: 12, color: c.faint }}>Search...</span>
//             <span style={{ fontSize: 10, color: "#334155", background: "#1E293B", border: `1px solid #334155`, borderRadius: 4, padding: "1px 5px", fontWeight: 700 }}>⌘K</span>
//           </div>

//           {/* Bell */}
//           <button
//             onClick={handleBell}
//             style={{
//               position: "relative", width: 36, height: 36, borderRadius: 9,
//               background: "#0A1628", border: `1px solid ${c.border}`,
//               display: "flex", alignItems: "center", justifyContent: "center",
//               cursor: "pointer", color: c.muted,
//             }}
//           >
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
//               className={bellRing ? "ringing" : ""}>
//               <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
//               <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
//             </svg>
//             {notificationCount > 0 && (
//               <span style={{
//                 position: "absolute", top: -4, right: -4,
//                 minWidth: 16, height: 16, borderRadius: 8,
//                 background: "#EF4444", color: "#fff",
//                 fontSize: 9, fontWeight: 800,
//                 display: "flex", alignItems: "center", justifyContent: "center",
//                 padding: "0 3px", border: `2px solid ${c.bg}`,
//               }}>
//                 {notificationCount > 9 ? "9+" : notificationCount}
//               </span>
//             )}
//           </button>

//           {/* Avatar */}
//           <div style={{
//             width: 34, height: 34, borderRadius: 9,
//             background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
//             display: "flex", alignItems: "center", justifyContent: "center",
//             fontSize: 13, fontWeight: 800, color: "#fff", cursor: "pointer",
//           }}>
//             M
//           </div>
//         </div>
//       </header>
//     </>
//   );
// }

"use client";

import { useState } from "react";

const c = {
  bg: "#0F1C2E",
  surface: "#0A1628",
  border: "#1E293B",
  text: "#F1F5F9",
  muted: "#94A3B8",
  faint: "#475569",
  primary: "#3B82F6",
};

type Props = {
  title: string;
  notificationCount?: number;
};

export default function TopBar({ title, notificationCount = 3 }: Props) {
  const [bellRing, setBellRing] = useState(false);

  const handleBell = () => {
    setBellRing(true);
    setTimeout(() => setBellRing(false), 600);
  };

  const label = title.charAt(0).toUpperCase() + title.slice(1);

  return (
    <>
      <style>{`
        @keyframes ring {
          0%,100% { transform: rotate(0); }
          20% { transform: rotate(14deg); }
          40% { transform: rotate(-12deg); }
          60% { transform: rotate(8deg); }
          80% { transform: rotate(-4deg); }
        }
        .ringing { animation: ring 0.6s ease-in-out; }
      `}</style>

      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          height: 56,
          background: c.bg,
          borderBottom: `1px solid ${c.border}`,
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 11, color: c.faint, fontWeight: 600 }}>
            Marktale
          </span>
          <span style={{ color: c.faint, fontSize: 11 }}>/</span>
          <span style={{ fontSize: 14, fontWeight: 700, color: c.text }}>
            {label}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {/* Search pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "#0A1628",
              border: `1px solid ${c.border}`,
              borderRadius: 8,
              padding: "6px 12px",
              cursor: "pointer",
            }}
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke={c.faint}
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span style={{ fontSize: 12, color: c.faint }}>Search...</span>
            <span
              style={{
                fontSize: 10,
                color: "#334155",
                background: "#1E293B",
                border: `1px solid #334155`,
                borderRadius: 4,
                padding: "1px 5px",
                fontWeight: 700,
              }}
            >
              ⌘K
            </span>
          </div>

          {/* Bell */}
          <button
            onClick={handleBell}
            style={{
              position: "relative",
              width: 36,
              height: 36,
              borderRadius: 9,
              background: "#0A1628",
              border: `1px solid ${c.border}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: c.muted,
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={bellRing ? "ringing" : ""}
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            {notificationCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: -4,
                  right: -4,
                  minWidth: 16,
                  height: 16,
                  borderRadius: 8,
                  background: "#EF4444",
                  color: "#fff",
                  fontSize: 9,
                  fontWeight: 800,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 3px",
                  border: `2px solid ${c.bg}`,
                }}
              >
                {notificationCount > 9 ? "9+" : notificationCount}
              </span>
            )}
          </button>

          {/* Avatar */}
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 9,
              background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 13,
              fontWeight: 800,
              color: "#fff",
              cursor: "pointer",
            }}
          >
            M
          </div>
        </div>
      </header>
    </>
  );
}
