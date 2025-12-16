import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    referralCode: "",
  });

  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    if (!form.email) {
      alert("Please enter your email");
      return;
    }

    setLoading(true);

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/signup`,
        { email: form.email } // ✅ SEND ONLY EMAIL
      );

      alert("OTP sent to your email");
    } catch (err) {
      console.error(err);
      alert(err?.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 30, maxWidth: 400 }}>
      <h1>Signup</h1>

      <form onSubmit={submit}>
        <input
          placeholder="Full name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={{ width: "100%", marginBottom: 10 }}
        />

        <input
          required
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={{ width: "100%", marginBottom: 10 }}
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          style={{ width: "100%", marginBottom: 10 }}
        />

        <input
          placeholder="Referral Code (optional)"
          value={form.referralCode}
          onChange={(e) =>
            setForm({ ...form, referralCode: e.target.value })
          }
          style={{ width: "100%", marginBottom: 20 }}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Sending OTP..." : "Send OTP"}
        </button>
      </form>
    </div>
  );
}
