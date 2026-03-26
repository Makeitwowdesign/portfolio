const frames = document.querySelectorAll('.hover-preview .square-frame');

document.querySelectorAll('.hover-trigger').forEach(trigger => {
  const targetId = trigger.dataset.target;
  if (!targetId) return;
  const frame = document.getElementById(targetId);

  trigger.addEventListener('pointerenter', () => {
    frames.forEach(f => {
      f.classList.remove('visible');
      const v = f.querySelector('video');
      if (v) v.pause();
    });
    if (frame) {
      frame.classList.add('visible');
      const v = frame.querySelector('video');
      if (v) { v.currentTime = 0; v.play(); }
    }
  });

  trigger.addEventListener('pointerleave', () => {
    if (frame) {
      frame.classList.remove('visible');
      const v = frame.querySelector('video');
      if (v) v.pause();
    }
  });
});

window.addEventListener("load", () => {
  const accueil = document.getElementById("containeracceuil");
  setTimeout(() => {
    accueil.style.transform = "translateY(-100%)";
  }, 1500);
});