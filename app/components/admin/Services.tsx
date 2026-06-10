// "use client";

// import { useState, useRef } from "react";
// import { S, Icons, ConfirmDialog } from "./Common";
// import { INITIAL_SERVICES } from "./data";

// export default function Services({
//   services: initialServices = INITIAL_SERVICES,
//   setServices: onServicesChange,
// }) {
//   const [services, setServices] = useState(initialServices);
//   const [newName, setNewName] = useState("");
//   const [editId, setEditId] = useState(null);
//   const [editName, setEditName] = useState("");
//   const [confirm, setConfirm] = useState(null);
//   const nextId = useRef(services.length + 10);

//   const addService = () => {
//     if (!newName.trim()) return;
//     const newServices = [
//       ...services,
//       { id: nextId.current++, name: newName.trim(), active: true },
//     ];
//     setServices(newServices);
//     if (onServicesChange) onServicesChange(newServices);
//     setNewName("");
//   };

//   const toggleActive = (id) => {
//     const newServices = services.map((s) =>
//       s.id === id ? { ...s, active: !s.active } : s,
//     );
//     setServices(newServices);
//     if (onServicesChange) onServicesChange(newServices);
//   };

//   const saveEdit = (id) => {
//     const newServices = services.map((s) =>
//       s.id === id ? { ...s, name: editName } : s,
//     );
//     setServices(newServices);
//     if (onServicesChange) onServicesChange(newServices);
//     setEditId(null);
//   };

//   const deleteService = (id) => {
//     const newServices = services.filter((s) => s.id !== id);
//     setServices(newServices);
//     if (onServicesChange) onServicesChange(newServices);
//     setConfirm(null);
//   };

//   return (
//     <div>
//       <div style={{ marginBottom: 24 }}>
//         <div style={S.sectionTitle}>Services Manager</div>
//         <div style={S.sectionSub}>
//           Manage the services shown on your website.
//         </div>
//       </div>

//       <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
//         <input
//           style={{ ...S.input, maxWidth: 340 }}
//           value={newName}
//           onChange={(e) => setNewName(e.target.value)}
//           placeholder="Add a new service..."
//           onKeyDown={(e) => e.key === "Enter" && addService()}
//         />
//         <button style={S.btn("primary")} onClick={addService}>
//           <Icons.Add /> Add Service
//         </button>
//       </div>

