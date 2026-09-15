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

const interests = [
  {
    title: 'Languages & travel',
    text: 'I enjoy learning languages, visiting unfamiliar places, and experiencing how other people live and see the world.',
    image: '/images/travel.jpg',
    alt: 'Ivan traveling',
  },
  {
    title: 'Staying active',
    text: 'Running, local run clubs, and anything that gets me away from a desk and around good people.',
    image: '/images/active.jpg',
    alt: 'Ivan at a run or outdoor activity',
  },
  {
    title: 'Always curious',
    text: 'I read across technology, science, history, and whatever subject has recently caught my attention.',
    image: '/images/curious.jpg',
    alt: 'A moment from Ivan’s life outside of coding',
  },
]

function App() {
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
              <span>&gt;</span> currently_learning: Django · machine learning · MATLAB
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

              <p><span>$</span> currently_learning</p>
              <p className="terminal-active">Django · ML · MATLAB_</p>
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
          <p className="section-label">&gt; beyond_the_screen</p>
          <h2>Usually curious about something.</h2>

          <p className="section-intro">
            Code is a large part of my life, but not the whole thing. I also like
            discovering new places, staying active, learning languages, reading,
            and meeting people with different perspectives.
          </p>

          <div className="interest-grid">
            {interests.map((interest) => (
              <article className="interest-card" key={interest.title}>
                <div className="interest-image-wrap">
                  <img
                    src={interest.image}
                    alt={interest.alt}
                    className="interest-image"
                    loading="lazy"
                  />
                </div>
                <div className="interest-copy">
                  <h3>{interest.title}</h3>
                  <p>{interest.text}</p>
                </div>
              </article>
            ))}
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