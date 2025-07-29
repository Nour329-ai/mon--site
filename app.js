function initDarkMode() {
  const body = document.body;
  const themeToggle = document.getElementById("themeToggle");
  const icon = themeToggle?.querySelector(".icon");
  const text = themeToggle?.querySelector(".text");

  // Appliquer le thème sauvegardé
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  }

  // Mettre à jour le bouton
  function updateButton() {
    const isDark = body.classList.contains("dark-mode");
    if (icon) icon.textContent = isDark ? "☀️" : "🌙";
    if (text) text.textContent = isDark ? "Mode Jour" : "Mode Nuit";
  }

  updateButton();

  // Gestion du clic
  themeToggle?.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
    updateButton();
  });
}

// Activer l'élément actif dans le menu (optionnel, non persistant entre pages)
function setActive(element) {
  document.querySelectorAll(".sidenav a").forEach(link => {
    link.classList.remove("active");
  });
  element.classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  initDarkMode();
});

