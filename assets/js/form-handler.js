// Initialize EmailJS
emailjs.init("PvUITwV9s5ZdpsSDb"); // Replace with your actual EmailJS User ID

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        emailjs.sendForm("service_sigboyw", "template_hltoiwc", form)
            .then(function (response) {
                alert("Message sent successfully!");
            }, function (error) {
                alert("There was an error sending the message.");
            });
    });
});
