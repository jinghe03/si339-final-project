document.getElementById("menu-toggle").addEventListener("click", function() {
    var sideMenu = document.getElementById("side-menu");
    sideMenu.classList.toggle("hidden"); // Toggles the 'hidden' class on or off
});

// JavaScript to add/remove the 'active' class on click
const menuLinks = document.querySelectorAll('#section-menu ul li a');

menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove 'active' class from all links
        menuLinks.forEach(item => item.classList.remove('active'));

        // Add 'active' class to the clicked link
        this.classList.add('active');
    });
});



// Carousel
// document.addEventListener("DOMContentLoaded", () => {
//     const track = document.querySelector(".carousel-track");
//     const slides = Array.from(track.children);
//     const nextButton = document.querySelector(".carousel-button.next");
//     const prevButton = document.querySelector(".carousel-button.prev");
//     const dotsNav = document.querySelector(".carousel-nav");
//     const dots = Array.from(dotsNav.children);

//     const slideWidth = slides[0].getBoundingClientRect().width;

//     // Arrange slides side-by-side
//     slides.forEach((slide, index) => {
//         slide.style.left = `${slideWidth * index}px`;
//     });

//     const moveToSlide = (track, currentSlide, targetSlide) => {
//         track.style.transform = `translateX(-${targetSlide.style.left})`;
//         currentSlide.classList.remove("current-slide");
//         targetSlide.classList.add("current-slide");
//     };

//     const updateDots = (currentDot, targetDot) => {
//         currentDot.classList.remove("current-indicator");
//         targetDot.classList.add("current-indicator");
//     };

//     const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
//         if (targetIndex === 0) {
//             prevButton.classList.add("hidden");
//             nextButton.classList.remove("hidden");
//         } else if (targetIndex === slides.length - 1) {
//             prevButton.classList.remove("hidden");
//             nextButton.classList.add("hidden");
//         } else {
//             prevButton.classList.remove("hidden");
//             nextButton.classList.remove("hidden");
//         }
//     };

//     // Click Next Button
//     nextButton.addEventListener("click", () => {
//         const currentSlide = track.querySelector(".current-slide");
//         const nextSlide = currentSlide.nextElementSibling;
//         const currentDot = dotsNav.querySelector(".current-indicator");
//         const nextDot = currentDot.nextElementSibling;
//         const nextIndex = slides.findIndex(slide => slide === nextSlide);

//         moveToSlide(track, currentSlide, nextSlide);
//         updateDots(currentDot, nextDot);
//         hideShowArrows(slides, prevButton, nextButton, nextIndex);
//     });

//     // Click Prev Button
//     prevButton.addEventListener("click", () => {
//         const currentSlide = track.querySelector(".current-slide");
//         const prevSlide = currentSlide.previousElementSibling;
//         const currentDot = dotsNav.querySelector(".current-indicator");
//         const prevDot = currentDot.previousElementSibling;
//         const prevIndex = slides.findIndex(slide => slide === prevSlide);

//         moveToSlide(track, currentSlide, prevSlide);
//         updateDots(currentDot, prevDot);
//         hideShowArrows(slides, prevButton, nextButton, prevIndex);
//     });

//     // Click Indicators
//     dotsNav.addEventListener("click", e => {
//         const targetDot = e.target.closest("button");

//         if (!targetDot) return;

//         const currentSlide = track.querySelector(".current-slide");
//         const currentDot = dotsNav.querySelector(".current-indicator");
//         const targetIndex = dots.findIndex(dot => dot === targetDot);
//         const targetSlide = slides[targetIndex];

//         moveToSlide(track, currentSlide, targetSlide);
//         updateDots(currentDot, targetDot);
//         hideShowArrows(slides, prevButton, nextButton, targetIndex);
//     });
// });
