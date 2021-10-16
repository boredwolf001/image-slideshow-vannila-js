const slides = document.querySelector('.slides')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const dotBtns = document.querySelectorAll('.dot')

const length = 3

let currentIndex = 0

fillBtns()

function updatePhoto() {
  if (currentIndex >= length) {
    currentIndex = 0
  }
  if (currentIndex < 0) {
    currentIndex = length - 1
  }
  slides.style.transform = `translateX(-${currentIndex * 400}px)`
  fillBtns()
}

let interval = setInterval(() => {
  currentIndex++
  updatePhoto()
}, 2000)

prevBtn.addEventListener('click', () => {
  clearInterval(interval)
  currentIndex--
  updatePhoto()
  interval = setInterval(() => {
    currentIndex++
    updatePhoto()
  }, 2000)
})

nextBtn.addEventListener('click', () => {
  clearInterval(interval)
  currentIndex++
  updatePhoto()
  interval = setInterval(() => {
    currentIndex++
    updatePhoto()
  }, 2000)
})

function clearClass() {
  dotBtns.forEach((btn) => {
    btn.className = 'dot far fa-circle'
  })
}

function fillBtns() {
  dotBtns.forEach((btn) => {
    if (currentIndex == btn.getAttribute('data-index')) {
      clearClass()
      btn.className = 'dot fas fa-circle'
    }
  })
}

dotBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    clearClass()
    e.target.className = 'dot fas fa-circle'
    let index = +e.target.getAttribute('data-index')
    currentIndex = index
    clearInterval(interval)
    updatePhoto()
    interval = setInterval(() => {
      currentIndex++
      updatePhoto()
    }, 2000)
  })
})
