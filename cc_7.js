const geminiKey = 'YOUR_GEMINI_KEY'; 

document.getElementById('searchBtn').addEventListener('click', () => {
    const shirtType = document.getElementById('shirtVariety').value;
    const resultsDiv = document.getElementById('shirtResults');
    const modal = document.getElementById('shirtModal');

    if (!shirtType) return alert("Please enter a shirt variety (e.g., 'Flannel Shirt').");

    // Show modal and initial loading state
    modal.style.display = 'block';
    resultsDiv.innerHTML = `<p>Finding style insights for <strong>${shirtType}</strong>...</p>`;

    // Calling Gemini to generate a product description and styling tip
    fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify
    .then(res => res.json())
    .then(aiData => {
        const insight = aiData.candidates[0].content.parts[0].text;
        
        // Display the results in your shirtResults div
        resultsDiv.innerHTML = `
            <div class="style-box">
                <p><strong>Expert Insight:</strong></p>
                <p>${insight}</p>
            </div>
        `;
    })
    .catch(err => {
        console.error("Error:", err);
        resultsDiv.innerHTML = `<p style="color:red;">Could not load style tips. Please check your API key.</p>`;
    });
});

// Modal Close Logic
document.getElementById('closeButton').addEventListener('click', () => {
    document.getElementById('shirtModal').style.display = 'none';
});

// Close modal if user clicks outside of the content box
window.onclick = function(event) {
    const modal = document.getElementById('shirtModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}