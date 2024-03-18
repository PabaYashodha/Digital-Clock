const hourEl = document.getElementById("hour")
const minuteEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")
const ampmEl = document.getElementById("ampm")

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if(h>12){
        h=h-12 
        ampm = "PM"
    }

    h = h <10? "0" + h : h; //this is else condition
    m = m <10? "0" + m : m; //this is else condition
    s = s <10? "0" + s : s; //this is else condition

    hourEl.innerText=h;
    minuteEl.innerText=m;
    secondsEl.innerText=s;
    ampmEl.innerText=ampm;
    //set timeout method actually set  timer that execute a function after the timer expires 
    setTimeout(()=>{
        updateClock()
    }, 1000)
    //1000 means 1000 milliseconds every one second we call this function

}
updateClock()