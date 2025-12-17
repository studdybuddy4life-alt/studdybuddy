import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <SignUp
      afterSignUpUrl="/dashboard"
      signInUrl="/sign-in"
      appearance={{
        variables: {
          colorPrimary: "#38bdf8",
          colorText: "#e5e7eb",
          colorBackground: "#020617",
          borderRadius: "12px",
        },
        elements: {
          card: {
            background: "transparent",
            boxShadow: "none",
          },
          footer: { display: "none" },
        },
      }}
    />
  );
}
