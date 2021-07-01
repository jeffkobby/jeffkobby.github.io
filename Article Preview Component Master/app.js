// selectors
const shareButtonOne = document.getElementById('share-one')
const shareButtonTwo = document.getElementById('share-two')
const footer = document.querySelector('.container__footer--main')
const info = document.querySelector('.container__footer--share-info')
const container = document.querySelector('.container')

shareButtonOne.addEventListener('click', ()=>{
    if(window.screen. width < 550){
        footer.style.paddingBottom = "0"
    }

    info.classList.toggle('hidden')


})

shareButtonTwo.addEventListener('click', ()=>{
    if(window.screen. width < 550){
        footer.style.paddingBottom = "1.25rem"
    }

    info.classList.toggle('hidden')
})