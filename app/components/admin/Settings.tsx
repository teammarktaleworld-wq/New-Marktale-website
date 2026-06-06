// "use client";

// import { useState } from "react";
// import { S, Icons } from "./Common";

// export default function Settings() {
//   const [settings, setSettings] = useState({
//     siteName: "MarkTale",
//     tagline: "Powered by AI",
//     email: "teammarktaleworld@gmail.com",
//     address: "Plot no. 141, Sec. 14, Dwarka, New Delhi – 110078",
//     growth: "10x",
//     brands: "150+",
//     success: "98%",
//   });
//   const [saved, setSaved] = useState(false);

//   const updateSetting = (key, value) => {
//     setSettings({ ...settings, [key]: value });
//   };

//   const saveSettings = () => {
//     setSaved(true);
//     setTimeout(() => setSaved(false), 2000);
//   };

//   return (
//     <div>
//       <div style={{ marginBottom: 24 }}>
//         <div style={S.sectionTitle}>Site Settings</div>
//         <div style={S.sectionSub}>
//           Update your website info and contact details.
//         </div>
//       </div>

//       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
//         <div style={S.card}>
//           <div style={S.cardHeader}>
//             <span style={S.cardTitle}>Brand Info</span>
//           </div>
//           <div style={{ padding: "20px" }}>
//             {[
//               ["Site Name", "siteName"],
//               ["Tagline", "tagline"],
//             ].map(([label, key]) => (
//               <div key={key} style={S.formGroup}>
//                 <label style={S.label}>{label}</label>
//                 <input
//                   style={S.input}
//                   value={settings[key]}
//                   onChange={(e) => updateSetting(key, e.target.value)}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         <div style={S.card}>
//           <div style={S.cardHeader}>
//             <span style={S.cardTitle}>Contact Details</span>
//           </div>
//           <div style={{ padding: "20px" }}>
//             {[
//               ["Email", "email"],
//               ["Phone", "phone"],
//             ].map(([label, key]) => (
//               <div key={key} style={S.formGroup}>
//                 <label style={S.label}>{label}</label>
//                 <input
//                   style={S.input}
//                   value={settings[key]}
//                   onChange={(e) => updateSetting(key, e.target.value)}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         <div style={{ ...S.card, gridColumn: "1 / -1" }}>
//           <div style={S.cardHeader}>
//             <span style={S.cardTitle}>Office Address</span>
//           </div>
//           <div style={{ padding: "20px" }}>
//             <textarea
//               style={{ ...S.input, minHeight: 72 }}
//               value={settings.address}
//               onChange={(e) => updateSetting("address", e.target.value)}
//             />
//           </div>
//         </div>

//         <div style={{ ...S.card, gridColumn: "1 / -1" }}>
//           <div style={S.cardHeader}>
//             <span style={S.cardTitle}>Hero Stats</span>
//           </div>
//           <div
//             style={{
//               padding: "20px",
//               display: "grid",
//               gridTemplateColumns: "repeat(3, 1fr)",
//               gap: 14,
//             }}
//           >
//             {[
//               ["Growth (e.g. 10x)", "growth"],
//               ["Brands (e.g. 150+)", "brands"],
//               ["Success % (e.g. 98%)", "success"],
//             ].map(([label, key]) => (
//               <div key={key} style={S.formGroup}>
//                 <label style={S.label}>{label}</label>
//                 <input
//                   style={S.input}
//                   value={settings[key]}
//                   onChange={(e) => updateSetting(key, e.target.value)}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div
//         style={{
//           marginTop: 20,
//           display: "flex",
//           alignItems: "center",
//           gap: 14,
//         }}
//       >
//         <button style={S.btn("primary")} onClick={saveSettings}>
//           <Icons.Save /> Save Settings
//         </button>
//         {saved && (
//           <span style={{ color: "#10B981", fontSize: 13, fontWeight: 600 }}>
//             <Icons.Check /> Saved successfully!
//           </span>
//         )}
//       </div>
//     </div>
//   );
// }











"use client";

import { useState } from "react";
import { S, Icons } from "./Common";

type SettingsState = {
  siteName: string;
  tagline: string;
  email: string;
  phone: string;
  address: string;
  growth: string;
  brands: string;
  success: string;
};

export default function Settings() {
  const [settings, setSettings] = useState<SettingsState>({
    siteName: "MarkTale",
    tagline: "Powered by AI",
    email: "teammarktaleworld@gmail.com",
    address: "Plot no. 141, Sec. 14, Dwarka, New Delhi – 110078",
    growth: "10x",
    brands: "150+",
    success: "98%",
  });
  const [saved, setSaved] = useState(false);

  const updateSetting = (key: keyof SettingsState, value: string) => {
    setSettings({ ...settings, [key]: value });
  };

  const saveSettings = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <div style={S.sectionTitle}>Site Settings</div>
        <div style={S.sectionSub}>
          Update your website info and contact details.
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <div style={S.card}>
          <div style={S.cardHeader}>
            <span style={S.cardTitle}>Brand Info</span>
          </div>
          <div style={{ padding: "20px" }}>
            {(["siteName", "tagline"] as const).map((key) => (
              <div key={key} style={S.formGroup}>
                <label style={S.label}>{key === "siteName" ? "Site Name" : "Tagline"}</label>
                <input
                  style={S.input}
                  value={settings[key]}
                  onChange={(e) => updateSetting(key, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>

        <div style={S.card}>
          <div style={S.cardHeader}>
            <span style={S.cardTitle}>Contact Details</span>
          </div>
          <div style={{ padding: "20px" }}>
            {(["email", "phone"] as const).map((key) => (
              <div key={key} style={S.formGroup}>
                <label style={S.label}>{key === "email" ? "Email" : "Phone"}</label>
                <input
                  style={S.input}
                  value={settings[key]}
                  onChange={(e) => updateSetting(key, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>

        <div style={{ ...S.card, gridColumn: "1 / -1" }}>
          <div style={S.cardHeader}>
            <span style={S.cardTitle}>Office Address</span>
          </div>
          <div style={{ padding: "20px" }}>
            <textarea
              style={{ ...S.input, minHeight: 72 }}
              value={settings.address}
              onChange={(e) => updateSetting("address", e.target.value)}
            />
          </div>
        </div>

        <div style={{ ...S.card, gridColumn: "1 / -1" }}>
          <div style={S.cardHeader}>
            <span style={S.cardTitle}>Hero Stats</span>
          </div>
          <div style={{ padding: "20px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
            {([
              ["Growth (e.g. 10x)", "growth"],
              ["Brands (e.g. 150+)", "brands"],
              ["Success % (e.g. 98%)", "success"],
            ] as [string, keyof SettingsState][]).map(([label, key]) => (
              <div key={key} style={S.formGroup}>
                <label style={S.label}>{label}</label>
                <input
                  style={S.input}
                  value={settings[key]}
                  onChange={(e) => updateSetting(key, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 14 }}>
        <button style={S.btn("primary")} onClick={saveSettings}>
          <Icons.Save /> Save Settings
        </button>
        {saved && (
          <span style={{ color: "#10B981", fontSize: 13, fontWeight: 600 }}>
            <Icons.Check /> Saved successfully!
          </span>
        )}
      </div>
    </div>
  );
}