const galleryImgs = document.getElementById('imgs');
const galleryImage = document.querySelectorAll('#imgs #img');

let idx = 0;

function run() {
  idx++;

  changeImage();
}

function changeImage() {
  if (idx > galleryImage.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = galleryImage.length - 1;
  }
  if (screen.width > 640) {
    galleryImgs.style.transform = `translateX(${-idx * 500}px)`;
  } else if (screen.width < 640) {
    galleryImgs.style.transform = `translateX(${-idx * 270}px)`;
  }
}

document.getElementById('right').addEventListener('click', () => {
  idx++;
  changeImage();
  resetInterval();
});

document.getElementById('left').addEventListener('click', () => {
  idx--;
  changeImage();
  resetInterval();
});

// This would be left at an option for the client - personally,
// I find interval images to be distracting. For acc. I try to limit
// animations and motions.

// let interval = -setInterval(run, 3000);

// function resetInterval() {
//   clearInterval(interval);
//   interval = setInterval(run, 3000);
//
