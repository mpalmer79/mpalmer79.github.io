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
    <div class="section-heading reveal education-heading">
      <p class="eyebrow">Education</p>
      <h2>Building the foundation behind the systems I create.</h2>
      <p class="education-intro">
        My Computer Science coursework at Southern New Hampshire University has grown from
        programming fundamentals into system design, algorithms, data, testing, mathematics,
        and applied technical problem solving.
      </p>
    </div>

    <div class="education-v2">
      <article class="education-panel degree-growth-card reveal">
        <div class="degree-growth-header">
          <div>
            <p class="mini-label">Southern New Hampshire University</p>
            <h3>Computer Science degree path</h3>
          </div>
          <p class="degree-growth-summary">
            Coursework is increasingly focused on complete systems, engineering tradeoffs,
            and evidence-based technical decisions.
          </p>
        </div>

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

        <div class="growth-note">
          <span class="growth-note-label">Academic growth</span>
          <p>
            I now approach assignments as engineering problems: define the requirement, choose the
            right architecture and data structures, protect data integrity, test behavior, document
            decisions, and consider the person who ultimately uses the system.
          </p>
        </div>
      </article>

      <div class="learning-section">
        <div class="education-subheading reveal">
          <p class="mini-label">What I have learned</p>
          <h3>Core areas of study</h3>
          <p>
            Three connected areas summarize the technical foundation I am building across the degree.
          </p>
        </div>

        <div class="learning-grid learning-grid-compact">
          <article class="learning-card reveal">
            <span class="learning-number">01</span>
            <h4>Software, systems and architecture</h4>
            <p>
              Programming, object-oriented development, application design, software lifecycle practices,
              operating platforms, system analysis, testing, and software quality.
            </p>
          </article>

          <article class="learning-card reveal">
            <span class="learning-number">02</span>
            <h4>Algorithms, data and mathematics</h4>
            <p>
              Data structures, algorithm analysis, relational concepts, database organization,
              discrete mathematics, calculus, statistics, and structured problem solving.
            </p>
          </article>

          <article class="learning-card reveal">
            <span class="learning-number">03</span>
            <h4>AI, engineering and communication</h4>
            <p>
              AI literacy, physics, scientific reasoning, computer graphics, research,
              evidence-based writing, and communicating technical ideas clearly.
            </p>
          </article>
        </div>
      </div>

      <div class="coursework-section">
        <div class="education-subheading reveal">
          <p class="mini-label">Selected technical coursework</p>
          <h3>Degree-plan snapshot</h3>
          <p>
            Selected courses from my July 2026 academic evaluation. Status labels reflect that audit
            and will be updated as the degree progresses.
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

      <article class="education-panel recognition-card reveal">
        <div class="recognition-header">
          <div>
            <p class="mini-label">Academic recognition</p>
            <h3>Achievements and recognition</h3>
          </div>
          <p>Additional honors will be added as they are earned and formally recognized.</p>
        </div>

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
      </article>
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
