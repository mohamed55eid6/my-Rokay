const $=s=>document.querySelector(s), wait=ms=>new Promise(r=>setTimeout(r,ms));
const LETTER=[
"إلى Rokay ❤️",
"عارفة يا رُقيّة، أنا ساعات كتير ببقى جوايا كلام ومشاعر كتير نفسي أحكيهالك، بس مهما اتكلمت بحس إن الكلام مش كفاية يوصف إنتِ بقيتي إيه بالنسبالي، ولا يقدر يشرح مكانتك جوا قلبي.",
"أنا مش عايزك تكوني مجرد شخص في حياتي وخلاص، أنا عايزك تكوني أجمل جزء فيها، الشخص اللي أشاركه تفاصيل يومي، وأحكيله عن أحلامي وطموحاتي، وأرجعله لما أكون تعبان من الدنيا، وألاقي معاه راحتي وهدوئي.",
"أنا بحب فيكي حاجات يمكن إنتِ نفسك مش واخدة بالك منها، بحب طريقتك في الكلام، وتفاصيلك الصغيرة، وضحكتك، واهتمامك، وحتى الحاجات البسيطة اللي ممكن تعتبريها عادية، بالنسبالي ليها معنى كبير أوي.",
"عارفة إيه اللي بتمناه؟ إني أفضل الشخص اللي لما تكوني زعلانة تلاقيه جنبك، ولما تكوني فرحانة يكون أول واحد يفرحلك من قلبه، ولما الدنيا تضغط عليكي تلاقي حد يسمعك من غير ما يحكم عليكي، ويفهم سكوتك قبل كلامك.",
"أنا مش بوعدك إن حياتنا هتكون كلها وردية، ولا إننا عمرنا ما هنختلف، لكن أوعدك إني أحاول دايمًا أفهمك، وأسمعك، وأحترم مشاعرك، وإن أي مشكلة بينا نواجهها بالكلام والتفاهم مش بالبعد والسكوت.",
"أنا عايز أعرف كل تفاصيلك، أحلامك اللي نفسك تحققيها، مخاوفك، الحاجات اللي بتفرح قلبك، والحاجات اللي بتزعلك حتى لو كانت صغيرة. عايز أعرف إيه اللي بيخلي عينيكي تلمع من الفرحة، وإيه اللي ممكن يخلي يومك أحسن.",
"ونفسي ييجي يوم نبص فيه لورا ونفتكر كل البدايات والضحكات والكلام الطويل والمواقف الصغيرة، ونكون فخورين إننا اخترنا نحافظ على حاجة حلوة بينا.",
"يا Rokay، أنا مش شايفك مجرد حكاية حب حلوة، أنا شايف فيكي إنسانة أتمنى أشاركها مستقبلي، وأحقق معاها أحلامنا، وأبني معاها حياة أساسها الحب والاحترام والأمان والتفاهم.",
"ولو في حاجة واحدة عايزك تتأكدي منها، فهي إنك مش محتاجة تكوني مثالية علشان تكوني غالية عندي، كوني على طبيعتك، بتفاصيلك وضحكتك وعفويتك، لأن جمال الإنسان الحقيقي في إنه يكون نفسه من غير خوف.",
"بحب وجودك في حياتي، وبحب إن فيه إنسانة اسمها رُقيّة بقت ليها مكانة مميزة في قلبي، وبحب فكرة إن لسه قدامنا ذكريات كتير ممكن نصنعها سوا.",
"ربنا يديم عليكي ضحكتك، ويحققلك كل اللي نفسك فيه، وأفضل دايمًا أشوفك مبسوطة وناجحة وفخورة بنفسك.",
"بحبك يا Rokay، ومهما كتبت ومهما قلت، هيفضل جوايا كلام كتير أوي ليكي، لأن بعض المشاعر أكبر من إنها تتوصف في رسالة. ❤️🥹"];
const HEARTS=["بحب ضحكتك اللي بتخليني أنسى أي حاجة وحشة.","بحب طريقتك وتفاصيلك الصغيرة.","بحب كلامك حتى لو كان عن أبسط الحاجات.","بحب وجودك في يومي.","بحب طيبتك وقلبك الجميل.","بحب إنك مختلفة ومميزة بطريقتك.","بحب اللحظات اللي بتجمعنا.","بحب أشوفك مبسوطة وناجحة.","بحب إنك بتخليني أبتسم من غير سبب.","بحب إنك Rokay وبس. ❤️"];
const NOTES=["لو الدنيا ضاقت، افتكري إن فيه حد قلبه دايمًا ليكي مفتوح. 🌷","اسمك لوحده بيخلي يومي أخف وأحلى. ✨","مهما كان يومك تقيل، ابتسامتك بتفكرني إن الدنيا لسه بخير. 🌙","أنا فخور بيكي أكتر مما تتخيلي، حتى في أصغر خطواتك. 💫","كوني متأكدة إنك دايمًا أول دعوة في قلبي. 🤍","أحلى حاجة في أيامي إنها فيها اسمك. 🌹","خدي وقتك، وأنا هنا جنبك بالراحة وبالصبر. 🕊️","وجودك هو الهدية اللي مكنتش أعرف إني محتاجها. 🎁"];
const STORY=["إحنا مش مجرد حكاية حب بدأت وخلاص، إحنا لسه في أول الطريق، ولسه قدامنا أحلام وذكريات ومواقف كتير مستنيانا.","هنكتب قصتنا سطر ورا سطر، ونخلي كل يوم فيها حكاية جديدة، وكل ضحكة ذكرى، وكل لحظة دليل إن أجمل الحكايات لسه بتبدأ.","وهنكتب حكايتنا بحبنا وإيدينا، لحد ما ييجي يوم نبص ورا ونقول: دي كانت حكايتنا، والناس كلها تشهد على جمالها.. ولسه أجمل فصولها جاية! ❤️🥹"];

