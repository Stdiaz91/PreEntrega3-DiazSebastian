const buttonMode = document.querySelector("#buttonChange");
const body = document.querySelector("body");
load();
buttonMode.addEventListener("click", e =>{
    body.classList.toggle("dark");
    store(body.classList.contains("dark"));
});

function load() {
    const darkmode = localStorage.getItem("darkmode");
    if (!darkmode) {
        store("false");
    }else if (darkmode == "true"){
        body.classList.add("dark");
    }
};

function store(value) {
    localStorage.setItem("darkmode", value);
};