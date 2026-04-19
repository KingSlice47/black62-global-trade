/* Black62 Commodities — Static Site JS */
(function () {
  'use strict';

  // ---------- Year ----------
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Header scroll state ----------
  const header = document.getElementById('site-header');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 24) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ---------- Mobile menu ----------
  const toggle = document.querySelector('.menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      mobileNav.hidden = open;
    });
    mobileNav.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        mobileNav.hidden = true;
      })
    );
  }

  // ---------- Hero particles ----------
  const particles = document.querySelector('.hero-particles');
  if (particles) {
    const SVG = 'http://www.w3.org/2000/svg';
    for (let i = 0; i < 36; i++) {
      const cx = (i * 137) % 1000;
      const cy = (i * 211) % 1000;
      const r = (i % 3) + 1;
      const dur = 3 + (i % 5);
      const c = document.createElementNS(SVG, 'circle');
      c.setAttribute('cx', cx);
      c.setAttribute('cy', cy);
      c.setAttribute('r', r);
      c.setAttribute('opacity', '0.25');
      const anim = document.createElementNS(SVG, 'animate');
      anim.setAttribute('attributeName', 'opacity');
      anim.setAttribute('values', '0.05;0.55;0.05');
      anim.setAttribute('dur', dur + 's');
      anim.setAttribute('repeatCount', 'indefinite');
      c.appendChild(anim);
      particles.appendChild(c);
    }
  }

  // ---------- Reveal on scroll ----------
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  // ---------- Enquiry form ----------
  const form = document.getElementById('enquiry-form');
  const status = document.getElementById('form-status');
  const submitBtn = document.getElementById('submit-btn');

  if (form && status && submitBtn) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      status.className = 'form-status';
      status.textContent = '';

      // Native validation
      if (!form.checkValidity()) {
        status.classList.add('error');
        status.textContent = 'Please fill in all required fields.';
        form.reportValidity();
        return;
      }

      submitBtn.disabled = true;
      const originalLabel = submitBtn.textContent;
      submitBtn.textContent = 'Sending…';

      const data = Object.fromEntries(new FormData(form).entries());

      try {
        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
      } catch (err) {
        // Endpoint is a placeholder — fall through to success in static preview
      }

      status.classList.add('success');
      status.textContent = "Thank you — we'll be in touch within one business day.";
      form.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel;
    });
  }
})();
