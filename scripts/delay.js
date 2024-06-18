document.addEventListener("DOMContentLoaded", function() {

        var doorGIF = new Image();
        doorGIF.src = "../images/door_optimized.gif"; 

    document.getElementById("fadeOutDiv").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default action of the click event
        
        var rectangle = document.querySelector(".rectangle2");
        rectangle.classList.add("fade-out");
        var h3 = document.getElementById("fadeH3");
        h3.classList.add("fade-out");

        setTimeout(function() {
            var doorgif = document.getElementById("doorgif");
            doorgif.src = "../images/door_optimized.gif"; // Replace "yourGif.gif" with the path to your GIF
            document.getElementById("doorgif").style.display = "inline"; // Show the GIF
        }, 1000); // Adjust the delay time as needed (1000 milliseconds = 1 second)


          

        // Add a delay before redirecting to main.html
        setTimeout(function() {
            window.location.href = "../html/main.html"; // Replace with your desired URL
        }, 7000); // Adjust the delay as needed
    });
});
