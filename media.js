/* media.js — carousel */
const track=document.getElementById('carousel-track');
if(track){
  const cards=()=>track.querySelectorAll('.press-card');
  let per=()=>window.innerWidth<580?1:window.innerWidth<900?2:3;
  let cur=0;
  const dotsWrap=document.getElementById('carousel-dots');
  function total(){return Math.ceil(cards().length/per())}
  function buildDots(){dotsWrap.innerHTML='';for(let i=0;i<total();i++){const d=document.createElement('button');d.className='carousel-dot'+(i===cur?' active':'');d.addEventListener('click',()=>goTo(i));dotsWrap.appendChild(d)}}
  function goTo(n){cur=Math.max(0,Math.min(n,total()-1));const w=cards()[0].offsetWidth+24;track.style.transform=`translateX(-${cur*per()*w}px)`;dotsWrap.querySelectorAll('.carousel-dot').forEach((d,i)=>d.classList.toggle('active',i===cur))}
  buildDots();goTo(0);
  document.getElementById('car-prev')?.addEventListener('click',()=>goTo(cur-1));
  document.getElementById('car-next')?.addEventListener('click',()=>goTo(cur+1));
  window.addEventListener('resize',()=>{cur=0;goTo(0);buildDots()});
}