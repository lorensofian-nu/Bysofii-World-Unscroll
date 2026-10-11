const T=[
{n:"Tecnología",s:"Tecnología",e:"💻",subs:["Redes sociales","Ciberseguridad","Privacidad de datos","Realidad virtual","Internet de las cosas","Energías limpias"]},
{n:"Programación",s:"Programación",e:"⌨️",subs:["Algoritmos","Bases de datos","HTML y CSS","Git y control de versiones","Programación orientada a objetos","APIs"]},
{n:"Naturaleza",s:"Naturaleza",e:"🌿",subs:["Bosques","Arrecifes de coral","Polinizadores","El ciclo del agua","Desiertos","Especies en peligro"]},
{n:"Ballenas",s:"Ballenas",e:"🐋",subs:["La ballena azul","El canto de las ballenas","Migraciones","Ballenas jorobadas","Cachalotes","Caza y protección"]},
{n:"Psicología",s:"Psicología",e:"🧠",psy:1,subs:["Burnout","Síndrome del impostor","Ansiedad","Perfeccionismo","Procrastinación","Duelo","Autoestima","Soledad","Estrés crónico","Inteligencia emocional"]},
{n:"Problemáticas mundiales",s:"Mundo",e:"🌍",subs:["Cambio climático","Pobreza","Desigualdad de género","Escasez de agua","Desinformación","Migración forzada"]},
{n:"Inteligencia artificial",s:"IA",e:"🤖",subs:["Modelos de lenguaje","Ética de la IA","IA en la educación","Sesgos algorítmicos","Deepfakes","IA y trabajo"]},
{n:"Espacio",s:"Espacio",e:"🚀",subs:["Agujeros negros","Marte","Estación Espacial Internacional","Exoplanetas","Basura espacial","Origen del universo"]},
{n:"Neurociencia",s:"Neuro",e:"🧬",subs:["Neuroplasticidad","Cómo funciona la memoria","El sueño y el cerebro","Dopamina y motivación","Las emociones y la amígdala","Atención y multitarea","El cerebro adolescente","Sesgos cognitivos"]},
{n:"Arte y música",s:"Arte",e:"🎨",subs:["Impresionismo","Música latinoamericana","Arte digital","Cine","Diseño gráfico","Arte urbano"]},
{n:"Preguntas reflexivas",s:"Reflexión",e:"💭",ref:1,subs:["¿Qué significa realmente tener éxito?","¿Somos libres o nuestras decisiones están condicionadas?","¿Qué les debemos a las futuras generaciones?","¿La tecnología nos acerca o nos aísla?","¿Qué nos hace seguir siendo nosotros a lo largo del tiempo?","¿Es posible ser feliz sin sufrir?","¿Qué pesa más: la verdad o la paz?","¿Qué pasaría si dejáramos de compararnos?"]},
{n:"Filosofía",s:"Filosofía",e:"🦉",subs:["El sentido de la vida","Estoicismo","Existencialismo","El mito de la caverna","¿Qué es la justicia?","Libre albedrío"]},
{n:"Curiosidades científicas",s:"Ciencia",e:"🔬",subs:["El tiempo y la relatividad","La física cuántica explicada fácil","Por qué soñamos","El ADN","Cómo se forma un arcoíris","Experimentos que cambiaron la ciencia"]},
{n:"Emprendimiento y finanzas",s:"Negocios",e:"💸",subs:["Cómo empezar un negocio","Ahorro e inversión básica","Marca personal","Economía circular","Freelance y trabajo remoto","Errores al emprender"]},
{n:"Comunicación y oratoria",s:"Oratoria",e:"🎤",subs:["Perder el miedo a hablar en público","Lenguaje corporal","Cómo contar una buena historia","Escucha activa","Argumentar sin pelear","Hablar con seguridad"]},
{n:"Animales fascinantes",s:"Animales",e:"🐙",subs:["Pulpos y su inteligencia","Abejas y colmenas","Aves migratorias","Animales bioluminiscentes","Elefantes y su memoria","Criaturas de las profundidades"]},
{n:"Misterios del mundo",s:"Misterios",e:"🗿",subs:["Las pirámides de Egipto","Atlántida: ¿mito o realidad?","La Antártida","Los moáis de Isla de Pascua","El Triángulo de las Bermudas","Civilizaciones perdidas"]}
];
const $=id=>document.getElementById(id);
const show=id=>document.querySelectorAll("section").forEach(s=>s.classList.toggle("on",s.id===id));
const reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;
const on=new Set(T.map((_,i)=>i));
const ROW=84,REP=12;
let act=[],cur=null,sub="",spinning=false,pos=0;
function place(i){$("strip").style.transform=`translateY(${-(i-1)*ROW}px)`}
function reset(w){const st=$("strip");st.style.transition="none";pos=Math.floor(REP/3)*act.length+w;place(pos);void st.offsetHeight;st.style.transition=""}
function draw(){
 act=T.filter((_,i)=>on.has(i));
 let h="";for(let r=0;r<REP;r++)act.forEach(t=>{h+=`<div class="it"><span>${t.e}</span>${t.n}</div>`});
 $("strip").innerHTML=h;reset(0);
}
function chips(){
 $("chips").innerHTML="";
 T.forEach((t,i)=>{
  const b=document.createElement("button");b.className="chip";b.textContent=t.e+" "+t.s;b.setAttribute("aria-pressed",on.has(i));
  b.onclick=()=>{if(spinning)return;if(on.has(i)){if(on.size<=2)return;on.delete(i)}else on.add(i);b.setAttribute("aria-pressed",on.has(i));draw()};
  $("chips").appendChild(b);
 });
}
function spin(){
 if(spinning||!$("s-wheel").classList.contains("on"))return;
 spinning=true;$("spin").disabled=true;
 const N=act.length,w=Math.floor(Math.random()*N);
 let t=pos+N*3;while(t%N!==w)t++;
 place(t);
 setTimeout(()=>{cur=act[w];sub="";pick();spinning=false;$("spin").disabled=false;reset(w)},reduce?50:4400);
}
function pick(){
 const o=cur.subs.filter(x=>x!==sub);sub=o[Math.floor(Math.random()*o.length)];
 $("t-emoji").textContent=cur.e;$("t-cat").textContent=cur.n;$("t-name").textContent=sub;
 $("t-tips").innerHTML=tips().map(x=>`<li>${x}</li>`).join("");
 $("t-note").hidden=!cur.psy;show("s-topic");
}
function tips(){
 if(cur.ref)return["Tu primera respuesta, sin filtro","Un ejemplo de tu vida o del mundo","¿Qué piensas distinto después de investigar?"];
 return cur.psy?["Qué es y cómo se reconoce","Causas y a quién afecta","Estrategias que ayudan y cuándo pedir ayuda profesional"]
 :[`¿Qué es ${sub} y por qué importa?`,"Ejemplos, datos o casos concretos","Tu conclusión: ¿qué aprendiste o qué se puede hacer?"];
}
$("spin").onclick=spin;$("ww").onclick=spin;
addEventListener("keydown",e=>{if(e.code==="Space"&&$("s-wheel").classList.contains("on")&&e.target.tagName!=="BUTTON"){e.preventDefault();spin()}});
$("again1").onclick=$("again2").onclick=()=>show("s-wheel");
$("resub").onclick=pick;
const fmt=t=>new Date(t).toLocaleString("es",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"});
const load=()=>{try{return JSON.parse(localStorage.getItem("bsw"))||{n:0,h:[]}}catch(e){return{n:0,h:[]}}};
function histHTML(h){return h.map(x=>typeof x==="string"?`<li>${x}</li>`:`<li>${x.e} <b>${x.s}</b><span class="d">${x.c}, ${fmt(x.t)}</span></li>`).join("")}
let sure=false;
$("hbtn").onclick=()=>{sure=false;$("hclear").textContent="Borrar historial";const d=load();$("h-list").innerHTML=d.h.length?histHTML(d.h):"<li>Aún no has completado ningún tema.</li>";$("h-count").textContent=(d.n||0)+" temas completados: "+((d.n||0)*13)+" minutos que no pasaste haciendo scroll.";show("s-hist")};
$("hback").onclick=()=>show("s-wheel");
$("hclear").onclick=()=>{if(!sure){sure=true;$("hclear").textContent="¿Seguro? Toca de nuevo";return}try{localStorage.removeItem("bsw")}catch(e){}$("hbtn").click()};

const PH=[{secs:480,btn:"Pasar a hablar"},{secs:300,btn:"Terminar"}];
let phase=0,endAt=0,left=0,total=0,paused=false,tick=null;
function beep(n){try{const c=new (window.AudioContext||window.webkitAudioContext)();for(let k=0;k<n;k++){const o=c.createOscillator(),g=c.createGain();o.frequency.value=660+k*110;o.connect(g);g.connect(c.destination);const s=c.currentTime+k*.35;g.gain.setValueAtTime(.2,s);g.gain.exponentialRampToValueAtTime(.001,s+.3);o.start(s);o.stop(s+.3)}}catch(e){}}
function begin(p){
 phase=p;total=left=PH[p].secs*1000;paused=false;endAt=Date.now()+left;
 $("phase").textContent=p?"Fase 2: ¡A hablar! (5 min)":"Fase 1: Investiga (8 min)";
 $("mini").textContent=cur.e+" "+sub;$("skip").textContent=PH[p].btn;$("pause").textContent="Pausar";
 show("s-timer");clearInterval(tick);tick=setInterval(step,250);step();
}
function step(){
 if(!paused)left=Math.max(0,endAt-Date.now());
 const s=Math.ceil(left/1000),m=String(Math.floor(s/60)).padStart(2,"0"),r=String(s%60).padStart(2,"0");
 $("clock").textContent=m+":"+r;document.title=m+":"+r+" · By Sofi World";
 $("arc").style.strokeDashoffset=339.3*(1-left/total);
 $("ring").classList.toggle("warn",left<=30000&&left>0);
 if(left<=0)next();
}
function save(){
 let d={n:0,h:[]};
 try{d=JSON.parse(localStorage.getItem("bsw")||"")||d}catch(e){}
 d.n=(d.n||0)+1;d.h=[{e:cur.e,c:cur.n,s:sub,t:Date.now()}].concat(d.h||[]).slice(0,100);
 try{localStorage.setItem("bsw",JSON.stringify(d))}catch(e){}
 return d;
}
function confetti(){
 if(reduce)return;
 for(let i=0;i<28;i++){const s=document.createElement("span");s.className="cf";s.textContent=["💜","✨","🦋","🔮"][i%4];
  s.style.left=Math.random()*100+"vw";s.style.animationDelay=Math.random()*.8+"s";document.body.appendChild(s);setTimeout(()=>s.remove(),4000)}
}
function next(){
 clearInterval(tick);document.title="By Sofi World";
 if(phase===0){beep(2);begin(1)}
 else{beep(3);const d=save();$("d-name").textContent=sub;
  $("d-stats").textContent="Llevas "+d.n+" temas: "+(d.n*13)+" minutos aprendiendo en vez de hacer scroll.";
  $("d-hist").innerHTML=histHTML(d.h.slice(0,3));show("s-done");confetti()}
}
function checklist(){
 $("chk").innerHTML=tips().map(x=>`<label><input type="checkbox"><span>${x}</span></label>`).join("");
}
$("start-research").onclick=()=>{$("notes").value="";checklist();begin(0)};
$("pause").onclick=()=>{paused=!paused;if(!paused)endAt=Date.now()+left;$("pause").textContent=paused?"Continuar":"Pausar"};
$("plus").onclick=()=>{left+=60000;total+=60000;if(!paused)endAt+=60000;step()};
$("skip").onclick=next;
chips();draw();
