const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll("#navLinks a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const copyButton = document.getElementById("copyProfile");
const copyFeedback = document.getElementById("copyFeedback");

copyButton.addEventListener("click", async () => {
  const profileUrl = "https://github.com/momin2418";
  try {
    await navigator.clipboard.writeText(profileUrl);
    copyFeedback.textContent = "GitHub profile link copied!";
  } catch (error) {
    copyFeedback.textContent = profileUrl;
  }
});
