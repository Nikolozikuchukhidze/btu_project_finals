// City to Map API for contact.html
document.addEventListener('DOMContentLoaded', function() {
    const cityInput = document.getElementById('city-input');
    const cityBtn = document.getElementById('city-search-btn');
    const cityMap = document.getElementById('city-map');
    if (cityInput && cityBtn && cityMap) {
    cityBtn.addEventListener('click', async function() {
        const city = cityInput.value.trim();
        if (!city) {
        alert('Please enter a city name.');
        return;
        }
        cityBtn.disabled = true;
        cityBtn.textContent = 'Loading...';
        try {
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}`;
        const res = await fetch(url, { headers: { 'Accept-Language': 'en' } });
        const data = await res.json();
        if (data && data.length > 0) {
            const lat = parseFloat(data[0].lat);
            const lon = parseFloat(data[0].lon);
            // Calculate bounding box for a reasonable zoom
            const delta = 0.05;
            const left = lon - delta;
            const right = lon + delta;
            const top = lat + delta;
            const bottom = lat - delta;
            cityMap.src = `https://www.openstreetmap.org/export/embed.html?bbox=${left},${bottom},${right},${top}&layer=mapnik&marker=${lat},${lon}`;
        } else {
            alert('City not found.');
            cityMap.src = '';
        }
        } catch (e) {
        alert('Error fetching map.');
        cityMap.src = '';
        }
        cityBtn.disabled = false;
        cityBtn.textContent = 'Show Map';
    });
    }
});
// Scroll to Top Button
const scrollBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});
if (scrollBtn) {
  scrollBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
}
// Accept Cookies Banner
document.addEventListener('DOMContentLoaded', function() {
    var banner = document.getElementById('cookie-banner');
    var acceptBtn = document.getElementById('accept-cookies');
  // Always show for debug
  // localStorage.removeItem('cookiesAccepted'); // Uncomment for testing
    if (banner) {
    if (!localStorage.getItem('cookiesAccepted')) {
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none';
    }
    }
    if (acceptBtn) {
      acceptBtn.onclick = function() {
        localStorage.setItem('cookiesAccepted', 'true');
        if (banner) banner.style.display = 'none';
      };
    }
    var declineBtn = document.getElementById('decline-cookies');
    if (declineBtn) {
      declineBtn.onclick = function() {
        // Redirect to another site (Google as example)
        window.location.href = 'https://www.google.com';
      };
    }
});
let burger = document.querySelector(".burger");
let x_Mark = document.querySelector(".x_mark");
let mobileMenu = document.querySelector(".header_nav");
burger.addEventListener("click", () => {
    mobileMenu.style.left = "0px";
    x_Mark.style.display = "block";
    burger.style.display = "none";
});

x_Mark.addEventListener("click", () => {
    mobileMenu.style.left = "-100%";
    x_Mark.style.display = "none";
    burger.style.display = "block";
});

// Contact form validation
let btnElement = document.getElementById("btn-click");
if (btnElement) {
    btnElement.addEventListener("click", function(e) {
    // Find the form and its fields
    const form = btnElement.closest("form");
    if (!form) return;
    const name = form.querySelector('input[name="name"]');
    const email = form.querySelector('input[name="email"]');
    const message = form.querySelector('textarea[name="message"]');
    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        e.preventDefault();
        alert("Please fill in all fields before sending your message.");
        return false;
    }
    alert("You have successfully sent a message!");
    });
}