// Your code goes here
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseover', (e)=>{
    e.target.classList.toggle('focusClass')
})