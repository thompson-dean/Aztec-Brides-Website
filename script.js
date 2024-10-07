//HAM MENU
// Open and close the hamburger menu
const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const subMenuLinks = document.querySelectorAll('.sub-menu-toggle');

hamMenu.addEventListener('click', (e) => {
    e.stopPropagation();  // Prevent the document click event from firing
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});

// Open sub-menu for "Socials" without closing the main menu
subMenuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();  // Prevent this click from closing the main menu

        const subMenu = link.nextElementSibling;
        
        // Toggle the sub-menu visibility
        if (subMenu.style.display === 'block') {
            subMenu.style.display = 'none';
        } else {
            subMenu.style.display = 'block';
        }
    });
});

// Close the menu when clicking outside the menu
document.addEventListener('click', (e) => {
    if (!hamMenu.contains(e.target) && !offScreenMenu.contains(e.target)) {
        hamMenu.classList.remove('active');
        offScreenMenu.classList.remove('active');
        // Hide any open sub-menus
        subMenuLinks.forEach(link => {
            const subMenu = link.nextElementSibling;
            if (subMenu) {
                subMenu.style.display = 'none';
            }
        });
    }
});

//BACKGROUND MUSIC - HOME
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
    audio.volume = matchMedia;

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

    