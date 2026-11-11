// Toujours arriver en haut d'une nouvelle page (sauf lien vers une section précise)
(function(){
  try { if ('scrollRestoration' in history) history.scrollRestoration = 'manual'; } catch(e) {}
  function toTop(){ if (!location.hash) window.scrollTo(0, 0); }
  toTop();
  window.addEventListener('pageshow', toTop);
})();

// Menu mobile
(function(){
  var btn = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (!btn || !links) return;
  function setOpen(open){
    links.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  }
  btn.addEventListener('click', function(){ setOpen(!links.classList.contains('open')); });
  links.addEventListener('click', function(e){ if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape') setOpen(false); });
})();
