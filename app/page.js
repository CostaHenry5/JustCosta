export default function Home() {
  return (
    <main style={{
      fontFamily:"system-ui",
      maxWidth:"1100px",
      margin:"auto",
      padding:"20px"
    }}>

{/* HERO */}
<section style={{
textAlign:"center",
padding:"80px 20px"
}}>

<h1 style={{fontSize:"48px"}}>
Just Costa
</h1>

<p style={{
fontSize:"20px",
color:"#666"
}}>
Data • Digital • Growth
</p>

<p style={{
maxWidth:"600px",
margin:"auto"
}}>
Helping businesses grow with data analytics,
digital marketing, branding and AI tools.
</p>

</section>


{/* ABOUT WITH PHOTO */}
<section style={{
display:"grid",
gap:"40px",
gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
alignItems:"center",
marginTop:"60px"
}}>

<img
src="/profile1.jpg"
style={{
width:"100%",
borderRadius:"20px"
}}
/>

<div>

<h2>About Me</h2>

<p>
I'm <b>Costantino Henry</b>, a multidisciplinary professional combining
healthcare expertise with data analytics, digital marketing,
AI tools and branding strategy.
</p>

<p>
I help businesses make better decisions using data and modern
digital solutions.
</p>

</div>

</section>


{/* SECOND IMAGE */}
<section style={{
marginTop:"80px",
textAlign:"center"
}}>

<img
src="/profile2.jpg"
style={{
width:"100%",
maxWidth:"500px",
borderRadius:"20px"
}}
/>

</section>


{/* SERVICES */}
<section style={{marginTop:"80px"}}>

<h2 style={{textAlign:"center"}}>
Services
</h2>

<div style={{
display:"grid",
gap:"20px",
gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
marginTop:"30px"
}}>

<div style={{padding:"20px",border:"1px solid #eee",borderRadius:"12px"}}>
📊 Data Analytics
</div>

<div style={{padding:"20px",border:"1px solid #eee",borderRadius:"12px"}}>
🚀 Digital Marketing
</div>

<div style={{padding:"20px",border:"1px solid #eee",borderRadius:"12px"}}>
🎨 Branding & Logo Design
</div>

<div style={{padding:"20px",border:"1px solid #eee",borderRadius:"12px"}}>
✍️ Content Writing
</div>

</div>

</section>


{/* CONTACT */}
<section style={{
marginTop:"80px",
textAlign:"center"
}}>

<h2>Contact</h2>

<p>
Email: constantinehenry39@gmail.com
</p>

<p>
<a href="https://wa.me/255626366325">
Chat on WhatsApp
</a>
</p>

<p>
Dar es Salaam, Tanzania
</p>

</section>


<footer style={{
marginTop:"80px",
textAlign:"center",
color:"#888"
}}>
© 2026 Just Costa
</footer>

</main>
  )
}

