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
            colorTextSecondary: "#cbd5e1",
            borderRadius: "12px",
          },
          elements: {
            card: {
              boxShadow: "0 30px 80px rgba(15,23,42,0.9)",
            },
            formFieldInput: {
              backgroundColor: "#ffffff",
              color: "#0f172a",
              border: "1px solid #cbd5e1",
            },
            formFieldLabel: {
              color: "#e5e7eb",
            },
            headerTitle: {
              color: "#f8fafc",
            },
            headerSubtitle: {
              color: "#cbd5e1",
            },
            dividerText: {
              color: "#cbd5e1",
            },
            footerActionText: {
              color: "#cbd5e1",
            },
            footerActionLink: {
              color: "#38bdf8",
            },
          },
        }}
      />
    </div>
  );
}
