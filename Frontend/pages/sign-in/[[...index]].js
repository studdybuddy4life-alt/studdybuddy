import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background:
          "radial-gradient(circle at top, #0f172a 0%, #020617 60%, #020617 100%)",
        padding: "2rem",
      }}
    >
      <SignIn
        redirectUrl="/dashboard"
        appearance={{
          variables: {
            colorPrimary: "#38bdf8",
            colorBackground: "#020617",

            // 🔑 VERY IMPORTANT
            colorText: "#e5e7eb",       /