/* starfield */
function stars(cv,n,speed){const c=cv.getContext('2d');let w,h,S=[];
 const fit=()=>{w=cv.width=innerWidth;h=cv.height=innerHeight};fit();addEventListener('resize',fit);
 for(let i=0;i<n;i++)S.push({x:Math.random(),y:Math.random(),r:Math.random()*1.5+.2,p:Math.random()*6,v:Math.random()*speed+.00002});
 (function f(t){c.clearRect(0,0,w,h);for(const s of S){s.y-=s.v;if(s.y<0)s.y=1;
  c.globalAlpha=.4+.6*Math.abs(Math.sin(t/900+s.p));c.fillStyle=s.r>1.2?'#ffb3dd':'#fff';c.beginPath();c.arc(s.x*w,s.y*h,s.r,0,7);c.fill()}requestAnimationFrame(f)})(0)}
stars($('#bg'),matchMedia('(max-width:600px)').matches?400:1200,.00004);

/* particles */
const fx=$('#fx');
function drop(ch,cls){const e=document.createElement('i');e.textContent=ch;const d=5+Math.random()*6;
 e.style.cssText=`left:${Math.random()*100}vw;font-size:${12+Math.random()*20}px;animation-duration:${d}s;opacity:${.5+Math.random()*.5}`;
 if(cls==='up'){e.style.top='105vh';e.style.animationName='rise'}
 fx.appendChild(e);setTimeout(()=>e.remove(),d*1000)}
let petals;function startFx(){if(petals)return;petals=setInterval(()=>{drop(['🌹','🌸','🩷'][Math.random()*3|0]);drop(['❤','💗','💜'][Math.random()*3|0],'up')},700)}
function burst(n=40){for(let i=0;i<n;i++)setTimeout(()=>drop(['❤','🌹','✨','💖'][i%4],i%2?'up':''),i*40)}

/* music (generated softly with WebAudio, no file needed) */
let ac,master,playing=false,loop;
function note(f,t,d){const o=ac.createOscillator(),g=ac.createGain();o.type='sine';o.frequency.value=f;
 g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.08,t+d*.3);g.gain.linearRampToValueAtTime(0,t+d);o.connect(g).connect(master);o.start(t);o.stop(t+d)}
function seq(){const ch=[[220,261.6,329.6],[174.6,220,261.6],[261.6,329.6,392],[196,246.9,293.7]];let i=0;
 const play=()=>{const t=ac.currentTime;ch[i%4].forEach((f,k)=>note(f,t+k*.35,4));note(ch[i%4][0]*2,t+1.4,2.5);note(ch[i%4][2]*2,t+2.2,2);i++};play();loop=setInterval(play,3500)}
