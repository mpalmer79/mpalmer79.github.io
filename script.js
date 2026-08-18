(() => {
  const loadScript = (src) => new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Unable to load ${src}`));
    document.head.appendChild(script);
  });

  loadScript('/script-core.js')
    .then(() => {
      if (!document.getElementById('education')) return null;
      return loadScript('/certifications.js');
    })
    .catch((error) => console.error('Portfolio script loading failed:', error));
})();
