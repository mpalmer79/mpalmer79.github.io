const renderEducationV2 = () => {
  const educationSection = document.getElementById('education');

  if (!educationSection) return;

  if (!document.querySelector('link[href="education.css"]')) {
    const educationStyles = document.createElement('link');
    educationStyles.rel = 'stylesheet';
    educationStyles.href = 'education.css';
    document.head.appendChild(educationStyles);
  }

  educationSection.innerHTML = `
    <div class="section-heading reveal">
      <p class="eyebrow">Education</p>
      <h2>Building the foundation behind the systems I create.</h2>
      <p class="education-intro">
        My Computer Science coursework at Southern New Hampshire University has progressed from
        programming fundamentals into algorithms, databases, operating platforms, software design,
        testing, mathematics, and applied technical problem solving.
      </p>
    </div>

    <div class="education-v2">
      <div class="education-overview-grid">
        <article class="education-panel degree-path-card reveal">
          <p class="mini-label">Southern New Hampshire University</p>
          <h3>Computer Science degree path</h3>
          <p>
            I am building my academic foundation in stages while continuing to apply what I learn
            through portfolio software, engineering projects, and technical coursework.
          </p>

          <div class="degree-path">
            <div class="degree-step">
              <div class="degree-step-topline">
                <strong>Associate of Science in Computer Science</strong>
                <span class="education-status">Current pathway</span>
              </div>
              <span>Anticipated conferral: January 2027</span>
            </div>

            <div class="degree-step">
              <div class="degree-step-topline">
                <strong>Bachelor of Science in Computer Science</strong>
                <span class="education-status">Continuing</span>
              </div>
              <span>Continuing academic pathway after the associate degree</span>
            </div>
          </div>
        </article>

        <article class="education-panel academic-growth-card reveal">
          <p class="mini-label">Academic growth</p>
          <h3>From learning syntax to designing systems.</h3>
          <p>
            My coursework has steadily shifted from writing individual programs toward thinking
            about complete systems and the tradeoffs behind them.
          </p>
          <blockquote>
            I increasingly approach assignments as engineering problems: define the requirement,
            choose the right data structures and architecture, protect data integrity, test the
            behavior, document the decisions, and consider the person who ultimately has to use the system.
          </blockquote>
        </article>
      </div>

      <div class="learning-section">
        <div class="education-subheading reveal">
          <p class="mini-label">What I have learned</p>
          <h3>Core areas of study</h3>
          <p>
            These themes connect the individual courses into the technical foundation I am building
            across software development and applied computer science.
          </p>
        </div>

        <div class="learning-grid">
          <article class="learning-card reveal">
            <span class="learning-number">01</span>
            <h4>Software development</h4>
            <p>
              Programming fundamentals, object-oriented development, application design,
              software lifecycle practices, system analysis, and software quality.
            </p>
          </article>

          <article class="learning-card reveal">
            <span class="learning-number">02</span>
            <h4>Algorithms and computational thinking</h4>
            <p>
              Data structures, algorithm analysis, discrete mathematics, structured problem solving,
              and evaluating tradeoffs between different approaches.
            </p>
          </article>

          <article class="learning-card reveal">
            <span class="learning-number">03</span>
            <h4>Data and databases</h4>
            <p>
              Structured database environments, relational concepts, data organization,
              querying, and thinking about data as part of a larger application system.
            </p>
          </article>

          <article class="learning-card reveal">
            <span class="learning-number">04</span>
            <h4>Systems and platforms</h4>
            <p>
              Operating platforms, system boundaries, platform-aware design, architecture,
              and understanding how software interacts with the environment around it.
            </p>
          </article>

          <article class="learning-card reveal">
            <span class="learning-number">05</span>
            <h4>Math, science and emerging technology</h4>
            <p>
              Calculus, applied statistics, discrete mathematics, AI literacy, physics,
              scientific reasoning, and computer graphics within the broader degree plan.
            </p>
          </article>

          <article class="learning-card reveal">
            <span class="learning-number">06</span>
            <h4>Research and technical communication</h4>
            <p>
              Research, written communication, evidence-based argument, and presenting complex
              ideas clearly for technical and nontechnical audiences.
            </p>
          </article>
        </div>
      </div>

      <div class="coursework-section">
        <div class="education-subheading reveal">
          <p class="mini-label">Selected technical coursework</p>
          <h3>Degree-plan snapshot</h3>
          <p>
            Selected courses from my July 2026 academic evaluation. Status labels reflect that
            evaluation and will be updated as the degree progresses.
          </p>
        </div>

        <div class="education-panel coursework-snapshot reveal">
          <div class="course-status-grid">
            <div class="course-status-column">
              <div class="course-status-title">
                <span class="course-status-dot" aria-hidden="true"></span>
                Completed in audit
              </div>
              <div class="course-list">
                <div class="course-item"><strong>CS 300</strong><span>Data Structures and Algorithms: Analysis and Design</span></div>
                <div class="course-item"><strong>CS 250</strong><span>Software Development Lifecycle</span></div>
                <div class="course-item"><strong>CS 210</strong><span>Programming Languages</span></div>
                <div class="course-item"><strong>IT 145</strong><span>Foundations in Application Development</span></div>
                <div class="course-item"><strong>IT 215</strong><span>Introduction to AI Literacy</span></div>
                <div class="course-item"><strong>MAT 230</strong><span>Discrete Mathematics</span></div>
              </div>
            </div>

            <div class="course-status-column">
              <div class="course-status-title">
                <span class="course-status-dot" aria-hidden="true"></span>
                In progress in July 2026 audit
              </div>
              <div class="course-list">
                <div class="course-item"><strong>DAD 220</strong><span>Introduction to Structured Database Environments</span></div>
                <div class="course-item"><strong>CS 230</strong><span>Operating Platforms</span></div>
              </div>
            </div>

            <div class="course-status-column">
              <div class="course-status-title">
                <span class="course-status-dot" aria-hidden="true"></span>
                Planned in July 2026 audit
              </div>
              <div class="course-list">
                <div class="course-item"><strong>CS 255</strong><span>System Analysis and Design</span></div>
                <div class="course-item"><strong>PHY 150</strong><span>Introduction to Physics: Mechanics</span></div>
                <div class="course-item"><strong>CS 320</strong><span>Software Test, Automation and Quality Assurance</span></div>
                <div class="course-item"><strong>CS 330</strong><span>Computer Graphics and Visualization</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="education-bottom-grid">
        <article class="education-panel recognition-card reveal">
          <p class="mini-label">Academic recognition</p>
          <h3>Achievements and recognition</h3>
          <p>
            This area will grow as academic milestones are earned and formally recognized.
          </p>

          <div class="recognition-list">
            <div class="recognition-item">
              <strong>President's List</strong>
              <span>Southern New Hampshire University</span>
            </div>
            <div class="recognition-item">
              <strong>National Society of Leadership and Success</strong>
              <span>Nomination</span>
            </div>
          </div>

          <p class="recognition-note">Additional honors and academic recognition will be added as earned.</p>
        </article>

        <article class="education-panel academic-growth-card reveal">
          <p class="mini-label">Applied learning</p>
          <h3>Coursework becomes proof of work.</h3>
          <p>
            I use academic projects to strengthen the same habits that shape my portfolio work:
            requirements, architecture, implementation, testing, documentation, validation,
            and continuous improvement.
          </p>
          <a class="text-link" href="https://github.com/mpalmer79" target="_blank" rel="noreferrer">
            Review my GitHub <span aria-hidden="true">↗</span>
          </a>
        </article>
      </div>
    </div>
  `;
};

renderEducationV2();

const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.querySelector('.primary-nav');
const navLinks = document.querySelectorAll('.primary-nav a');
const yearTarget = document.getElementById('current-year');
const revealItems = document.querySelectorAll('.reveal');

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 16);
};

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

if (navToggle && primaryNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    primaryNav.classList.toggle('is-open', !isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open navigation');
      primaryNav.classList.remove('is-open');
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open navigation');
      primaryNav.classList.remove('is-open');
    }
  });
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver(
    (entries, revealObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  revealItems.forEach((item) => observer.observe(item));
}
