document.getElementById('year').textContent = new Date().getFullYear();

const tabs = [...document.querySelectorAll('.tabs a')];
const sections = tabs.map(tab => document.querySelector(tab.getAttribute('href')));

const observer = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  tabs.forEach(tab => {
    const active = tab.getAttribute('href') === `#${visible.target.id}`;
    tab.classList.toggle('active', active);
    if (active) tab.setAttribute('aria-current', 'page');
    else tab.removeAttribute('aria-current');
  });
}, { rootMargin: '-20% 0px -60%', threshold: [0, .1, .5] });

sections.forEach(section => section && observer.observe(section));
