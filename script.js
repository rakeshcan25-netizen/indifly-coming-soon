// Tiny touch of life: gently shift the cinematic background with the pointer.
const root = document.documentElement;
window.addEventListener("pointermove", (e) => {
  const x = (e.clientX / window.innerWidth - .5) * 2;
  const y = (e.clientY / window.innerHeight - .5) * 2;
  document.body.style.setProperty("--mx", `${x}px`);
  document.body.style.setProperty("--my", `${y}px`);
});