//       <div style={S.card}>
//         <table style={S.table}>
//           <thead>
//             <tr>
//               <th style={S.th}>#</th>
//               <th style={S.th}>Service Name</th>
//               <th style={S.th}>Status</th>
//               <th style={S.th}>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {services.map((s, i) => (
//               <tr key={s.id}>
//                 <td style={{ ...S.td, color: "#475569", width: 40 }}>
//                   {i + 1}
//                 </td>
//                 <td style={S.td}>
//                   {editId === s.id ? (
//                     <input
//                       style={{ ...S.input, padding: "6px 10px" }}
//                       value={editName}
//                       onChange={(e) => setEditName(e.target.value)}
//                       onKeyDown={(e) => e.key === "Enter" && saveEdit(s.id)}
//                       autoFocus
//                     />
//                   ) : (
//                     <span style={{ fontWeight: 500, color: "#F1F5F9" }}>
//                       {s.name}
//                     </span>
//                   )}
//                 </td>
//                 <td style={S.td}>
//                   <span style={S.badge(s.active ? "#10B981" : "#475569")}>
//                     {s.active ? "Active" : "Inactive"}
//                   </span>
//                 </td>
//                 <td style={S.td}>
//                   <div style={{ display: "flex", gap: 6 }}>
//                     {editId === s.id ? (
//                       <button
//                         style={S.btn("success")}
//                         onClick={() => saveEdit(s.id)}
//                       >
//                         <Icons.Save /> Save
//                       </button>
//                     ) : (
//                       <button
//                         style={S.btn("ghost")}
//                         onClick={() => {
//                           setEditId(s.id);
//                           setEditName(s.name);
//                         }}
//                       >
//                         <Icons.Edit /> Edit
//                       </button>
//                     )}
//                     <button
//                       style={S.btn("ghost")}
//                       onClick={() => toggleActive(s.id)}
//                     >
//                       {s.active ? "Disable" : "Enable"}
//                     </button>
//                     <button
//                       style={S.btn("danger")}
//                       onClick={() =>
//                         setConfirm({
//                           id: s.id,
//                           message: `Delete service "${s.name}"?`,
//                         })
//                       }
//                     >
//                       <Icons.Delete />
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {confirm && (
//         <ConfirmDialog
//           message={confirm.message}
//           onConfirm={() => deleteService(confirm.id)}
//           onCancel={() => setConfirm(null)}
//         />
//       )}
//     </div>
//   );
// }

"use client";

import { useState, useRef } from "react";
import { S, Icons, ConfirmDialog } from "./Common";
import { INITIAL_SERVICES } from "./data";

// ─── Types ────────────────────────────────────────────────────────────────────
type Service = {
  id: number;
  name: string;
  active: boolean;
};

type Props = {
  services?: Service[];
  setServices?: (services: Service[]) => void;
};

export default function Services({
  services: initialServices = INITIAL_SERVICES,
  setServices: onServicesChange,
}: Props) {
  const [services, setServices] = useState<Service[]>(initialServices);
  const [newName, setNewName] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");
  const [confirm, setConfirm] = useState<{
    id: number;
    message: string;
  } | null>(null);
  const nextId = useRef(services.length + 10);

  const addService = () => {
    if (!newName.trim()) return;
    const newServices = [
      ...services,
      { id: nextId.current++, name: newName.trim(), active: true },
    ];
    setServices(newServices);
    if (onServicesChange) onServicesChange(newServices);
    setNewName("");
  };

  const toggleActive = (id: number) => {
    const newServices = services.map((s) =>
      s.id === id ? { ...s, active: !s.active } : s,
    );
    setServices(newServices);
    if (onServicesChange) onServicesChange(newServices);
  };

  const saveEdit = (id: number) => {
    const newServices = services.map((s) =>
      s.id === id ? { ...s, name: editName } : s,
    );
    setServices(newServices);
    if (onServicesChange) onServicesChange(newServices);
    setEditId(null);
  };

  const deleteService = (id: number) => {
    const newServices = services.filter((s) => s.id !== id);
    setServices(newServices);
    if (onServicesChange) onServicesChange(newServices);
    setConfirm(null);
  };

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <div style={S.sectionTitle}>Services Manager</div>
        <div style={S.sectionSub}>
          Manage the services shown on your website.
        </div>
      </div>

      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        <input
          style={{ ...S.input, maxWidth: 340 }}
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Add a new service..."
          onKeyDown={(e) => e.key === "Enter" && addService()}
        />
        <button style={S.btn("primary")} onClick={addService}>
          <Icons.Add /> Add Service
        </button>
      </div>

      <div style={S.card}>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>#</th>
              <th style={S.th}>Service Name</th>
              <th style={S.th}>Status</th>
              <th style={S.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((s, i) => (
              <tr key={s.id}>
                <td style={{ ...S.td, color: "#475569", width: 40 }}>
                  {i + 1}
                </td>
                <td style={S.td}>
                  {editId === s.id ? (
                    <input
                      style={{ ...S.input, padding: "6px 10px" }}
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && saveEdit(s.id)}
                      autoFocus
                    />
                  ) : (
                    <span style={{ fontWeight: 500, color: "#F1F5F9" }}>
                      {s.name}
                    </span>
                  )}
                </td>
                <td style={S.td}>
                  <span style={S.badge(s.active ? "#10B981" : "#475569")}>
                    {s.active ? "Active" : "Inactive"}
                  </span>
                </td>
                <td style={S.td}>
                  <div style={{ display: "flex", gap: 6 }}>
                    {editId === s.id ? (
                      <button
                        style={S.btn("success")}
                        onClick={() => saveEdit(s.id)}
                      >
                        <Icons.Save /> Save
                      </button>
                    ) : (
                      <button
                        style={S.btn("ghost")}
                        onClick={() => {
                          setEditId(s.id);
                          setEditName(s.name);
                        }}
                      >
                        <Icons.Edit /> Edit
                      </button>
                    )}
                    <button
                      style={S.btn("ghost")}
                      onClick={() => toggleActive(s.id)}
                    >
                      {s.active ? "Disable" : "Enable"}
                    </button>
                    <button
                      style={S.btn("danger")}
                      onClick={() =>
                        setConfirm({
                          id: s.id,
                          message: `Delete service "${s.name}"?`,
                        })
                      }
                    >
                      <Icons.Delete />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {confirm && (
        <ConfirmDialog
          message={confirm.message}
          onConfirm={() => deleteService(confirm.id)}
          onCancel={() => setConfirm(null)}
        />
      )}
    </div>
  );
}
