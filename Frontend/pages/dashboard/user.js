<section
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "1.5rem",
  }}
>
  <DashboardCard
    title="📚 Courses"
    text="View enrolled subjects, lessons and progress."
    href="/dashboard/courses"
  />
  <DashboardCard
    title="📈 Progress"
    text="Track improvement across topics and tests."
    href="/dashboard/progress"
  />
  <DashboardCard
    title="💬 Messages"
    text="Chat with tutors and get doubt resolution."
    href="/dashboard/messages"
  />
  <DashboardCard
    title="🗓 Class Schedule"
    text="Upcoming live classes and booked sessions."
    href="/dashboard/schedule"
  />
</section>
