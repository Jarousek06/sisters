/* Sister's - drobna interaktivita webu */
(function () {
  'use strict';

  /* ---------- mobilni menu ---------- */
  var nav = document.getElementById('nav');
  var burger = document.getElementById('burger');

  if (nav && burger) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    nav.querySelectorAll('.mobile a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- otevreno / zavreno + zvyrazneni dnesniho dne ---------- */
  var OPEN_MIN = 5 * 60 + 30;   /* 5:30 */
  var CLOSE_MIN = 15 * 60;      /* 15:00 */
  var WORKDAYS = [1, 2, 3, 4, 5];

  var now = new Date();
  var day = now.getDay();
  var minutes = now.getHours() * 60 + now.getMinutes();
  var isWorkday = WORKDAYS.indexOf(day) !== -1;
  var isOpen = isWorkday && minutes >= OPEN_MIN && minutes < CLOSE_MIN;

  var statusText = document.getElementById('statusText');
  var statusPill = document.getElementById('statusPill');

  if (statusText && statusPill) {
    var dot = statusPill.querySelector('.dot');

    if (isOpen) {
      statusText.textContent = 'Teď otevřeno · zavíráme v 15:00';
    } else if (isWorkday && minutes < OPEN_MIN) {
      statusText.textContent = 'Otevíráme dnes v 5:30';
      if (dot) dot.classList.add('dot--closed');
    } else {
      statusText.textContent = 'Zavřeno · otevíráme v 5:30';
      if (dot) dot.classList.add('dot--closed');
    }
  }

  var todayRow = document.querySelector('#hours tr[data-day="' + day + '"]');
  if (todayRow) todayRow.classList.add('today');

  /* ---------- rok v paticce ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- odhalovani sekci pri scrollu ---------- */
  var reveals = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  reveals.forEach(function (el) { io.observe(el); });
})();
