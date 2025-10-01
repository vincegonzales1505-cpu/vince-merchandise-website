function toggleMenu() {
  const dropdown = document.getElementById("dropdown");
  dropdown.classList.toggle("hidden");
}

// Optional: close menu if clicked outside
window.onclick = function(event) {
  if (!event.target.matches('.menu-btn')) {
    const dropdown = document.getElementById("dropdown");
    if (!dropdown.classList.contains('hidden')) {
      dropdown.classList.add('hidden');
    }
  }
}
