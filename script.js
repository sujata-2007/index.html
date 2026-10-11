// Typing effect
const roles=["B.Tech CSE (AIML) Student","Problem Solver","Aspiring ML Engineer"];
let r=0,c=0,del=false;
const el=document.getElementById("typed");
(function type(){
  const w=roles[r];
  el.textContent=w.slice(0,c);
  if(!del&&c<w.length)c++;
  else if(del&&c>0)c--;
  else if(!del){del=true;return setTimeout(type,1200)}
  else{del=false;r=(r+1)%roles.length}
  setTimeout(type,del?40:90);
})();

// Skills (edit levels as you like)
const skills=[["Python",80],["C Programming",75],["HTML / CSS / JavaScript",70],["Machine Learning Basics",60],["Data Structures",65]];
const list=document.getElementById("skillList");
skills.forEach(([n,v])=>{
  list.insertAdjacentHTML("beforeend",`<div class="skill"><div><span>${n}</span><span>${v}%</span></div><div class="bar"><i data-w="${v}"></i></div></div>`);
});

// Scroll reveal + skill bars
const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){e.target.classList.add("show");e.target.querySelectorAll(".bar i").forEach(b=>b.style.width=b.dataset.w+"%")}
}),{threshold:.15});
document.querySelectorAll(".fade").forEach(s=>io.observe(s));

// Theme toggle
const root=document.documentElement;
try{const t=localStorage.getItem("theme");if(t)root.dataset.theme=t}catch(e){}
document.getElementById("theme").onclick=()=>{
  const dark=getComputedStyle(root).getPropertyValue("--bg").trim()==="#14121a";
  root.dataset.theme=dark?"light":"dark";
  try{localStorage.setItem("theme",root.dataset.theme)}catch(e){}
};

// Contact form (demo: no server)
document.getElementById("form").onsubmit=e=>{
  e.preventDefault();
  document.getElementById("ok").textContent="Thanks "+document.getElementById("n").value+"! Message received.";
  e.target.reset();
};
document.getElementById("yr").textContent=new Date().getFullYear();
