/* ==========================================================================
   EVARA DECORS - GALLERY & LIGHTBOX ENGINE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Gallery Portfolio Data
  const galleryItems = [
    {
      id: 1,
      title: "Royal Crimson & Gold Mandap",
      category: "mandap",
      categoryName: "Mandap Decor",
      desc: "Handcrafted carved golden pillars adorned with over 5,000 fresh red Dutch roses and cascading jasmine strings.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85",
      venue: "Grand Kalyana Mandapam, Hosur"
    },
    {
      id: 2,
      title: "Fairytale Chandelier Tunnel",
      category: "entrance",
      categoryName: "Grand Entrance",
      desc: "Spectacular 60-foot entrance passage lined with crystal chandeliers, hanging white wisteria, and red carpet.",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=85",
      venue: "Luxury Convention Centre, Hosur"
    },
    {
      id: 3,
      title: "Sunlit Marigold Haldi Haven",
      category: "haldi",
      categoryName: "Haldi / Mehendi",
      desc: "Vibrant yellow and orange marigold canopy with traditional carved wooden jhula and brass floral urlis.",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1600&q=85",
      venue: "Garden Resort, Mookandapalli"
    },
    {
      id: 4,
      title: "Pastel Euphoria Reception Stage",
      category: "reception",
      categoryName: "Reception Stages",
      desc: "Contemporary pastel wall with blush peonies, English roses, warm geometric frames, and mood lighting.",
      image: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1600&q=85",
      venue: "Palace Ballroom, Hosur-Bangalore Border"
    },
    {
      id: 5,
      title: "Traditional South Indian Mandap",
      category: "mandap",
      categoryName: "Mandap Decor",
      desc: "Auspicious setup with fresh banana trunks, brass Kuthuvilakku lamps, yellow sevvanthi, and fragrant sampangi.",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=85",
      venue: "Heritage Mahal, Hosur"
    },
    {
      id: 6,
      title: "Cascading Orchid Ceiling Canopy",
      category: "entrance",
      categoryName: "Grand Entrance",
      desc: "Floating floral cloud with white dendrobium orchids, warm Edison bulbs, and golden accent drapery.",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1600&q=85",
      venue: "Grand Courtyard, Hosur"
    },
    {
      id: 7,
      title: "Magical Sangeet Night with Cold Pyros",
      category: "lighting",
      categoryName: "Lighting & Effects",
      desc: "Synchronized cold pyrotechnics and low-lying dry ice fog blanket creating a dreamlike fairytale couple entry.",
      image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1600&q=85",
      venue: "Open Air Amphitheatre, Hosur"
    },
    {
      id: 8,
      title: "Dreamy Fairy Light Starlight Canopy",
      category: "lighting",
      categoryName: "Lighting & Effects",
      desc: "Over 10,000 warm white micro fairy lights forming a starlit sky canopy above the dining and banquet area.",
      image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1600&q=85",
      venue: "Eco Resort Lawn, Krishnagiri Road"
    },
    {
      id: 9,
      title: "Royal Banquet Floral Tablescape",
      category: "reception",
      categoryName: "Reception Stages",
      desc: "Luxury centerpiece floral runners with taper candles, antique brass vessels, and custom table styling.",
      image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1600&q=85",
      venue: "Private Estate, Hosur"
    },
    {
      id: 10,
      title: "Bohemian Boho Mehendi Lounge",
      category: "haldi",
      categoryName: "Haldi / Mehendi",
      desc: "Pastel macrame drapes, vibrant cushion floor seating, paper parasols, and floral photo booths.",
      image: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1600&q=85",
      venue: "Farmhouse Lawn, Hosur"
    },
    {
      id: 11,
      title: "Lush Greenery & White Rose Gateway",
      category: "entrance",
      categoryName: "Grand Entrance",
      desc: "Botanical luxury archway adorned with Italian ruscus, eucalyptus, white avalanche roses, and glass lanterns.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=85",
      venue: "Country Club, Mookandapalli"
    },
    {
      id: 12,
      title: "Grand Violet & Gold Symphony Stage",
      category: "reception",
      categoryName: "Reception Stages",
      desc: "Majestic 40ft stage setup featuring baroque golden arches, deep violet wash uplighting, and 3-tier floral towers.",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1600&q=85",
      venue: "Grand Convention Center, Hosur"
    }
  ];

  const galleryGrid = document.getElementById('galleryGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');

  // Render Gallery Items
  function renderGallery(items) {
    if (!galleryGrid) return;
    galleryGrid.innerHTML = '';

    items.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = `gallery-item reveal-on-scroll delay-${(index % 4) * 100 + 100}`;
      card.dataset.id = item.id;
      card.dataset.category = item.category;

      card.innerHTML = `
        <img src="${item.image}" alt="${item.title} - Evara Decors Hosur" loading="lazy">
        <div class="gallery-item-overlay">
          <span class="gallery-category-badge">${item.categoryName}</span>
          <h3 class="gallery-item-title">${item.title}</h3>
          <p class="gallery-item-desc">${item.desc}</p>
          <div class="gallery-actions">
            <span class="gallery-zoom-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
              View Full Design
            </span>
            <a href="https://wa.me/919952647193?text=${encodeURIComponent('Hi Evara Decors! I love your "' + item.title + '" setup from your gallery. Could you share price details and availability for my wedding?')}" target="_blank" rel="noopener noreferrer" class="gallery-inquire-link" onclick="event.stopPropagation();">
              <span>Book on WhatsApp</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      `;

      card.addEventListener('click', () => openLightbox(item));
      galleryGrid.appendChild(card);
    });

    // Re-trigger scroll observer for new items
    if (window.initScrollObserver) {
      window.initScrollObserver();
    }
  }

  // Filter Buttons Action
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      if (filter === 'all') {
        renderGallery(galleryItems);
      } else {
        const filtered = galleryItems.filter(item => item.category === filter);
        renderGallery(filtered);
      }
    });
  });

  // Lightbox Functionality
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  const lightboxWhatsappBtn = document.getElementById('lightboxWhatsappBtn');

  let currentItemIndex = 0;
  let activeCollection = galleryItems;

  function openLightbox(item) {
    if (!lightboxModal) return;
    currentItemIndex = activeCollection.findIndex(i => i.id === item.id);
    if (currentItemIndex === -1) currentItemIndex = 0;
    updateLightboxContent();
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function updateLightboxContent() {
    const item = activeCollection[currentItemIndex];
    if (!item) return;

    lightboxImg.src = item.image;
    lightboxImg.alt = item.title;
    lightboxTitle.textContent = item.title;
    lightboxCaption.textContent = `${item.desc} — Venue: ${item.venue}`;

    const waText = encodeURIComponent(`Hello Evara Decors! I am interested in booking your "${item.title}" (${item.categoryName}) for my upcoming event. Could you please share the design catalogue and quotation?`);
    lightboxWhatsappBtn.href = `https://wa.me/919952647193?text=${waText}`;
  }

  function showNext() {
    currentItemIndex = (currentItemIndex + 1) % activeCollection.length;
    updateLightboxContent();
  }

  function showPrev() {
    currentItemIndex = (currentItemIndex - 1 + activeCollection.length) % activeCollection.length;
    updateLightboxContent();
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', showNext);
  if (lightboxPrev) lightboxPrev.addEventListener('click', showPrev);

  // Click outside lightbox to close
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightboxModal || !lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });

  // Initial render
  renderGallery(galleryItems);
});
