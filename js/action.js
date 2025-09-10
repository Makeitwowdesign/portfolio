const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
}

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
  } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
  }
  localStorage.setItem("theme", theme);
});

document.querySelectorAll(".hover-trigger").forEach(trigger => {
  trigger.addEventListener("mouseenter", () => {
    const targetId = trigger.dataset.img;
    document.querySelectorAll(".hover-images img").forEach(img => {
      img.style.opacity = img.id === targetId ? "1" : "0";
    });
  });

  trigger.addEventListener("mouseleave", () => {
    document.querySelectorAll(".hover-images img").forEach(img => {
      img.style.opacity = "0";
    });
  });
});

<script>
document.querySelectorAll('.hover-trigger').forEach(trigger=>{
  const targetId = trigger.dataset.target;
  if(!targetId) return;
  const frame = document.getElementById(targetId);
  trigger.addEventListener('pointerenter', ()=> {
    document.querySelectorAll('.hover-preview .square-frame').forEach(f=>f.classList.remove('visible'));
    if(frame) frame.classList.add('visible');
  });
  trigger.addEventListener('pointerleave', ()=> {
    if(frame) frame.classList.remove('visible'); // retire si tu veux cacher au leave
  });
});
</script>