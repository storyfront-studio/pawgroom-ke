
const b=document.querySelector('.burger'),n=document.querySelector('.nav');
b&&b.addEventListener('click',()=>{const o=n.classList.toggle('open');b.classList.toggle('open',o);b.setAttribute('aria-expanded',o)});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{n.classList.remove('open');b&&b.classList.remove('open')}));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
document.querySelectorAll('.vc[data-play]').forEach(c=>{const v=c.querySelector('video');
 c.addEventListener('click',()=>{if(c.classList.contains('go'))return;c.classList.add('go');v.controls=true;v.play();const o=c.querySelector('.ov');o&&(o.style.display='none')});});
const f=document.getElementById('bf');
f&&f.addEventListener('submit',e=>{e.preventDefault();const g=k=>(f.elements[k].value||'').trim();
 const t=['Hi PawGroom, I would like to book a grooming visit.','Name: '+g('name'),'Pet: '+g('pet')+(g('breed')?' ('+g('breed')+')':''),'Service: '+g('service'),'Area: '+g('area'),'Preferred day: '+g('day')].join('\n')+(g('msg')?'\nNote: '+g('msg'):'');
 window.open('https://wa.me/254759777504?text='+encodeURIComponent(t),'_blank')});
