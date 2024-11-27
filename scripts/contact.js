// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

const SubmitButton = document.getElementById("submit-button");
const ContactPage = document.getElementById("contact-page");

SubmitButton.addEventListener("click", Message);

function Message(){
    ContactPage.innerHTML = "Thank you for your message";
    ContactPage.style.fontSize = "24px"
}