function toggleMusic(on){const b=$('#music');
 if(on===undefined)on=!playing;
 if(on){if(!ac){ac=new (window.AudioContext||window.webkitAudioContext)();master=ac.createGain();master.gain.value=.9;master.connect(ac.destination);seq()}ac.resume();playing=true}
 else{if(ac)ac.suspend();playing=false}
 b.classList.toggle('on',playing);b.firstElementChild.className='fa-solid '+(playing?'fa-pause':'fa-play')}
$('#music').onclick=()=>toggleMusic();

/* intro */
$('#open').onclick=()=>{const i=$('#intro');burst(70);startFx();toggleMusic(true);
 i.style.transition='opacity 1.5s';i.style.opacity=0;
 setTimeout(()=>{i.remove();$('#world').hidden=false;document.body.classList.remove('locked');scrollTo(0,0);watch()},1500)};

/* letter */
let typed=false;
async function openEnv(){const e=$('#env');if(typed)return;typed=true;e.classList.add('open');burst(30);$('.hint').remove();
 await wait(1500);const box=$('#letterFull');box.hidden=false;box.classList.add('pop');
 for(const [k,t] of LETTER.entries()){const p=document.createElement('p');box.appendChild(p);p.classList.add('cur');
  for(let i=0;i<=t.length;i++){p.textContent=t.slice(0,i);await wait(k===0?60:22);if(i%60===0)p.scrollIntoView({block:'center',behavior:'smooth'})}
  p.classList.remove('cur');await wait(300)}
 await wait(800);$('#photo').scrollIntoView()}
$('#env').onclick=openEnv;$('#env').onkeydown=e=>{if(e.key==='Enter')openEnv()};

/* photo: uses photo.jpg; if absent, lets her pick the real photo */
const pic=$('#pic'),pick=$('#pick');
pic.onerror=()=>{pic.style.display='none';pick.hidden=false};
pick.querySelector('input').onchange=e=>{const f=e.target.files[0];if(!f)return;pic.src=URL.createObjectURL(f);pic.style.display='block';pick.hidden=true};
pick.onclick=e=>{if(e.target.tagName!=='INPUT')pick.querySelector('input').click()};

/* hearts */
HEARTS.forEach((t,i)=>{const c=document.createElement('div');c.className='col-auto';
 c.innerHTML=`<button class="hcard" style="animation-delay:${i*.15}s">♥<b>${i+1}</b></button>`;
 c.firstChild.onclick=()=>{const m=$('#heartMsg');m.textContent=t;m.classList.remove('pop');void m.offsetWidth;m.classList.add('pop');burst(8)};
 $('#hearts').appendChild(c)});

/* notes */
NOTES.forEach(t=>{const c=document.createElement('div');c.className='col-auto';
 c.innerHTML='<button class="note">💌</button>';
 c.firstChild.onclick=function(){const m=$('#noteMsg');m.textContent=t;m.classList.remove('pop');void m.offsetWidth;m.classList.add('pop');this.textContent='💗';this.classList.add('read')};
 $('#notes #noteGrid').appendChild(c)});

/* reveal on scroll */
function watch(){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');if(e.target.closest('#photo'))burst(25)}}),{threshold:.3});
 document.querySelectorAll('.reveal').forEach(r=>io.observe(r))}

/* finale */
$('#begin').onclick=async()=>{const s=$('#story');s.hidden=false;document.body.classList.add('locked');
 stars($('#galaxy'),1800,.00012);await wait(50);s.classList.add('show');startFx();
 const T=$('#sTitle'),L=$('#sLine'),E=$('#sEnd');T.style.opacity=0;T.style.transition='opacity 2.5s';
 await wait(3500);T.style.opacity=1;await wait(4500);T.style.opacity=0;await wait(2000);
 for(const line of STORY){L.textContent=line;L.style.opacity=1;burst(14);await wait(line===STORY[2]?11000:8500);L.style.opacity=0;await wait(2200)}
 burst(120);Object.assign(E.style,{inset:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'1.5rem'});
 await wait(100);E.style.opacity=1;document.querySelector('.bigheart').style.opacity=.5;
 setInterval(()=>burst(20),4000)};
