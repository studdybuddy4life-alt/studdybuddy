import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
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
      <SignUp
        redirectUrl="/dashboard"
        appearance={{
          variables: {
            colorPrimary: "#38bdf8",
            colorBackground: "#020617",
            colorText: "#e5e7eb",
            borderRadius: "12px",
          },
        }}
      />
    </div>
  );
}
