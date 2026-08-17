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

const ensurePortfolioProjectStyles = () => {
  if (document.querySelector('link[href="portfolio-projects.css"]')) return;

  const projectStyles = document.createElement('link');
  projectStyles.rel = 'stylesheet';
  projectStyles.href = 'portfolio-projects.css';
  document.head.appendChild(projectStyles);
};

const prependProjectLink = (projectCards, title, href, label) => {
  const card = projectCards.find((projectCard) => projectCard.querySelector('h3')?.textContent.trim() === title);
  if (!card) return;

  const actions = card.querySelector('.project-actions');
  if (!actions || actions.querySelector(`a[href="${href}"]`)) return;

  const link = document.createElement('a');
  link.href = href;
  link.append(`${label} `);

  const arrow = document.createElement('span');
  arrow.setAttribute('aria-hidden', 'true');
  arrow.textContent = '↗';
  link.appendChild(arrow);

  actions.prepend(link);
};

const addNhChevyKioskCard = () => {
  const projectGrid = document.querySelector('#projects .project-grid');
  if (!projectGrid || projectGrid.querySelector('[data-project="nh-chevy-kiosk"]')) return;

  const card = document.createElement('article');
  card.className = 'project-card project-card-featured reveal';
  card.dataset.project = 'nh-chevy-kiosk';
  card.innerHTML = `
    <div class="project-topline">
      <span class="project-index">04</span>
      <span class="project-status">Automotive AI</span>
    </div>

    <p class="project-domain">Automotive AI + Showroom Systems</p>
    <h3>NH Chevy Showroom Kiosk</h3>
    <p>
      An in-store touchscreen platform where a tool-using AI assistant works against structured dealership
      inventory, calculations, customer workflows, and staff handoffs rather than treating the showroom like
      another website chat surface.
    </p>

    <div class="tag-list" aria-label="NH Chevy Showroom Kiosk technologies">
      <span>React</span>
      <span>FastAPI</span>
      <span>Tool-Using AI</span>
      <span>Redis</span>
      <span>PostgreSQL</span>
    </div>

    <div class="project-actions">
      <a href="https://github.com/mpalmer79/nh-chevy-showroom-kiosk/blob/main/ARCHITECTURE.md" target="_blank" rel="noreferrer">
        Architecture <span aria-hidden="true">↗</span>
      </a>
      <a href="https://github.com/mpalmer79/nh-chevy-showroom-kiosk" target="_blank" rel="noreferrer">
        Source code <span aria-hidden="true">↗</span>
      </a>
    </div>
  `;

  projectGrid.appendChild(card);
};

const projectArchive = [
  {
    name: 'Project Boundary',
    domain: 'Autonomy Safety + Verification',
    description: 'Deterministic rover safety orchestration with separated motion authority, replayable evidence, scenario verification, traceability, and a ROS 2 / Gazebo maturity path.',
    links: [
      ['Live', 'https://projectboundary.vercel.app/'],
      ['Source', 'https://github.com/mpalmer79/rover-safety-platform']
    ]
  },
  {
    name: 'DriftGuard',
    domain: 'Fault-Tolerant Control Systems',
    description: 'Triple-redundant controller simulation with majority voting, fault detection, deterministic replay, safe-mode escalation, formal invariants, and observability.',
    links: [['Source', 'https://github.com/mpalmer79/DriftGuard']]
  },
  {
    name: 'AgentForge',
    domain: 'AI Agent Infrastructure',
    description: 'TypeScript framework for provider-agnostic agents with typed tools, middleware, streaming, circuit breakers, failover, token controls, and observability.',
    links: [
      ['Docs', 'https://mpalmer79.github.io/agentforge/'],
      ['Source', 'https://github.com/mpalmer79/agentforge']
    ]
  },
  {
    name: 'VeriFlow',
    domain: 'Compliance Workflow + Evidence',
    description: 'Controlled workflow platform with rule-driven risk, stage gates, real evidence hashing, short-lived signed access, and a tamper-evident audit chain.',
    links: [
      ['Live', 'https://veriflow.up.railway.app/'],
      ['Source', 'https://github.com/mpalmer79/VeriFlow']
    ]
  },
  {
    name: 'SignalFlow',
    domain: 'Governed AI + Revenue Operations',
    description: 'AI-native revenue operating system for signal capture, opportunity scoring, governed recommendations, human review, provider safety, and outcome attribution.',
    links: [
      ['Live', 'https://signalflow-revenue.vercel.app'],
      ['Source', 'https://github.com/mpalmer79/SignalFlow']
    ]
  },
  {
    name: 'Civil Engineer AI',
    domain: 'Engineering Workflow',
    description: 'Applied engineering interface exploring structured analysis, technical decision support, and modern AI-assisted engineering workflows.',
    links: [['Source', 'https://github.com/mpalmer79/civil-engineer']]
  },
  {
    name: 'ShipDay',
    domain: 'Full-Stack Software Engineering',
    description: 'A larger full-stack application that broadens the portfolio beyond automotive and AI-specific systems and demonstrates end-to-end application delivery.',
    links: [['Source', 'https://github.com/mpalmer79/shipday']]
  },
  {
    name: 'PharmaRep Trainer',
    domain: 'AI Training + Regulated Sales',
    description: 'Explainable adaptive sales-training platform with real-time coaching, progression logic, manager oversight, compliance-oriented outputs, and audit-ready artifacts.',
    links: [['Source', 'https://github.com/mpalmer79/pharma-rep-trainer']]
  }
];

