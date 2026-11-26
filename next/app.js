
const services=[{name:'Reels & video editing',text:'Turn your footage into a clearer story.'},{name:'Posters & graphic design',text:'Posters and social creatives for an announcement or campaign.'},{name:'Album design for studios',text:'Album layout and page design for photographers and studios.'},{name:'Branding & logo design',text:'A recognisable start and a clearer visual direction.'},{name:'Social media & Google Business Profile',text:'Regular social content and a clearer Google Business Profile.'}];
const escapeHTML=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
document.querySelectorAll('[data-services]').forEach(list=>{list.innerHTML=services.map((s,i)=>`<details><summary><span class="num">0${i+1}</span><span class="service-name">${s.name}</span><span class="plus" aria-hidden="true">+</span></summary><div class="service-body"><p>${s.text}</p><a href="/next/contact/" class="text-link">Discuss this service <span aria-hidden="true"><svg class="ico" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" aria-hidden="true" focusable="false"><path d="M7 17L17 7M8 7h9v9"/></svg></span></a></div></details>`).join('');});
const menu=document.querySelector('.menu'),nav=document.getElementById('navigation');menu.onclick=()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',open);menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');nav.classList.toggle('open',open);};
if(document.getElementById('brief-form')){const dialog=document.getElementById('draft-dialog'),output=document.getElementById('draft-text');document.getElementById('brief-form').onsubmit=e=>{e.preventDefault();const name=document.getElementById('name').value.trim(),brief=document.getElementById('brief').value.trim();if(!name||brief.length<10){document.getElementById('brief').setCustomValidity('Please add a name and at least 10 characters about the project.');document.getElementById('brief').reportValidity();return;}output.textContent='Hi Error Creatives, I\'m '+name+'.\n\nService: '+(document.querySelector('input[name=service]:checked')||{}).value+'\n\n'+brief;document.getElementById('dialog-status').textContent='';dialog.showModal();};document.getElementById('brief').oninput=e=>e.target.setCustomValidity('');document.querySelector('.close-dialog').onclick=()=>dialog.close();document.getElementById('copy-draft').onclick=async()=>{try{await navigator.clipboard.writeText(output.textContent);document.getElementById('dialog-status').textContent='Copied. Nothing sent. Paste it in WhatsApp when ready.';}catch{document.getElementById('dialog-status').textContent='Copy is not available on this device. Select the draft text above and copy it manually.';}};
}
const io='IntersectionObserver' in window?new IntersectionObserver(es=>{es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}});},{threshold:.1,rootMargin:'0px 0px -6% 0px'}):null;document.querySelectorAll('.home-hero,.page-hero,.section,.work-tile,.strip-head,.reel-strip,.cta-section').forEach(el=>{el.classList.add('reveal');io?io.observe(el):el.classList.add('in');});

