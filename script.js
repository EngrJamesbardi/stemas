// Initialize EmailJS with your Public API Key
emailjs.init("4q0IFswaR_J_w5cMM"); // Replace 'your_public_api_key' with your actual key

// Add an event listener to the form
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the page from reloading

    // Send the form data using EmailJS
    emailjs.sendForm("service_yspo6s4", "template_4quxp8k", this)
    .then(() => {
        alert("Message sent successfully!");
    }, (error) => {
        alert("Failed to send message. Error: " + JSON.stringify(error));
    });
});

