
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import {  ArrowUpRight } from "lucide-react";
import "./App.css";

function Shape() {
  return (
    <Float
      speed={2}
      rotationIntensity={1.2}
      floatIntensity={1.5}
    >
      <group rotation={[0.4, 0.2, 0]}>
        {/* Outer 3D structure */}
        <mesh>
          <torusKnotGeometry args={[1.1, 0.28, 180, 24, 2, 3]} />
          <meshStandardMaterial
            color="#eeeeee"
            wireframe
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>

        {/* Inner sphere */}
        <mesh>
          <icosahedronGeometry args={[0.48, 2]} />
          <meshStandardMaterial
            color="#888888"
            metalness={0.8}
            roughness={0.15}
          />
        </mesh>
      </group>
    </Float>
  );
}



function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={1.5} />

      <pointLight
        position={[3, 3, 3]}
        intensity={3}
      />

      <pointLight
        position={[-3, -2, 2]}
        intensity={2}
      />

      <Shape />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.2}
      />
    </Canvas>
  );
}



const projects = [
  {
    name: "SplitSphere",
    type: "GROUP EXPENSE MANAGEMENT",
    description:
      "A smart group expense management application that helps users track expenses, split bills and manage settlements.",
    tech: "Flask · MySQL · HTML · CSS · JavaScript",
    github: "https://github.com/sharad3162/SplitSphere",
    live: "https://splitsphere-9i5s.onrender.com/"
  },
  {
    name: "SoleSphere",
    type: "ONLINE SHOE SHOPPING",
    description:
      "An online shoe shopping website featuring product browsing and a modern shopping experience.",
    tech: "HTML · CSS · JavaScript",
    github: "https://github.com/sharad3162/nowsolesphere",
    live: "https://nowsolesphere.netlify.app/"
  },
  {
    name: "Fusion Laptop",
    type: "LAPTOP COMPARISON WEBSITE",
    description:
      "A website concept designed to help users compare laptop specifications and features.",
    tech: "HTML · CSS · JavaScript",
    github: "https://github.com/sharad3162/Fusion-Laptop.git",
    live:"https://fusionlaptop.netlify.app"
  }
];


