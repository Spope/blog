/* ── ToC scrollspy ── */
(function () {
  var toc = document.querySelector('.post-toc');
  if (!toc) return;

  var headings = Array.from(document.querySelectorAll('.prose h1[id], .prose h2[id], .prose h3[id], .prose h4[id]'));
  if (!headings.length) return;

  var links = Array.from(toc.querySelectorAll('a[href^="#"]'));

  /* sticky header height + a little breathing room */
  var OFFSET = 100;

  function update() {
    var scrollY = window.scrollY + OFFSET;
    var active = headings[0];
    for (var i = 0; i < headings.length; i++) {
      if (headings[i].offsetTop <= scrollY) active = headings[i];
    }
    links.forEach(function (a) {
      a.classList.toggle('toc-active', a.getAttribute('href') === '#' + active.id);
    });
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();

/* ── Homepage archive hover ── */
(function () {
  var list = document.querySelector('.archive-list');
  if (!list) return;

  var rows = Array.from(list.querySelectorAll('.archive-row'));
  var images = Array.from(document.querySelectorAll('.preview-img'));
  var placeholder = document.querySelector('.preview-placeholder');
  var caption = document.querySelector('.preview-caption');

  function activate(idx, dimOthers) {
    images.forEach(function (img) {
      img.classList.toggle('active', parseInt(img.dataset.idx, 10) === idx);
    });

    rows.forEach(function (row) {
      row.style.opacity = (dimOthers && parseInt(row.dataset.idx, 10) !== idx) ? '0.3' : '';
    });

    if (placeholder) placeholder.classList.add('hidden');

    if (caption) {
      var activeImg = images.find(function (img) { return parseInt(img.dataset.idx, 10) === idx; });
      caption.textContent = activeImg ? activeImg.dataset.caption : '';
    }
  }

  /* Show first post by default, no dimming */
  activate(0, false);

  rows.forEach(function (row) {
    row.addEventListener('mouseenter', function () {
      activate(parseInt(row.dataset.idx, 10), true);
    });
  });

  list.addEventListener('mouseleave', function () { activate(0, false); });
})();

/* ── Lightbox ── */
(function () {
  var lb = document.getElementById('lightbox');
  if (!lb) return;

  var wrap = lb.querySelector('.lightbox-media-wrap');
  var btnClose = lb.querySelector('.lightbox-close');
  var btnPrev = lb.querySelector('.lightbox-prev');
  var btnNext = lb.querySelector('.lightbox-next');
  var lbCaption = lb.querySelector('.lightbox-caption');
  var lbCounter = lb.querySelector('.lightbox-counter');

  var items = [];
  var idx = 0;

  function openAt(i) {
    idx = i;
    render();
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
    wrap.innerHTML = '';
  }

  function step(d) {
    if (!items.length) return;
    idx = (idx + d + items.length) % items.length;
    render();
  }

  function render() {
    wrap.innerHTML = '';
    var item = items[idx];
    if (!item) return;

    var el;
    if (item.type === 'video') {
      el = document.createElement('video');
      el.controls = true;
      el.autoplay = true;
      var src = document.createElement('source');
      src.src = item.src;
      src.type = 'video/mp4';
      el.appendChild(src);
    } else {
      el = document.createElement('img');
      el.src = item.src;
      el.alt = item.alt;
    }
    wrap.appendChild(el);

    if (lbCaption) lbCaption.textContent = item.alt || '';

    var multiItem = items.length > 1;
    btnPrev.style.display = multiItem ? '' : 'none';
    btnNext.style.display = multiItem ? '' : 'none';
    lbCounter.textContent = multiItem
      ? String(idx + 1).padStart(2, '0') + ' / ' + String(items.length).padStart(2, '0')
      : '';
  }

  lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
  btnClose.addEventListener('click', close);
  btnPrev.addEventListener('click', function (e) { e.stopPropagation(); step(-1); });
  btnNext.addEventListener('click', function (e) { e.stopPropagation(); step(1); });

  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
  });

  var touchStartX = 0;
  lb.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });
  lb.addEventListener('touchend', function (e) {
    var dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) < 50) return;
    step(dx < 0 ? 1 : -1);
  }, { passive: true });

  /* Collect all post media in DOM order into a single flat list */
  var prose = document.querySelector('.prose');
  if (!prose) return;

  Array.from(prose.querySelectorAll('img, .tile[data-src]')).forEach(function (el) {
    var isTile = el.classList.contains('tile');

    /* skip <img> elements that live inside a tile (already covered by the tile entry) */
    if (!isTile && el.closest('.tile')) return;

    var item = isTile
      ? {
          src:  el.dataset.src,
          type: el.dataset.type || 'image',
          alt:  el.dataset.alt || (el.querySelector('img') ? el.querySelector('img').alt : '') || '',
        }
      : {
          src:  el.getAttribute('data-fullsrc') || el.src,
          type: 'image',
          alt:  el.alt || '',
        };

    var itemIdx = items.length;
    items.push(item);

    el.style.cursor = 'zoom-in';
    el.addEventListener('click', function () { openAt(itemIdx); });
  });
})();
