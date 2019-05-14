// Your code goes here
let logooHeading = document.querySelector('.logo-heading');
logooHeading.addEventListener('mouseover', (e)=>{
    e.target.classList.toggle('focusClass')
});

// keydown event

const heade = document.querySelectorAll('a');
heade.forEach(a => {
    a.addEventListener('dblclick', (e)=>{
        console.log(e.target)
        e.target.classList.toggle('keydownClass')
    })
})

const p = document.querySelectorAll('p');
const bodyElement = document.q
// p.forEach(par => {
//     console.log(par)
//     par.addEventListener('select', (e)=>{
//         prompt()
//         e.target.style.color = 'red'
//     })
// })
// p