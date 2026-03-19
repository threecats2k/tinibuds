(function () {
  'use strict';

  var header = document.querySelector('.header');
  var menuBtn = document.querySelector('.menu-btn');
  var nav = document.querySelector('.nav');

  if (header) {
    function onScroll() {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      nav.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', nav.classList.contains('is-open'));
    });
  }
})();
