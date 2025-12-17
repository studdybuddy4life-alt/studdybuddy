import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background:
          "radial-gradient(circle at top, #0f172a 0%, #020617 55%, #020617 100%)",
        padding: "2rem",
      }}
    >
      <SignUp
        appearance={{
          variables: {
            colorPrimary: "#38bdf8",
            colorBackground: "#020617",
            colorText: "#e5e7eb",
            colorTextSecondary: "#cbd5e1",
            borderRadius: "12px",
          },
          elements: {
            card: {
              background: "#020617",
              boxShadow: "0 30px 80px rgba(15,23,42,0.9)",
            },
            headerTitle: {
              color: "#f8fafc",
            },
            headerSubtitle: {
              color: "#cbd5e1",
            },
            formFieldLabel: {
              color: "#e5e7eb",
            },
            formFieldInput: {
              backgroundColor: "#ffffff",
              color: "#020617",
            },
            otpCodeFieldInput: {
              backgroundColor: "#ffffff",
              color: "#020617",
              border: "1px solid #38bdf8",
            },
          },
        }}
        redirectUrl="/dashboard"
      />
    </div>
  );
}
