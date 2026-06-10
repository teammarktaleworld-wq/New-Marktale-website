// // marktaleworld_updated-\app\components\admin\layout\Sidebar.tsx
// "use client";

// import { useState, useMemo } from "react";
// import { useRouter } from "next/navigation";

// const icons: Record<string, JSX.Element> = {
//   dashboard: (
//     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//       <rect x="3" y="3" width="7" height="7" rx="1" />
//       <rect x="14" y="3" width="7" height="7" rx="1" />
//       <rect x="14" y="14" width="7" height="7" rx="1" />
//       <rect x="3" y="14" width="7" height="7" rx="1" />
//     </svg>
//   ),
//   blogs: (
//     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//       <path d="M12 20h9" />
//       <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
//     </svg>
//   ),
//   enquiries: (
//     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//       <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
//     </svg>
//   ),
// };

// const MENU = [
//   {
//     id: "dashboard",
//     label: "Dashboard",
//     group: "Main",
//     path: "/admin/dashboard/dashboard",
//   },
//   {
//     id: "blogs",
//     label: "Blog Manager",
//     group: "Content",
//     path: "/admin/dashboard/blogs",
//   },
//   {
//     id: "enquiries",
//     label: "Enquiries",
//     group: "Content",
//     path: "/admin/dashboard/enquiries",
//   },
// ];

// const colors = {
//   bg: "#0A1628",
//   surface: "#0F1C2E",
//   border: "#1E293B",
//   text: "#F1F5F9",
//   muted: "#94A3B8",
//   faint: "#475569",
//   primary: "#3B82F6",
// };

// type Props = {
//   active?: string;
// };

// export default function Sidebar({
//   active = "dashboard",
// }: Props) {
//   const router = useRouter();
//   const [search, setSearch] = useState("");

//   const groups = useMemo(() => {
//     const map: Record<string, typeof MENU> = {};

//     MENU.forEach((item) => {
//       if (!map[item.group]) map[item.group] = [];
//       map[item.group].push(item);
//     });

//     return map;
//   }, []);

//   const filtered = search.trim()
//     ? MENU.filter((item) =>
//         item.label.toLowerCase().includes(search.toLowerCase())
//       )
//     : null;

//   const renderItem = (item: (typeof MENU)[0]) => {
//     const isActive = active === item.id;

//     return (
//       <button
//         key={item.id}
//         onClick={() => router.push(item.path)}
//         className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all ${
//           isActive
//             ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
//             : "text-slate-400 hover:bg-slate-800 hover:text-white"
//         }`}
//       >
//         {icons[item.id]}
//         <span className="flex-1 text-left">{item.label}</span>
//       </button>
//     );
//   };

//   return (
//     <aside
//       style={{
//         width: 250,
//         background: colors.surface,
//         borderRight: `1px solid ${colors.border}`,
//       }}
//       className="flex flex-col h-full"
//     >
//       {/* Logo */}
//       <div className="p-5 border-b border-slate-800">
//         <h2
//           style={{ color: colors.text }}
//           className="text-xl font-bold"
//         >
//           Marktale
//         </h2>
//         <p
//           style={{ color: colors.faint }}
//           className="text-xs mt-1"
//         >
//           Admin Panel
//         </p>
//       </div>

//       {/* Search */}
//       <div className="p-3">
//         <input
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="Search menu..."
//           className="w-full px-3 py-2 rounded-lg bg-slate-900 text-white text-sm border border-slate-700 outline-none"
//         />
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 overflow-y-auto px-3">
//         {filtered
//           ? filtered.map(renderItem)
//           : Object.entries(groups).map(([group, items]) => (
//               <div key={group} className="mb-5">
//                 <p className="text-[10px] uppercase tracking-wider text-slate-500 px-2 mb-2">
//                   {group}
//                 </p>

//                 <div className="space-y-1">
//                   {items.map(renderItem)}
//                 </div>
//               </div>
//             ))}
//       </nav>

//       {/* Footer */}
//       <div className="border-t border-slate-800 p-4">
//         <div className="flex items-center gap-3">
//           <div className="w-9 h-9 rounded-lg bg-blue-500 flex items-center justify-center text-white font-bold">
//             A
//           </div>

//           <div>
//             <p className="text-sm text-white font-medium">
//               Admin
//             </p>
//             <p className="text-xs text-slate-500">
//               marktale.com
//             </p>
//           </div>
//         </div>
//       </div>
//     </aside>
//   );
// }

// "use client";

// import { useState, useMemo } from "react";
// import { useRouter } from "next/navigation";
// import type { ReactElement } from "react";

// const icons: Record<string, JSX.Element> = {
//   dashboard: (
//     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//       <rect x="3" y="3" width="7" height="7" rx="1" />
//       <rect x="14" y="3" width="7" height="7" rx="1" />
//       <rect x="14" y="14" width="7" height="7" rx="1" />
//       <rect x="3" y="14" width="7" height="7" rx="1" />
//     </svg>
//   ),
//   blogs: (
//     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//       <path d="M12 20h9" />
//       <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
//     </svg>
//   ),
//   enquiries: (
//     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//       <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
//     </svg>
//   ),
// };

