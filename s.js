document.getElementById('doneButton').addEventListener('click', function() {
    // Get form values
    const username = document.getElementById('username').value.trim();
    const workoutType = document.getElementById('workoutType').value;
    const workoutMinutes = document.getElementById('workoutMinutes').value;
    const date = document.getElementById('date').value;

    // Validate form values
    if (!username || !workoutType || !workoutMinutes || !date) {
        alert("Please fill out all fields.");
        return;
    }

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
    window.location.href = 'n.html'; // Ensure this file exists and is named correctly
});
console.log(localStorage.getItem('workouts'));
localStorage.removeItem('workouts');

