// ==========================
// Countdown (Remaining days)
// ==========================
const EVENT_START = new Date('2026-03-21T08:30:00');
const elDays = document.getElementById('days');
const elStatGrid = document.querySelector('.statGrid');

function tick() {
    if (!elDays || !elStatGrid) return;
    const now = new Date();
    let diff = EVENT_START - now;

    if (diff <= 0) {
        elDays.textContent = '00';
        elStatGrid.style.display = 'none';
        return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);

    if (days < 1) {
        elStatGrid.style.display = 'none';
        return;
    }

    elStatGrid.style.display = '';
    elDays.textContent = String(days).padStart(2, '0');
}

tick();
setInterval(tick, 1000);

// Copy Text Function
function copyText() {
    const text = document.getElementById("share-text").innerText;
    navigator.clipboard.writeText(text);
}

// Social Share Links
// Set SHARE_BASE_URL to your live site URL when testing locally (e.g. 'https://yoursite.com/concept2/')
const SHARE_BASE_URL = '';
const shareUrl = encodeURIComponent(SHARE_BASE_URL || window.location.href);
const shareText = document.getElementById('share-text')?.innerText || 'In an increasingly digital world, we\'re bringing pen and pencil back to paper. Join us at Redan High School Commons for a FREE day of music, writing, and connection. All students (K-12) and families are welcome!';

document.getElementById('share-facebook')?.addEventListener('click', function(e) {
    e.preventDefault();
    const url = SHARE_BASE_URL || window.location.href;
    if (url.startsWith('file:') || url.includes('localhost')) {
        alert('Facebook needs a public URL to share. Deploy your site and set SHARE_BASE_URL, or test from your live URL.');
        return;
    }
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + shareUrl, 'facebook-share', 'width=580,height=400');
});

document.getElementById('share-instagram')?.addEventListener('click', function(e) {
    e.preventDefault();
    navigator.clipboard.writeText(shareText);
    const el = e.currentTarget;
    const original = el.textContent;
    el.textContent = 'Copied!';
    setTimeout(function() { el.textContent = original; }, 2000);
});

document.getElementById('share-linkedin')?.addEventListener('click', function(e) {
    e.preventDefault();
    const url = SHARE_BASE_URL || window.location.href;
    if (url.startsWith('file:') || url.includes('localhost')) {
        alert('LinkedIn needs a public URL to share. Deploy your site and set SHARE_BASE_URL, or test from your live URL.');
        return;
    }
    window.open('https://www.linkedin.com/sharing/share-offsite/?url=' + shareUrl, 'linkedin-share', 'width=580,height=400');
});

// Lightbox Functions
function openLightbox(element) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const src = element.querySelector('img').src;
    lightbox.style.display = "block";
    lightboxImg.src = src;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}
