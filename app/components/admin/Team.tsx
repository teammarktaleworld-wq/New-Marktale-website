// "use client";

// import { useState, useRef } from "react";
// import { S, Icons, ConfirmDialog, AVATAR_COLORS } from "./Common";
// import { INITIAL_TEAM } from "./data";

// function TeamModal({ member, onSave, onClose }) {
//   const [form, setForm] = useState(
//     member || { name: "", role: "", email: "", avatar: "" },
//   );
//   const initials = (name) =>
//     name
//       .split(" ")
//       .map((w) => w[0])
//       .join("")
//       .toUpperCase()
//       .slice(0, 2);

//   return (
//     <div style={S.modal}>
//       <div style={S.modalBox}>
//         <div style={S.modalTitle}>
//           {member ? "Edit Team Member" : "Add Team Member"}
//         </div>
//         {["name", "role", "email"].map((field) => (
//           <div key={field} style={S.formGroup}>
//             <label style={S.label}>
//               {field.charAt(0).toUpperCase() + field.slice(1)}
//             </label>
//             <input
//               style={S.input}
//               value={form[field]}
//               onChange={(e) => setForm({ ...form, [field]: e.target.value })}
//               placeholder={`${field}...`}
//             />
//           </div>
//         ))}
//         <div style={S.formGroup}>
//           <label style={S.label}>
//             Avatar Initials (auto-generated if blank)
//           </label>
//           <input
//             style={S.input}
//             value={form.avatar}
//             onChange={(e) => setForm({ ...form, avatar: e.target.value })}
//             placeholder="e.g. KK"
//             maxLength={2}
//           />
//         </div>
//         <div
//           style={{
//             display: "flex",
//             gap: 10,
//             justifyContent: "flex-end",
//             marginTop: 8,
//           }}
//         >
//           <button style={S.btn("ghost")} onClick={onClose}>
//             Cancel
//           </button>
//           <button
//             style={S.btn("primary")}
//             onClick={() => {
//               if (form.name.trim())
//                 onSave({ ...form, avatar: form.avatar || initials(form.name) });
//             }}
//           >
//             {member ? "Save Changes" : "Add Member"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Team({
//   team: initialTeam = INITIAL_TEAM,
//   setTeam: onTeamChange,
// }) {
//   const [team, setTeam] = useState(initialTeam);
//   const [modal, setModal] = useState(null);
//   const [confirm, setConfirm] = useState(null);
//   const nextId = useRef(team.length + 10);

//   const handleSave = (form) => {
//     let newTeam;
//     if (modal && modal !== "add") {
//       newTeam = team.map((m) => (m.id === modal.id ? { ...m, ...form } : m));
//     } else {
//       newTeam = [...team, { ...form, id: nextId.current++ }];
//     }
//     setTeam(newTeam);
//     if (onTeamChange) onTeamChange(newTeam);
//     setModal(null);
//   };

//   const handleDelete = (id) => {
//     const newTeam = team.filter((m) => m.id !== id);
//     setTeam(newTeam);
//     if (onTeamChange) onTeamChange(newTeam);
//     setConfirm(null);
//   };

//   return (
//     <div>
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           marginBottom: 24,
//         }}
//       >
//         <div>
//           <div style={S.sectionTitle}>Team Members</div>
//           <div style={S.sectionSub}>{team.length} members in your team.</div>
//         </div>
//         <button style={S.btn("primary")} onClick={() => setModal("add")}>
//           <Icons.Add /> Add Member
//         </button>
//       </div>

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
//           gap: 16,
//         }}
//       >
//         {team.map((m, i) => (
//           <div
//             key={m.id}
//             style={{
//               ...S.card,
//               padding: "20px",
//               display: "flex",
//               flexDirection: "column",
//               gap: 14,
//             }}
//           >
//             <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
//               <div
//                 style={{
//                   ...S.avatar(AVATAR_COLORS[i % AVATAR_COLORS.length]),
//                   width: 48,
//                   height: 48,
//                   fontSize: 14,
//                 }}
//               >
//                 {m.avatar}
//               </div>
//               <div>
//                 <div
//                   style={{ fontWeight: 600, color: "#F1F5F9", fontSize: 15 }}
//                 >
//                   {m.name}
//                 </div>
//                 <div style={{ fontSize: 12, color: "#64748B", marginTop: 2 }}>
//                   {m.role}
//                 </div>
//               </div>
//             </div>
//             <div
//               style={{
//                 fontSize: 12,
//                 color: "#475569",
//                 borderTop: "1px solid #1A1A1A",
//                 paddingTop: 12,
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 6,
//               }}
//             >
//               <Icons.Mail /> {m.email}
//             </div>
//             <div style={{ display: "flex", gap: 8 }}>
//               <button style={S.btn("ghost")} onClick={() => setModal(m)}>
//                 <Icons.Edit /> Edit
//               </button>
//               <button
//                 style={S.btn("danger")}
//                 onClick={() =>
//                   setConfirm({
//                     id: m.id,
//                     message: `Remove "${m.name}" from the team?`,
//                   })
//                 }
//               >
//                 <Icons.Delete /> Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {modal && (
//         <TeamModal
//           member={modal === "add" ? null : modal}
//           onSave={handleSave}
//           onClose={() => setModal(null)}
//         />
//       )}
//       {confirm && (
//         <ConfirmDialog
//           message={confirm.message}
//           onConfirm={() => handleDelete(confirm.id)}
//           onCancel={() => setConfirm(null)}
//         />
//       )}
//     </div>
//   );
// }

