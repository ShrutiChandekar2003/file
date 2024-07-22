document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('searchButton');
    const searchUsername = document.getElementById('searchUsername');
    const homeButton = document.getElementById('homeButton');
    const ctx = document.getElementById('workoutChart').getContext('2d');

    let workoutChart;

    searchButton.addEventListener('click', () => {
        const username = searchUsername.value.trim();
        if (username) {
            const workouts = JSON.parse(localStorage.getItem('workouts')) || [];
            const userWorkouts = workouts.filter(workout => workout.username.toLowerCase() === username.toLowerCase());
            
            if (userWorkouts.length > 0) {
                const labels = userWorkouts.map(workout => workout.date);
                const data = userWorkouts.map(workout => workout.workoutMinutes);
                const workoutTypes = userWorkouts.map(workout => workout.workoutType);

                const chartData = {
                    labels: labels,
                    datasets: [{
                        label: 'Workout Minutes',
                        data: data,
                        backgroundColor: workoutTypes.map(type => getColorForType(type)),
                        borderColor: 'rgba(0, 123, 255, 1)',
                        borderWidth: 1
                    }]
                };

                if (workoutChart) {
                    workoutChart.destroy();
                }

                workoutChart = new Chart(ctx, {
                    type: 'bar',
                    data: chartData,
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
            } else {
                alert('No workouts found for the given username.');
                if (workoutChart) {
                    workoutChart.destroy();
                }
            }
        } else {
            alert('Please enter a username.');
        }
    });

    homeButton.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    function getColorForType(type) {
        switch (type) {
            case 'Cycling':
                return 'rgba(54, 162, 235, 0.6)';
            case 'Running':
                return 'rgba(255, 99, 132, 0.6)';
            case 'Swimming':
                return 'rgba(75, 192, 192, 0.6)';
            default:
                return 'rgba(153, 102, 255, 0.6)';
        }
    }
});
