import './App.css'

const projects = [
  {
    title: 'LotStack',
    status: 'ACTIVE',
    type: 'Full-stack application',
    description:
      'A vehicle auction analysis platform that collects and normalizes listing data, estimates costs and market value, and supports better purchase decisions through ranked recommendations.',
    stack: [
      'Java 21',
      'Spring Boot',
      'Spring Web',
      'Spring Data JPA',
      'PostgreSQL',
      'Flyway',
      'React',
      'TypeScript',
      'Vite',
      'Python',
      'Pandas',
      'FastAPI',
      'Pydantic',
      'Requests',
      'psycopg2',
      'CRXJS',
      'Docker Compose',
    ],
    concepts: [
      'REST APIs',
      'Database Design',
      'Web Scraping',
      'Data Normalization',
      'Ranking',
      'Browser Extensions',
      'Data Pipelines',
    ],
    github: 'https://github.com/ivanss-git/LotStack-project',
    live: 'https://lotstack.onrender.com',
  },
]

const research = [
  {
    title: 'CancerGraph',
    status: 'ACTIVE',
    subtitle: 'Computational Biology · Machine Learning',
    description:
      'Research project beginning with breast cancer data from TCGA, focused on aligning clinical, miRNA, and genomic datasets for predictive modeling and biological relationship discovery.',
    stack: [
      'Python',
      'Pandas',
      'NumPy',
      'SQL',
      'PostgreSQL',
      'MATLAB',
      'TCGA / BRCA',
    ],
    github: 'https://github.com/ivanss-git/CancerGraph',
  },
  {
    title:
      'Energy-Aware Process Planning for 5-Axis Hybrid Direct Energy Deposition',
    status: 'STARTING',
    subtitle: 'Undergraduate Research · Algorithms · Manufacturing',
    description:
      'Beginning undergraduate research on energy-aware process planning for 5-axis hybrid direct energy deposition, with a focus on MATLAB-based algorithms that automatically generate G-code and M-code for manufacturing processes.',
    stack: [
      'MATLAB',
      'Algorithm Design',
      'Process Planning',
      'G-code',
      'M-code',
      'Optimization',
    ],
  },
]

const upcoming = [
  {
    name: 'MLH - Data Week',
    date: 'September 2026',
  },
  {
    name: 'IBM - Build with BOB Hackathon',
    date: 'September 2026',
  },
  {
    name: 'SAS - Student Track Hackathon',
    date: 'October 2026',
  },
  {
    name: 'UTA - HackUTA',
    date: 'TBD',
  },
  {
    name: 'UTD - HackUTD Zero Day',
    date: 'November 2026',
  },
  {
    name: 'LaunchHacks v',
    date: 'December 2026'
  },
  {
    name: 'MLH - WEHack',
    date: 'April 2027',
  },
]

function App() {
  return (
    <div className="site">
      <nav className="nav">
        <a href="#top" className="brand">
          <span>&gt;</span> whoami
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#research">Research</a>
          <a href="#work">Work</a>
          <a href="#upcoming">Upcoming</a>
          <a href="#direction">Direction</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="hero-grid" />

          <div className="hero-content">
            <p className="terminal-line">&gt; whoami</p>

            <h1>
              Ivan Adair
              <br />
              Ibarra
            </h1>

            <h2>
              Computer Science student, developer, and undergraduate researcher.
            </h2>

            <p className="hero-text">
              I build software and research computational approaches to problems
              in biology, manufacturing, and intelligent systems.
            </p>

            <div className="hero-actions">
              <a href="#work" className="primary-button">
                View my work
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
              <span>&gt;</span> current_focus: AI × computational biology
              <span className="cursor">_</span>
            </p>
          </div>

          {/* TERMINAL */}
          <div className="terminal-card">
            <div className="terminal-top">
              <span />
              <span />
              <span />
            </div>

            <div className="terminal-body">
              <p>
                <span>$</span> whoami
              </p>
              <p>Ivan Adair Ibarra</p>

              <p>
                <span>$</span> role
              </p>
              <p>CS student · developer · researcher</p>

              <p>
                <span>$</span> building
              </p>
              <p>CancerGraph · LotStack</p>

              <p>
                <span>$</span> researching
              </p>
              <p>computational biology · process planning</p>

              <p>
                <span>$</span> status
              </p>
              <p className="terminal-active">always learning_</p>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <p className="section-label">&gt; about</p>

          <div className="section-grid">
            <div>
              <h2>About me</h2>
            </div>

            <div className="about-copy">
              <p>
                I'm a Computer Science student at UT Arlington who enjoys taking
                unfamiliar problems from something I don't yet understand to
                something I can build, test, and improve.
              </p>

              <p>
                My work currently spans full-stack development, computational
                biology, and undergraduate manufacturing research.
              </p>

              <p>
                I'm especially interested in projects where software, algorithms,
                and intelligent systems can contribute to problems outside of
                traditional software development.
              </p>
            </div>
          </div>
        </section>

        {/* RESEARCH */}
        <section id="research" className="section">
          <p className="section-label">&gt; research</p>
          <h2>Research</h2>

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
                    {item.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  {item.github && (
                    <div className="project-links research-links">
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub →
                      </a>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SELECTED WORK */}
        <section id="work" className="section">
          <p className="section-label">&gt; selected_work</p>
          <h2>Things I've built</h2>

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

                <p className="project-description">
                  {project.description}
                </p>

                <div className="stack-block">
                  <p className="stack-title">STACK</p>

                  <div className="tags">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>

                <div className="stack-block">
                  <p className="stack-title">CONCEPTS</p>

                  <div className="tags concepts">
                    {project.concepts.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub →
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live site →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* UPCOMING */}
        <section id="upcoming" className="section">
          <p className="section-label">&gt; upcoming</p>
          <h2>What's next</h2>

          <div className="upcoming">
            {upcoming.map((event) => (
              <div className="event" key={event.name}>
                <h3>{event.name}</h3>
                <span>{event.date}</span>
              </div>
            ))}
          </div>
        </section>

        {/* DIRECTION */}
        <section id="direction" className="section direction">
          <p className="section-label">&gt; direction</p>
          <h2>Where I'm headed</h2>

          <p className="future-text">
            Long term, I want to work at the intersection of software,
            artificial intelligence, and scientific research — particularly on
            technology capable of making a meaningful impact in healthcare,
            biology, and other difficult real-world problems.
          </p>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact">
          <p className="section-label">&gt; contact</p>
          <h2>Let's build something.</h2>

          <p>
            I'm always interested in meeting people working on interesting
            software, research, or ambitious technical problems.
          </p>

          <div className="contact-links">
            <a href="mailto:Ivan.ibarracs@gmail.com">Email</a>

            <a
              href="https://github.com/ivanss-git"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ivan-ibarra-70a589207/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <p className="school-email">
            UTA · iai9712@mavs.uta.edu
          </p>
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
