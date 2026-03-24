// Mobile menu
function toggleMenu(){document.getElementById('navLinks').classList.toggle('open');}
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>document.getElementById('navLinks').classList.remove('open')));

// Active nav
const secs=document.querySelectorAll('section[id]');
window.addEventListener('scroll',()=>{
  let cur='';
  secs.forEach(s=>{if(window.scrollY>=s.offsetTop-130)cur=s.id;});
  document.querySelectorAll('.nav-links a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+cur));
});

// Skill bars
const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.querySelectorAll('.sk-fill').forEach(f=>f.style.width=f.dataset.w+'%');
  });
},{threshold:0.3});
document.querySelectorAll('#skills').forEach(s=>io.observe(s));

// Cert filter
function filterCerts(cat,btn){
  document.querySelectorAll('.cf').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.cert-card').forEach(c=>{
    c.classList.toggle('hidden',cat!=='all'&&c.dataset.cat!==cat);
  });
}

// Modal
function openModal(){document.getElementById('auditModal').classList.add('open');document.body.style.overflow='hidden';}
// 1. Crea una función simple para cerrar
function forceCloseModal() {
  document.getElementById('auditModal').classList.remove('open');
  document.body.style.overflow = ''; // Devuelve el scroll
}

// 2. Actualiza tu función closeModal para usar la nueva lógica
function closeModal(e) {
  // Si haces clic en el fondo oscuro
  if (e.target === document.getElementById('auditModal')) {
    forceCloseModal();
  }
}

// 3. Actualiza el evento de la tecla Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    forceCloseModal();
  }
});

function sendForm(e){
  e.preventDefault();
  const n=document.getElementById('fnote');
  n.style.display='block';
  setTimeout(()=>n.style.display='none',4000);
}

