// Simple homepage for StudyBuddy
export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#020617",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        textAlign: "center",
        padding: "2rem"
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        StudyBuddy Frontend is Live 🎉
      </h1>
      <p style={{ fontSize: "1.1rem", maxWidth: "600px", marginBottom: "1.5rem" }}>
        This is your Next.js homepage deployed on Vercel.
        The backend is running at:
        <br />
        <code>https://studdybuddy-jtew.onrender.com</code>
      </p>
      <p style={{ opacity: 0.7 }}>
        You can replace this text later with your real design.
      </p>
    </main>
  );
}
