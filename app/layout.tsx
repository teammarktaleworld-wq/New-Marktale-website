// //app/layout

// import type { Metadata } from "next";
// import { Montserrat, Roboto } from "next/font/google";
// import "./globals.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import BehavioralPopups from "./components/BehavioralPopups";
// import GoogleAnalytics from "./components/GoogleAnalytics";

// const montserrat = Montserrat({
//   variable: "--font-montserrat",
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800"], // Kestone uses various weights
// });

// const roboto = Roboto({
//   variable: "--font-roboto",
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "700"],
// });

// export const metadata: Metadata = {
//   title: "MarkTale | AI Powered Marketing Agency",
//   description: "An advertising company helping brands succeed in both traditional and digital marketing.",
//   icons: {
//     icon: "/images/logo.png",
//   },
//   verification: {
//     google: "APNS6nHozhiQP3ShefFpxbHPSuvD0Nt-YMr-k2Wu9VE",
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       {/* <body
//         className={`${montserrat.variable} ${roboto.variable} antialiased font-body overflow-x-hidden flex flex-col min-h-screen`}
//       >
//         <BehavioralPopups />
//         <Navbar />
//         {children}
//         <Footer />
//       </body> */}

//       <body
//         className={`${montserrat.variable} ${roboto.variable} antialiased font-body overflow-x-hidden flex flex-col min-h-screen`}
//       >
//         <GoogleAnalytics />
//         <BehavioralPopups />
//         <Navbar />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";
import BehavioralPopups from "./components/BehavioralPopups";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "MarkTale | AI Powered Marketing Agency",
  description:
    "An advertising company helping brands succeed in both traditional and digital marketing.",
  icons: {
    icon: "/images/logo.png",
  },
  verification: {
    google: "APNS6nHozhiQP3ShefFpxbHPSuvD0Nt-YMr-k2Wu9VE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${roboto.variable} antialiased font-body overflow-x-hidden flex flex-col min-h-screen`}
      >
        <GoogleAnalytics />
        <BehavioralPopups />
        {children}
      </body>
    </html>
  );
}
