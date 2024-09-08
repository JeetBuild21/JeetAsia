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

function sendEmail(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Use EmailJS to send the email
    var templateParams = {
        name: name,
        email: email,
        message: message
    };

    emailjs.send('service_id', 'template_id', templateParams)
        .then(function(response) {
            console.log('Email sent successfully!', response);
            // Clear the form fields
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        }, function(error) {
            console.log('Error sending email:', error);
        });
}