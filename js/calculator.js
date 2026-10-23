/* ==========================================================================
   EVARA DECORS - INTERACTIVE WEDDING PLANNER & WHATSAPP ESTIMATOR
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const eventTypeInputs = document.querySelectorAll('input[name="planner_event"]');
  const floralThemeInputs = document.querySelectorAll('input[name="planner_theme"]');
  const addonInputs = document.querySelectorAll('input[name="planner_addon"]');
  const eventDateInput = document.getElementById('plannerDate');
  const guestCountInput = document.getElementById('plannerGuests');
  const locationInput = document.getElementById('plannerLocation');
  const venueTypeInput = document.getElementById('plannerVenueType');

  const estimateSummaryText = document.getElementById('estimateSummaryText');
  const estimateRangeText = document.getElementById('estimateRangeText');
  const sendWhatsAppBtn = document.getElementById('plannerWhatsAppBtn');

  const basePricing = {
    'wedding_mandap': { min: 75000, max: 180000, label: "Royal Mandap & Muhurtham Decor" },
    'reception_gala': { min: 65000, max: 150000, label: "Grand Reception Stage" },
    'haldi_mehendi': { min: 30000, max: 70000, label: "Haldi & Mehendi Fiesta" },
    'engagement': { min: 40000, max: 90000, label: "Engagement & Ring Ceremony" },
    'complete_package': { min: 160000, max: 350000, label: "All-Inclusive 3-Day Wedding Suite" }
  };

  const themeMultipliers = {
    'royal_red': 1.0,
    'heritage_marigold': 0.85,
    'pastel_luxury': 1.15,
    'modern_chic': 1.05
  };

  const addonPrices = {
    'entrance_passage': { min: 20000, max: 35000, label: "Chandelier Entrance Passage" },
    'cold_pyros': { min: 12000, max: 20000, label: "Cold Pyros & Low Fog Entry" },
    'starlight_ceiling': { min: 18000, max: 30000, label: "Fairy Light Starry Ceiling" },
    'car_chaadar': { min: 8000, max: 15000, label: "Bridal Car & Phoolon Ki Chaadar" }
  };

  function calculateEstimate() {
    let selectedEvent = 'wedding_mandap';
    eventTypeInputs.forEach(radio => {
      if (radio.checked) selectedEvent = radio.value;
    });

    let selectedTheme = 'royal_red';
    floralThemeInputs.forEach(radio => {
      if (radio.checked) selectedTheme = radio.value;
    });

    const base = basePricing[selectedEvent] || basePricing['wedding_mandap'];
    const multiplier = themeMultipliers[selectedTheme] || 1.0;

    let totalMin = Math.round(base.min * multiplier);
    let totalMax = Math.round(base.max * multiplier);

    const selectedAddonsList = [];
    addonInputs.forEach(checkbox => {
      if (checkbox.checked && addonPrices[checkbox.value]) {
        totalMin += addonPrices[checkbox.value].min;
        totalMax += addonPrices[checkbox.value].max;
        selectedAddonsList.push(addonPrices[checkbox.value].label);
      }
    });

    // Format currency in Indian Rupees
    const formatINR = (val) => "₹" + val.toLocaleString('en-IN');

    if (estimateSummaryText) {
      estimateSummaryText.textContent = `${base.label}`;
    }
    if (estimateRangeText) {
      estimateRangeText.textContent = `${formatINR(totalMin)} - ${formatINR(totalMax)}*`;
    }

    // Build pre-composed WhatsApp message
    const eventDate = eventDateInput ? eventDateInput.value || "Upcoming Dates" : "TBD";
    const guestCount = guestCountInput ? guestCountInput.value : "200-500";
    const location = locationInput ? locationInput.value : "Hosur";
    const venueType = venueTypeInput ? venueTypeInput.value : "Kalyana Mandapam";

    let themeName = "Royal Red Rose & Gold";
    if (selectedTheme === 'heritage_marigold') themeName = "Radiant Heritage Marigold";
    if (selectedTheme === 'pastel_luxury') themeName = "Dreamy Pastel Hydrangea & Blush";
    if (selectedTheme === 'modern_chic') themeName = "Tropical Orchids & Crystal Elegance";

    let addonsText = selectedAddonsList.length > 0 ? selectedAddonsList.join(", ") : "Standard inclusions";

    const waMessage = 
`Hello *Evara Decors*! 🌸
I would like to plan the wedding decor for an upcoming celebration in Hosur.

📌 *Event Details:*
• *Event Type:* ${base.label}
• *Floral Style:* ${themeName}
• *Target Date:* ${eventDate}
• *Location / Venue:* ${location} (${venueType})
• *Approx Guests:* ${guestCount}
• *Add-ons Chosen:* ${addonsText}
• *Estimated Budget Range:* ${formatINR(totalMin)} - ${formatINR(totalMax)}

Could you please check availability for my date and share your latest design catalogue? Thank you!`;

    if (sendWhatsAppBtn) {
      sendWhatsAppBtn.href = `https://wa.me/919952647193?text=${encodeURIComponent(waMessage)}`;
    }
  }

  // Attach change listeners to all inputs
  [...eventTypeInputs, ...floralThemeInputs, ...addonInputs].forEach(el => {
    el.addEventListener('change', calculateEstimate);
  });

  if (eventDateInput) eventDateInput.addEventListener('change', calculateEstimate);
  if (guestCountInput) guestCountInput.addEventListener('change', calculateEstimate);
  if (locationInput) locationInput.addEventListener('change', calculateEstimate);
  if (venueTypeInput) venueTypeInput.addEventListener('change', calculateEstimate);

  // Initial calculation
  calculateEstimate();
});
