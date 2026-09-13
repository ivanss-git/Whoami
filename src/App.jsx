import './App.css'

const projects = [
  {
    title: 'CancerGraph',
    description:
      'Computational biology and machine learning research focused initially on breast cancer data, integrating clinical and miRNA datasets for predictive modeling and biological relationship discovery.',
    tech: ['Python', 'Machine Learning', 'TCGA', 'Bioinformatics'],
    github: 'https://github.com/ivanss-git/CancerGraph.git',
    live: null,
  },
  {
    title: 'LotStack',
    description:
      'A vehicle auction analysis platform for evaluating listings, estimating costs, comparing market value, and supporting better purchase decisions.',
    tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
    github: 'https://github.com/ivanss-git/LotStack-project.git',
    live: 'https://lotstack.onrender.com',
  },
]

const upcoming = [
  {
    name: 'SAS Hackathon — Student Track',
    date: 'October 2026',
    detail: 'Predictive modeling, credit risk, portfolio strategy, and responsible lending.',
  },
  {
    name: 'HackUTA',
    date: 'TBD',
    detail: 'Upcoming hackathon at UT Arlington.',
  },
  {
    name: 'MLH Data Week',
    date: 'Upcoming',
    detail: 'Machine learning and data-focused MLH event.',
  },
  {
    name: 'WWEHack 2027',
    date: '2027',
    detail: 'Upcoming Major League Hacking event.',
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
          <a href="#now">Now</a>
          <a href="#work">Work</a>
          <a href="#interests">Interests</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main id="top">

        {/* HERO */}
        <section className="hero">
          <p className="terminal-line">&gt; whoami</p>

          <h1>Ivan Ibarra</h1>

          <h2>
            Computer Science student, developer,
            and undergraduate researcher.
          </h2>

          <p className="hero-text">
            I'm interested in software engineering, artificial intelligence,
            algorithms, and computational biology — especially using computing
            to work on problems that have meaningful real-world impact.
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

          <p className="status">
            <span>&gt;</span> currently exploring:
            AI × computational biology
            <span className="cursor">_</span>
          </p>
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
                I'm a Computer Science student at UT Arlington interested
                in understanding how software, algorithms, and intelligent
                systems can be used to solve difficult real-world problems.
              </p>

              <p>
                My path into computer science wasn't completely linear.
                I spent several years working full-time before returning
                to school, an experience that shaped how I approach
                leadership, learning, and problem solving.
              </p>

              <p>
                I'm currently developing software, participating in
                undergraduate research, and exploring machine learning
                applications in computational biology.
              </p>
            </div>
          </div>
        </section>


        {/* NOW */}
        <section id="now" className="section">
          <p className="section-label">&gt; now</p>

          <h2>What I'm doing now</h2>

          <div className="cards">

            <article className="card">
              <p className="card-number">01</p>
              <h3>Research</h3>
              <p>
                Exploring computational biology and machine learning
                using breast cancer genomic and clinical data.
              </p>
            </article>

            <article className="card">
              <p className="card-number">02</p>
              <h3>Building</h3>
              <p>
                Developing CancerGraph while continuing to improve
                LotStack and experiment with new software ideas.
              </p>
            </article>

            <article className="card">
              <p className="card-number">03</p>
              <h3>Learning</h3>
              <p>
                Algorithms, theory of computation, probability,
                software engineering, ML, and research methods.
              </p>
            </article>

          </div>


          <div className="upcoming">
            <p className="section-label">&gt; upcoming_events</p>

            {upcoming.map((event) => (
              <div className="event" key={event.name}>
                <div>
                  <h3>{event.name}</h3>
                  <p>{event.detail}</p>
                </div>

                <span>{event.date}</span>
              </div>
            ))}
          </div>

        </section>


        {/* PROJECTS */}
        <section id="work" className="section">
          <p className="section-label">&gt; selected_work</p>

          <h2>Things I've built</h2>

          <div className="projects">

            {projects.map((project, index) => (
              <article className="project" key={project.title}>

                <div className="project-heading">
                  <span>0{index + 1}</span>
                  <h3>{project.title}</h3>
                </div>

                <p>{project.description}</p>

                <div className="tags">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
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


        {/* INTERESTS */}
        <section id="interests" className="section">
          <p className="section-label">&gt; interests</p>

          <h2>Where I'm headed</h2>

          <div className="interest-grid">
            <span>Artificial Intelligence</span>
            <span>Machine Learning</span>
            <span>Computational Biology</span>
            <span>Cancer Research</span>
            <span>Software Engineering</span>
            <span>Algorithms</span>
          </div>

          <p className="future-text">
            Long term, I want to work at the intersection of software,
            artificial intelligence, and scientific research — particularly
            on technology capable of making a meaningful impact in healthcare,
            biology, and other difficult problems.
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

            <a href="mailto:Ivan.ibarracs@gmail.com">
              Email
            </a>

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
            UTA: iai9712@mavs.uta.edu
          </p>

        </section>

      </main>


      <footer>
        <span>&gt; whoami</span>
        <span>Ivan Ibarra © 2026</span>
      </footer>

    </div>
  )
}

export default App