const renderProjectArchive = (projectSection, projectGrid) => {
  if (projectSection.querySelector('.project-archive')) return;

  const archive = document.createElement('div');
  archive.className = 'project-archive reveal';

  const rows = projectArchive.map((project) => {
    const links = project.links.map(([label, href]) => `
      <a href="${href}" target="_blank" rel="noreferrer">${label} <span aria-hidden="true">↗</span></a>
    `).join('');

    return `
      <article class="project-archive-row">
        <div class="project-archive-name">${project.name}</div>
        <div class="project-archive-domain">${project.domain}</div>
        <p class="project-archive-description">${project.description}</p>
        <div class="project-archive-links">${links}</div>
      </article>
    `;
  }).join('');

  archive.innerHTML = `
    <div class="project-archive-heading">
      <div>
        <p class="eyebrow">Additional systems</p>
        <h3>Selected project archive</h3>
      </div>
      <p>
        Flagship projects get the deepest engineering treatment above. This archive shows additional
        systems that demonstrate breadth across autonomy, AI infrastructure, compliance workflows,
        engineering tools, and full-stack product development.
      </p>
    </div>

    <div class="project-archive-list">${rows}</div>

    <div class="project-archive-footer">
      <a href="https://github.com/mpalmer79?tab=repositories" target="_blank" rel="noreferrer">
        View all public repositories <span aria-hidden="true">↗</span>
      </a>
    </div>
  `;

  projectGrid.insertAdjacentElement('afterend', archive);
};

const curateProjectPortfolio = () => {
  const projectSection = document.getElementById('projects');
  const projectGrid = projectSection?.querySelector('.project-grid');
  if (!projectSection || !projectGrid) return;

  ensurePortfolioProjectStyles();
  addNhChevyKioskCard();

  let projectCards = Array.from(projectGrid.querySelectorAll('.project-card'));

  prependProjectLink(projectCards, 'ARPI', 'engineering/arpi.html', 'Engineering brief');
  prependProjectLink(projectCards, 'Vehicle Thermal Management Simulation', 'engineering/vtms.html', 'Engineering brief');
  prependProjectLink(projectCards, 'LedgerLens', 'engineering/ledgerlens.html', 'Engineering brief');
  prependProjectLink(projectCards, 'NH Chevy Showroom Kiosk', 'engineering/nh-chevy-kiosk.html', 'Engineering brief');

  const flagshipTitles = new Set([
    'ARPI',
    'Vehicle Thermal Management Simulation',
    'LedgerLens',
    'NH Chevy Showroom Kiosk'
  ]);

  projectCards.forEach((card) => {
    const title = card.querySelector('h3')?.textContent.trim();
    if (title && !flagshipTitles.has(title)) card.remove();
  });

  const heading = projectSection.querySelector('.split-heading');
  const eyebrow = heading?.querySelector('.eyebrow');
  const title = heading?.querySelector('h2');

  if (eyebrow) eyebrow.textContent = 'Flagship engineering work';
  if (title) title.textContent = 'Systems where the engineering is inspectable.';

  renderProjectArchive(projectSection, projectGrid);
};

curateProjectPortfolio();

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
