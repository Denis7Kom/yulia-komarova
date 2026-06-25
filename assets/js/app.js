const root = document.documentElement;
const progress = document.querySelector('.scroll-progress span');
const cursor = document.querySelector('.cursor-glow');

const briefText = `1. Кто она профессионально: организатор концертов, event manager, представитель агентства, продюсер, PR?\n2. Какие реальные проекты можно назвать: концерты, площадки, артисты, города, фестивали?\n3. Какие услуги она реально оказывает: организация под ключ, booking, backstage, PR, гости, партнёры?\n4. Какие контакты ставим: Instagram, Telegram, WhatsApp, email, сайт агентства?\n5. Нужен тон: премиально, дерзко, официально, творчески, минималистично?\n6. Какие фото можно использовать публично и какие нельзя?`;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

window.addEventListener('pointermove', (event) => {
  root.style.setProperty('--mx', `${event.clientX}px`);
  root.style.setProperty('--my', `${event.clientY}px`);
  if (cursor) {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  }
});

window.addEventListener('scroll', () => {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  const value = total > 0 ? window.scrollY / total : 0;
  if (progress) progress.style.width = `${value * 100}%`;
}, { passive: true });

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    if (entry.target.hasAttribute('data-count')) runCounter(entry.target);
    entry.target.querySelectorAll('[data-count]').forEach(runCounter);
  });
}, { threshold: 0.18 });

document.querySelectorAll('.reveal, [data-count]').forEach((element) => revealObserver.observe(element));

function runCounter(element) {
  if (element.dataset.done) return;
  element.dataset.done = 'true';
  const target = Number(element.dataset.count || 0);
  const duration = 900;
  const start = performance.now();

  function frame(now) {
    const progressValue = clamp((now - start) / duration, 0, 1);
    const eased = 1 - Math.pow(1 - progressValue, 3);
    element.textContent = Math.round(target * eased).toLocaleString('ru-RU');
    if (progressValue < 1) requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}

document.querySelectorAll('[data-spotlight]').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
    card.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
  });
});

document.querySelectorAll('[data-tilt]').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `rotateY(${x * 7}deg) rotateX(${-y * 7}deg)`;
  });
  card.addEventListener('pointerleave', () => {
    card.style.transform = '';
  });
});

document.querySelectorAll('.magnetic').forEach((element) => {
  element.addEventListener('pointermove', (event) => {
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    element.style.transform = `translate(${x * 0.16}px, ${y * 0.16}px)`;
    if (cursor) {
      cursor.style.width = '48px';
      cursor.style.height = '48px';
      cursor.style.borderColor = 'rgba(255,91,158,.8)';
    }
  });
  element.addEventListener('pointerleave', () => {
    element.style.transform = '';
    if (cursor) {
      cursor.style.width = '28px';
      cursor.style.height = '28px';
      cursor.style.borderColor = 'rgba(17,17,24,.55)';
    }
  });
});

const rotator = document.querySelector('[data-rotator]');
const rotatorWords = ['Concert flow', 'Backstage map', 'Guest rhythm', 'Stage energy'];
let rotatorIndex = 0;
setInterval(() => {
  if (!rotator) return;
  rotatorIndex = (rotatorIndex + 1) % rotatorWords.length;
  rotator.animate([{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(-8px)' }], { duration: 160, fill: 'forwards' }).onfinish = () => {
    rotator.textContent = rotatorWords[rotatorIndex];
    rotator.animate([{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 240, fill: 'forwards' });
  };
}, 2600);

const dialog = document.querySelector('[data-command-dialog]');
const commandOpen = document.querySelector('[data-command-open]');
commandOpen?.addEventListener('click', () => dialog?.showModal());
window.addEventListener('keydown', (event) => {
  const isCommand = event.metaKey || event.ctrlKey;
  if (isCommand && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    dialog?.showModal();
  }
  if (event.key === 'Escape' && dialog?.open) dialog.close();
});

document.querySelector('[data-copy-brief]')?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(briefText);
    showToast('Вопросы скопированы');
  } catch {
    showToast('Скопируй вопросы из блока ниже');
  }
});

function showToast(text) {
  const toast = document.createElement('div');
  toast.className = 'copied';
  toast.textContent = text;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 1800);
}

const canvas = document.getElementById('auroraCanvas');
const ctx = canvas?.getContext('2d');
let width = 0;
let height = 0;
let particles = [];

function resizeCanvas() {
  if (!canvas || !ctx) return;
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * ratio);
  canvas.height = Math.floor(height * ratio);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  particles = Array.from({ length: Math.min(70, Math.floor((width * height) / 18000)) }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: 80 + Math.random() * 160,
    vx: (Math.random() - 0.5) * 0.18,
    vy: (Math.random() - 0.5) * 0.18,
    hue: 270 + Math.random() * 95,
    alpha: 0.06 + Math.random() * 0.07
  }));
}

function drawAurora() {
  if (!ctx) return;
  ctx.clearRect(0, 0, width, height);
  particles.forEach((p) => {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < -p.r) p.x = width + p.r;
    if (p.x > width + p.r) p.x = -p.r;
    if (p.y < -p.r) p.y = height + p.r;
    if (p.y > height + p.r) p.y = -p.r;
    const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
    gradient.addColorStop(0, `hsla(${p.hue}, 92%, 70%, ${p.alpha})`);
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(drawAurora);
}

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  drawAurora();
}
