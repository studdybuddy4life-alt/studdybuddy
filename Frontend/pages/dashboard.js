import { SignedIn, SignedOut, RedirectToSignIn, useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function DashboardRouter() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded || !user) return;

    const role = user.publicMetadata.role;

    if (role === "admin") router.replace("/dashboard/admin");
    else if (role === "tutor") router.replace("/dashboard/tutor");
    else router.replace("/dashboard/user"); // default
  }, [isLoaded, user, router]);

  return (
    <>
      <SignedIn>
        <p style={{ color: "white", textAlign: "center" }}>
          Loading your dashboard...
        </p>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
