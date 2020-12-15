const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");


function getTime() {
    const date = new Date();
    const min = date.getMinutes();
    const hrs = date.getHours();
    const sec = date.getSeconds();
    clockTitle.innerText = 
    `${hrs < 10 ? `0${hrs}` : hrs} : ${min < 10 ? `0${min}` : min} : ${sec < 10 ? `0${sec}` : sec}`;
}


function init() {
    getTime();
    setInterval(getTime, 1000);

}

init();