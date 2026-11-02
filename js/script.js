(()=>{
'use strict';
const root=document.documentElement;
const store={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------------- i18n ---------------- */
const T={
ar:{nav_home:"الرئيسية",avatar_alt:"صورة عبد الرحمن الحوراني",nav_about:"نبذة عني",nav_projects:"مشاريعي",nav_contact:"تواصل معي",
hero_eyebrow:"BaristaWeb · مواقع للكافيهات والمشاريع الصغيرة",hero_hello:"مرحباً، أنا",hero_n1:"عبد الرحمن",hero_n2:"الحوراني",
hero_lead:"مبرمج ويب محترف. أبني للكافيهات والمشاريع الصغيرة مواقع <strong>تعرض المنيو بشكل يفتح النفس</strong>، ويطلب منها الزبون <strong>بكبسة زر</strong>.",
cta_work:"شوف مشاريعي",cta_talk:"تواصل معي",meta_avail:"متاح لمشاريع جديدة",meta_loc:"عمّان، الأردن",tag1:"منيو حي",tag2:"اطلب بكبسة زر",
about_eyebrow:"نبذة عني",about_title:"برمجة تشتغل عنك، وأنت مشغول بالزباين.",
about_p:"أنا عبد الرحمن، <strong>مبرمج ويب محترف</strong>. أحرص على تقديم أفضل الحلول اللي بتوفّر الوقت والجهد على الكافيهات والمشاريع الصغيرة: مواقع إلكترونية يطلب منها الزبون مباشرة، ومنيو معروض بشكل جذاب واحترافي.",
slogan:"لأنك بتستاهل، بنقدملك في <span class=\"bw\">BaristaWeb</span> أفضل المواقع لتعرض عليها شغلك بشكل احترافي، مش بس هيك! العميل بقدر يشتري من الموقع مباشرة <span class=\"click\">بكبسة زر!</span>",
svc_title:"المنيو تبعي",s1n:"منيو إلكتروني",s1v:"صور · أحجام · أسعار",s2n:"طلب مباشر",s2v:"سلة + واتساب",s3n:"لغتين",s4n:"تصميم متجاوب",s4v:"جوال · تابلت · حاسوب",s5n:"أمان وسرعة",
phone_cap:"حرّك الماوس على الجوال — الطلبات بالسلة:",
proj_eyebrow:"مشاريعي",proj_title:"كيكس عمّان: حلويات فاخرة، أونلاين.",proj_sub:"موقع متجر لمحل حلويات وتمر فاخر في عمّان: هوية ذهبية، منيو بأحجام وأسعار، وسلة شراء مباشرة.",
sh0:"الواجهة",sh1:"المنيو والسلة",sh2:"قصة المحل",sh3:"انستغرام",
tk_no:"طلب رقم #001",tk_title:"كيكس عمّان",tk_sub:"حلويات وتمر فاخر · عمّان",tk1:"واجهة فخمة بهوية ذهبية",tk2:"منيو بفلاتر وأحجام وأسعار",tk3:"سلة شراء مباشرة",tk4:"عربي / English",tk5:"معرض مربوط بانستغرام",tk_status:"الحالة",tk_visit:"زيارة الموقع",
c_eyebrow:"تواصل معي",c_title:"عندك كافيه أو مشروع صغير؟ خلينا نحكي عن موقعك.",c_sub:"احكيلي عن محلك، وأنا بقترح عليك أنسب موقع يعرض شغلك ويجيبلك طلبات.",
nav_pricing:"الباقات",pr_eyebrow:"الباقات",pr_title:"باقات واضحة، بدون مفاجآت.",pr_sub:"اختار الباقة اللي بتناسب مشروعك. نص المبلغ مقدّم لبدء العمل، والباقي بعد التسليم.",pr_cur:"دينار",pr_cta:"اطلب الباقة",pr_n1:"الباقة الأساسية",pr_n2:"الباقة الاحترافية",pr_d1:"لمحل بده منيو حلو ويستقبل طلبات على واتساب.",pr_d2:"لمشروع بده طلبات منظمة وأرقام بتساعده يكبر.",pr_pay1:"الدفع: 50 دينار مقدّم لبدء العمل، و50 دينار بعد انتهاء العمل",pr_pay2:"الدفع: 100 دينار مقدّم لبدء العمل، و100 دينار بعد انتهاء العمل",pr_t1:"التسليم خلال 5 أيام عمل",pr_t2:"التسليم خلال 14 يوم عمل",pr_r1:"جولتين تعديل",pr_r2:"3 جولات تعديل",pr_f1:"صفحة هبوط بسيطة تشمل شعار المحل",pr_f2a:"منيو جذاب لعرض الأصناف والأسعار بكل احترافية (لحد 40 صنف)",pr_f2b:"منيو جذاب لعرض الأصناف والأسعار بكل احترافية (لحد 80 صنف)",pr_f3:"زر طلب مباشر عبر واتساب",pr_f4:"تصميم متجاوب مع الجوال والتابلت والكمبيوتر",pr_f5:"إصلاح أي عطل فني لمدة سنة",pr_x1:"أتمتة كاملة للطلبات: سلة، والطلب بيوصلك مرتب وبينحفظ تلقائياً",pr_x2:"لوحة خاصة للمسؤولين: أكثر صنف مبيعاً، أوقات الذروة، والمبيعات الأسبوعية، عشان تحسّن منتجاتك",pr_note:"الدعم الفني بيشمل إصلاح الأعطال، مش تعديل المحتوى، وتعديل المنيو بعد التسليم بسعر رمزي. الدومين والاستضافة مش داخلين بالسعر وبينحسبوا حسب تكلفتهم الفعلية. الباقة الاحترافية بتحتاج اشتراك شهري رمزي لاستضافة السيرفر ولوحة التحكم.",
tr_badge:"عرض لأول 5 محلات",tr_title:"جرّب قبل ما تدفع",tr_sub:"بنعملك منيو تجريبي باسم محلك خلال 48 ساعة، ببلاش. شوفه على موبايلك وفرجيه لزباينك، وإذا عجبك بنكمّل.",tr_cta:"بدي منيو تجريبي",tr_t1:"منيو تجريبي باسم محلك جاهز خلال 48 ساعة",tr_t2:"الرابط شغّال لمدة أسبوع على استضافة BaristaWeb، وعليه علامة \"نسخة تجريبية\"",tr_t3:"ما في تسليم كود أو ملفات خلال فترة التجربة",tr_t4:"إذا اشتركت خلال الأسبوع، النسخة التجريبية بتصير موقعك ومعها خصم 10% على أي باقة",tr_t5:"بنستخدم شعار محلك بس بموافقتك",tr_t6:"العرض لأول 5 محلات فقط",
c_ig:"تواصل معي عبر انستغرام",c_wa:"تواصل عبر واتساب",copy:"نسخ",copied:"تم النسخ",f_name:"عبد الرحمن ياسر الحوراني",f_made:"صُنع في عمّان، بقهوة كثير.",
ph_brand:"BaristaWeb كافيه",ph_hi:"صباح الخير ☕",ph_cats:["الكل","قهوة","حلويات"],ph_items:[["سبانش لاتيه","حليب، إسبريسو، كراميل","3.25"],["كابتشينو","رغوة كثيفة، قوام ناعم","2.75"],["تشيز كيك فستق","فستق حلبي، قاعدة مقرمشة","4.50"]],ph_order:"اطلب بكبسة زر",ph_added:"أُضيف للسلة ✓"},
en:{nav_home:"Home",avatar_alt:"Photo of Abd Alrhman Hourani",nav_about:"About",nav_projects:"Projects",nav_contact:"Contact",
hero_eyebrow:"BaristaWeb · websites for cafés & small businesses",hero_hello:"Hi, I'm",hero_n1:"Abd Alrhman",hero_n2:"Hourani",
hero_lead:"Professional web developer. I build websites for cafés and small businesses that <strong>make the menu look irresistible</strong> and let customers <strong>order in one click</strong>.",
cta_work:"See my work",cta_talk:"Get in touch",meta_avail:"Available for new projects",meta_loc:"Amman, Jordan",tag1:"Live menu",tag2:"One-click order",
about_eyebrow:"About me",about_title:"Code that works for you while you serve customers.",
about_p:"I'm Abd Alrhman, a <strong>professional web developer</strong>. I focus on solutions that save cafés and small businesses time and effort: websites customers can order from directly, and menus presented in an attractive, professional way.",
slogan:"Because you deserve it, at <span class=\"bw\">BaristaWeb</span> we build you the best websites to showcase your work professionally. And that's not all: customers can buy straight from the site <span class=\"click\">in one click!</span>",
svc_title:"My menu",s1n:"Digital menu",s1v:"photos · sizes · prices",s2n:"Direct ordering",s2v:"cart + WhatsApp",s3n:"Two languages",s4n:"Responsive design",s4v:"phone · tablet · desktop",s5n:"Secure & fast",
phone_cap:"Move your cursor over the phone — items in cart:",
proj_eyebrow:"Projects",proj_title:"Keks Amman: luxury sweets, online.",proj_sub:"A storefront for a luxury sweets and dates shop in Amman: a gold identity, a menu with sizes and prices, and a direct-buy cart.",
sh0:"Homepage",sh1:"Menu & cart",sh2:"Our story",sh3:"Instagram",
tk_no:"Order #001",tk_title:"Keks Amman",tk_sub:"Luxury sweets & dates · Amman",tk1:"Premium gold-themed interface",tk2:"Menu with filters, sizes and prices",tk3:"Direct-buy cart",tk4:"Arabic / English",tk5:"Instagram-linked gallery",tk_status:"Status",tk_visit:"Visit the site",
c_eyebrow:"Contact",c_title:"Run a café or a small business? Let's talk about your website.",c_sub:"Tell me about your shop and I'll suggest the website that shows off your work and brings in orders.",
nav_pricing:"Pricing",pr_eyebrow:"Pricing",pr_title:"Clear packages, no surprises.",pr_sub:"Pick the package that fits your business. Half upfront to start, the rest on delivery.",pr_cur:"JOD",pr_cta:"Get this package",pr_n1:"Basic",pr_n2:"Pro",pr_d1:"For a shop that wants a great menu and orders on WhatsApp.",pr_d2:"For a business that wants organized orders and numbers to grow with.",pr_pay1:"Payment: 50 JOD upfront to start, 50 JOD on completion",pr_pay2:"Payment: 100 JOD upfront to start, 100 JOD on completion",pr_t1:"Delivered in 5 working days",pr_t2:"Delivered in 14 working days",pr_r1:"2 revision rounds",pr_r2:"3 revision rounds",pr_f1:"Simple landing page with your shop's logo",pr_f2a:"Attractive menu showing your items and prices professionally (up to 40 items)",pr_f2b:"Attractive menu showing your items and prices professionally (up to 80 items)",pr_f3:"Direct order button via WhatsApp",pr_f4:"Responsive on phone, tablet and desktop",pr_f5:"Any technical fault fixed for one year",pr_x1:"Full order automation: cart, orders arrive organized and saved automatically",pr_x2:"Private admin dashboard: best sellers, peak hours and weekly sales, to help you improve your products",pr_note:"Support covers fixing faults, not content changes; menu updates after delivery are available at a small fee. Domain and hosting are not included and are charged at cost. The Pro package needs a small monthly subscription for server and dashboard hosting.",
tr_badge:"First 5 shops only",tr_title:"Try before you pay",tr_sub:"We'll build a demo menu with your shop's name in 48 hours, free. See it on your phone, show it to your customers, and if you like it, we continue.",tr_cta:"I want a demo menu",tr_t1:"A demo menu with your shop's name, ready in 48 hours",tr_t2:"The link stays live for one week on BaristaWeb hosting, marked \"demo version\"",tr_t3:"No code or files are handed over during the trial",tr_t4:"Subscribe within the week and the demo becomes your site, plus 10% off any package",tr_t5:"We only use your shop's logo with your permission",tr_t6:"Offer limited to the first 5 shops",
c_ig:"Message me on Instagram",c_wa:"Chat on WhatsApp",copy:"Copy",copied:"Copied",f_name:"Abd Alrhman Yaser Hourani",f_made:"Made in Amman, with lots of coffee.",
ph_brand:"BaristaWeb Café",ph_hi:"Good morning ☕",ph_cats:["All","Coffee","Sweets"],ph_items:[["Spanish Latte","milk, espresso, caramel","3.25"],["Cappuccino","thick foam, silky body","2.75"],["Pistachio Cheesecake","Aleppo pistachio, crunchy base","4.50"]],ph_order:"Order in one click",ph_added:"Added to cart ✓"}
};
let lang=store.get('bw-lang')==='en'?'en':'ar';
const langBtn=document.getElementById('langBtn');
const langHooks=[];
function applyLang(l){
  lang=l;const d=T[l];
  root.lang=l;root.dir=l==='ar'?'rtl':'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.dataset.i18n;if(typeof d[k]==='string')el.textContent=d[k]});
  document.querySelectorAll('[data-i18n-alt]').forEach(el=>{const k=el.dataset.i18nAlt;if(d[k])el.alt=d[k]});
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{const k=el.dataset.i18nHtml;if(d[k])el.innerHTML=d[k]});
  langBtn.textContent=l==='ar'?'EN':'ع';
  langBtn.setAttribute('aria-label',l==='ar'?'Switch to English':'التبديل إلى العربية');
  store.set('bw-lang',l);langHooks.forEach(f=>f());
}
langBtn.addEventListener('click',()=>applyLang(lang==='ar'?'en':'ar'));
applyLang(lang);

/* ---------------- theme ---------------- */
const themeBtn=document.getElementById('themeBtn');
const themeHooks=[];
const saved=store.get('bw-theme');if(saved==='dark'||saved==='light')root.dataset.theme=saved;
const isDark=()=>root.dataset.theme?root.dataset.theme==='dark':matchMedia('(prefers-color-scheme: dark)').matches;
themeBtn.addEventListener('click',e=>{
  const next=isDark()?'light':'dark';
  const r=themeBtn.getBoundingClientRect();
  root.style.setProperty('--vx',(r.left+r.width/2)+'px');root.style.setProperty('--vy',(r.top+r.height/2)+'px');
  const go=()=>{root.dataset.theme=next;store.set('bw-theme',next);themeHooks.forEach(f=>f())};
  if(document.startViewTransition&&!reduce)document.startViewTransition(go);else go();
});
matchMedia('(prefers-color-scheme: dark)').addEventListener('change',()=>themeHooks.forEach(f=>f()));
const tok=n=>getComputedStyle(root).getPropertyValue(n).trim();

/* ---------------- nav ---------------- */
const menuBtn=document.getElementById('menuBtn'),nav=document.getElementById('navLinks');
menuBtn.addEventListener('click',()=>{const o=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',o)});
nav.addEventListener('click',e=>{if(e.target.closest('a')){nav.classList.remove('open');menuBtn.setAttribute('aria-expanded','false')}});
const secs=['home','about','projects','contact'].map(id=>document.getElementById(id));
const navA=[...nav.querySelectorAll('a')];
const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting)navA.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+en.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
secs.forEach(s=>io.observe(s));

/* ---------------- copy number ---------------- */
const copyBtn=document.getElementById('copyBtn'),numEl=document.getElementById('phoneNum');
copyBtn.addEventListener('click',()=>{
  const done=()=>{copyBtn.textContent=T[lang].copied;setTimeout(()=>copyBtn.textContent=T[lang].copy,1600)};
  const sel=()=>{const r=document.createRange();r.selectNodeContents(numEl);const s=getSelection();s.removeAllRanges();s.addRange(r)};
  try{navigator.clipboard.writeText('+962792008987').then(done,sel)}catch(e){sel()}
});

/* ---------------- project deck ---------------- */
const deck=document.getElementById('deck'),shots=[...deck.querySelectorAll('.shot')],thumbs=[...document.querySelectorAll('.thumb')],prog=document.getElementById('prog');
let cur=0,timer=null,t0=0,paused=false;const DUR=5000;
function layout(){
  const n=shots.length,s=root.dir==='rtl'?-1:1;
  shots.forEach((el,i)=>{
    let off=i-cur;if(off>n/2)off-=n;if(off<-n/2)off+=n;
    const a=Math.abs(off);
    el.classList.toggle('active',off===0);
    el.style.zIndex=10-a;
    el.style.opacity=a>1?0:(a?0.55:1);
    el.style.filter=a?'saturate(.6) blur(1px)':'none';
    el.style.pointerEvents=a>1?'none':'auto';
    el.style.transform=`translate3d(${s*off*-16}%,${a*-3}%,${a*-220}px) rotateY(${s*off*18}deg) scale(${1-a*.08})`;
  });
  thumbs.forEach((b,i)=>{b.classList.toggle('on',i===cur);b.setAttribute('aria-pressed',i===cur)});
}
function go(i){cur=(i+shots.length)%shots.length;t0=performance.now();layout()}
shots.forEach((el,i)=>{
  el.addEventListener('click',()=>{if(i!==cur)go(i)});
  el.addEventListener('pointermove',e=>{
    if(i!==cur||e.pointerType!=='mouse'||reduce)return;
    const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    el.style.transform=`translate3d(0,0,40px) rotateY(${x*10}deg) rotateX(${-y*8}deg)`;
    el.style.setProperty('--gx',(x+.5)*100+'%');el.style.setProperty('--gy',(y+.5)*100+'%');
  });
  el.addEventListener('pointerleave',()=>layout());
});
thumbs.forEach(b=>b.addEventListener('click',()=>go(+b.dataset.go)));
deck.addEventListener('pointerenter',()=>paused=true);deck.addEventListener('pointerleave',()=>{paused=false;t0=performance.now()});
langHooks.push(layout);
layout();
if(!reduce){t0=performance.now();(function tick(now){
  if(!paused){const p=Math.min((now-t0)/DUR,1);prog.style.width=(p*100)+'%';if(p>=1)go(cur+1)}
  requestAnimationFrame(tick)})(performance.now())}

/* ---------------- Three.js scenes ---------------- */
function webglOK(){try{const c=document.createElement('canvas');return !!(window.WebGLRenderingContext&&(c.getContext('webgl2')||c.getContext('webgl')))}catch(e){return false}}
if(!window.THREE||!webglOK()){
  document.getElementById('cupStage').insertAdjacentHTML('beforeend','<div class="fallback3d" aria-hidden="true">☕</div>');
  document.getElementById('phoneStage').insertAdjacentHTML('beforeend','<div class="fallback3d" aria-hidden="true">📱</div>');
  return;
}
const THREE_=window.THREE;
function makeRenderer(host){
  const r=new THREE_.WebGLRenderer({antialias:true,alpha:true,powerPreference:'high-performance'});
  r.setPixelRatio(Math.min(devicePixelRatio||1,2));
  if('outputEncoding' in r)r.outputEncoding=THREE_.sRGBEncoding;
  host.appendChild(r.domElement);return r;
}
function fit(r,cam,host){const w=host.clientWidth,h=host.clientHeight;if(!w||!h)return;r.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix()}
function visible(host,cb){let v=false;new IntersectionObserver(e=>{v=e[0].isIntersecting;cb(v)},{threshold:0}).observe(host);return()=>v}

/* ----- Scene 1: espresso cup, latte art, steam, orbiting beans ----- */
(function cupScene(){
  const host=document.getElementById('cupStage');
  const r=makeRenderer(host);
  const scene=new THREE_.Scene();
  const cam=new THREE_.PerspectiveCamera(34,1,.1,60);cam.position.set(0,2.4,6.6);cam.lookAt(0,.75,0);
  const hemi=new THREE_.HemisphereLight(0xfff1e0,0x2a1a10,.75);scene.add(hemi);
  const key=new THREE_.DirectionalLight(0xffe2b8,1.35);key.position.set(3,5,4);scene.add(key);
  const rim=new THREE_.PointLight(0x86cfc3,1.4,14);rim.position.set(-3,2.2,-2.5);scene.add(rim);
  const warm=new THREE_.PointLight(0xe2b065,.9,10);warm.position.set(2.5,.6,2.5);scene.add(warm);

  const rig=new THREE_.Group();scene.add(rig);
  const V=(x,y)=>new THREE_.Vector2(x,y);
  // cup body (outer + inner wall in one lathe)
  const cupPts=[V(0,0),V(.5,0),V(.6,.04),V(.7,.4),V(.8,.9),V(.86,1.12),V(.84,1.15),V(.8,1.13),V(.74,.92),V(.64,.42),V(.55,.14),V(0,.14)];
  const ceramic=new THREE_.MeshStandardMaterial({color:0xf7f1ea,roughness:.28,metalness:.05,side:THREE_.DoubleSide});
  const cup=new THREE_.Mesh(new THREE_.LatheGeometry(cupPts,96),ceramic);rig.add(cup);
  // gold rim
  const gold=new THREE_.MeshStandardMaterial({color:0xe2b065,roughness:.25,metalness:1});
  const rimRing=new THREE_.Mesh(new THREE_.TorusGeometry(.835,.016,12,120),gold);rimRing.rotation.x=Math.PI/2;rimRing.position.y=1.135;rig.add(rimRing);
  const band=new THREE_.Mesh(new THREE_.TorusGeometry(.66,.01,10,120),gold);band.rotation.x=Math.PI/2;band.position.y=.46;band.scale.set(1.02,1.02,1);rig.add(band);
  // handle
  const handle=new THREE_.Mesh(new THREE_.TorusGeometry(.27,.065,20,60,Math.PI*1.25),ceramic);
  handle.rotation.z=-Math.PI*.625;handle.position.set(.8,.6,0);rig.add(handle);
  // saucer
  const sPts=[V(0,-.1),V(1.0,-.1),V(1.38,.0),V(1.36,.04),V(1.0,-.03),V(.62,-.03),V(0,-.03)];
  const saucer=new THREE_.Mesh(new THREE_.LatheGeometry(sPts,96),ceramic);rig.add(saucer);
  const sRim=new THREE_.Mesh(new THREE_.TorusGeometry(1.37,.012,10,140),gold);sRim.rotation.x=Math.PI/2;sRim.position.y=.03;rig.add(sRim);
  // latte art
  const lc=document.createElement('canvas');lc.width=lc.height=512;const g=lc.getContext('2d');
  (function latte(){
    const rg=g.createRadialGradient(256,256,30,256,256,256);rg.addColorStop(0,'#8a5530');rg.addColorStop(.7,'#6a3d1d');rg.addColorStop(1,'#3e220f');
    g.fillStyle=rg;g.fillRect(0,0,512,512);
    g.globalAlpha=.25;for(let i=0;i<220;i++){g.fillStyle=i%2?'#c48b55':'#4a2a12';g.beginPath();g.arc(Math.random()*512,Math.random()*512,Math.random()*3,0,7);g.fill()}g.globalAlpha=1;
    g.fillStyle='#f6e6cf';
    // stacked tulip
    const blob=(cx,cy,w,h)=>{g.beginPath();g.ellipse(cx,cy,w,h,0,0,Math.PI*2);g.fill()};
    blob(256,330,120,62);g.fillStyle='#7a4a26';blob(256,318,96,46);g.fillStyle='#f6e6cf';
    blob(256,262,98,52);g.fillStyle='#7a4a26';blob(256,252,76,38);g.fillStyle='#f6e6cf';
    // heart top
    g.beginPath();g.moveTo(256,232);g.bezierCurveTo(256,170,170,150,170,205);g.bezierCurveTo(170,240,220,250,256,270);
    g.bezierCurveTo(292,250,342,240,342,205);g.bezierCurveTo(342,150,256,170,256,232);g.fill();
    // pull-through line
    g.strokeStyle='#f6e6cf';g.lineWidth=5;g.beginPath();g.moveTo(256,150);g.lineTo(256,400);g.stroke();
    g.strokeStyle='rgba(246,230,207,.35)';g.lineWidth=10;g.beginPath();g.arc(256,256,236,0,7);g.stroke();
  })();
  const latteTex=new THREE_.CanvasTexture(lc);if('encoding' in latteTex)latteTex.encoding=THREE_.sRGBEncoding;
  const coffee=new THREE_.Mesh(new THREE_.CircleGeometry(.765,96),new THREE_.MeshStandardMaterial({map:latteTex,roughness:.35}));
  coffee.rotation.x=-Math.PI/2;coffee.position.y=1.0;rig.add(coffee);
  // contact shadow
  const sc=document.createElement('canvas');sc.width=sc.height=128;const sg=sc.getContext('2d');
  const sr=sg.createRadialGradient(64,64,0,64,64,64);sr.addColorStop(0,'rgba(0,0,0,.45)');sr.addColorStop(1,'rgba(0,0,0,0)');sg.fillStyle=sr;sg.fillRect(0,0,128,128);
  const shadow=new THREE_.Mesh(new THREE_.PlaneGeometry(3.6,3.6),new THREE_.MeshBasicMaterial({map:new THREE_.CanvasTexture(sc),transparent:true,depthWrite:false}));
  shadow.rotation.x=-Math.PI/2;shadow.position.y=-.11;rig.add(shadow);
  // beans
  const beanGeo=new THREE_.SphereGeometry(.13,28,18);beanGeo.scale(1,.68,.52);
  const beanMat=new THREE_.MeshStandardMaterial({color:0x4a2814,roughness:.42,metalness:.1});
  const creaseMat=new THREE_.MeshBasicMaterial({color:0x1c0d05});
  const beans=[];const orbit=new THREE_.Group();scene.add(orbit);
  for(let i=0;i<14;i++){
    const b=new THREE_.Group();
    b.add(new THREE_.Mesh(beanGeo,beanMat));
    const c=new THREE_.Mesh(new THREE_.TorusGeometry(.085,.008,6,30,Math.PI),creaseMat);c.position.z=.066;c.rotation.z=Math.PI/2;c.scale.set(1,.9,1);b.add(c);
    const ang=i/14*Math.PI*2,rad=1.9+Math.random()*.6;
    b.userData={ang,rad,y:.2+Math.random()*1.9,sp:.15+Math.random()*.15,rx:Math.random()*3,ry:Math.random()*3,bob:Math.random()*6};
    b.scale.setScalar(.8+Math.random()*.5);orbit.add(b);beans.push(b);
  }
  // steam
  const stc=document.createElement('canvas');stc.width=stc.height=64;const stg=stc.getContext('2d');
  const st=stg.createRadialGradient(32,32,0,32,32,32);st.addColorStop(0,'rgba(255,255,255,1)');st.addColorStop(1,'rgba(255,255,255,0)');stg.fillStyle=st;stg.fillRect(0,0,64,64);
  const steamTex=new THREE_.CanvasTexture(stc);const puffs=[];
  for(let i=0;i<46;i++){
    const m=new THREE_.SpriteMaterial({map:steamTex,transparent:true,depthWrite:false,opacity:0});
    const s=new THREE_.Sprite(m);s.userData={t:Math.random(),x:(Math.random()-.5)*.6,z:(Math.random()-.5)*.6,sp:.12+Math.random()*.1,ph:Math.random()*6};
    rig.add(s);puffs.push(s);
  }
  function paint(){
    const dark=isDark();
    ceramic.color.set(dark?0x231a16:0xf8f2eb);ceramic.roughness=dark?.22:.3;
    gold.color.set(tok('--crema')||'#e2b065');
    hemi.intensity=dark?.55:.85;key.intensity=dark?1.25:1.1;rim.intensity=dark?2.2:.9;
    shadow.material.opacity=dark?.9:.55;
    puffs.forEach(p=>p.material.color.set(dark?0xf3e9de:0x9b8676));
    rig.userData.steamMax=dark?.16:.22;
  }
  paint();themeHooks.push(paint);

  let tx=0,ty=0,cx=0,cy=0,drag=false,lx=0,spin=0,vel=0;
  host.addEventListener('pointermove',e=>{const b=host.getBoundingClientRect();tx=((e.clientX-b.left)/b.width-.5);ty=((e.clientY-b.top)/b.height-.5);
    if(drag){vel=(e.clientX-lx)*.01;spin+=vel;lx=e.clientX}});
  host.addEventListener('pointerdown',e=>{drag=true;lx=e.clientX;host.style.cursor='grabbing'});
  addEventListener('pointerup',()=>{drag=false;host.style.cursor=''});
  host.addEventListener('pointerleave',()=>{tx=0;ty=0});

  const ro=new ResizeObserver(()=>fit(r,cam,host));ro.observe(host);fit(r,cam,host);
  let on=true;visible(host,v=>on=v);
  const clock=new THREE_.Clock();
  function frame(){
    const dt=Math.min(clock.getDelta(),.05),t=clock.elapsedTime;
    cx+=(tx-cx)*.05;cy+=(ty-cy)*.05;
    if(!drag){vel*=.95;spin+=vel+dt*.18}
    rig.rotation.y=spin+cx*.6;rig.rotation.x=cy*.18;rig.position.y=Math.sin(t*.8)*.05;
    orbit.rotation.y=-t*.12;orbit.rotation.x=cy*.15;
    beans.forEach(b=>{const u=b.userData;const a=u.ang;b.position.set(Math.cos(a)*u.rad,u.y+Math.sin(t*.9+u.bob)*.12,Math.sin(a)*u.rad);
      b.rotation.set(u.rx+t*u.sp,u.ry+t*u.sp*1.3,0)});
    const max=rig.userData.steamMax;
    puffs.forEach(p=>{const u=p.userData;u.t+=dt*u.sp;if(u.t>1)u.t-=1;
      const y=1.05+u.t*1.9;p.position.set(u.x*(1-u.t*.4)+Math.sin(t*1.3+u.ph+u.t*4)*.18*u.t,y,u.z+Math.cos(t+u.ph)*.1*u.t);
      const sc=.25+u.t*.9;p.scale.set(sc,sc,1);p.material.opacity=Math.sin(u.t*Math.PI)*max});
    r.render(scene,cam);
  }
  if(reduce){frame();themeHooks.push(()=>r.render(scene,cam));return}
  (function loop(){requestAnimationFrame(loop);if(on&&!document.hidden)frame()})();
})();

/* ----- Scene 2: phone with a live café menu ----- */
(function phoneScene(){
  const host=document.getElementById('phoneStage'),countEl=document.getElementById('cartCount');
  const r=makeRenderer(host);
  const scene=new THREE_.Scene();
  const cam=new THREE_.PerspectiveCamera(30,4/5,.1,50);cam.position.set(0,0,8.2);
  scene.add(new THREE_.HemisphereLight(0xffffff,0x3a2a20,.9));
  const key=new THREE_.DirectionalLight(0xfff0dd,1.1);key.position.set(-3,4,5);scene.add(key);
  const rim=new THREE_.PointLight(0x86cfc3,2,12);rim.position.set(3,-1,-2);scene.add(rim);
  const W=1.6,H=3.25,R=.26,D=.12;
  const sh=new THREE_.Shape();
  sh.moveTo(-W/2+R,-H/2);sh.lineTo(W/2-R,-H/2);sh.quadraticCurveTo(W/2,-H/2,W/2,-H/2+R);sh.lineTo(W/2,H/2-R);sh.quadraticCurveTo(W/2,H/2,W/2-R,H/2);
  sh.lineTo(-W/2+R,H/2);sh.quadraticCurveTo(-W/2,H/2,-W/2,H/2-R);sh.lineTo(-W/2,-H/2+R);sh.quadraticCurveTo(-W/2,-H/2,-W/2+R,-H/2);
  const bodyGeo=new THREE_.ExtrudeGeometry(sh,{depth:D,bevelEnabled:true,bevelThickness:.04,bevelSize:.04,bevelSegments:6,curveSegments:24});bodyGeo.center();
  const bodyMat=new THREE_.MeshStandardMaterial({color:0x2a201b,roughness:.3,metalness:.7});
  const phone=new THREE_.Group();scene.add(phone);
  phone.add(new THREE_.Mesh(bodyGeo,bodyMat));
  // rounded screen via alpha-shaped canvas
  const cw=600,ch=1240;const sc=document.createElement('canvas');sc.width=cw;sc.height=ch;const c=sc.getContext('2d');
  const tex=new THREE_.CanvasTexture(sc);if('encoding' in tex)tex.encoding=THREE_.sRGBEncoding;tex.anisotropy=4;
  const screen=new THREE_.Mesh(new THREE_.PlaneGeometry(W-.1,H-.1),new THREE_.MeshBasicMaterial({map:tex,transparent:true}));
  screen.position.z=D/2+.045;phone.add(screen);
  const glassMat=new THREE_.MeshStandardMaterial({color:0xffffff,transparent:true,opacity:.06,roughness:0,metalness:.9});
  const glass=new THREE_.Mesh(new THREE_.PlaneGeometry(W-.1,H-.1),glassMat);glass.position.z=D/2+.05;phone.add(glass);

  let count=0,active=-1,flash=0,pulse=0;
  function rr(x,y,w,h,r){c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath()}
  function draw(){
    const d=T[lang],rtl=lang==='ar',dark=isDark();
    const bg=dark?'#120d0a':'#fbf6f0',fg=dark?'#f3e9de':'#22170f',mu=dark?'#a8998c':'#7a6a5e',card=dark?'#1d1612':'#ffffff',acc=dark?'#e2b065':'#a96b22',stm=dark?'#86cfc3':'#2c7a70',ln=dark?'rgba(243,233,222,.08)':'rgba(34,23,15,.08)';
    c.clearRect(0,0,cw,ch);c.save();rr(0,0,cw,ch,58);c.clip();
    c.fillStyle=bg;c.fillRect(0,0,cw,ch);
    const gl=c.createRadialGradient(cw*.8,0,10,cw*.8,0,500);gl.addColorStop(0,dark?'rgba(226,176,101,.18)':'rgba(169,107,34,.12)');gl.addColorStop(1,'rgba(0,0,0,0)');c.fillStyle=gl;c.fillRect(0,0,cw,ch);
    const F=(w,s)=>`${w} ${s}px "IBM Plex Sans Arabic","Segoe UI",sans-serif`;
    c.direction=rtl?'rtl':'ltr';
    const L=40,Rr=cw-40,start=rtl?Rr:L,end=rtl?L:Rr;
    // status + island
    c.fillStyle='#000';rr(cw/2-80,22,160,40,20);c.fill();
    c.fillStyle=fg;c.font=F(600,24);c.textAlign='left';c.direction='ltr';c.fillText('9:41',L+6,52);c.textAlign='right';c.fillText('●●● 5G',Rr-6,52);c.direction=rtl?'rtl':'ltr';
    // header
    c.textAlign=rtl?'right':'left';c.fillStyle=mu;c.font=F(400,26);c.fillText(d.ph_hi,start,130);
    c.fillStyle=fg;c.font=F(700,40);c.fillText(d.ph_brand,start,180);
    // cart icon
    const cx=end+(rtl?30:-30),cy=150;c.strokeStyle=fg;c.lineWidth=4;c.beginPath();c.moveTo(cx-20,cy-14);c.lineTo(cx-14,cy+14);c.lineTo(cx+16,cy+14);c.lineTo(cx+22,cy-8);c.lineTo(cx-17,cy-8);c.stroke();
    c.beginPath();c.arc(cx-8,cy+24,4,0,7);c.arc(cx+10,cy+24,4,0,7);c.fillStyle=fg;c.fill();
    c.fillStyle=acc;c.beginPath();c.arc(cx+20,cy-20,17+pulse*6,0,7);c.fill();c.fillStyle=dark?'#1a120c':'#fff';c.font=F(700,20);c.textAlign='center';c.direction='ltr';c.fillText(String(count),cx+20,cy-13);c.direction=rtl?'rtl':'ltr';
    // chips
    let x=start;c.font=F(500,24);
    d.ph_cats.forEach((t,i)=>{const w=c.measureText(t).width+44;const bx=rtl?x-w:x;rr(bx,220,w,52,26);
      c.fillStyle=i===0?fg:'transparent';c.fill();c.strokeStyle=ln;c.lineWidth=2;if(i)c.stroke();
      c.fillStyle=i===0?bg:mu;c.textAlign='center';c.fillText(t,bx+w/2,255);x+=rtl?-(w+12):(w+12)});
    // hero card
    const hg=c.createLinearGradient(0,300,cw,520);hg.addColorStop(0,dark?'#3a2414':'#6b4222');hg.addColorStop(1,dark?'#1d1410':'#2b1b11');
    rr(L,300,cw-80,200,30);c.fillStyle=hg;c.fill();
    c.fillStyle='rgba(255,255,255,.08)';c.beginPath();c.arc(rtl?L+90:Rr-90,400,120,0,7);c.fill();
    c.fillStyle='#f6e6cf';c.font=F(700,34);c.textAlign=rtl?'right':'left';c.fillText(rtl?'عرض الصباح':'Morning deal',rtl?Rr-30:L+30,380);
    c.font=F(400,24);c.fillStyle='rgba(246,230,207,.75)';c.fillText(rtl?'قهوة + كرواسون · JD 3.00':'Coffee + croissant · JD 3.00',rtl?Rr-30:L+30,425);
    c.font='64px serif';c.textAlign='center';c.fillText('☕',rtl?L+90:Rr-90,425);
    // items
    d.ph_items.forEach((it,i)=>{
      const y=530+i*160,on=i===active;
      rr(L,y,cw-80,140,28);c.fillStyle=card;c.fill();c.strokeStyle=on?acc:ln;c.lineWidth=on?3:2;c.stroke();
      // thumb
      const tx=rtl?Rr-120:L+20;rr(tx,y+20,100,100,22);c.fillStyle=[dark?'#3b2516':'#e9d6c0',dark?'#2a2f2c':'#d9e8e4',dark?'#2f3a20':'#e3ecd2'][i];c.fill();
      c.font='54px serif';c.textAlign='center';c.fillStyle=fg;c.fillText(['🥤','☕','🍰'][i],tx+50,y+90);
      const txs=rtl?tx-24:tx+124;c.textAlign=rtl?'right':'left';
      c.fillStyle=fg;c.font=F(600,30);c.fillText(it[0],txs,y+62);
      c.fillStyle=mu;c.font=F(400,21);c.fillText(it[1],txs,y+96);
      c.fillStyle=acc;c.font=F(700,24);c.direction='ltr';c.textAlign=rtl?'right':'left';c.fillText('JD '+it[2],txs,y+126);c.direction=rtl?'rtl':'ltr';
      // plus
      const px=rtl?L+46:Rr-46,py=y+70;c.fillStyle=on?stm:acc;c.beginPath();c.arc(px,py,28+(on?flash*6:0),0,7);c.fill();
      c.strokeStyle=dark?'#120d0a':'#fff';c.lineWidth=5;c.beginPath();c.moveTo(px-11,py);c.lineTo(px+11,py);c.moveTo(px,py-11);c.lineTo(px,py+11);c.stroke();
    });
    // order button
    const by=1040;if(pulse>0){c.strokeStyle=acc;c.globalAlpha=1-pulse;c.lineWidth=4;rr(L-pulse*14,by-pulse*14,cw-80+pulse*28,100+pulse*28,50+pulse*14);c.stroke();c.globalAlpha=1}
    rr(L,by,cw-80,100,50);c.fillStyle=acc;c.fill();
    c.fillStyle=dark?'#1a120c':'#fff8ee';c.font=F(700,32);c.textAlign='center';c.fillText(flash>.05?d.ph_added:d.ph_order,cw/2,by+62);
    c.fillStyle=mu;c.globalAlpha=.6;rr(cw/2-80,ch-34,160,8,4);c.fill();c.globalAlpha=1;
    c.restore();tex.needsUpdate=true;
  }
  function paint(){bodyMat.color.set(isDark()?0x2a201b:0xd9cfc6);bodyMat.metalness=isDark()?.7:.5;draw()}
  const fontsReady=(document.fonts&&document.fonts.load)?Promise.all([document.fonts.load('600 30px "IBM Plex Sans Arabic"'),document.fonts.load('700 30px "IBM Plex Sans Arabic"')]).catch(()=>{}):Promise.resolve();
  paint();fontsReady.then(paint);themeHooks.push(paint);langHooks.push(draw);

  let tx=0,ty=0,cxs=0,cys=0;
  host.addEventListener('pointermove',e=>{const b=host.getBoundingClientRect();tx=(e.clientX-b.left)/b.width-.5;ty=(e.clientY-b.top)/b.height-.5});
  host.addEventListener('pointerleave',()=>{tx=0;ty=0});
  const ro=new ResizeObserver(()=>fit(r,cam,host));ro.observe(host);fit(r,cam,host);
  let on=true;visible(host,v=>on=v);
  const clock=new THREE_.Clock();let nextTap=1.5;
  function frame(){
    const dt=Math.min(clock.getDelta(),.05),t=clock.elapsedTime;
    cxs+=(tx-cxs)*.06;cys+=(ty-cys)*.06;
    phone.rotation.y=Math.sin(t*.5)*.28+cxs*.9;phone.rotation.x=-.08+Math.sin(t*.7)*.05+cys*.5;phone.rotation.z=Math.sin(t*.4)*.03;
    phone.position.y=Math.sin(t*.9)*.07;
    let dirty=false;
    if(t>nextTap){active=(active+1)%3;count=count>=9?1:count+1;countEl.textContent=count;flash=1;pulse=1;nextTap=t+2.6;dirty=true}
    if(flash>0){flash=Math.max(0,flash-dt*1.4);dirty=true}
    if(pulse>0){pulse=Math.max(0,pulse-dt*1.1);dirty=true}
    if(dirty)draw();
    r.render(scene,cam);
  }
  if(reduce){frame();themeHooks.push(()=>r.render(scene,cam));langHooks.push(()=>r.render(scene,cam));return}
  (function loop(){requestAnimationFrame(loop);if(on&&!document.hidden)frame()})();
})();
})();
