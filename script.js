const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.content-section');
const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.querySelector('.primary-nav');
const raceSearch = document.querySelector('#race-search');
const raceCards = document.querySelectorAll('.race-card');

function showSection(sectionId, updateHash = true) {
  sections.forEach((section) => {
    section.classList.toggle('active-section', section.id === sectionId);
  });

  navLinks.forEach((link) => {
    link.classList.toggle('active', link.dataset.section === sectionId);
  });

  if (updateHash) {
    history.replaceState(null, '', `#${sectionId}`);
  }

  if (primaryNav.classList.contains('open')) {
    primaryNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    showSection(link.dataset.section);
  });
});

navToggle.addEventListener('click', () => {
  const isOpen = primaryNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

function loadFromHash() {
  const sectionId = window.location.hash.replace('#', '') || 'overview';
  const exists = Array.from(sections).some((section) => section.id === sectionId);
  showSection(exists ? sectionId : 'overview', false);
}

window.addEventListener('hashchange', loadFromHash);
loadFromHash();

if (raceSearch) {
  raceSearch.addEventListener('input', () => {
    const query = raceSearch.value.trim().toLowerCase();

    raceCards.forEach((card) => {
      const searchableText = `${card.textContent} ${card.dataset.tags}`.toLowerCase();
      card.classList.toggle('hidden', query.length > 0 && !searchableText.includes(query));
    });
  });
}
