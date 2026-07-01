// ============= THEME TOGGLE (all pages) =============
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');

function setTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('webhub-theme', theme);
}

const savedTheme = localStorage.getItem('webhub-theme');
if (savedTheme) {
  setTheme(savedTheme);
} else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
  setTheme('light');
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });
}

// ============= MOBILE NAV (all pages) =============
const navBurger = document.getElementById('navBurger');
const navLinks = document.getElementById('navLinks');

if (navBurger && navLinks) {
  navBurger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ============= TERMINAL TYPING EFFECT (home page only) =============
const typedTextEl = document.getElementById('typedText');

if (typedTextEl) {
  const messages = [
    'npm run build --studio=webhub',
    'deploying websites, apps & design...',
    'status: ready to build.'
  ];
  let msgIndex = 0, charIndex = 0, deleting = false;

  function typeLoop() {
    const current = messages[msgIndex];
    if (!deleting) {
      typedTextEl.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(typeLoop, 1400);
        return;
      }
    } else {
      typedTextEl.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        msgIndex = (msgIndex + 1) % messages.length;
      }
    }
    setTimeout(typeLoop, deleting ? 30 : 55);
  }
  typeLoop();
}

// ============= WORK / SHOWCASE DATA (work.html only) =============
const workGrid = document.getElementById('workGrid');

if (workGrid) {
  const workItems = [
    { cat: 'websites', title: 'Project Website 01', desc: 'Placeholder — swap in a real project screenshot.' },
    { cat: 'websites', title: 'Project Website 02', desc: 'Placeholder — swap in a real project screenshot.' },
    { cat: 'apps', title: 'App Build 01', desc: 'Placeholder — swap in a real app screenshot.' },
    { cat: 'apps', title: 'App Build 02', desc: 'Placeholder — swap in a real app screenshot.' },
    { cat: 'design', title: 'Design Piece 01', desc: 'Placeholder — swap in real Canva/graphic work.' },
    { cat: 'design', title: 'Design Piece 02', desc: 'Placeholder — swap in real Canva/graphic work.' },
  ];

  const catLabels = { websites: 'Website', apps: 'App', design: 'Graphic Design' };

  function renderWork(filter) {
    workGrid.innerHTML = '';
    const items = filter === 'all' ? workItems : workItems.filter(i => i.cat === filter);
    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'work-card';
      card.innerHTML = `
        <div class="work-thumb">
          <svg class="work-thumb-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
            <rect x="3" y="4" width="18" height="14" rx="2"/>
            <path d="M3 9h18"/>
            <circle cx="6.5" cy="6.5" r="0.6" fill="currentColor"/>
            <circle cx="8.5" cy="6.5" r="0.6" fill="currentColor"/>
          </svg>
          <span class="work-thumb-label">placeholder</span>
        </div>
        <div class="work-info">
          <span class="work-cat">${catLabels[item.cat]}</span>
          <h3 class="work-title">${item.title}</h3>
          <p class="work-desc">${item.desc}</p>
        </div>
      `;
      workGrid.appendChild(card);
    });
  }
  renderWork('all');

  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderWork(btn.dataset.filter);
    });
  });
}

// ============= TEAM DATA (team.html only) =============
const teamGrid = document.getElementById('teamGrid');

if (teamGrid) {
  const teamSlots = [1, 2, 3, 4, 5, 6];
  teamSlots.forEach(n => {
    const card = document.createElement('div');
    card.className = 'team-card';
    card.innerHTML = `
      <div class="avatar">PHOTO</div>
      <h3 class="team-name">Team Member ${n}</h3>
      <p class="team-role">Role / Title</p>
      <p class="team-email">name${n}@webhub.co.za</p>
    `;
    teamGrid.appendChild(card);
  });
}

// ============= SKILLS DATA (home page only) =============
const devSkillsEl = document.getElementById('devSkills');
const designSkillsEl = document.getElementById('designSkills');

if (devSkillsEl && designSkillsEl) {
  const devSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Java'];
  const designSkills = ['Canva'];

  devSkills.forEach(name => {
    const chip = document.createElement('div');
    chip.className = 'skill-chip';
    chip.innerHTML = `<span class="skill-chip-name">${name}</span>`;
    devSkillsEl.appendChild(chip);
  });

  designSkills.forEach(name => {
    const chip = document.createElement('div');
    chip.className = 'skill-chip';
    chip.innerHTML = `<span class="skill-chip-name">${name}</span>`;
    designSkillsEl.appendChild(chip);
  });
}

// ============= CONTACT FORM (home page only) =============
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

if (contactForm && formNote) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formNote.textContent = 'Message ready — connect this form to an email service to go live.';
    contactForm.reset();
  });
}

// ============= FOOTER YEAR (all pages) =============
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