function App() {
  return (
    <>
      <nav className="navbar">
        <a href="#home" className="logo">SR.</a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-button" href="#contact">
          Let's Talk ↗
        </a>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-text">
            <p className="eyebrow">HELLO, I'M SHARAD RAJAK</p>
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Building digital
              <br />
              experiences<span>.</span>
            </motion.h1>
            <p className="hero-description">
              BCA student and aspiring Software Engineer,
              passionate about building websites, applications
              and creative digital solutions.
            </p>
            
<div className="hero-actions">
  <a href="#projects" className="primary-button">
    Explore My Work <ArrowUpRight size={17} />
  </a>

  <a href="#contact" className="text-button">
    Contact Me
  </a>

  <a
    href="/Sharad_Rajak_Resume.pdf"
    download="Sharad_Rajak_Resume.pdf"
    className="resume-button"
  >
    Download CV ↓
  </a>
</div>

          </div>

          <div className="hero-3d">
            <Scene />
            <span className="orbit-label">CREATIVE DEVELOPER / 2026</span>
          </div>

          <div className="hero-footer">
            <span>BASED IN INDIA</span>
            <span>SCROLL TO EXPLORE ↓</span>
            <span>AVAILABLE FOR OPPORTUNITIES</span>
          </div>
        </section>

        
<section className="about-section" id="about">
  <div className="about-left">
    <p className="eyebrow">01 / ABOUT ME</p>

    <h2>
      Not just writing code.
      <br />
      <span>Building possibilities.</span>
    </h2>

    <p className="about-description">
      I'm Sharad Rajak, a BCA student and aspiring
      Software Engineer from India. I enjoy transforming
      ideas into practical digital experiences through
      technology, creativity and continuous learning.
    </p>

    <p className="about-description">
      My interests include web development, software
      engineering, problem solving and exploring
      modern technologies. I believe in learning by
      building real-world projects.
    </p>

    <a href="#projects" className="about-link">
      EXPLORE MY WORK ↗
    </a>
  </div>

  <div className="about-right">
    <div className="about-card">
      <span>EDUCATION</span>
      <h3>Bachelor of Computer Applications</h3>
      <p>St. Andrews Institute of Technology and Management</p>
      <p>MDU University</p>
      <small>2025 — 2028</small>
    </div>

    <div className="about-card">
      <span>EXPERIENCE</span>
      <h3>Mail Executive</h3>
      <p>RecycleKart Private Limited</p>
      <small>6 Months Experience</small>
    </div>

    <div className="about-card">
      <span>MY INTERESTS</span>
      <h3>Development · Technology · Creativity</h3>
      <p>Building projects and learning new technologies.</p>
    </div>
  </div>
</section>


      
<section className="skills-section" id="skills">
  <p className="eyebrow">02 / MY EXPERTISE</p>

  <h2>
    Tools I use to
    <br />
    <span>bring ideas to life.</span>
  </h2>

  <p className="skills-description">
    Technologies and tools I use while developing
    projects and solving programming problems.
  </p>

  <div className="skills-grid">

    <motion.div className="skill-card" whileHover={{ y: -8 }}>
      <span>01</span>
      <h3>C Programming</h3>
      <p>Programming Fundamentals</p>
    </motion.div>

    <motion.div className="skill-card" whileHover={{ y: -8 }}>
      <span>02</span>
      <h3>Java</h3>
      <p>Object-Oriented Programming</p>
    </motion.div>

    <motion.div className="skill-card" whileHover={{ y: -8 }}>
      <span>03</span>
      <h3>Python</h3>
      <p>Programming & Development</p>
    </motion.div>

    <motion.div className="skill-card" whileHover={{ y: -8 }}>
      <span>04</span>
      <h3>HTML & CSS</h3>
      <p>Frontend Development</p>
    </motion.div>

    <motion.div className="skill-card" whileHover={{ y: -8 }}>
      <span>05</span>
      <h3>JavaScript</h3>
      <p>Web Interactivity</p>
    </motion.div>

    <motion.div className="skill-card" whileHover={{ y: -8 }}>
      <span>06</span>
      <h3>MySQL</h3>
      <p>Database Management</p>
    </motion.div>

    <motion.div className="skill-card" whileHover={{ y: -8 }}>
      <span>07</span>
      <h3>Flask</h3>
      <p>Python Web Development</p>
    </motion.div>

    <motion.div className="skill-card" whileHover={{ y: -8 }}>
      <span>08</span>
      <h3>DSA</h3>
      <p>Data Structures & Algorithms</p>
    </motion.div>

  </div>

  <div className="learning-box">
    <span> CURRENTLY EXPLORING </span>
    <h3>React.js · Three.js · 3D Web Development</h3>
  </div>
</section>


        <section className="section" id="projects">
          <p className="eyebrow">03 / SELECTED WORK</p>
          <h2>Things I've built.</h2>
          
<div className="project-grid">
  {projects.map((project, index) => (
    <motion.article
      className="project-card"
      key={project.name}
      whileHover={{ y: -8 }}
    >
      <span className="project-number">
        0{index + 1} / PROJECT
      </span>

      <h3>{project.name}</h3>

      <p className="project-type">
        {project.type}
      </p>

      <p>{project.description}</p>

      <span className="tech">
        {project.tech}
      </span>

      <div className="project-links">
        {project.github && (
          <a href={project.github}
             target="_blank"
             rel="noreferrer">
            GitHub ↗
          </a>
        )}

        {project.live && (
          <a href={project.live}
             target="_blank"
             rel="noreferrer">
            Live Demo ↗
          </a>
        )}
      </div>
    </motion.article>
  ))}
</div>

        </section>

       
<section className="experience-section" id="experience">
  <p className="eyebrow">04 / PROFESSIONAL JOURNEY</p>

  <h2>
    Experience &
    <br />
    <span>What I've learned.</span>
  </h2>

  <div className="timeline">
     <motion.div
      className="timeline-card education-card"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="timeline-dot"></div>

      <span className="timeline-date">
        2025 — 2028
      </span>

      <h3>Bachelor of Computer Applications</h3>

      <h4>St. Andrews Institute of Technology and Management</h4>

      <p>
        Affiliated with Maharshi Dayanand University (MDU).
        Currently pursuing BCA and developing skills in
        programming, web development and software engineering.
      </p>

      <div className="experience-tags">
        <span>Computer Applications</span>
        <span>Programming</span>
        <span>Web Development</span>
      </div>
    </motion.div>

    <motion.div
      className="timeline-card"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="timeline-dot"></div>

      <span className="timeline-date">
        MAY 2025 — OCTOBER 2025
      </span>

      <h3>Mail Executive / Customer Support</h3>

      <h4>RecycleKart Private Limited</h4>

      <p>
        Worked in customer support and data management,
        helping customers through WhatsApp and email
        communication while maintaining digital records.
      </p>

      <div className="experience-tags">
        <span>Customer Support</span>
        <span>Email Management</span>
        <span>Data Entry</span>
        <span>Digital Records</span>
      </div>
    </motion.div>

   

  </div>
</section>


        
<section className="contact-section" id="contact">
  <div className="contact-heading">
    <p className="eyebrow">06 / GET IN TOUCH</p>
    <h2>
      Let's create
      <br />
      something <span>great.</span>
    </h2>
    <p>
      Have an idea, opportunity or project in mind?
      I'd love to hear from you.
    </p>
  </div>

  <div className="contact-layout">
    <form
      className="contact-form"
      action="https://formsubmit.co/sharadr094@gmail.com"
      method="POST"
    >
      <input
  type="hidden"
  name="_next"
  value="http://localhost:5174/?success=true#contact"
/>
      <input
        type="hidden"
        name="_subject"
        value="New Portfolio Contact Message"
      />
      <input
        type="hidden"
        name="_captcha"
        value="true"
      />

      <label>Your Name</label>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        required
      />

      <label>Your Email</label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        required
      />

      <label>Your Message</label>
      <textarea
        name="message"
        placeholder="Tell me about your project..."
        rows="5"
        required
      />

      <button type="submit">
        Send Message ↗
      </button>
    </form>

    <div className="contact-info">
      <div>
        <span>EMAIL</span>
        <a href="mailto:sharadr094@gmail.com">
          sharadr094@gmail.com
        </a>
      </div>

      <div>
        <span>GITHUB</span>
        <a
          href="https://github.com/sharad3162"
          target="_blank"
          rel="noreferrer"
        >
          github.com/sharad3162 ↗
        </a>
      </div>

      <div>
        <span>LINKEDIN</span>
        <a
          href="https://www.linkedin.com/in/sharad-rajak-462168335/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn Profile ↗
        </a>
      </div>

      <div>
        <span>LOCATION</span>
        <p>Delhi, India</p>
      </div>
    </div>
  </div>
</section>

      </main>

     
<footer className="main-footer">
  <a href="#home" className="footer-logo">SR.</a>

  <p>© 2026 Sharad Rajak. All rights reserved.</p>

  <a href="#home" className="back-top">
    BACK TO TOP ↑
  </a>
</footer>

    </>
  );
}

export default App;
