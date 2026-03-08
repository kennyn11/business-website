// Selecting the DOM elements
const headlineInput = document.getElementById('newHeadline');
const updateButton = document.getElementById('updateBtn');
const ctaHeadline = document.getElementById('cta-headline');

// Adding event listener to the button
updateButton.addEventListener('click', function() {
    const inputValue = headlineInput.value.trim();

    // Check if the input is not empty before updating
    if (inputValue !== "") {
        ctaHeadline.textContent = inputValue;
        
        // Optional: Clear the input field after update
        headlineInput.value = "";
    } else {
        alert("Please enter a new headline text!");
    }
});