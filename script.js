// ARROW SCRIPT
const scrollArrow = document.getElementById("scrollArrow");
const scrollContainer = document.getElementById("music");

if (scrollArrow && scrollContainer) {
  scrollArrow.addEventListener("click", () => {
    scrollContainer.scrollBy({
      left: window.innerWidth,
      behavior: "smooth"
    });
  });
}

// HAM MENU
const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const subMenuToggles = document.querySelectorAll('.sub-menu-toggle');

hamMenu.addEventListener('click', (e) => {
  e.stopPropagation();
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
});

subMenuToggles.forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const subMenu = toggle.nextElementSibling;
    subMenu.classList.toggle('active');
  });
});

document.addEventListener('click', (e) => {
  if (!hamMenu.contains(e.target) && !offScreenMenu.contains(e.target)) {
    hamMenu.classList.remove('active');
    offScreenMenu.classList.remove('active');
    subMenuToggles.forEach(toggle => {
      toggle.nextElementSibling.classList.remove('active');
    });
  }
});

// Close menu when any link is clicked
const menuLinks = document.querySelectorAll('.menu-list a:not(.sub-menu-toggle)');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamMenu.classList.remove('active');
    offScreenMenu.classList.remove('active');
    subMenuToggles.forEach(toggle => {
      toggle.nextElementSibling.classList.remove('active');
    });
  });
});

// BACKGROUND MUSIC - HOME
const playlist = [
  "Songs/Lie.mp3",
  "Songs/Native.mp3",
  "Songs/New Delhi.mp3",
  "Songs/Nova.mp3",
  "Songs/Stuck.mp3",
];

let audio = new Audio();
let isPlaying = false;
let currentTrackIndex = 0;
audio.volume = 0.75;

audio.addEventListener('ended', playRandomTrack);

function togglePlay() {
  if (isPlaying) {
    audio.pause();
  } else {
    playRandomTrack();
  }
  isPlaying = !isPlaying;
}

function playRandomTrack() {
  const randomIndex = Math.floor(Math.random() * playlist.length);
  const randomTrack = playlist[randomIndex];
  audio.src = randomTrack;
  audio.play();
}