import Link from 'next/link'
export default function Home(){ return (
  <div style={{padding:40,fontFamily:'Arial, sans-serif'}}>
    <header style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <h1>StudyBuddy</h1>
      <nav><Link href='/pricing'>Pricing</Link> | <Link href='/signup'>Sign up</Link></nav>
    </header>
    <main style={{marginTop:30}}>
      <h2>Personal US Tutors — Online 1:1</h2>
      <p>Expert tutors for AP, SAT, Biology, Chemistry, Math and more.</p>
      <p><a href='/pricing'>See pricing & packages</a></p>
    </main>
  </div>
)}