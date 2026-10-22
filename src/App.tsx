import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion, type Variants } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Github, Mail, Menu, X, Code2, Database, Cpu, Sparkles, ExternalLink, MapPin, Linkedin, Layers, Award } from 'lucide-react'
const projects = [
  { number: '01', type: 'INTERNET OF THINGS · PROYECTO ACADÉMICO', title: 'MI CASITA', subtitle: 'Domótica con ESP32', description: 'Prototipo de automatización del hogar con cinco luces LED, control por Bluetooth y una aplicación Android desarrollada en MIT App Inventor.', tags: ['ESP32', 'C / Arduino', 'Bluetooth', 'MIT App Inventor'], url: 'https://github.com/07OMAR07/PROYECTO-TELECOMUNICACIONES', featured: true },
  { number: '02', type: 'ALGORITMOS', title: 'Seam Carving', subtitle: 'Redimensionamiento inteligente de imágenes', description: 'Análisis académico de un algoritmo de programación dinámica para encontrar costuras de menor energía y redimensionar imágenes.', tags: ['Algoritmos', 'Programación dinámica'], url: 'https://github.com/07OMAR07', featured: false },
  { number: '03', type: 'JAVA · ARQUITECTURA', title: 'Facade Pattern', subtitle: 'Diseño de software', description: 'Implementación del patrón Facade en Java y exploración de arquitectura de software para simplificar la interacción entre subsistemas.', tags: ['Java', 'Design Patterns', 'OOP'], url: 'https://github.com/07OMAR07/facade', featured: false },
  { number: '04', type: 'INGENIERÍA DE SOFTWARE', title: 'Prácticas de desarrollo', subtitle: 'Programación orientada a objetos', description: 'Actividades académicas en Java con enfoque en lógica, estructura del código y buenas prácticas de programación orientada a objetos.', tags: ['Java', 'OOP', 'Git'], url: 'https://github.com/07OMAR07/Ingenieria-de-Software-2', featured: false },
]

const skills = [
  { icon: Code2, title: 'Desarrollo', items: ['Java', 'JavaScript', 'TypeScript', 'React', 'HTML & CSS', 'Python', 'JavaFX'] },
  { icon: Database, title: 'Datos & herramientas', items: ['MySQL', 'Git & GitHub', 'MVC', 'Patrones de diseño'] },
  { icon: Cpu, title: 'Tecnología aplicada', items: ['ESP32', 'Arduino / C', 'Bluetooth', 'MIT App Inventor'] },
  { icon: Layers, title: 'Stack de este portafolio', wide: true, items: ['React 19', 'TypeScript', 'Vite', 'Framer Motion', 'Lucide Icons', 'CSS personalizado', 'Node.js & npm', 'Visual Studio Code', 'Git & GitHub'] },
]

const certifications = [
  { title: 'Core Java Specialization', issuer: 'LearnQuest · Coursera', detail: 'Especialización completa de 4 cursos', url: 'https://coursera.org/verify/specialization/DYM25FV5ZNQY', main: true },
  { title: 'Introduction to Java', issuer: 'LearnQuest · Coursera', detail: 'Credencial JT3M5CPY7E8G', url: 'https://coursera.org/verify/JT3M5CPY7E8G' },
  { title: 'Introduction to Object-Oriented Programming with Java', issuer: 'LearnQuest · Coursera', detail: 'Credencial GT7SRHDL4GXK', url: 'https://coursera.org/verify/GT7SRHDL4GXK' },
  { title: 'Object-Oriented Hierarchies in Java', issuer: 'LearnQuest · Coursera', detail: 'Credencial J7ZU9SHANECS', url: 'https://coursera.org/verify/J7ZU9SHANECS' },
  { title: 'Java Class Library', issuer: 'LearnQuest · Coursera', detail: 'Credencial 6ALWT55L4GCD', url: 'https://coursera.org/verify/6ALWT55L4GCD' },
]

