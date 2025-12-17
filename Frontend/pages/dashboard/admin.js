import { SignedIn, SignedOut, RedirectToSignIn, UserButton, useUser } from "@clerk/nextjs";

export default function AdminDashboard() {
  const { user } = useUser();

  if (user?.publicMetadata.role !== "admin") {
    return <p>Access denied</p>;
  }

  return (
    <>
      <SignedIn>
        <h1>Admin Dashboard</h1>
        <p>All users, tutors, chats, timings, analytics</p>
        <UserButton />
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
