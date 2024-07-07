const myslide = document.querySelectorAll('.myslide'),
      sliderSection = document.querySelectorAll('.slider-section'),
      dot = document.querySelectorAll('.dot');

let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 6000);

function autoSlide() {
    counter += 1;
    slidefun(counter);
}

function plusSlides(n) {
    counter += n;
    slidefun(counter);
    resetTimer();
}

function currentSlide(n) {
    counter = n;
    slidefun(counter);
    resetTimer();
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
    let i;
    
    // Hide all myslide elements
    for (i = 0; i < myslide.length; i++) {
        myslide[i].style.display = "none";
    }
    
    // Hide all sliderSection elements
    for (i = 0; i < sliderSection.length; i++) {
        sliderSection[i].style.display = "none";
    }
    
    // Remove 'active' class from all dot elements
    for (i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace(' active', '');
    }
    
    // Reset counter if it goes out of bounds
    if (n > myslide.length) {
        counter = 1;
    }
    if (n < 1) {
        counter = myslide.length;
    }
    
    // Display the current myslide and sliderSection
    myslide[counter - 1].style.display = "block";
    sliderSection[counter - 1].style.display = "block";
    
    // Add 'active' class to the current dot
    dot[counter - 1].className += " active";
}
