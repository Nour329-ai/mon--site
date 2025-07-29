

// Fonction pour initialiser le mode nuit
function initDarkMode() {
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;
  const themeText = themeToggle?.querySelector('.text');
  const themeIcon = themeToggle?.querySelector('.icon');

  // Mise à jour du bouton
  function updateButton() {
    if (!themeText || !themeIcon) return;

    const isDark = body.classList.contains('dark-mode');
    themeText.textContent = isDark ? 'Mode Jour' : 'Mode Nuit';
    themeIcon.textContent = isDark ? '☀️' : '🌙';

    if (monTitre && (!prenom || prenom.toLowerCase() !== "nour")) {
      monTitre.style.color = isDark ? '#E8D7CC' : '#D2C1B6';
    }
  }

  // Appliquer le thème sauvegardé ou détecté
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.toggle('dark-mode', savedTheme === 'dark');
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark-mode');
  }
  updateButton();

  // Bascule lors du clic
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
      updateButton();
    });
  }

  // Écoute les changements de préférence système
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem('theme')) {
        body.classList.toggle('dark-mode', e.matches);
        updateButton();
      }
    });
  }
}

// Attendre que le DOM soit prêt
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDarkMode);
} else {
  initDarkMode();
}

// Fonction pour gérer le lien actif dans le menu
function setActive(link) {
  document.querySelectorAll('.sidenav a').forEach(el => el.classList.remove('active'));
  link.classList.add('active');
}