const reveal: Variants = {  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function Loader({ done }: { done: () => void }) {
  useEffect(() => {
    const timer = window.setTimeout(done, 2300)
    return () => window.clearTimeout(timer)
  }, [done])
  return <motion.div className="loader" initial={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: .7 } }}>
    <div className="loader-glow" />
    <motion.img src="/omar-harvey-logo.png" alt="Omar Harvey Company" className="loader-logo"
      initial={{ opacity: 0, scale: .94, filter: 'blur(10px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      transition={{ duration: .8, ease: 'easeOut' }} />
    <div className="loader-bottom">
      <span>PREPARANDO EXPERIENCIA</span>
      <div className="loader-track"><motion.div initial={{ width: '0%' }} animate={{ width: '100%' }} transition={{ duration: 1.8, ease: 'easeInOut' }} /></div>
      <span className="loader-percent">OH / 2026</span>
    </div>
  </motion.div>
}

function App() {
  const [loading, setLoading] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const reduceMotion = useReducedMotion()
  const finishLoading = () => setLoading(false)

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [loading])

  const closeMenu = () => setMenuOpen(false)
  const motionProps = reduceMotion ? {} : { initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.16 }, variants: reveal }

  return <>
    <AnimatePresence>{loading && <Loader key="loader" done={finishLoading} />}</AnimatePresence>
    <div className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Inicio">
          <img className="brand-logo" src="/omar-harvey-monogram.png" alt="OH" /><span className="brand-name">OMAR HARVEY <small>SOFTWARE & DIGITAL</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {[['Perfil', '#about'], ['Especialidades', '#expertise'], ['Proyectos', '#projects'], ['Trayectoria', '#journey']].map(([label, href]) =>
            <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Hablemos <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <motion.div className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: loading ? 2.1 : .1 }}>
              <span className="status-dot" /> PORTAFOLIO PERSONAL · BOGOTÁ, COLOMBIA
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: loading ? 2.2 : .2, duration: .8 }}>
              Tecnología con<br /><em>intención.</em> Código con<br />propósito.
            </motion.h1>
            <motion.p className="hero-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: loading ? 2.45 : .4, duration: .7 }}>
              Soy <strong>Omar Harvey Guaqueta Barrera</strong>, ingeniero de sistemas enfocado en desarrollar soluciones digitales útiles, aprender constantemente y convertir ideas en experiencias funcionales.
            </motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: loading ? 2.6 : .5 }}>
              <a className="button button-gold" href="#projects">Explorar proyectos <ArrowUpRight size={17} /></a>
              <a className="text-link" href="#about">Conóceme <ArrowDown size={15} /></a>
            </motion.div>
            <motion.div className="hero-meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: loading ? 2.7 : .6 }}>
              <span><MapPin size={14} /> Bogotá, Colombia</span><span className="meta-divider" /><span>Disponible para oportunidades junior</span>
            </motion.div>
          </div>
          <motion.div className="hero-visual" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: loading ? 2.2 : .2, duration: 1 }}>
            <div className="visual-orbit orbit-a" /><div className="visual-orbit orbit-b" />
            <div className="visual-card">
              <div className="visual-card-top"><span>OH / DIGITAL</span><Sparkles size={16} /></div>
              <img className="monogram-img" src="/omar-harvey-monogram.png" alt="Logo OH Omar Harvey" />
              <div className="visual-rule" />
              <div className="visual-card-bottom"><span>INGENIERÍA DE SISTEMAS</span><span>2026</span></div>
            </div>
            <div className="floating-chip chip-one"><Code2 size={16} /> <span>Desarrollo</span></div>
            <div className="floating-chip chip-two"><Database size={16} /> <span>Datos</span></div>
            <div className="visual-caption">IDEAS → SOLUCIONES <span>01 / 04</span></div>
          </motion.div>
          <a className="scroll-cue" href="#about"><span>DESLIZA PARA DESCUBRIR</span><div><ArrowDown size={15} /></div></a>
        </section>

        <section className="intro-strip">
          <div className="strip-inner"><span className="strip-label">MI ENFOQUE</span><p>Curiosidad técnica. Pensamiento estructurado. <em>Soluciones que sí sirven.</em></p><span className="strip-star">✳</span></div>
        </section>

        <section className="section-wrap content-section" id="about">
          <motion.div className="section-heading" {...motionProps}><span className="section-index">01 — PERFIL</span><h2>La tecnología es<br /><em>una herramienta.</em></h2></motion.div>
          <div className="about-content">
            <motion.div className="about-lead" {...motionProps}><span className="gold-line" /><p>Me interesa crear productos digitales claros, funcionales y bien pensados: desde aplicaciones y bases de datos hasta proyectos que conectan software con el mundo físico.</p></motion.div>
            <motion.div className="about-detail" {...motionProps}>
              <p>Me gradué de Ingeniería de Sistemas en el Politécnico Grancolombiano en 2026. He trabajado académicamente con Java, desarrollo web, MySQL, arquitectura MVC y proyectos de IoT con ESP32.</p>
              <p>También tengo experiencia práctica en creación de contenido, edición audiovisual y gestión de redes sociales. Esa combinación me ayuda a entender tanto cómo se construye una solución como la forma de comunicar su valor.</p>
              <div className="about-signature">Omar Harvey <span>— Software & Digital</span></div>
            </motion.div>
          </div>
        </section>

        <section className="section-wrap content-section expertise-section" id="expertise">
          <motion.div className="section-heading" {...motionProps}><span className="section-index">02 — ESPECIALIDADES</span><h2>Herramientas para<br /><em>hacer que suceda.</em></h2><p className="heading-note">Una base técnica en crecimiento, con foco en aprender haciendo.</p></motion.div>
          <div className="skill-grid">
            {skills.map((skill, i) => <motion.article className={`skill-card ${skill.wide ? 'wide' : ''}`} key={skill.title} {...motionProps} transition={{ duration: .6, delay: i * .1 }}>
              <div className="skill-card-head"><span className="skill-icon"><skill.icon size={21} /></span><span className="skill-number">0{i + 1}</span></div>
              <h3>{skill.title}</h3><div className="skill-tags">{skill.items.map(item => <span key={item}>{item}</span>)}</div>
            </motion.article>)}
          </div>
          <motion.div className="learning-note" {...motionProps}><span className="note-symbol">↗</span><p><strong>Siempre aprendiendo.</strong> También he explorado Microsoft Azure y SAP a nivel básico, junto con principios de arquitectura y patrones de diseño.</p></motion.div>
        </section>

        <section className="section-wrap content-section projects-section" id="projects">
          <motion.div className="projects-heading" {...motionProps}><div className="section-heading"><span className="section-index">03 — TRABAJO SELECCIONADO</span><h2>Ideas convertidas<br />en <em>proyectos.</em></h2></div><a className="text-link github-link" href="https://github.com/07OMAR07" target="_blank" rel="noreferrer">Ver GitHub completo <ExternalLink size={15} /></a></motion.div>
          <div className="project-grid">
            {projects.map((project, i) => <motion.article className={`project-card ${project.featured ? 'featured' : ''}`} key={project.number} {...motionProps} transition={{ duration: .65, delay: i * .08 }}>
              <div className="project-top"><span>{project.type}</span><span className="project-number">{project.number}</span></div>
              <div className="project-art" aria-hidden="true"><div className="art-grid" /><div className="art-orb" /><span className="art-code">{project.featured ? '01 / ESP32' : project.number + ' / BUILD'}</span><span className="art-mark">{project.featured ? 'MC' : project.title.slice(0, 2).toUpperCase()}</span></div>
              <div className="project-info"><h3>{project.title}</h3><h4>{project.subtitle}</h4><p>{project.description}</p>
                <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <a className="project-link" href={project.url} target="_blank" rel="noreferrer">Explorar proyecto <ArrowUpRight size={16} /></a>
              </div>
            </motion.article>)}
          </div>
        </section>

        <section className="section-wrap content-section journey-section" id="journey">
          <motion.div className="section-heading" {...motionProps}><span className="section-index">04 — TRAYECTORIA</span><h2>Experiencia que<br /><em>también suma.</em></h2></motion.div>
          <div className="timeline">
            <motion.article className="timeline-item" {...motionProps}><div className="timeline-date">ACTUALIDAD</div><div className="timeline-body"><span className="timeline-type">OPERACIONES · CONTENIDO DIGITAL</span><h3>Talleres Jimmy Guaqueta</h3><p>Apoyo en procesos técnicos de pintura automotriz y gestión digital del negocio. Creo contenido audiovisual, edito videos y diseño catálogos de productos para empresas del sector de pinturas.</p></div><span className="timeline-dot" /></motion.article>
          </div>
          <motion.div className="cert-block" {...motionProps}>
            <span className="section-index">FORMACIÓN COMPLEMENTARIA · 5 CERTIFICACIONES</span>
            <div className="cert-grid">
              {certifications.map(cert => <a key={cert.title} className={`cert-card ${cert.main ? 'main' : ''}`} href={cert.url} target="_blank" rel="noreferrer">
                <span className="cert-icon"><Award size={18} /></span>
                <div><h3>{cert.title}</h3><p>{cert.issuer}</p><small>{cert.detail}</small></div>
                <ArrowUpRight size={16} className="cert-arrow" />
              </a>)}
            </div>
          </motion.div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-glow" />
          <motion.div className="section-wrap contact-inner" {...motionProps}>
            <span className="section-index">05 — CONTACTO</span>
            <h2>Lo próximo<br />podemos <em>construirlo.</em></h2>
            <p>Estoy abierto a oportunidades junior, colaboraciones y proyectos donde pueda aportar, aprender y crecer.</p>
            <a className="button button-gold contact-button" href="mailto:omar07guaqueta@gmail.com">Conversemos <Mail size={17} /></a>
            <div className="contact-footer">
              <div className="contact-method"><span>ESCRÍBEME</span><a href="mailto:omar07guaqueta@gmail.com">omar07guaqueta@gmail.com <ArrowUpRight size={14} /></a></div>
              <div className="contact-method"><span>ENCUÉNTRAME</span><a href="https://github.com/07OMAR07" target="_blank" rel="noreferrer"><Github size={15} /> GitHub <ArrowUpRight size={14} /></a><a href="https://www.linkedin.com/in/omar07guaqueta/" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn <ArrowUpRight size={14} /></a></div>
              <div className="contact-method"><span>UBICACIÓN</span><p>Bogotá, Colombia</p></div>
            </div>
          </motion.div>
        </section>
      </main>
      <footer className="site-footer"><a className="footer-brand" href="#home" aria-label="Inicio"><img className="footer-logo" src="/omar-harvey-monogram.png" alt="OH" /></a><span>© 2026 OMAR HARVEY · SOFTWARE & DIGITAL</span><a href="#home">VOLVER ARRIBA ↑</a></footer>
    </div>
  </>
}

export default App