// const MENU = [
//   { id: "dashboard", label: "Dashboard", group: "Main",    path: "/admin/dashboard/dashboard" },
//   { id: "blogs",     label: "Blog Manager", group: "Content", path: "/admin/dashboard/blogs" },
//   { id: "enquiries", label: "Enquiries",    group: "Content", path: "/admin/dashboard/enquiries" },
// ];

// type Props = { active?: string };

// export default function Sidebar({ active = "dashboard" }: Props) {
//   const router = useRouter();
//   const [search, setSearch] = useState("");

//   const groups = useMemo(() => {
//     const map: Record<string, typeof MENU> = {};
//     MENU.forEach((item) => {
//       if (!map[item.group]) map[item.group] = [];
//       map[item.group].push(item);
//     });
//     return map;
//   }, []);

//   const filtered = search.trim()
//     ? MENU.filter((item) => item.label.toLowerCase().includes(search.toLowerCase()))
//     : null;

//   const renderItem = (item: (typeof MENU)[0]) => {
//     const isActive = active === item.id;
//     return (
//       <button
//         key={item.id}
//         onClick={() => router.push(item.path)}
//         style={{
//           width: "100%",
//           display: "flex",
//           alignItems: "center",
//           gap: 10,
//           padding: "9px 12px",
//           borderRadius: 9,
//           border: isActive ? "1px solid rgba(59,130,246,0.35)" : "1px solid transparent",
//           background: isActive ? "rgba(59,130,246,0.15)" : "transparent",
//           color: isActive ? "#60A5FA" : "#94A3B8",
//           fontSize: 13,
//           fontWeight: isActive ? 600 : 400,
//           cursor: "pointer",
//           textAlign: "left",
//           transition: "all 0.15s",
//           fontFamily: "inherit",
//           marginBottom: 2,
//         }}
//         onMouseEnter={(e) => {
//           if (!isActive) {
//             (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)";
//             (e.currentTarget as HTMLButtonElement).style.color = "#E2E8F0";
//           }
//         }}
//         onMouseLeave={(e) => {
//           if (!isActive) {
//             (e.currentTarget as HTMLButtonElement).style.background = "transparent";
//             (e.currentTarget as HTMLButtonElement).style.color = "#94A3B8";
//           }
//         }}
//       >
//         <span style={{ opacity: isActive ? 1 : 0.7, flexShrink: 0 }}>{icons[item.id]}</span>
//         <span style={{ flex: 1 }}>{item.label}</span>
//       </button>
//     );
//   };

//   return (
//     <aside style={{
//       width: 240,
//       flexShrink: 0,
//       background: "#0F1C2E",
//       borderRight: "1px solid #1E293B",
//       display: "flex",
//       flexDirection: "column",
//       height: "100%",
//     }}>
//       {/* Logo */}
//       <div style={{
//         padding: "20px 20px 16px",
//         borderBottom: "1px solid #1E293B",
//       }}>
//         <div style={{ fontSize: 18, fontWeight: 800, color: "#F1F5F9", letterSpacing: "-0.02em" }}>
//           Marktale
//         </div>
//         <div style={{ fontSize: 11, color: "#475569", marginTop: 2 }}>
//           Admin Panel
//         </div>
//       </div>

//       {/* Search */}
//       <div style={{ padding: "12px 12px 8px" }}>
//         <input
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="Search menu..."
//           style={{
//             width: "100%",
//             padding: "8px 12px",
//             borderRadius: 8,
//             background: "#0A1628",
//             border: "1px solid #1E293B",
//             color: "#F1F5F9",
//             fontSize: 12,
//             outline: "none",
//             boxSizing: "border-box",
//             fontFamily: "inherit",
//           }}
//         />
//       </div>

//       {/* Navigation */}
//       <nav style={{ flex: 1, overflowY: "auto", padding: "4px 10px" }}>
//         {filtered
//           ? filtered.map(renderItem)
//           : Object.entries(groups).map(([group, items]) => (
//               <div key={group} style={{ marginBottom: 20 }}>
//                 <div style={{
//                   fontSize: 10,
//                   fontWeight: 700,
//                   color: "#334155",
//                   letterSpacing: "0.1em",
//                   textTransform: "uppercase",
//                   padding: "0 6px",
//                   marginBottom: 6,
//                 }}>
//                   {group}
//                 </div>
//                 {items.map(renderItem)}
//               </div>
//             ))}
//       </nav>

