export default function Home() {
  return (
    <main style={{padding:"20px",maxWidth:"900px",margin:"auto",fontFamily:"Arial"}}>

      {/* HERO */}
      <section style={{textAlign:"center",marginBottom:"50px"}}>
        <h1 style={{fontSize:"42px"}}>Just Costa</h1>
        <h3 style={{color:"#666"}}>Data • Digital • Growth</h3>

        <p>
          Helping businesses grow using data analytics,
          digital marketing, branding and AI tools.
        </p>

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          style={{width:"100%",borderRadius:"10px",marginTop:"20px"}}
        />

        <br/><br/>

        <a
          href="mailto:constantinehenry39@gmail.com"
          style={{
            background:"#000",
            color:"#fff",
            padding:"12px 25px",
            borderRadius:"6px",
            textDecoration:"none"
          }}
        >
          Work With Me
        </a>
      </section>


      {/* SERVICES */}
      <section style={{marginBottom:"50px"}}>
        <h2>Services</h2>

        <div style={{display:"grid",gap:"15px"}}>

          <div style={{border:"1px solid #ddd",padding:"15px",borderRadius:"8px"}}>
            📊 <b>Data Analytics</b>
            <p>Excel dashboards and data insights.</p>
          </div>

          <div style={{border:"1px solid #ddd",padding:"15px",borderRadius:"8px"}}>
            🚀 <b>Digital Marketing</b>
            <p>Strategies for business growth.</p>
          </div>

          <div style={{border:"1px solid #ddd",padding:"15px",borderRadius:"8px"}}>
            🎨 <b>Branding & Logo Design</b>
            <p>Professional visual identities.</p>
          </div>

          <div style={{border:"1px solid #ddd",padding:"15px",borderRadius:"8px"}}>
            ✍️ <b>Content Writing</b>
            <p>Professional writing and proofreading.</p>
          </div>

        </div>
      </section>


      {/* PORTFOLIO */}
      <section style={{marginBottom:"50px"}}>
        <h2>My Work</h2>

        <div style={{
          display:"flex",
          gap:"20px",
          overflowX:"scroll"
        }}>

          <div style={{minWidth:"220px"}}>
            <img
              src="https://images.unsplash.com/photo-1556155092-490a1ba16284"
              style={{width:"100%",borderRadius:"8px"}}
            />
            <p>Data Dashboard Project</p>
          </div>

          <div style={{minWidth:"220px"}}>
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              style={{width:"100%",borderRadius:"8px"}}
            />
            <p>Marketing Analytics</p>
          </div>

          <div style={{minWidth:"220px"}}>
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
              style={{width:"100%",borderRadius:"8px"}}
            />
            <p>Brand Design</p>
          </div>

          <div style={{minWidth:"220px"}}>
            <img
              src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0"
              style={{width:"100%",borderRadius:"8px"}}
            />
            <p>AI Automation Tools</p>
          </div>

        </div>
      </section>


      {/* ABOUT */}
      <section style={{marginBottom:"50px"}}>
        <h2>About Me</h2>

        <p>
          I'm <b>Costantino Henry</b>, a multidisciplinary professional
          combining healthcare knowledge with data analytics,
          digital marketing and AI tools to help businesses grow.
        </p>

      </section>


      {/* CONTACT */}
      <section style={{textAlign:"center"}}>
        <h2>Contact</h2>

        <p>Email: constantinehenry39@gmail.com</p>

        <p>
          <a href="https://wa.me/255626366325">
            Chat on WhatsApp
          </a>
        </p>

        <p>Dar es Salaam, Tanzania</p>

      </section>


      <footer style={{textAlign:"center",marginTop:"40px",color:"#888"}}>
        © 2026 Just Costa
      </footer>

    </main>
  );
}