import  { useState } from "react";

export default function Setting() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleSave = () => {
    alert(" Settings Saved Successfully!");
  };

  return (
    <div className="setting-page">
      <h1>Account Settings</h1>

      <div className="setting-form">
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        

        <button onClick={handleSave}>Save Changes</button>
      </div>
    </div>
  );
}
