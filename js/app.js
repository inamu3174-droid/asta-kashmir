// ASTA App — WhatsApp-first (no prices on site, no cart/checkout)
(function () {
  'use strict';

  let wishlist = JSON.parse(localStorage.getItem('asta_wishlist') || '[]');

  function saveWishlist() {
    localStorage.setItem('asta_wishlist', JSON.stringify(wishlist));
    updateWishlistUI();
  }

  function showToast(msg) {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2800);
  }

  function toggleWishlist(productId) {
    const idx = wishlist.indexOf(productId);
    if (idx > -1) {
      wishlist.splice(idx, 1);
      showToast('Removed from wishlist');
    } else {
      wishlist.push(productId);
      showToast('Added to wishlist');
    }
    saveWishlist();
  }

  function isWishlisted(id) {
    return wishlist.includes(id);
  }

  function updateWishlistUI() {
    document.querySelectorAll('.wishlist-count').forEach(el => {
      el.textContent = wishlist.length;
      el.classList.toggle('visible', wishlist.length > 0);
    });
  }

  function productCardHTML(p) {
    const weights = (p.variants || []).map(v => v.weight).join(' · ');
    return `
      <div class="product-card" data-id="${p.id}">
        <div class="product-image-wrap">
          <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x300?text=ASTA'">
          <div class="product-badges">
            ${p.bestseller ? '<span class="badge badge-gold">Bestseller</span>' : ''}
            ${p.newArrival ? '<span class="badge">New</span>' : ''}
          </div>
          <button class="wishlist-btn ${isWishlisted(p.id) ? 'active' : ''}" onclick="event.stopPropagation(); toggleWish('${p.id}')" aria-label="Wishlist">
            <svg viewBox="0 0 24 24" fill="${isWishlisted(p.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
        </div>
        <div class="product-info">
          <div class="product-category">${p.categoryLabel}</div>
          <h3 class="product-name">${p.name}</h3>
          <div class="product-rating">
            <span class="stars">${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5 - Math.floor(p.rating))}</span>
            <span>(${p.reviews})</span>
          </div>
          <p class="product-weight-hint" style="font-size:0.85rem;color:var(--text-muted);margin:0.4rem 0 0.8rem">${weights ? 'Available in ' + weights : ''}</p>
          <div class="product-actions">
            <a href="${waProductLink(p.name)}" target="_blank" rel="noopener" class="btn btn-primary btn-sm" onclick="event.stopPropagation()">Get Price on WhatsApp</a>
            <button class="btn btn-outline btn-sm" onclick="event.stopPropagation(); openProduct('${p.id}')">View</button>
          </div>
        </div>
      </div>
    `;
  }

  function initCoverflow() {
    const wrap = document.getElementById('coverflow-slides');
    if (!wrap || typeof Swiper === 'undefined') return;

    const featured = [
      getProductById('honey-white'),
      getProductById('saffron-kashmiri'),
      getProductById('kahwa-mist'),
      getProductById('walnuts'),
      getProductById('almonds'),
      getProductById('cashews'),
      getProductById('gift-mix'),
      getProductById('pistachios'),
    ].filter(Boolean);

    const slides = featured.length < 6 ? [...featured, ...featured] : featured;

    wrap.innerHTML = slides.map(p => `
      <div class="swiper-slide">
        <a href="#${p.category === 'dryfruits' ? 'dryfruits' : p.category}" onclick="event.preventDefault(); openProduct('${p.id}')">
          <div class="slide-img">
            <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='images/honey.jpg'">
          </div>
          <div class="slide-info">
            <div class="slide-cat">${p.categoryLabel || p.category}</div>
            <div class="slide-name">${p.name}</div>
          </div>
        </a>
      </div>
    `).join('');

    new Swiper('.asta-coverflow', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      loop: true,
      spaceBetween: 0,
      coverflowEffect: {
        rotate: 35,
        stretch: 0,
        depth: 120,
        modifier: 1,
        slideShadows: true,
      },
      autoplay: {
        delay: 2800,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: '.asta-coverflow .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.asta-coverflow .swiper-button-next',
        prevEl: '.asta-coverflow .swiper-button-prev',
      },
    });
  }

  function openProduct(id) {
    const p = getProductById(id);
    if (!p) return;
    const modal = document.getElementById('product-detail');
    if (!modal) return;
    let variantIdx = p.defaultVariant || 0;
    const renderPD = () => {
      const v = p.variants[variantIdx] || p.variants[0];
      modal.innerHTML = `
        <button class="pd-close" onclick="closeProduct()">×</button>
        <div class="pd-grid">
          <div class="pd-gallery">
            <img class="pd-main-img" src="${p.image}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/500x500?text=ASTA'">
          </div>
          <div class="pd-info">
            <div class="section-label">${p.categoryLabel}</div>
            <h1>${p.name}</h1>
            <div class="product-rating" style="margin:0.5rem 0">
              <span class="stars">${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5 - Math.floor(p.rating))}</span>
              <span>${p.rating} (${p.reviews} reviews)</span>
            </div>
            <p style="color:var(--text-muted);margin:1rem 0;line-height:1.7">${p.tagline}</p>
            <div class="highlights">${(p.highlights || []).map(h => `<span class="highlight-item">${h}</span>`).join('')}</div>
            <div class="variant-selector">
              <label>Select Weight</label>
              <div class="variant-options">
                ${p.variants.map((vr, i) => `<button class="variant-btn ${i === variantIdx ? 'active' : ''}" data-idx="${i}">${vr.weight}</button>`).join('')}
              </div>
            </div>
            <div class="pd-actions" style="flex-direction:column;align-items:stretch;gap:0.75rem">
              <a href="${waProductLink(p.name, v.weight)}" target="_blank" rel="noopener" class="btn btn-primary" style="text-align:center">💬 Get Price & Order on WhatsApp</a>
              <button class="btn btn-outline" onclick="toggleWish('${p.id}')">${isWishlisted(p.id) ? '♥ Wishlisted' : '♡ Wishlist'}</button>
            </div>
            <p style="font-size:0.85rem;color:var(--text-muted);margin-top:0.8rem;text-align:center">Prices are shared privately on WhatsApp.</p>
            <div class="pd-tabs">
              <div class="pd-tab-btns">
                <button class="pd-tab-btn active" data-tab="desc">Description</button>
                <button class="pd-tab-btn" data-tab="ing">Ingredients</button>
                <button class="pd-tab-btn" data-tab="storage">Storage</button>
                ${p.howTo ? '<button class="pd-tab-btn" data-tab="howto">How to Prepare</button>' : ''}
              </div>
              <div class="pd-tab-content active" id="tab-desc"><p>${p.description}</p></div>
              <div class="pd-tab-content" id="tab-ing"><p>${p.ingredients}</p></div>
              <div class="pd-tab-content" id="tab-storage"><p>${p.storage || ''}</p><p style="margin-top:0.5rem">Best Before: ${p.bestBefore || 'See packaging'}</p></div>
              ${p.howTo ? `<div class="pd-tab-content" id="tab-howto"><div class="how-to"><h4>How to Prepare</h4><ol>${p.howTo.map(s => `<li>${s}</li>`).join('')}</ol></div></div>` : ''}
            </div>
          </div>
        </div>
      `;
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
      modal.querySelectorAll('.variant-btn').forEach(btn => {
        btn.addEventListener('click', () => { variantIdx = parseInt(btn.dataset.idx); renderPD(); });
      });
      modal.querySelectorAll('.pd-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          modal.querySelectorAll('.pd-tab-btn').forEach(b => b.classList.remove('active'));
          modal.querySelectorAll('.pd-tab-content').forEach(c => c.classList.remove('active'));
          btn.classList.add('active');
          modal.querySelector('#tab-' + btn.dataset.tab)?.classList.add('active');
        });
      });
    };
    renderPD();
  }

  function closeProduct() {
    const modal = document.getElementById('product-detail');
    if (modal) { modal.classList.remove('open'); document.body.style.overflow = ''; }
  }

  function openSearch() { document.getElementById('search-overlay')?.classList.add('open'); document.getElementById('search-input')?.focus(); }
  function closeSearch() { document.getElementById('search-overlay')?.classList.remove('open'); }
  function performSearch(q) {
    const results = document.getElementById('search-results');
    if (!results) return;
    q = q.trim().toLowerCase();
    if (!q) { results.innerHTML = ''; return; }
    const matches = ASTA_PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.categoryLabel.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q) || p.category.includes(q));
    results.innerHTML = matches.length ? matches.map(p => `<a class="search-result-item" href="#" onclick="event.preventDefault(); closeSearch(); openProduct('${p.id}')"><img src="${p.image}" alt="" onerror="this.src='https://via.placeholder.com/60'"><div><div style="font-family:var(--font-serif);font-size:1.05rem">${p.name}</div><div style="font-size:0.85rem;color:var(--text-muted)">${p.categoryLabel}</div></div></a>`).join('') : '<p style="padding:1rem;color:var(--text-muted)">No products found</p>';
  }

  function openMobileMenu() { document.getElementById('mobile-menu')?.classList.add('open'); document.getElementById('mobile-overlay')?.classList.add('open'); }
  function closeMobileMenu() { document.getElementById('mobile-menu')?.classList.remove('open'); document.getElementById('mobile-overlay')?.classList.remove('open'); }

  function initReveal() {
    const observer = new IntersectionObserver((entries) => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }); }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
  function initNav() {
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', () => { nav?.classList.toggle('scrolled', window.scrollY > 40); });
  }

  window.toggleWish = toggleWishlist;
  window.openProduct = openProduct;
  window.closeProduct = closeProduct;
  window.openSearch = openSearch;
  window.closeSearch = closeSearch;
  window.openMobileMenu = openMobileMenu;
  window.closeMobileMenu = closeMobileMenu;
  window.performSearch = performSearch;

  function initContact() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    form.addEventListener('submit', (e) => { e.preventDefault(); showToast('Thank you. We\'ll be in touch soon.'); form.reset(); });
  }
  function initNewsletter() {
    document.querySelectorAll('.newsletter-form').forEach(form => {
      form.addEventListener('submit', (e) => { e.preventDefault(); showToast('Subscribed! Welcome to the ASTA family.'); form.reset(); });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => document.querySelector('.page-loader')?.classList.add('hidden'), 800);
    updateWishlistUI();
    initCoverflow();
    initReveal();
    initNav();
    initContact();
    initNewsletter();
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => performSearch(e.target.value));
      searchInput.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeSearch(); });
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { closeSearch(); closeProduct(); closeMobileMenu(); }
    });
  });
})();
