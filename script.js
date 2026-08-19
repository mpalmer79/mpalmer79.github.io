(() => {
  const loadScript = (src) => new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Unable to load ${src}`));
    document.head.appendChild(script);
  });

  const configureProjectCovers = () => {
    const ledgerLensCard = Array.from(
      document.querySelectorAll('#projects .project-card')
    ).find((card) => card.querySelector('h3')?.textContent.trim() === 'LedgerLens');

    if (!ledgerLensCard) return;

    ledgerLensCard.classList.add('project-card-featured');
    ledgerLensCard.style.setProperty(
      '--project-cover-image',
      'url("https://raw.githubusercontent.com/mpalmer79/LedgerLens/main/frontend/public/og-ledgerlens.png")'
    );
    ledgerLensCard.style.setProperty('--project-cover-opacity', '0.54');
    ledgerLensCard.style.setProperty('--project-cover-position', 'center top');
  };

  const configureProjectTitleLinks = () => {
    const featuredProjects = new Set([
      'ARPI',
      'Vehicle Thermal Management Simulation',
      'LedgerLens',
      'NH Chevy Showroom Kiosk'
    ]);

    document.querySelectorAll('#projects .project-card').forEach((card) => {
      const title = card.querySelector('h3');
      const projectName = title?.textContent.trim();

      if (!title || !featuredProjects.has(projectName) || title.querySelector('a')) return;

      const liveLink = Array.from(card.querySelectorAll('.project-actions a')).find((link) => {
        const label = link.textContent.trim();
        return /live application|guided demo/i.test(label);
      });

      if (!liveLink) return;

      const titleLink = document.createElement('a');
      titleLink.href = liveLink.href;
      titleLink.target = '_blank';
      titleLink.rel = 'noreferrer';
      titleLink.textContent = projectName;
      titleLink.setAttribute('aria-label', `Open ${projectName} live site in a new window`);
      titleLink.setAttribute('title', `Open ${projectName} live site`);
      titleLink.style.color = 'inherit';
      titleLink.style.textDecoration = 'none';
      titleLink.style.cursor = 'pointer';

      title.replaceChildren(titleLink);
    });
  };

  const configureHomeRefresh = () => {
    const brand = document.querySelector('.brand');
    if (!brand) return;

    brand.setAttribute('href', '/');
    brand.setAttribute('aria-label', 'Refresh home page');

    const refreshHome = (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();

      const homeUrl = `${window.location.origin}/`;
      window.history.replaceState(null, '', homeUrl);
      window.location.reload();
    };

    brand.addEventListener('click', refreshHome, true);
  };

  configureProjectCovers();
  configureProjectTitleLinks();
  configureHomeRefresh();

  loadScript('/script-core.js')
    .then(() => {
      if (!document.getElementById('education')) return null;
      return loadScript('/certifications.js');
    })
    .catch((error) => console.error('Portfolio script loading failed:', error));
})();
