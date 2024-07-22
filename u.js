document.addEventListener('DOMContentLoaded', function() {
    const workoutList = document.getElementById('workoutList');
    const searchBox = document.getElementById('searchBox');
    const filterType = document.getElementById('filterType');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const homeButton = document.getElementById('homeButton');

    let workouts = JSON.parse(localStorage.getItem('workouts')) || [];
    let currentPage = 1;
    const rowsPerPage = 5;

    function displayWorkouts() {
        workoutList.innerHTML = '';
        const start = (currentPage - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        // Filter workouts based on search and filter inputs
        const filteredWorkouts = workouts.filter(workout =>
            (filterType.value === '' || workout.workoutType === filterType.value) &&
            workout.username.toLowerCase().includes(searchBox.value.toLowerCase())
        ).slice(start, end);

        filteredWorkouts.forEach(workout => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${workout.username}</td>
                <td>${workout.workoutType}</td>
                <td>${workout.workoutMinutes} min</td>
                <td>${workout.date}</td>
            `;
            workoutList.appendChild(row);
        });

        // Update pagination button state
        prevButton.disabled = currentPage === 1;
        nextButton.disabled = end >= workouts.filter(workout =>
            (filterType.value === '' || workout.workoutType === filterType.value) &&
            workout.username.toLowerCase().includes(searchBox.value.toLowerCase())
        ).length;
    }

    function handlePagination() {
        prevButton.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                displayWorkouts();
            }
        });

        nextButton.addEventListener('click', () => {
            const filteredWorkouts = workouts.filter(workout =>
                (filterType.value === '' || workout.workoutType === filterType.value) &&
                workout.username.toLowerCase().includes(searchBox.value.toLowerCase())
            );
            if (currentPage * rowsPerPage < filteredWorkouts.length) {
                currentPage++;
                displayWorkouts();
            }
        });
    }

    function handleSearchAndFilter() {
        searchBox.addEventListener('input', displayWorkouts);
        filterType.addEventListener('change', displayWorkouts);
    }

    function handleHomeButton() {
        homeButton.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    // Navigate to the workout chart page
    nextButton.addEventListener('click', () => {
        window.location.href = 'workout_chart.html';
    });

    displayWorkouts();
    handlePagination();
    handleSearchAndFilter();
    handleHomeButton();
});
