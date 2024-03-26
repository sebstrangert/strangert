document.addEventListener("DOMContentLoaded", function() {
    // Array containing paths to your images
    var imagePaths = [
        "images/placeholder1.png",
        "images/placeholder2.png",
        "images/placeholder3.png",
        // Add more image paths as needed
    ];

    // Select a random index from the array
    var randomIndex = Math.floor(Math.random() * imagePaths.length);

    // Get the image element
    var randomImage = document.getElementById("randomImage");

    // Set the src attribute of the image to the randomly selected image path
    randomImage.src = imagePaths[randomIndex];
});
