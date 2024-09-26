document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const query = document.getElementById('search-input').value.toLowerCase(); // Get the search input

    // Filter tourist sites
    const touristSiteCards = document.querySelectorAll('#tourist-sites .card');
    touristSiteCards.forEach(card => {
        const siteTitle = card.querySelector('.card-title').textContent.toLowerCase();
        if (siteTitle.includes(query)) {
            card.parentElement.style.display = "block"; // Show card if match
        } else {
            card.parentElement.style.display = "none"; // Hide card if no match
        }
    });

    // Filter hotels
    const hotelCards = document.querySelectorAll('#hotels .card');
    hotelCards.forEach(card => {
        const hotelTitle = card.querySelector('.card-title').textContent.toLowerCase();
        if (hotelTitle.includes(query)) {
            card.parentElement.style.display = "block"; // Show card if match
        } else {
            card.parentElement.style.display = "none"; // Hide card if no match
        }
    });
});
