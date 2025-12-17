import { SignedIn, SignedOut, RedirectToSignIn, UserButton } from "@clerk/nextjs";

export default function UserDashboard() {
  return (
    <>
      <SignedIn>
        <h1>User Dashboard</h1>
        <p>Courses, progress, messages, class schedule</p>
        <UserButton />
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
