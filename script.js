let count = document.getElementById("count");
let cnt = parseInt(count.innerHTML);
// console.log(cnt+1);
let up = document.querySelector(".up");
up.addEventListener("click", ()=>{
    cnt++;
    if(cnt <= 0)
    cnt = "00";
    if(cnt < 10)
    cnt = "0"+cnt;
    count.innerHTML = cnt;
})
let down = document.querySelector(".down");
down.addEventListener("click", ()=>{
    cnt--;
    if(cnt <= 0)
    cnt = "00";
    if(cnt < 10)
    cnt = "0"+cnt;
    count.innerHTML = cnt;
})
let reset = document.querySelector(".reset");
reset.addEventListener("click", ()=>{
    count.innerHTML = "00";
})