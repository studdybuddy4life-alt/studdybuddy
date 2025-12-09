// Frontend/pages/admin/messages.js
import { useState } from "react";

export default function AdminMessages() {
  const [key, setKey] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const backendBase = process.env.NEXT_PUBLIC_API_BASE || ""; // example: https://studdybuddy-jtew.onrender.com

  async function fetchMessages() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${backendBase}/admin/messages`, {
        headers: { "x-admin-key": key },
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Unauthorized or server error");
        setMessages([]);
      } else {
        setMessages(data.messages || []);
      }
    } catch (err) {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  }

  async function deleteMessage(id) {
    if (!confirm("Delete this message?")) return;
    try {
      const res = await fetch(`${backendBase}/admin/messages/${id}`, {
        method: "DELETE",
        headers: { "x-admin-key": key },
      });
      if (res.ok) {
        setMessages((m) => m.filter((x) => x._id !== id));
      } else {
        alert("Delete failed");
      }
    } catch (err) {
      alert("Network error");
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin — Contact Messages</h1>

      <div style={{ marginBottom: 16 }}>
        <label>Admin Key: </label>
        <input value={key} onChange={(e) => setKey(e.target.value)} style={{ width: 420 }} />
        <button onClick={fetchMessages} style={{ marginLeft: 8 }}>Load Messages</button>
      </div>

      {error && <div style={{ color: "red" }}>{error}</div>}
      {loading && <div>Loading…</div>}

      {!loading && messages.length === 0 && <div>No messages loaded.</div>}

      {messages.length > 0 && (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Time</th>
              <th>Name</th>
              <th>Email</th>
              <th>Grade</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((m) => (
              <tr key={m._id} style={{ borderTop: "1px solid #eee" }}>
                <td>{new Date(m.createdAt).toLocaleString()}</td>
                <td>{m.name}</td>
                <td>{m.email}</td>
                <td>{m.grade}</td>
                <td style={{ maxWidth: 400, whiteSpace: "pre-wrap" }}>{m.message}</td>
                <td>
                  <button onClick={() => deleteMessage(m._id)} style={{ color: "red" }}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
