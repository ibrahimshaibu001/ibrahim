//Alert

// Display current year
document.getElementById("year").textContent =
    new Date().getFullYear();

// Contact form functionality
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name.trim() === "" ||
            email.trim() === "" ||
            message.trim() === "") {

            alert("Please fill in all fields.");
        } else {
            document.getElementById("response").textContent =
                "Thank you, " + name +
                "! Your message has been received.";

            form.reset();
        }
    });
}


// Typing Animation

const typingText = "Welcome To Kogi State Polytechnic Learning WebSite";

const typingElement = document.getElementById("typing");

let index = 0;

function typeText() {
    if (typingElement && index < typingText.length) {
        typingElement.textContent += typingText.charAt(index);

        index++;

        setTimeout(typeText, 100);
    }
}

typeText();