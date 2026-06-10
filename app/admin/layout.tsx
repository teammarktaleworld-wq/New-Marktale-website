// "use client";

// import { useEffect } from "react";
// import { useRouter, usePathname } from "next/navigation";
// import Sidebar from "@/components/admin/layout/Sidebar";
// import TopBar from "@/components/admin/layout/TopBar";

// const PAGE_TITLES: Record<string, string> = {
//   dashboard: "Dashboard",
//   students: "Students",
//   teachers: "Teachers",
//   schedule: "Schedule",
//   exams: "Exams",
//   attendance: "Attendance",
//   fees: "Fees",
//   announcements: "Announcements",
//   enquiries: "Enquiries",
//   webinars: "Webinars",
//   notifications: "Notifications",
//   reports: "Reports",
//   settings: "Settings",
//   notes: "Notes",
//   homework: "Homework",
//   blogs: "Blog Manager",
// };

// export default function AdminLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const router = useRouter();
//   const pathname = usePathname();

//   const segments = pathname?.split("/").filter(Boolean) ?? [];
//   const tab = segments[2] ?? "dashboard";
//   const title = PAGE_TITLES[tab] ?? "Dashboard";

//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, []);

//   return (
//     <div
//       className="fixed flex"
//       style={{
//         top: 0,      // ← was 80, now 0 because no site Navbar here
//         left: 0,
//         right: 0,
//         bottom: 0,
//       }}
//     >
//       <Sidebar active={tab} />

//       <div className="flex flex-col flex-1 min-w-0">
//         <TopBar
//           title={title}
//           onNotificationsClick={() =>
//             router.push("/admin/dashboard/notifications")
//           }
//         />

//         <main className="flex-1 overflow-y-auto p-6">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect } from "react";
// import { usePathname } from "next/navigation";
// import Sidebar from "@/components/admin/layout/Sidebar";
// import TopBar from "@/components/admin/layout/TopBar";

// const PAGE_TITLES: Record<string, string> = {
//   dashboard: "Dashboard",
//   enquiries: "Enquiries",
//   blogs: "Blog Manager",
//   notifications: "Notifications",
//   settings: "Settings",
// };

// export default function AdminLayout({ children }: { children: React.ReactNode }) {
//   const pathname = usePathname();
//   const segments = pathname?.split("/").filter(Boolean) ?? [];
//   const tab = segments[2] ?? "dashboard";
//   const title = PAGE_TITLES[tab] ?? "Dashboard";

//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     document.body.style.background = "#0A1628"; // ← fixes white bg
//     return () => {
//       document.body.style.overflow = "";
//       document.body.style.background = "";
//     };
//   }, []);

//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         display: "flex",
//         background: "#0A1628",
//       }}
//     >
//       <Sidebar active={tab} />

//       <div style={{ display: "flex", flexDirection: "column", flex: 1, minWidth: 0 }}>
//         <TopBar title={title} notificationCount={3} />

//         <main
//           style={{
//             flex: 1,
//             overflowY: "auto",
//             padding: 24,
//             background: "#0A1628",
//           }}
//         >
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect } from "react";
// import { usePathname } from "next/navigation";
// import Sidebar from "@/components/admin/layout/Sidebar";
// import TopBar from "@/components/admin/layout/TopBar";

// const PAGE_TITLES: Record<string, string> = {
//   dashboard: "Dashboard",
//   enquiries: "Enquiries",
//   blogs: "Blog Manager",
//   notifications: "Notifications",
//   settings: "Settings",
// };

// export default function AdminLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname();

//   const segments = pathname?.split("/").filter(Boolean) ?? [];
//   const tab = segments[1] ?? "dashboard";

//   const title = PAGE_TITLES[tab] ?? "Dashboard";

//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     document.body.style.background = "#0A1628";

//     return () => {
//       document.body.style.overflow = "";
//       document.body.style.background = "";
//     };
//   }, []);

//   return (
//     <div
//       style={{
//         position: "fixed",
//         inset: 0,
//         display: "flex",
//         background: "#0A1628",
//       }}
//     >
//       <Sidebar active={tab} />

//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           flex: 1,
//           minWidth: 0,
//         }}
//       >
//         <TopBar title={title} notificationCount={3} />

//         <main
//           style={{
//             flex: 1,
//             overflowY: "auto",
//             padding: 24,
//             background: "#0A1628",
//           }}
//         >
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect } from "react";
// import { usePathname } from "next/navigation";

// import Sidebar from "@/components/admin/layout/Sidebar";
// import TopBar from "@/components/admin/layout/TopBar";

// const PAGE_TITLES: Record<string, string> = {
//   dashboard: "Dashboard",
//   enquiries: "Enquiries",
//   blogs: "Blog Manager",
//   notifications: "Notifications",
//   settings: "Settings",
// };

// export default function AdminLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname();

//   const segments = pathname.split("/").filter(Boolean);

//   let tab = "dashboard";

//   if (segments[1] === "dashboard") {
//     tab = segments[2] || "dashboard";
//   } else {
//     tab = segments[1] || "dashboard";
//   }

//   const title = PAGE_TITLES[tab] ?? "Dashboard";

//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     document.body.style.background = "#0A1628";

//     return () => {
//       document.body.style.overflow = "";
//       document.body.style.background = "";
//     };
//   }, []);

//   return (
//     <div
//       style={{
//         position: "fixed",
//         inset: 0,
//         display: "flex",
//         background: "#0A1628",
//       }}
//     >
//       <Sidebar active={tab} />

//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           flex: 1,
//           minWidth: 0,
//         }}
//       >
//         <TopBar title={title} notificationCount={3} />

//         <main
//           style={{
//             flex: 1,
//             overflowY: "auto",
//             padding: 24,
//             background: "#0A1628",
//           }}
//         >
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import Sidebar from "@/components/admin/layout/Sidebar";
import TopBar from "@/components/admin/layout/TopBar";

const PAGE_TITLES: Record<string, string> = {
  dashboard: "Dashboard",
  enquiries: "Enquiries",
  blogs: "Blog Manager",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  let tab = "dashboard";

  if (segments[1] === "dashboard") {
    tab = segments[2] || "dashboard";
  } else {
    tab = segments[1] || "dashboard";
  }

  const title = PAGE_TITLES[tab] ?? "Dashboard";

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.background = "#0A1628";

    return () => {
      document.body.style.overflow = "";
      document.body.style.background = "";
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        background: "#0A1628",
      }}
    >
      <Sidebar active={tab} />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          minWidth: 0,
        }}
      >
        <TopBar title={title} />

        <main
          style={{
            flex: 1,
            overflowY: "auto",
            padding: 24,
            background: "#0A1628",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
