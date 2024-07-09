document.addEventListener("DOMContentLoaded", function() {

    function getRandomColor() {
        // Generate random values for RGB
        var r = Math.floor(Math.random() * 256); // Random between 0-255
        var g = Math.floor(Math.random() * 256); // Random between 0-255
        var b = Math.floor(Math.random() * 256); // Random between 0-255
        
        // Construct the CSS color string
        var randomColor = `rgb(${r}, ${g}, ${b})`;
    
        return randomColor;
    }

    var changer = document.getElementById("changeColorBtn");
    var colorInput = document.getElementById("color-box");
   
    changer.addEventListener("click", function() {
        colorInput.style.backgroundColor = getRandomColor();
    });
})