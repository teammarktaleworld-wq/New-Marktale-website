// //admin/dashboard/[tab]/page.tsx

// "use client";

// import { useEffect, useCallback, useState } from "react";
// import { useRouter, useParams } from "next/navigation";

// import Sidebar from "@/components/admin/layout/Sidebar";
// import TopBar from "@/components/admin/layout/TopBar";

// import DashboardView from "@/components/admin/Dashboardview";
// import EnquiriesView from "@/components/admin/Enquiriesview";
// import BlogsView from "@/components/admin/BlogsView";

// const NAVBAR_HEIGHT = 80;

// const PAGE_TITLES: Record<string, string> = {
//   dashboard: "Dashboard",
//   enquiries: "Enquiries",
//   blogs: "Blog Manager",
// };

// function renderPage(tab: string) {
//   switch (tab) {
//     case "enquiries":
//       return <EnquiriesView />;

//     case "blogs":
//       return <BlogsView />;

//     case "dashboard":
//     default:
//       return <DashboardView />;
//   }
// }

// export default function AdminDashboardPage() {
//   const params = useParams();
//   const router = useRouter();

//   const tab = (params?.tab as string) || "dashboard";

//   const [unreadCount, setUnreadCount] = useState(0);

//   const fetchUnreadCount = useCallback(async () => {
//     try {
//       const res = await fetch("/api/notifications?limit=1");

//       if (!res.ok) return;

//       const data = await res.json();
//       setUnreadCount(data.unreadCount ?? 0);
//     } catch (err) {
//       console.error("Failed to fetch notification count:", err);
//     }
//   }, []);

//   useEffect(() => {
//     fetchUnreadCount();

//     const id = setInterval(fetchUnreadCount, 60_000);

//     return () => clearInterval(id);
//   }, [fetchUnreadCount]);

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
//         top: NAVBAR_HEIGHT,
//         left: 0,
//         right: 0,
//         bottom: 0,
//       }}
//     >
//       <Sidebar active={tab} />

//       <div className="flex flex-col flex-1 min-w-0">
//         <TopBar
//           title={PAGE_TITLES[tab] ?? "Dashboard"}
//           onNotificationsClick={() =>
//             router.push("/admin/dashboard/notifications")
//           }
//         />

//         <main className="flex-1 overflow-y-auto p-6">
//           {renderPage(tab)}
//         </main>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useCallback, useState } from "react";
// import { useParams } from "next/navigation";

// import DashboardView from "@/components/admin/Dashboardview";
// import EnquiriesView from "@/components/admin/Enquiriesview";
// import BlogsView from "@/components/admin/BlogsView";

// function renderPage(tab: string) {
//   switch (tab) {
//     case "enquiries":
//       return <EnquiriesView />;

//     case "blogs":
//       return <BlogsView />;

//     case "dashboard":
//     default:
//       return <DashboardView />;
//   }
// }

// export default function AdminDashboardPage() {
//   const params = useParams();

//   const tab = (params?.tab as string) || "dashboard";

//   const [, setUnreadCount] = useState(0);

//   const fetchUnreadCount = useCallback(async () => {
//     try {
//       const res = await fetch("/api/notifications?limit=1");

//       if (!res.ok) return;

//       const data = await res.json();
//       setUnreadCount(data.unreadCount ?? 0);
//     } catch (err) {
//       console.error("Failed to fetch notification count:", err);
//     }
//   }, []);

//   useEffect(() => {
//     fetchUnreadCount();

//     const interval = setInterval(fetchUnreadCount, 60000);

//     return () => clearInterval(interval);
//   }, [fetchUnreadCount]);

//   return (
//     <div className="p-6">
//       {renderPage(tab)}
//     </div>
//   );
// }

"use client";

import { useParams } from "next/navigation";

import DashboardView from "@/components/admin/Dashboardview";
import EnquiriesView from "@/components/admin/Enquiriesview";
import BlogsView from "@/components/admin/BlogsView";

function renderPage(tab: string) {
  switch (tab) {
    case "enquiries":
      return <EnquiriesView />;

    case "blogs":
      return <BlogsView />;

    case "dashboard":
    default:
      return <DashboardView />;
  }
}

export default function AdminDashboardPage() {
  const params = useParams();

  const tab = (params?.tab as string) || "dashboard";

  return <div className="p-6">{renderPage(tab)}</div>;
}
