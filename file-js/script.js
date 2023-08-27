console.log('working');
// active nav link 
let navLinks = document.querySelectorAll('.nav a');
function addActive(){
    navLinks[0].classList.add('active')
}
addActive();
navLinks.forEach( navLink=> {
navLink.addEventListener('click', ()=>{
    document.querySelector('.active')?.classList.remove('active');
    navLink.classList.add('active');
})

})