if(document.getElementById('work-overlay')){var wo=document.getElementById('work-overlay'),wog=document.getElementById('wo-grid'),wot=document.getElementById('wo-title'),wob=document.getElementById('wo-brief'),woc=document.getElementById('wo-crumb');
var vm=document.getElementById('vmodal'),vmf=document.getElementById('vmodal-frame'),vmn=document.getElementById('vmodal-count');
var lb=document.getElementById('lbox'),lbi=document.getElementById('lbox-img'),lbn=document.getElementById('lbox-count');
document.querySelectorAll('[data-cat]').forEach(function(c){
var col=c.querySelector('.work-cat-collage');if(col&&/logo/i.test((c.querySelector('.work-cat-title2')||{}).textContent||''))col.classList.add('contain');
if(col&&!col.classList.contains('collage-ph')&&!col.querySelector('img')){
var imgs=c.querySelectorAll('.work-cat-detail img');
var n=Math.min(imgs.length,4);
if(n===1)col.classList.add('single');
for(var i=0;i<n;i++){var im=document.createElement('img');im.src=imgs[i].src;im.alt='';im.loading='lazy';col.appendChild(im);}}
var cnt=c.querySelector('.work-cat-count');
if(cnt){var n2=c.querySelectorAll('.work-cat-detail .work-tile').length;
if(c.querySelector('.collage-ph')){cnt.textContent='Coming soon';}
else{cnt.textContent=n2+(c.querySelector('.vtile')?(n2===1?' video':' videos'):(n2===1?' design':' designs'));}}
c.querySelector('.work-cat-cover').addEventListener('click',function(){
var det=c.querySelector('.work-cat-detail');
wot.textContent=c.querySelector('.work-cat-title2').textContent;wog.classList.toggle('logo-grid',/logo/i.test(wot.textContent));
wob.textContent=c.querySelector('.work-cat-brief').textContent;
woc.textContent='Work \u00b7 '+c.querySelector('.work-cat-title2').textContent;
var dg=det.querySelector('.work-grid');wog.innerHTML=dg?dg.innerHTML:det.innerHTML;
wog.querySelectorAll('.reveal').forEach(function(x){x.classList.remove('reveal');});
document.body.style.overflow='hidden';
wo.hidden=false;wo.scrollTop=0;});});
function closeWo(){wo.hidden=true;document.body.style.overflow='';}
document.querySelector('.wo-back').onclick=closeWo;
var items=[],idx=0,mode='',pre=[];
function collect(k){return Array.prototype.slice.call(wog.querySelectorAll(k==='v'?'.vtile':'.work-tile.has-img:not(.vtile)'));}
function preload(){pre=[];if(mode!=='v'||items.length<2)return;[1,-1].forEach(function(d){var t=items[(idx+d+items.length)%items.length];var v=document.createElement('video');v.preload='auto';v.muted=true;v.src='/v/'+t.getAttribute('data-video')+'.mp4';pre.push(v);});}
function showItem(){var t=items[idx];
if(mode==='v'){var id=t.getAttribute('data-video');var old=vmf.querySelector('video');if(old){old.pause();old.removeAttribute('src');old.load();}
vmf.innerHTML='';var v=document.createElement('video');v.controls=true;v.playsInline=true;v.setAttribute('playsinline','');v.setAttribute('webkit-playsinline','');v.preload='auto';v.poster='/v/'+id+'.jpg';v.src='/v/'+id+'.mp4';v.setAttribute('controlslist','nodownload');vmf.appendChild(v);
var p=v.play();if(p&&p.catch)p.catch(function(){});
vmn.textContent=(idx+1)+' / '+items.length;preload();}
else{var _im=t.querySelector('img');lbi.src=_im.getAttribute('data-full')||_im.src;lbn.textContent=(idx+1)+' / '+items.length;}
var multi=items.length>1;document.querySelectorAll('.nav-arrow').forEach(function(a){a.style.visibility=multi?'':'hidden';});}
function openAt(k,t){mode=k;items=collect(k);idx=Math.max(0,items.indexOf(t));(k==='v'?vm:lb).hidden=false;showItem();}
function step(d){if(items.length<2)return;idx=(idx+d+items.length)%items.length;showItem();}
wog.addEventListener('click',function(e){
var vt=e.target.closest('.vtile');
if(vt){openAt('v',vt);return;}
var t=e.target.closest('.work-tile.has-img');
if(t&&t.querySelector('img')){openAt('i',t);}});
function closeModals(){var v=vmf.querySelector('video');if(v){v.pause();v.removeAttribute('src');v.load();}vmf.innerHTML='';vm.hidden=true;lb.hidden=true;lbi.removeAttribute('src');pre=[];items=[];mode='';}
document.querySelectorAll('.vmodal-close').forEach(function(b){b.onclick=closeModals;});
document.querySelectorAll('.nav-arrow').forEach(function(b){b.onclick=function(e){e.stopPropagation();step(b.classList.contains('next')?1:-1);};});
[vm,lb].forEach(function(m){
m.addEventListener('click',function(e){if(e.target===m||e.target===vmf||e.target.classList.contains('vmodal-box'))closeModals();});
var sx=0,sy=0,ok=false;
m.addEventListener('touchstart',function(e){var t=e.touches[0];sx=t.clientX;sy=t.clientY;ok=e.touches.length===1;var v=e.target.tagName==='VIDEO';if(v){var r=e.target.getBoundingClientRect();if(t.clientY>r.bottom-64)ok=false;}},{passive:true});
m.addEventListener('touchend',function(e){if(!ok)return;var t=e.changedTouches[0],dx=t.clientX-sx,dy=t.clientY-sy;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.3){step(dx<0?1:-1);}ok=false;},{passive:true});});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeModals();closeWo();}
else if(!vm.hidden||!lb.hidden){if(e.key==='ArrowRight')step(1);else if(e.key==='ArrowLeft')step(-1);}});

(function(){var t=[['videos','tab-videos','panel-videos'],['photos','tab-photos','panel-photos']];function sel(n){t.forEach(function(x){var on=x[0]===n;document.getElementById(x[1]).setAttribute('aria-selected',on);document.getElementById(x[2]).hidden=!on;});}t.forEach(function(x){document.getElementById(x[1]).onclick=function(){sel(x[0]);history.replaceState(null,'','#'+x[0]);};});if(location.hash==='#photos')sel('photos');})();}
