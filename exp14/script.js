// Search Function for Products
function searchProducts() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach((card) => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(input) ? "block" : "none";
    });
}

// Contact Form Submission Handler
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Thank you, ${name}! We have received your message.`);
        // Clear the form
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill in all fields.");
    }
});
