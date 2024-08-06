document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let origin = document.getElementById('origin').value;
    let destination = document.getElementById('destination').value;
    let departureDate = document.getElementById('departure-date').value;
    let passengers = document.getElementById('passengers').value;

    if (origin && destination && departureDate && passengers) {
        // Implement the search functionality here
        alert(`Searching for tickets from ${origin} to ${destination} on ${departureDate} for ${passengers} passenger(s).`);
    } else {
        alert('Please fill in all fields.');
    }
});



// Booking page
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const destination = urlParams.get('destination');

    if (destination) {
        document.getElementById('destination').value = destination;
        alert("Ticket booked: "+destination);
    }
});

document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const passport = document.getElementById('passport').value;

    if (firstName && lastName && email && phone && passport) {
        // Process booking information
        alert('Booking confirmed! Details:\n' +
              `Name: ${firstName} ${lastName}\n` +
              `Email: ${email}\n` +
              `Phone: ${phone}\n` +
              `Passport: ${passport}`);
    } else {
        alert('Please fill in all fields.');
    }
});


// destination page
function bookDestination(destination) {
    // Redirect to the booking page with the selected destination
    window.location.href = `booking.html?destination=${destination}`;
}

