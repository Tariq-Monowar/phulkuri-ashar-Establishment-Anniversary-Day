const day = document.querySelector(".days")
const hour = document.querySelector(".hours")
const mimit = document.querySelector(".minites")
const second = document.querySelector(".seconds")

const counter = ()=>{
    const anniversaryDay = new Date("28 sep 2022")
    const currentDay =  new Date();
    const totalTime = (anniversaryDay - currentDay)/1000
    const days = Math.floor(totalTime/3600/24)
    const hours = Math.floor(totalTime/3600)%24
    const minits = Math.floor(totalTime/60)%60
    const seconds = Math.floor(totalTime % 60)
    day.innerHTML = days
    hour.innerHTML  = hours
    mimit.innerHTML = minits
    second.innerHTML = seconds
    console.log(totalTime);
    setInterval(counter,1000)
}
counter()

