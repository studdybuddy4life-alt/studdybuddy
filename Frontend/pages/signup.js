import { useState } from 'react'
import axios from 'axios'

export default function Signup() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    referralCode: ''
  })

  const submit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL || ''}/auth/signup`,
        { email: form.email }
      )
      alert('OTP sent to your email')
    } catch (err) {
      alert(err?.response?.data?.message || 'Signup failed')
    }
  }

  return (
    <div style={{ padding: 30 }}>
      <h1>Signup</h1>
      <form onSubmit={submit}>
        <input
          required
          placeholder="Full name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          required
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <input
          placeholder="Referral Code (optional)"
          value={form.referralCode}
          onChange={(e) => setForm({ ...form, referralCode: e.target.value })}
        />

        <button type="submit">Send OTP</button>
      </form>
    </div>
  )
}
