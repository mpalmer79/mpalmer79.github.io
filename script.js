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

  const configureHomeRefresh = () => {
    const brandMark = document.querySelector('.brand-mark');
    if (!brandMark) return;

    brandMark.setAttribute('role', 'button');
    brandMark.setAttribute('tabindex', '0');
    brandMark.setAttribute('aria-label', 'Refresh home page');

    const refreshHome = (event) => {
      event.preventDefault();
      event.stopPropagation();

      const homeUrl = `${window.location.origin}/`;
      if (window.location.href === homeUrl) {
        window.location.reload();
        return;
      }

      window.location.assign(homeUrl);
    };

    brandMark.addEventListener('click', refreshHome);
    brandMark.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        refreshHome(event);
      }
    });
  };

  configureProjectCovers();
  configureHomeRefresh();

  loadScript('/script-core.js')
    .then(() => {
      if (!document.getElementById('education')) return null;
      return loadScript('/certifications.js');
    })
    .catch((error) => console.error('Portfolio script loading failed:', error));
})();
