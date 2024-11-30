
// Get all the modal buttons and modals
const modalButtons = document.querySelectorAll('.view-bio-btn');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');

// Function to open the modal
modalButtons.forEach((button, index) => {
    button.onclick = function() {
        modals[index].style.display = 'block';
    };
});

// Function to close the modal
closeButtons.forEach((button) => {
    button.onclick = function() {
        button.parentElement.parentElement.style.display = 'none';
    };
});

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    modals.forEach((modal) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
};










let slideIndex = 1;
let slideTimer; // Declare the timer variable

showSlides(slideIndex);

// Function to control next/previous slides manually
function plusSlides(n) {
    clearInterval(slideTimer); // Stop the automatic slideshow when user manually navigates
    showSlides(slideIndex += n);
    startSlideshow(); // Restart the automatic slideshow after manual navigation
}

// Function to go to a specific slide
function currentSlide(n) {
    clearInterval(slideTimer); // Stop the automatic slideshow when user manually navigates
    showSlides(slideIndex = n);
    startSlideshow(); // Restart the automatic slideshow after manual navigation
}

// Function to show the slide based on the current index
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {
        slideIndex = 1;
    }    
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
}

// Function to start the automatic slideshow
function startSlideshow() {
    slideTimer = setInterval(function() {
        plusSlides(1); // Automatically go to the next slide every 5 seconds
    }, 5000); // Change the time interval here (5000 ms = 5 seconds)
}

// Start the automatic slideshow
startSlideshow();




