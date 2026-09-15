import { useState } from "react";
import { FiUser, FiUpload, FiCheck } from "react-icons/fi";
import { useUpdateuser } from "../Authentication/useUpdateUser";
import { useUser } from "../Authentication/useUser";
import Loader from "../../Ui/Loader";
export default function Settings() {
  const { user, isLoading } = useUser();
  if (isLoading) return <Loader />;
  return <SettingsForm key={user?.id} user={user} />;
}
/* eslint-disable react/prop-types */
function SettingsForm({ user }) {
  const originalName = user?.user_metadata?.fullname || user?.user_metadata?.full_name || "";
  const [fullname, setFullname] = useState(originalName);
  const [avatar, setAvatar] = useState(null);
  const { updateUser, isUpdating } = useUpdateuser();
  const currentAvatar = user?.user_metadata?.avatar;
  return <div className="settings-page"><header className="page-heading"><span className="eyebrow">YOUR PERSONAL SPACE</span><h1>Account settings</h1><p>Keep your profile up to date and make yourself at home.</p></header><form className="settings-card" onSubmit={e => { e.preventDefault(); updateUser({ fullname: fullname.trim(), ...(avatar ? { avatar } : {}) }, { onSuccess: () => setAvatar(null) }); }}><div className="settings-card-heading"><FiUser /><div><h2>Your profile</h2><p>A few details that make this account yours.</p></div></div><div className="settings-avatar">{currentAvatar ? <img src={currentAvatar} alt="Your profile" /> : <span className="large-initial">{(originalName || "L").charAt(0)}</span>}<div><label htmlFor="avatar">Profile photo</label><p>Choose an image for your account.</p><input id="avatar" type="file" accept="image/*" disabled={isUpdating} onChange={e => setAvatar(e.target.files[0] || null)} /></div></div><div className="form-field"><label htmlFor="profile-name">Full name</label><input id="profile-name" autoComplete="name" value={fullname} onChange={e => setFullname(e.target.value)} required minLength={2} disabled={isUpdating} /></div><div className="form-field"><label htmlFor="profile-email">Email address</label><input id="profile-email" type="email" value={user?.email || ""} readOnly /><p className="field-help">The email address associated with your account.</p></div><div className="settings-actions"><button className="btn btn-outline" type="button" disabled={isUpdating} onClick={() => { setFullname(originalName); setAvatar(null); document.getElementById("avatar").value = ""; }}>Cancel changes</button><button className="btn btn-primary" disabled={isUpdating}>{isUpdating ? "Saving…" : <><FiCheck />Save changes</>}</button></div></form><div className="account-note"><FiUpload /><p>Your profile photo and name appear in your personal learning account.</p></div></div>;
}