//       {/* Footer */}
//       <div style={{
//         borderTop: "1px solid #1E293B",
//         padding: "14px 16px",
//         display: "flex",
//         alignItems: "center",
//         gap: 10,
//       }}>
//         <div style={{
//           width: 34,
//           height: 34,
//           borderRadius: 8,
//           background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           fontSize: 13,
//           fontWeight: 800,
//           color: "#fff",
//           flexShrink: 0,
//         }}>
//           A
//         </div>
//         <div>
//           <div style={{ fontSize: 13, fontWeight: 600, color: "#F1F5F9" }}>Admin</div>
//           <div style={{ fontSize: 11, color: "#475569" }}>marktale.com</div>
//         </div>
//       </div>
//     </aside>
//   );
// }

"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import type { ReactElement } from "react";

const icons: Record<string, ReactElement> = {
  dashboard: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  blogs: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  ),
  enquiries: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
};

const MENU = [
  {
    id: "dashboard",
    label: "Dashboard",
    group: "Main",
    path: "/admin/dashboard/dashboard",
  },
  {
    id: "blogs",
    label: "Blog Manager",
    group: "Content",
    path: "/admin/dashboard/blogs",
  },
  {
    id: "enquiries",
    label: "Enquiries",
    group: "Content",
    path: "/admin/dashboard/enquiries",
  },
];

type Props = { active?: string };

export default function Sidebar({ active = "dashboard" }: Props) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const groups = useMemo(() => {
    const map: Record<string, typeof MENU> = {};
    MENU.forEach((item) => {
      if (!map[item.group]) map[item.group] = [];
      map[item.group].push(item);
    });
    return map;
  }, []);

  const filtered = search.trim()
    ? MENU.filter((item) =>
        item.label.toLowerCase().includes(search.toLowerCase()),
      )
    : null;

  const renderItem = (item: (typeof MENU)[0]) => {
    const isActive = active === item.id;
    return (
      <button
        key={item.id}
        onClick={() => router.push(item.path)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "9px 12px",
          borderRadius: 9,
          border: isActive
            ? "1px solid rgba(59,130,246,0.35)"
            : "1px solid transparent",
          background: isActive ? "rgba(59,130,246,0.15)" : "transparent",
          color: isActive ? "#60A5FA" : "#94A3B8",
          fontSize: 13,
          fontWeight: isActive ? 600 : 400,
          cursor: "pointer",
          textAlign: "left",
          transition: "all 0.15s",
          fontFamily: "inherit",
          marginBottom: 2,
        }}
        onMouseEnter={(e) => {
          if (!isActive) {
            (e.currentTarget as HTMLButtonElement).style.background =
              "rgba(255,255,255,0.06)";
            (e.currentTarget as HTMLButtonElement).style.color = "#E2E8F0";
          }
        }}
        onMouseLeave={(e) => {
          if (!isActive) {
            (e.currentTarget as HTMLButtonElement).style.background =
              "transparent";
            (e.currentTarget as HTMLButtonElement).style.color = "#94A3B8";
          }
        }}
      >
        <span style={{ opacity: isActive ? 1 : 0.7, flexShrink: 0 }}>
          {icons[item.id]}
        </span>
        <span style={{ flex: 1 }}>{item.label}</span>
      </button>
    );
  };

  return (
    <aside
      style={{
        width: 240,
        flexShrink: 0,
        background: "#0F1C2E",
        borderRight: "1px solid #1E293B",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* Logo */}
      <div
        style={{
          padding: "20px 20px 16px",
          borderBottom: "1px solid #1E293B",
        }}
      >
        <div
          style={{
            fontSize: 18,
            fontWeight: 800,
            color: "#F1F5F9",
            letterSpacing: "-0.02em",
          }}
        >
          Marktale
        </div>
        <div style={{ fontSize: 11, color: "#475569", marginTop: 2 }}>
          Admin Panel
        </div>
      </div>

      {/* Search */}
      <div style={{ padding: "12px 12px 8px" }}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search menu..."
          style={{
            width: "100%",
            padding: "8px 12px",
            borderRadius: 8,
            background: "#0A1628",
            border: "1px solid #1E293B",
            color: "#F1F5F9",
            fontSize: 12,
            outline: "none",
            boxSizing: "border-box",
            fontFamily: "inherit",
          }}
        />
      </div>

      {/* Navigation */}
      <nav style={{ flex: 1, overflowY: "auto", padding: "4px 10px" }}>
        {filtered
          ? filtered.map(renderItem)
          : Object.entries(groups).map(([group, items]) => (
              <div key={group} style={{ marginBottom: 20 }}>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: "#334155",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "0 6px",
                    marginBottom: 6,
                  }}
                >
                  {group}
                </div>
                {items.map(renderItem)}
              </div>
            ))}
      </nav>

      {/* Footer */}
      <div
        style={{
          borderTop: "1px solid #1E293B",
          padding: "14px 16px",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: 8,
            background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 13,
            fontWeight: 800,
            color: "#fff",
            flexShrink: 0,
          }}
        >
          A
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#F1F5F9" }}>
            Admin
          </div>
          <div style={{ fontSize: 11, color: "#475569" }}>marktale.com</div>
        </div>
      </div>
    </aside>
  );
}
