
// Simple interactions: mobile menu, smooth scroll, reveal on scroll, form placeholder behavior
document.addEventListener('DOMContentLoaded', function(){
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');
  menuBtn && menuBtn.addEventListener('click', ()=> nav.classList.toggle('open'));

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); nav.classList.remove('open'); }
    })
  });

  // Reveal on scroll
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting) entry.target.classList.add('reveal');
    });
  }, {threshold:0.12});
  document.querySelectorAll('.card, .section-title, .hero-copy, .hero-media').forEach(el=>observer.observe(el));

  // Set year
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
});
