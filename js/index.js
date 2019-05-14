// Your code goes here
let logooHeading = document.querySelector('.logo-heading');
logooHeading.addEventListener('mouseover', (e)=>{
    e.target.classList.toggle('focusClass')
});

// keydown event

const heade = document.querySelectorAll('a');
heade.forEach(a => {
    a.addEventListener('dblclick', (e)=>{
        e.target.classList.toggle('keydownClass')
    })
})


const bodyElement = document.querySelector('body');
bodyElement.addEventListener('keydown', ()=>{
    console.log('hi')
    const h2 = document.querySelectorAll('h2');
   h2.forEach(h=> h.style.color = 'brown')
})
// p.forEach(par => {
//     console.log(par)
//     par.addEventListener('select', (e)=>{
//         prompt()
//         e.target.style.color = 'red'
//     })
// })
// p