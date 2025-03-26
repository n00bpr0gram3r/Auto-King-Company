document.addEventListener('DOMContentLoaded', function() {
    // Initialize date picker
    flatpickr(".flatpickr", {
        minDate: "today",
        dateFormat: "Y-m-d",
        disable: [
            function(date) {
                // Disable Sundays
                return (date.getDay() === 0);
            }
        ]
    });

    // Handle form submission
    const bookingForm = document.getElementById('bookingForm');
    const alertDiv = document.getElementById('alert');

    bookingForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            service: document.getElementById('service').value,
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            message: document.getElementById('message').value
        };

        try {
            const response = await fetch('/backend/api/booking.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            // Show alert
            alertDiv.classList.remove('d-none', 'alert-success', 'alert-danger');
            if (data.success) {
                alertDiv.classList.add('alert-success');
                alertDiv.textContent = 'Booking submitted successfully! We will contact you shortly.';
                bookingForm.reset();
            } else {
                alertDiv.classList.add('alert-danger');
                alertDiv.textContent = data.message || 'Error submitting booking. Please try again.';
            }
        } catch (error) {
            alertDiv.classList.remove('d-none', 'alert-success', 'alert-danger');
            alertDiv.classList.add('alert-danger');
            alertDiv.textContent = 'Error submitting booking. Please try again.';
            console.error('Error:', error);
        }
    });
}); 