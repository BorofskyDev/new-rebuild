const galleryImgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const galleryImage = document.querySelectorAll('#imgs #img')

let idx = 0

let interval =- setInterval(run, 3000)

function run() {
    idx++

    changeImage()
}

function changeImage(){
    if(idx > galleryImage.length -1){
        idx = 0
    } else if(idx < 0){
        idx = galleryImage.length -1
    }
    galleryImgs.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval(){
    clearInterval(interval)
    interval = setInterval(run, 3000)
}

rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})