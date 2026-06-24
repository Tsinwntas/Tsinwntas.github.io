(function () {
  "use strict";

  const select = (el) => document.querySelector(el);

  /* Back to top */
  const btt = select('.back-to-top');
  if (btt) {
    const toggle = () => btt.classList.toggle('active', window.scrollY > 100);
    window.addEventListener('load', toggle);
    document.addEventListener('scroll', toggle);
    btt.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* Preloader */
  const preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => preloader.remove());
  }

  /* GLightbox — groups images by data-gallery attribute */
  window.addEventListener('load', () => {
    GLightbox({ selector: '.portfolio-lightbox' });
  });

  /* AOS */
  window.addEventListener('load', () => {
    AOS.init({ duration: 800, easing: 'ease-out-quad', once: true });
  });

})();
