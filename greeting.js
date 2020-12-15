const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greetings = document.querySelector(".js-greetings");

console.log(form);

const USER_LS = "currentUser";
const SHOWING_CN = "showing";


function saveName(usr) {
    localStorage.setItem(USER_LS, usr);
}



function askForname() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreetings(usr) {
    form.classList.remove(SHOWING_CN);
    greetings.classList.add(SHOWING_CN);
    greetings.innerText = `Hello ${usr}`;
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    // console.log(currentValue);
    paintGreetings(currentValue);
    saveName(currentValue);
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    
    if (currentUser === null) {
        askForname();
    } else {
        paintGreetings(currentUser);

    }
}


function init() {
    loadName()
}

init();