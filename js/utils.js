function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
}

function updateActiveNav(pageName) {
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.remove("active-link");
  });

  const activeNav = document.getElementById("nav-" + pageName);

  if (activeNav) {
    activeNav.classList.add("active-link");
  }
}

function closeMobileMenu() {
  document.getElementById("mobile-menu").classList.add("hidden");
}

// ===============================
// TIPS DETAIL ARTICLE
// ===============================

// Ambil parameter id dari URL
const urlParams = new URLSearchParams(window.location.search);
let articleId = parseInt(urlParams.get("id"));

// Default artikel = CV
if (isNaN(articleId)) {
  articleId = 2;
}

// Initialize page
document.addEventListener("DOMContentLoaded", function () {
  // Active navbar
  const pageName = document.body.dataset.page || "beranda";
  updateActiveNav(pageName);

  console.log("Artikel aktif ID:", articleId);
}); 