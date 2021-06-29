// Classes
// "collapse" - accordion closed, display is none if element doesn't have "show class"

// "collapsing" - opening/closing animation, height is set to height of content, 
// default styles: height: 0, overflow: hidden, transition height property

// "show" - show content of accordion element

// selectors
const accordionButtons = document.querySelectorAll('.accordion__question')
const accordionCollapse = document.querySelectorAll('.accordion__collapse')

// event listeners
accordionButtons.forEach(item =>{
    item.addEventListener('click', ()=>{
        item.classList.toggle('open')

        // add "open" class to next element in the DOM
        item.parentElement.nextElementSibling.classList.toggle('open')
    })
})

// functions


