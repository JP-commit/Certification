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
            document.getElementById('venue-details').innerText = `Program details for ${selectedCity}`;
        }
        /* if (document.getElementById('schedule-content')) {
            const eventSchedule = {
                "Gurgaon": [
                    "2:30 PM Onwards: <br>Entry to the Venue",
                    "2:30 PM - 3:00 PM: <br>Arrival of Buses",
                    "2:30 PM - 7:00 PM: <br>Snacks",
                    "3:30 PM - 9:00 PM: <br>Cultural Performances",
                    "7:00 PM - 9:30 PM: <br>Dinner",
                    "9:30 PM Onwards: <br>Departure of Buses"
                ],
                "Delhi": [
                    "3:00 PM Onwards: <br>Entry to the Venue",
                    "3:00 PM - 3:30 PM: <br>Arrival of Buses",
                    "3:00 PM - 7:30 PM: <br>Snacks",
                    "4:00 PM - 10:00 PM: <br>Cultural Performances",
                    "7:30 PM - 10:00 PM: <br>Dinner",
                    "10:00 PM Onwards: <br>Departure of Buses"
                ],
                // Add more cities as needed
            };
            const schedule = eventSchedule[selectedCity] || ["Schedule not available"];
            document.getElementById('schedule-content').innerHTML = schedule.map(item => `<li>${item}</li>`).join('');
        }*/
        // Similarly update content for other pages based on city
    }
}