"use client";

import { useState, useRef } from "react";
import { S, Icons, ConfirmDialog, AVATAR_COLORS } from "./Common";
import { INITIAL_TEAM } from "./data";

// ─── Types ────────────────────────────────────────────────────────────────────
type TeamMember = {
  id: number;
  name: string;
  role: string;
  email: string;
  avatar: string;
};

type TeamModalProps = {
  member: TeamMember | null;
  onSave: (form: Omit<TeamMember, "id">) => void;
  onClose: () => void;
};

type TeamProps = {
  team?: TeamMember[];
  setTeam?: (team: TeamMember[]) => void;
};

// ─── Modal ────────────────────────────────────────────────────────────────────
function TeamModal({ member, onSave, onClose }: TeamModalProps) {
  const [form, setForm] = useState<Omit<TeamMember, "id">>(
    member
      ? {
          name: member.name,
          role: member.role,
          email: member.email,
          avatar: member.avatar,
        }
      : { name: "", role: "", email: "", avatar: "" },
  );

  const initials = (name: string) =>
    name
      .split(" ")
      .map((w) => w[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

  return (
    <div style={S.modal}>
      <div style={S.modalBox}>
        <div style={S.modalTitle}>
          {member ? "Edit Team Member" : "Add Team Member"}
        </div>
        {(["name", "role", "email"] as const).map((field) => (
          <div key={field} style={S.formGroup}>
            <label style={S.label}>
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              style={S.input}
              value={form[field]}
              onChange={(e) => setForm({ ...form, [field]: e.target.value })}
              placeholder={`${field}...`}
            />
          </div>
        ))}
        <div style={S.formGroup}>
          <label style={S.label}>
            Avatar Initials (auto-generated if blank)
          </label>
          <input
            style={S.input}
            value={form.avatar}
            onChange={(e) => setForm({ ...form, avatar: e.target.value })}
            placeholder="e.g. KK"
            maxLength={2}
          />
        </div>
        <div
          style={{
            display: "flex",
            gap: 10,
            justifyContent: "flex-end",
            marginTop: 8,
          }}
        >
          <button style={S.btn("ghost")} onClick={onClose}>
            Cancel
          </button>
          <button
            style={S.btn("primary")}
            onClick={() => {
              if (form.name.trim())
                onSave({ ...form, avatar: form.avatar || initials(form.name) });
            }}
          >
            {member ? "Save Changes" : "Add Member"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Team({
  team: initialTeam = INITIAL_TEAM,
  setTeam: onTeamChange,
}: TeamProps) {
  const [team, setTeam] = useState<TeamMember[]>(initialTeam);
  const [modal, setModal] = useState<TeamMember | "add" | null>(null);
  const [confirm, setConfirm] = useState<{
    id: number;
    message: string;
  } | null>(null);
  const nextId = useRef(team.length + 10);

  const handleSave = (form: Omit<TeamMember, "id">) => {
    let newTeam: TeamMember[];
    if (modal && modal !== "add") {
      newTeam = team.map((m) =>
        m.id === (modal as TeamMember).id ? { ...m, ...form } : m,
      );
    } else {
      newTeam = [...team, { ...form, id: nextId.current++ }];
    }
    setTeam(newTeam);
    if (onTeamChange) onTeamChange(newTeam);
    setModal(null);
  };

  const handleDelete = (id: number) => {
    const newTeam = team.filter((m) => m.id !== id);
    setTeam(newTeam);
    if (onTeamChange) onTeamChange(newTeam);
    setConfirm(null);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 24,
        }}
      >
        <div>
          <div style={S.sectionTitle}>Team Members</div>
          <div style={S.sectionSub}>{team.length} members in your team.</div>
        </div>
        <button style={S.btn("primary")} onClick={() => setModal("add")}>
          <Icons.Add /> Add Member
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 16,
        }}
      >
        {team.map((m, i) => (
          <div
            key={m.id}
            style={{
              ...S.card,
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  ...S.avatar(AVATAR_COLORS[i % AVATAR_COLORS.length]),
                  width: 48,
                  height: 48,
                  fontSize: 14,
                }}
              >
                {m.avatar}
              </div>
              <div>
                <div
                  style={{ fontWeight: 600, color: "#F1F5F9", fontSize: 15 }}
                >
                  {m.name}
                </div>
                <div style={{ fontSize: 12, color: "#64748B", marginTop: 2 }}>
                  {m.role}
                </div>
              </div>
            </div>
            <div
              style={{
                fontSize: 12,
                color: "#475569",
                borderTop: "1px solid #1A1A1A",
                paddingTop: 12,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <Icons.Mail /> {m.email}
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button style={S.btn("ghost")} onClick={() => setModal(m)}>
                <Icons.Edit /> Edit
              </button>
              <button
                style={S.btn("danger")}
                onClick={() =>
                  setConfirm({
                    id: m.id,
                    message: `Remove "${m.name}" from the team?`,
                  })
                }
              >
                <Icons.Delete /> Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {modal && (
        <TeamModal
          member={modal === "add" ? null : modal}
          onSave={handleSave}
          onClose={() => setModal(null)}
        />
      )}
      {confirm && (
        <ConfirmDialog
          message={confirm.message}
          onConfirm={() => handleDelete(confirm.id)}
          onCancel={() => setConfirm(null)}
        />
      )}
    </div>
  );
}
