export default function Home() {
  return (
    <main style={{
      fontFamily:"Arial, sans-serif",
      maxWidth:"1100px",
      margin:"auto",
      padding:"20px"
    }}>

{/* HERO */}
<section style={{
  textAlign:"center",
  padding:"40px 20px"
}}>

<img
src="https://images.unsplash.com/photo-1603415526960-f7e0328b6f52"
style={{
width:"120px",
height:"120px",
borderRadius:"50%",
objectFit:"cover"
}}
/>

<h1 style={{fontSize:"36px",marginTop:"15px"}}>
Just Costa
</h1>

<h3 style={{color:"#666"}}>
Data • Digital • Growth
</h3>

<p style={{maxWidth:"600px",margin:"auto"}}>
Helping businesses grow using data analytics,
digital marketing, branding and AI tools.
</p>

<a
href="mailto:constantinehenry39@gmail.com"
style={{
background:"#000",
color:"#fff",
padding:"10px 25px",
borderRadius:"8px",
textDecoration:"none",
display:"inline-block",
marginTop:"15px"
}}
>
Work With Me
</a>

</section>


{/* SERVICES */}
<section style={{marginTop:"60px"}}>

<h2 style={{textAlign:"center"}}>Services</h2>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
gap:"20px",
marginTop:"20px"
}}>

<div style={{border:"1px solid #eee",padding:"15px",borderRadius:"10px"}}>
📊 Data Analytics
<p>Turning data into insights.</p>
</div>

<div style={{border:"1px solid #eee",padding:"15px",borderRadius:"10px"}}>
🚀 Digital Marketing
<p>Growth strategies for brands.</p>
</div>

<div style={{border:"1px solid #eee",padding:"15px",borderRadius:"10px"}}>
🎨 Branding
<p>Logo and identity design.</p>
</div>

<div style={{border:"1px solid #eee",padding:"15px",borderRadius:"10px"}}>
✍️ Content Writing
<p>Professional business writing.</p>
</div>

</div>

</section>


{/* PORTFOLIO */}
<section style={{marginTop:"60px"}}>

<h2 style={{textAlign:"center"}}>Projects</h2>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
gap:"20px",
marginTop:"20px"
}}>

<div>
<img
src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
style={{width:"100%",borderRadius:"10px"}}
/>
<p>Data dashboard analysis</p>
</div>

<div>
<img
src="https://images.unsplash.com/photo-1556155092-490a1ba16284"
style={{width:"100%",borderRadius:"10px"}}
/>
<p>Marketing analytics project</p>
</div>

<div>
<img
src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
style={{width:"100%",borderRadius:"10px"}}
/>
<p>Brand identity design</p>
</div>

</div>

</section>


{/* ABOUT */}
<section style={{marginTop:"60px",textAlign:"center"}}>

<h2>About Me</h2>

<p style={{maxWidth:"700px",margin:"auto"}}>
I'm <b>Costantino Henry</b>, a multidisciplinary professional
combining healthcare experience with data analytics,
digital marketing and AI tools to help businesses grow.
</p>

</section>


{/* CONTACT */}
<section style={{marginTop:"60px",textAlign:"center"}}>

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
marginTop:"60px",
color:"#777"
}}>
© 2026 Just Costa
</footer>

</main>
  )
}