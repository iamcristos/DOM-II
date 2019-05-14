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
});

heade.forEach(a=> {
    a.addEventListener('click', (e)=> e.preventDefault())
});

const bodyElement = document.querySelector('body');
bodyElement.addEventListener('keydown', ()=>{
    const h2 = document.querySelectorAll('h2');
   h2.forEach(h=> h.style.color = 'brown')
})

window.addEventListener('load', ()=>{
    const photo = document.querySelector('img')
    TweenMax.from(photo, 2, {width:"200px", height:"150px"});
});

const contentPick = document.querySelectorAll('.destination')
contentPick.forEach(items=> {
    items.addEventListener('click', (e)=>{
        e.target.style.color = 'pink'
    });
});

const btn = document.querySelectorAll('.btn');
btn.forEach(button => {
    button.addEventListener('click', (e)=>{
        e.stopPropagation();
        TweenMax.from(e.target, 2, {x: 30});
    })

});
