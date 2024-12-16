const togglebtn = document.getElementById("toogle-btn");
console.log(togglebtn);
const navbar = document.querySelector(".navbar")

togglebtn.addEventListener("click", ()=>{
    navbar.classList.toggle('mobile-nav');
    // alert('Hey kamu klik ikon');
});