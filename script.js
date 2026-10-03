/* ============================================================
   Gurvinder Singh — Portfolio
   Vanilla JS · Lenis + GSAP/ScrollTrigger (progressive enhancement)
   ============================================================ */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasGSAP = typeof window.gsap !== 'undefined';
  var hasST = hasGSAP && typeof window.ScrollTrigger !== 'undefined';
  var hasLenis = typeof window.Lenis !== 'undefined';

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Mobile menu ---------- */
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  function closeMenu() {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
    document.body.style.overflow = '';
  }
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open', !open);
      document.body.style.overflow = !open ? 'hidden' : '';
    });
    nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });
  }

  /* ---------- Header scrolled state + scroll progress ---------- */
  var header = document.querySelector('.site-header');
  var progress = document.querySelector('.scroll-progress span');
  function onScroll(y) {
    if (header) header.classList.toggle('scrolled', y > 40);
    if (progress) {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
    }
    animateParticles(y);
  }

  /* ---------- Floating particles scroll parallax ---------- */
  var particles = document.querySelectorAll('.particle');
  var particleSpeeds = [0.03, -0.02, 0.04, -0.025, 0.035, -0.015, 0.02, -0.03];
  var particleXSpeeds = [0.01, -0.008, 0.012, -0.006, 0.009, -0.011, 0.007, -0.005];
  function animateParticles(scrollY) {
    if (reduceMotion) return;
    particles.forEach(function (p, i) {
      var speed = particleSpeeds[i] || 0.02;
      var xSpeed = particleXSpeeds[i] || 0.005;
      var yOffset = scrollY * speed;
      var xOffset = Math.sin(scrollY * 0.002 + i) * (scrollY * xSpeed * 0.1);
      p.style.transform = 'translate(' + xOffset.toFixed(1) + 'px, ' + yOffset.toFixed(1) + 'px)';
    });
  }

  /* ---------- Kinetic headline split ---------- */
  document.querySelectorAll('.kinetic').forEach(function (el) {
    var words = el.textContent.trim().split(/\s+/);
    el.innerHTML = words.map(function (w) {
      return '<span class="word"><span>' + w + '</span></span>';
    }).join(' ');
  });

  /* ---------- Lenis smooth scroll ---------- */
  var lenis = null;
  if (hasLenis && !reduceMotion) {
    lenis = new window.Lenis({ duration: 1.1, smoothWheel: true, lerp: 0.1 });
    document.documentElement.classList.add('lenis');
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    lenis.on('scroll', function (e) { onScroll(e.scroll); });
    if (hasST) { lenis.on('scroll', window.ScrollTrigger.update); }
  } else {
    window.addEventListener('scroll', function () { onScroll(window.scrollY); }, { passive: true });
  }
  onScroll(window.scrollY || 0);

  /* ---------- Smooth anchor navigation ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = link.getAttribute('href');
      if (id === '#' || id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var top = target.getBoundingClientRect().top + (window.scrollY || 0) - 70;
      if (lenis) lenis.scrollTo(top, { duration: 1.2 });
      else window.scrollTo({ top: top, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  });

  /* ---------- Image scroll reveal: grayscale→color + zoom-in ---------- */
  var scrollImages = document.querySelectorAll('.project-visual, .research-visual, .research-card');

  function setupImageReveals() {
    if (reduceMotion) {
      // Instantly reveal all images for reduced motion users
      scrollImages.forEach(function (el) { el.classList.add('img-revealed'); });
      return;
    }

    if (hasST) {
      // Use GSAP ScrollTrigger for smooth, precise triggering
      scrollImages.forEach(function (el) {
        window.ScrollTrigger.create({
          trigger: el,
          start: 'top 82%',
          once: true,
          onEnter: function () {
            el.classList.add('img-revealed');
          }
        });
      });
    } else if ('IntersectionObserver' in window) {
      // Fallback: IntersectionObserver
      var imgObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('img-revealed');
            imgObs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2, rootMargin: '0px 0px -10% 0px' });
      scrollImages.forEach(function (el) { imgObs.observe(el); });
    } else {
      // No observer support — reveal all
      scrollImages.forEach(function (el) { el.classList.add('img-revealed'); });
    }
  }

  /* ---------- Reveals (GSAP if available, else IntersectionObserver) ---------- */
  var reveals = document.querySelectorAll('[data-reveal]');
  var kinetics = document.querySelectorAll('.kinetic');
  function showAll() {
    reveals.forEach(function (el) { el.classList.add('in'); });
    kinetics.forEach(function (el) { el.classList.add('in'); });
  }

  if (reduceMotion) {
    showAll();
  } else if (hasST) {
    window.gsap.registerPlugin(window.ScrollTrigger);
    reveals.forEach(function (el) {
      window.ScrollTrigger.create({
        trigger: el, start: 'top 88%', once: true,
        onEnter: function () { el.classList.add('in'); }
      });
    });
    kinetics.forEach(function (el) {
      window.ScrollTrigger.create({
        trigger: el, start: 'top 85%', once: true,
        onEnter: function () { el.classList.add('in'); }
      });
    });

    /* Parallax */
    window.gsap.utils.toArray('[data-parallax]').forEach(function (el) {
      var amt = parseFloat(el.getAttribute('data-parallax')) || 0.1;
      window.gsap.to(el, {
        yPercent: amt * 100, ease: 'none',
        scrollTrigger: { trigger: el.closest('section') || el, start: 'top bottom', end: 'bottom top', scrub: true }
      });
    });

    /* Stat counters */
    document.querySelectorAll('.stat-num[data-count]').forEach(function (el) {
      if (el.getAttribute('data-plain') === 'true') return;
      var end = parseInt(el.getAttribute('data-count'), 10) || 0;
      var obj = { v: 0 };
      window.ScrollTrigger.create({
        trigger: el, start: 'top 90%', once: true,
        onEnter: function () {
          window.gsap.to(obj, { v: end, duration: 1.4, ease: 'power2.out',
            onUpdate: function () { el.textContent = Math.round(obj.v); } });
        }
      });
    });

    /* Active nav link */
    document.querySelectorAll('main section[id]').forEach(function (sec) {
      window.ScrollTrigger.create({
        trigger: sec, start: 'top 45%', end: 'bottom 45%',
        onToggle: function (self) {
          if (!self.isActive) return;
          document.querySelectorAll('.site-nav a').forEach(function (a) {
            a.classList.toggle('active', a.getAttribute('href') === '#' + sec.id);
          });
        }
      });
    });
  } else {
    /* Fallback: IntersectionObserver reveals, plain stats */
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
      }, { threshold: 0.15 });
      reveals.forEach(function (el) { io.observe(el); });
      kinetics.forEach(function (el) { io.observe(el); });
    } else { showAll(); }
    document.querySelectorAll('.stat-num[data-count]').forEach(function (el) { el.textContent = el.getAttribute('data-count'); });
  }

  /* Initialize image scroll reveals after GSAP setup */
  setupImageReveals();

})();
