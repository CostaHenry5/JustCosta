export default function Home() {
  return (
    <main style={{
      fontFamily:"Arial, sans-serif",
      padding:"20px",
      maxWidth:"1000px",
      margin:"auto"
    }}>

{/* HERO */}
<section style={{
  textAlign:"center",
  padding:"60px 20px"
}}>
<h1 style={{fontSize:"50px",marginBottom:"10px"}}>
Just Costa
</h1>

<h3 style={{color:"#666"}}>
Data • Digital • Growth
</h3>

<p style={{maxWidth:"600px",margin:"auto"}}>
Helping businesses grow with data analytics, digital marketing,
branding and AI-powered solutions.
</p>

<img
src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
style={{
width:"100%",
borderRadius:"12px",
marginTop:"30px"
}}
/>

<br/><br/>

<a
href="mailto:constantinehenry39@gmail.com"
style={{
background:"#000",
color:"#fff",
padding:"12px 30px",
borderRadius:"8px",
textDecoration:"none"
}}
>
Work With Me
</a>
</section>


{/* PORTFOLIO */}
<section style={{marginTop:"80px"}}>

<h2 style={{textAlign:"center"}}>Selected Work</h2>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
gap:"20px",
marginTop:"30px"
}}>

<div style={{border:"1px solid #eee",borderRadius:"10px",padding:"15px"}}>
<img
src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
style={{width:"100%",borderRadius:"8px"}}
/>
<h4>Data Analytics Dashboard</h4>
<p>Business insights using Excel and data tools.</p>
</div>

<div style={{border:"1px solid #eee",borderRadius:"10px",padding:"15px"}}>
<img
src="https://images.unsplash.com/photo-1556155092-490a1ba16284"
style={{width:"100%",borderRadius:"8px"}}
/>
<h4>Marketing Strategy</h4>
<p>Social media growth and analytics.</p>
</div>

<div style={{border:"1px solid #eee",borderRadius:"10px",padding:"15px"}}>
<img
src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
style={{width:"100%",borderRadius:"8px"}}
/>
<h4>Brand Design</h4>
<p>Logo design and brand identity.</p>
</div>

</div>
</section>


{/* SERVICES */}
<section style={{marginTop:"80px"}}>
<h2 style={{textAlign:"center"}}>Services</h2>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
gap:"20px",
marginTop:"30px"
}}>

<div style={{padding:"15px",border:"1px solid #eee",borderRadius:"10px"}}>
📊 Data Analytics
</div>

<div style={{padding:"15px",border:"1px solid #eee",borderRadius:"10px"}}>
🚀 Digital Marketing
</div>

<div style={{padding:"15px",border:"1px solid #eee",borderRadius:"10px"}}>
🎨 Branding & Logo Design
</div>

<div style={{padding:"15px",border:"1px solid #eee",borderRadius:"10px"}}>
✍️ Content Writing
</div>

</div>
</section>


{/* ABOUT */}
<section style={{marginTop:"80px",textAlign:"center"}}>

<h2>About Me</h2>

<p style={{maxWidth:"700px",margin:"auto"}}>
I'm <b>Costantino Henry</b>, a multidisciplinary professional combining
healthcare knowledge with data analytics, digital marketing and AI tools
to help businesses grow.
</p>

</section>


{/* CONTACT */}
<section style={{marginTop:"80px",textAlign:"center"}}>

<h2>Contact</h2>

<p>Email: constantinehenry39@gmail.com</p>

<p>
<a href="https://wa.me/255626366325">
Chat on WhatsApp
</a>
</p>

<p>Dar es Salaam, Tanzania</p>

</section>


<footer style={{
textAlign:"center",
marginTop:"80px",
color:"#777"
}}>
© 2026 Just Costa
</footer>

</main>
  )
}