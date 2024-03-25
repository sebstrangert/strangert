// Check if the page has already been refreshed
if (!sessionStorage.getItem('pageRefreshed')) {
    // If not, refresh the page after a short delay (e.g., 1 second)
    setTimeout(function() {
        window.location.reload();
    }, 500); // Adjust the delay time as needed (1000 milliseconds = 1 second)

    // Set the flag indicating that the page has been refreshed
    sessionStorage.setItem('pageRefreshed', 'true');
}
