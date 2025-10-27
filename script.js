// --- Apparition progressive des sections ---
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});
document.querySelectorAll('.content-block, .skater-card').forEach(el => observer.observe(el));

// --- Popup contact ---
const popup = document.getElementById("popup");
document.getElementById("openPopup").onclick = () => popup.style.display = "flex";
document.querySelector(".close").onclick = () => popup.style.display = "none";
window.onclick = e => { if (e.target === popup) popup.style.display = "none"; };

// --- Horloge dynamique ---
function showTime() {
  const now = new Date();
  document.getElementById("time").textContent =
    "Heure actuelle : " + now.toLocaleTimeString();
}
setInterval(showTime, 1000);
showTime();

// --- Menu responsive ---
const nav = document.querySelector('.navbar ul');
document.querySelector('.navbar').addEventListener('click', () => {
  nav.classList.toggle('show-menu');
});
