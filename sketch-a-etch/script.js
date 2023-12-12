const gridContainer = document.getElementById("gridContainer");
const resetButton = document.getElementById("resetButton");

// Function to create a grid with the specified number of squares per side
function createGrid(squaresPerSide) {
    // Clear existing grid
    gridContainer.innerHTML = '';

    // Set width of grid container
    const containerSize = 960;
    gridContainer.style.width = `${containerSize}px`;

    // Calculate size of each square
    const squareSize = containerSize / squaresPerSide - 2; // Subtract 2 for borders

    // Create a new grid
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        gridSquare.style.width = `${squareSize}px`;
        gridSquare.style.height = `${squareSize}px`;
        gridContainer.appendChild(gridSquare);
    }
}

// Initial grid creation
createGrid(16);

// Event listener for the reset button
resetButton.addEventListener("click", function() {
    const squaresPerSide = prompt("Enter the number of squares per side (max 100):");
    
    // Validate user input
    if (squaresPerSide && squaresPerSide > 0 && squaresPerSide <= 100) {
        createGrid(Number(squaresPerSide));
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
});