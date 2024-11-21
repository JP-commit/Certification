document.addEventListener('DOMContentLoaded', function() {
    // Handle city selection form submission
    if (document.getElementById('cityForm')) {
        document.getElementById('cityForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const selectedCity = document.getElementById('city').value;
            localStorage.setItem('selectedCity', selectedCity);
            window.location.href = 'index.html';
        });
    }

    // Update the content based on the selected city
    updateContentBasedOnCity();
});

function goBack() {
    window.history.back();
}

function changeCity() {
    localStorage.removeItem('selectedCity');
    window.location.href = 'city-selection.html';
}

function updateContentBasedOnCity() {
    const selectedCity = localStorage.getItem('selectedCity');
    const currentPath = window.location.pathname;

    if (!selectedCity) {
        if (!currentPath.includes('city-selection.html')) {
            window.location.href = 'city-selection.html';
        }
    } else {
        if (document.getElementById('venue-details')) {
            document.getElementById('venue-details').innerText = `Venue details for ${selectedCity}`;
        }
        if (document.getElementById('schedule-content')) {
            const eventSchedule = {
                "Gurgaon": [
                    "2:30 PM Onwards: Entry to the Venue",
                    "2:30 PM - 3:00 PM: Arrival of Buses",
                    "2:30 PM - 7:00 PM: Snacks",
                    "3:30 PM - 9:00 PM: Cultural Performances",
                    "7:00 PM - 9:30 PM: Dinner",
                    "9:30 PM Onwards: Departure of Buses"
                ],
                "Delhi": [
                    "3:00 PM Onwards: Entry to the Venue",
                    "3:00 PM - 3:30 PM: Arrival of Buses",
                    "3:00 PM - 7:30 PM: Snacks",
                    "4:00 PM - 10:00 PM: Cultural Performances",
                    "7:30 PM - 10:00 PM: Dinner",
                    "10:00 PM Onwards: Departure of Buses"
                ],
                // Add more cities as needed
            };
            const schedule = eventSchedule[selectedCity] || ["Schedule not available"];
            document.getElementById('schedule-content').innerHTML = schedule.map(item => `<li>${item}</li>`).join('');
        }
        // Similarly update content for other pages based on city
    }
}
