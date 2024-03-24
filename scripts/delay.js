document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("fadeOutDiv").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default action of the click event
        
        var rectangle = document.querySelector(".rectangle2");
        rectangle.classList.add("fade-out");
        var h3 = document.getElementById("fadeH3");
        h3.classList.add("fade-out");

        setTimeout(function() {
            var doorgif = document.getElementById("doorgif");
            doorgif.src = "images/door_optimized.gif"; // Replace "yourGif.gif" with the path to your GIF
        }, 2000); // Adjust the delay time as needed (1000 milliseconds = 1 second)

        document.getElementById("doorgif").style.display = "inline"; // Show the GIF
          

        // Add a delay before redirecting to main.html
        setTimeout(function() {
            window.location.href = "main.html"; // Replace with your desired URL
        }, 7000); // Adjust the delay as needed
    });
});
