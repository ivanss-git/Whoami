import { useRef, useState } from 'react'
import './App.css'

const projects = [
  {
    title: 'LotStack',
    status: 'IN DEVELOPMENT',
    type: 'Full-stack vehicle auction platform',
    description:
      'A tool inspired by my experience helping buy, repair, and sell vehicles. LotStack collects auction listings, estimates ownership costs and market value, and ranks potential purchases by risk and expected return.',
    stack: [
      'Java 21',
      'Spring Boot',
      'PostgreSQL',
      'React',
      'TypeScript',
      'Python',
      'Docker',
    ],
    highlights: [
      'Normalizes listings from different auction sources',
      'Combines repair, transport, title, and market estimates',
      'Includes a browser extension for live auction research',
    ],
    github: 'https://github.com/ivanss-git/LotStack-project',
    live: 'https://lotstack.onrender.com',
  },
]

const research = [
  {
    title: 'CancerGraph',
    status: 'IN PROGRESS',
    subtitle: 'Faculty-Supervised Undergraduate Research · Computational Biology',
    description:
      'A faculty-supervised research project beginning with TCGA breast cancer data. I am currently building a reliable shared cohort across clinical, miRNA, and mRNA datasets before moving into predictive modeling and the investigation of biologically meaningful relationships.',
    stack: ['Python', 'Pandas', 'NumPy', 'PostgreSQL', 'Machine Learning', 'TCGA'],
    github: 'https://github.com/ivanss-git/CancerGraph',
  },
  {
    title: 'Energy-Aware Process Planning',
    status: 'BEGINNING',
    subtitle: 'Undergraduate Research · Algorithms · Advanced Manufacturing',
    description:
      'Contributing to a research project on energy-aware process planning for 5-axis hybrid direct energy deposition. My work is beginning with MATLAB and algorithms that generate G-code and M-code for manufacturing processes.',
    stack: ['MATLAB', 'Algorithm Design', 'Process Planning', 'G-code', 'Optimization'],
  },
]

const moments = [
  {
    image: '/images/family.jpeg',
    label: 'Family',
    caption: 'Uncle and godfather!',
    position: 'center',
  },
  {
    image: '/images/friends.jpeg',
    label: 'Friends',
    caption: 'My people!',
    position: 'center 35%',
  },
  {
    image: '/images/adventure.jpeg',
    label: 'Adventure',
    caption: 'This got muddy fast.',
    position: 'center 60%',
  },
  {
    image: '/images/race.jpeg',
    label: 'Running',
    caption: 'Half marathon!!',
    fit: 'contain',
    position: 'center 30%',
  },
  {
    image: '/images/fishing.jpeg',
    label: 'Outside',
    caption: 'We caught something!',
    position: 'center 35%',
  },
  {
    image: '/images/campus.jpeg',
    label: 'Just for fun',
    caption: 'Quick Snap!',
    position: 'center 35%',
  },
  {
    image: '/images/paris.jpeg',
    label: 'Travel',
    caption: 'Lost in Paris.',
    position: 'center',
  },
  {
    image: '/images/switzerland.jpeg',
    label: 'Travel',
    caption: 'Switzerland was unreal.',
    position: 'center',
  },
  {
    image: '/images/soccer.jpeg',
    label: 'Just for fun',
    caption: 'A few yesterdays ago..',
    position: 'center 45%',
  },
]

