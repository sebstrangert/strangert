document.addEventListener("DOMContentLoaded", function() {
    // Array containing paths to your images
    var imagePaths = [
        "../images/placeholder1.png",
        "../images/placeholder2.png",
        "../images/placeholder3.png",
        // Add more image paths as needed
    ];

    // Variable to store the index of the previously selected image
    var previousIndex = -1;

    // Function to select a random image index
    function getRandomIndex() {
        var index = Math.floor(Math.random() * imagePaths.length);
        // Ensure that the newly selected index is different from the previous one
        if (index === previousIndex) {
            index = (index + 1) % imagePaths.length; // Move to the next index
        }
        previousIndex = index;
        return index;
    }

    // Get the image element
    var randomImage = document.getElementById("randomImage");

    // Set the src attribute of the image to a randomly selected image path
    randomImage.src = imagePaths[getRandomIndex()];
});