

const themeToggle = document.getElementById("themeToggle");



const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    updateThemeIcon();
}



themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");


    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

    updateThemeIcon();
});



function updateThemeIcon() {

    if (document.body.classList.contains("dark-mode")) {

        themeToggle.innerHTML =
            '<i class="bi bi-sun-fill"></i>';

    } else {

        themeToggle.innerHTML =
            '<i class="bi bi-moon-fill"></i>';
    }
}




const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(function (element) {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }

    });
}


// Run when scrolling
window.addEventListener("scroll", revealOnScroll);

// Run once when page loads
revealOnScroll();




const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    let isValid = true;

    // Name validation
    if (name === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.textContent = "Please enter your email.";
        isValid = false;
    }
    else if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Message validation
    if (message === "") {
        messageError.textContent = "Please enter your message.";
        isValid = false;
    }
    else if (message.length < 10) {
        messageError.textContent =
            "Message should contain at least 10 characters.";
        isValid = false;
    }

    // If validation fails, stop Formspree submission
    if (!isValid) {
        event.preventDefault();
    }

});



const navLinks =
    document.querySelectorAll(".navbar-nav .nav-link");

const navbarCollapse =
    document.querySelector(".navbar-collapse");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navbarCollapse.classList.contains("show")) {

            const bsCollapse =
                bootstrap.Collapse.getInstance(navbarCollapse);

            if (bsCollapse) {
                bsCollapse.hide();
            }
        }

    });

});