function App() {
  const [activeMoment, setActiveMoment] = useState(0)
  const touchStartX = useRef(null)

  const showPreviousMoment = () => {
    setActiveMoment((current) =>
      current === 0 ? moments.length - 1 : current - 1,
    )
  }

  const showNextMoment = () => {
    setActiveMoment((current) =>
      current === moments.length - 1 ? 0 : current + 1,
    )
  }

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX
  }

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return

    const distance = touchStartX.current - event.changedTouches[0].clientX

    if (Math.abs(distance) > 45) {
      distance > 0 ? showNextMoment() : showPreviousMoment()
    }

    touchStartX.current = null
  }

  return (
    <div className="site">
      <nav className="nav" aria-label="Main navigation">
        <a href="#top" className="brand" aria-label="Go to top">
          <span>&gt;</span> whoami
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#research">Research</a>
          <a href="#outside">Beyond code</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main id="top">
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />

          <div className="hero-content">
            <p className="terminal-line">&gt; whoami</p>

            <h1>
              Ivan Adair
              <br />
              Ibarra
            </h1>

            <h2>
              Computer Science student building software and exploring how
              computing can help solve real-world problems.
            </h2>

            <p className="hero-text">
              I’m a junior at UT Arlington interested in software engineering,
              machine learning, and computational research. Right now, I’m
              building LotStack and contributing to research in biology and
              advanced manufacturing.
            </p>

            <div className="hero-actions">
              <a href="#work" className="primary-button">
                Explore my work
              </a>
              <a
                href="https://github.com/ivanss-git"
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ivan-ibarra-70a589207/"
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                LinkedIn
              </a>
            </div>

            <p className="status-line">
              <span>&gt;</span> current_focus: consistency · continuous improvement
              <span className="cursor">_</span>
            </p>
          </div>

          <aside className="terminal-card" aria-label="Quick profile">
            <div className="terminal-top" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>

            <div className="terminal-body">
              <p><span>$</span> whoami</p>
              <p>Ivan Adair Ibarra</p>

              <p><span>$</span> studying</p>
              <p>Computer Science · UT Arlington</p>

              <p><span>$</span> building</p>
              <p>LotStack · CancerGraph</p>

              <p><span>$</span> current_focus</p>
              <p className="terminal-active">building consistently_</p>
            </div>
          </aside>
        </section>

        <section id="about" className="section">
          <p className="section-label">&gt; about</p>

          <div className="section-grid">
            <div>
              <h2>Learning by building.</h2>
            </div>

            <div className="about-copy">
              <p>
                I’m a Computer Science student who likes starting with a problem
                I’m curious about, learning what I need, and gradually turning it
                into something useful.
              </p>

              <p>
                My current interests include full-stack development, machine
                learning, computational biology, and software for scientific and
                engineering work. I’m still early in that path, but I enjoy
                taking on unfamiliar problems and figuring them out one step at
                a time.
              </p>

              <p>
                Alongside school, I’ve spent several years leading teams in a
                fast-paced kitchen. That experience taught me how to communicate,
                stay calm, and improve systems with real people depending on them.
              </p>

              <p>
                At UTA, I’m involved with ACM and SHPE. I try to write code
                consistently, keep learning, and let small improvements compound
                over time.
              </p>
            </div>
          </div>
        </section>

        <section id="work" className="section">
          <p className="section-label">&gt; selected_work</p>
          <h2>Things I’ve built</h2>

          <div className="projects">
            {projects.map((project, index) => (
              <article className="project" key={project.title}>
                <div className="project-top">
                  <div className="project-heading">
                    <span>0{index + 1}</span>
                    <div>
                      <h3>{project.title}</h3>
                      <p className="project-type">{project.type}</p>
                    </div>
                  </div>
                  <span className="status-badge">{project.status}</span>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-details">
                  <div className="stack-block">
                    <p className="stack-title">CORE TECHNOLOGIES</p>
                    <div className="tags">
                      {project.stack.map((item) => <span key={item}>{item}</span>)}
                    </div>
                  </div>

                  <div className="stack-block">
                    <p className="stack-title">WHAT IT DOES</p>
                    <ul className="highlights">
                      {project.highlights.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                </div>

                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      View code →
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Visit live site →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="research" className="section">
          <p className="section-label">&gt; research_and_exploration</p>
          <h2>What I’m exploring</h2>

          <div className="research-list">
            {research.map((item, index) => (
              <article className="research-item" key={item.title}>
                <div className="research-meta">
                  <span>0{index + 1}</span>
                  <span className="status-badge">{item.status}</span>
                </div>

                <div className="research-content">
                  <h3>{item.title}</h3>
                  <p className="research-subtitle">{item.subtitle}</p>
                  <p>{item.description}</p>

                  <div className="tags">
                    {item.stack.map((tech) => <span key={tech}>{tech}</span>)}
                  </div>

                  {item.github && (
                    <div className="project-links research-links">
                      <a href={item.github} target="_blank" rel="noreferrer">
                        Follow the project →
                      </a>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="outside" className="section">
          <p className="section-label">&gt; outside_code</p>
          <h2>A little more about me.</h2>

          <p className="section-intro">
            When I’m not coding, I’m probably with family or friends, traveling,
            reading, running, or learning something completely unrelated.
          </p>

          <div
            className="moments-carousel"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onKeyDown={(event) => {
              if (event.key === 'ArrowLeft') showPreviousMoment()
              if (event.key === 'ArrowRight') showNextMoment()
            }}
            tabIndex="0"
            role="region"
            aria-roledescription="carousel"
            aria-label="Moments from Ivan’s life outside of coding"
          >
            <div className="moment-image-wrap">
              <img
                src={moments[activeMoment].image}
                alt={moments[activeMoment].alt}
                className="moment-image"
                style={{
                  objectFit: moments[activeMoment].fit || 'cover',
                  objectPosition: moments[activeMoment].position || 'center',
                }}
              />

              <button
                type="button"
                className="carousel-button carousel-button-left"
                onClick={showPreviousMoment}
                aria-label="Show previous photo"
              >
                ←
              </button>

              <button
                type="button"
                className="carousel-button carousel-button-right"
                onClick={showNextMoment}
                aria-label="Show next photo"
              >
                →
              </button>

              <span className="moment-count">
                {String(activeMoment + 1).padStart(2, '0')} / {String(moments.length).padStart(2, '0')}
              </span>
            </div>

            <div className="moment-footer" aria-live="polite">
              <div>
                <p className="moment-label">{moments[activeMoment].label}</p>
                <h3>{moments[activeMoment].caption}</h3>
              </div>

              <div className="carousel-dots" aria-label="Choose a photo">
                {moments.map((moment, index) => (
                  <button
                    type="button"
                    key={`${moment.image}-${index}`}
                    className={index === activeMoment ? 'carousel-dot active' : 'carousel-dot'}
                    onClick={() => setActiveMoment(index)}
                    aria-label={`Show photo ${index + 1}: ${moment.caption}`}
                    aria-current={index === activeMoment ? 'true' : undefined}
                  />
                ))}
              </div>
            </div>

            <p className="swipe-hint">Swipe, use the arrows, or press your keyboard arrow keys.</p>
          </div>
        </section>

        <section id="contact" className="section contact">
          <p className="section-label">&gt; contact</p>
          <h2>Say hello.</h2>

          <p>
            I’m always happy to meet other students, developers, researchers,
            and curious people. Feel free to reach out about a project,
            opportunity, or shared interest.
          </p>

          <div className="contact-links">
            <a href="mailto:Ivan.ibarracs@gmail.com">Email</a>
            <a href="https://github.com/ivanss-git" target="_blank" rel="noreferrer">GitHub</a>
            <a
              href="https://www.linkedin.com/in/ivan-ibarra-70a589207/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <p className="school-email">UTA · iai9712@mavs.uta.edu</p>
        </section>
      </main>

      <footer>
        <span>&gt; whoami</span>
        <span>Ivan Adair Ibarra © 2026</span>
      </footer>
    </div>
  )
}

export default App