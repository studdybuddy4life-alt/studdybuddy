import { SignedIn, SignedOut, RedirectToSignIn, UserButton, useUser } from "@clerk/nextjs";

export default function TutorDashboard() {
  const { user } = useUser();

  if (user?.publicMetadata.role !== "tutor") {
    return <p>Access denied</p>;
  }

  return (
    <>
      <SignedIn>
        <h1>Tutor Dashboard</h1>
        <p>Your classes, students, schedules, chats</p>
        <UserButton />
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
