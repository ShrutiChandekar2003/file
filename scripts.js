document.getElementById('workoutForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the values from the form
    const username = document.getElementById('username').value;
    const workoutType = document.getElementById('workoutType').value;
    const workoutMinutes = document.getElementById('workoutMinutes').value;

    // Create a new workout item
    const workoutDetails = `
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Workout Type:</strong> ${workoutType}</p>
        <p><strong>Workout Minutes:</strong> ${workoutMinutes}</p>
    `;

    // Display the workout details in an alert box
    alert('Workout Added!\n' + workoutDetails);

    // Clear the form fields
    document.getElementById('workoutForm').reset();
});

// Add functionality to the next button
document.getElementById('nextPageButton').addEventListener('click', function() {
    // Redirect to a different page (e.g., 'workouts.html')
    window.location.href = 'n.html';
});
   



document.getElementById('workoutForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Get the form values
    const username = document.getElementById('username').value;
    const workoutType = document.getElementById('workoutType').value;
    const workoutMinutes = document.getElementById('workoutMinutes').value;

    // Create an object to store the form data
    const workoutData = {
        username: username,
        workoutType: workoutType,
        workoutMinutes: workoutMinutes
    };

    // Save the data in local storage
    let workouts = JSON.parse(localStorage.getItem('workouts')) || [];
    workouts.push(workoutData);
    localStorage.setItem('workouts', JSON.stringify(workouts));
    
    // Optional: Display the workout data in an alert (for debugging)
    alert(`Workout Added!\n\nUsername: ${username}\nWorkout Type: ${workoutType}\nWorkout Minutes: ${workoutMinutes}`);

    // Reset the form
    document.getElementById('workoutForm').reset();
});

// Handle the next page button click
document.getElementById('nextPageButton').addEventListener('click', function() {
    window.location.href = 'workout.html'; // Navigate to the next page
});





document.getElementById('doneButton').addEventListener('click', function() {
    // Get form values
    const username = document.getElementById('username').value;
    const workoutType = document.getElementById('workoutType').value;
    const workoutMinutes = document.getElementById('workoutMinutes').value;
    const date = document.getElementById('date').value;

    // Create a workout object
    const workout = {
        username,
        workoutType,
        workoutMinutes,
        date
    };

    // Get existing workouts from localStorage
    let workouts = JSON.parse(localStorage.getItem('workouts')) || [];

    // Add new workout to the list
    workouts.push(workout);

    // Save updated workouts list to localStorage
    localStorage.setItem('workouts', JSON.stringify(workouts));

    // Redirect to workout list page
    window.location.href = 'n.html';
});

