export default function Home() {
  return (
    <main style={{ padding:"80px 20px", maxWidth:"1000px", margin:"0 auto", fontFamily:"Arial" }}>

      {/* HERO SECTION */}
      <section style={{ textAlign:"center", marginBottom:"80px" }}>
        <h1 style={{ fontSize:"60px" }}>Just Costa</h1>
        <h2 style={{ color:"#666" }}>Data. Digital. Growth.</h2>

        <p style={{ fontSize:"18px", marginTop:"20px" }}>
          Helping businesses grow with data analytics, digital marketing,
          branding, and AI-powered solutions.
        </p>

        <a
          href="mailto:constantinehenry39@gmail.com"
          style={{
            padding:"12px 30px",
            background:"black",
            color:"white",
            textDecoration:"none",
            borderRadius:"6px",
            display:"inline-block",
            marginTop:"20px"
          }}
        >
          Work With Me
        </a>
      </section>

      {/* SERVICES */}
      <section style={{ marginBottom:"80px" }}>
        <h2>Services</h2>

        <p>📊 <b>Data Analytics</b> – Turning raw data into insights using Excel and analytics tools.</p>

        <p>🚀 <b>Digital Marketing</b> – Growth strategies and marketing solutions for businesses.</p>

        <p>🎨 <b>Branding & Logo Design</b> – Creating visual identities for modern brands.</p>

        <p>✍️ <b>Content Writing & Proofreading</b> – Professional business and web writing.</p>

        <p>🌍 <b>Translation</b> – English ↔ Swahili translation services.</p>
      </section>

      {/* ABOUT */}
      <section style={{ marginBottom:"80px" }}>
        <h2>About Me</h2>

        <p>
          I’m <b>Costa</b>, a multidisciplinary professional with
          experience in healthcare, data analytics, digital marketing,
          branding, and AI tools.
        </p>

        <p>
          My goal is to help businesses make smarter decisions,
          improve efficiency, and grow using modern digital strategies.
        </p>
      </section>

      {/* PROJECTS */}
      <section style={{ marginBottom:"80px" }}>
        <h2>Projects</h2>

        <p>📊 Healthcare Data Analysis dashboards.</p>

        <p>📈 Digital marketing strategies for business growth.</p>

        <p>🎨 Branding and logo design for small businesses.</p>
      </section>

      {/* CONTACT */}
      <section style={{ textAlign:"center", marginBottom:"80px" }}>
        <h2>Contact</h2>

        <p>Email: constantinehenry39@gmail.com</p>

        <p>
          <a href="https://wa.me/255626366325">
            Chat on WhatsApp
          </a>
        </p>

        <p>Location: Dar es Salaam, Tanzania</p>

        <p>Available for remote freelance projects worldwide.</p>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign:"center", color:"#777" }}>
        © 2026 Just Costa
      </footer>

    </main>
  );
}
