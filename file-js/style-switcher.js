// toggle style switcher
const styleSwitcherToggle = document.querySelector(".style-switcher");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
// hide style switcher on scroll
window.addEventListener("scroll", () => { 
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
} )
// theme colors
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    })
}
// theme lihgt and darkmode
const dayNihgt = document.querySelector(".day-night");
dayNihgt.addEventListener("click", () => {
    dayNihgt.querySelector("i").classList.toggle("fa-sun")
    dayNihgt.querySelector("i").classList.toggle("fa-moon")
    document.body.classList.toggle("dark");
})
window.addEventListener("load",() => {
    if(document.body.classList.contains("dark")){
        dayNihgt.querySelector("i").classList.add("fa-sun")
    }
    else{
        dayNihgt.querySelector("i").classList.add("fa-moon")
    }
})