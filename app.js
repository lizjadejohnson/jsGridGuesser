document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.querySelector(".startGameBtn");
  const cells = document.querySelectorAll(".cell");
  const fireworks = document.querySelector(".fireworks");
  const columnLeftNumbers = [1, 6, 11, 16, 21];
  const columnRightNumbers = [5, 10, 15, 20, 25];
  fireworks.style.display = "none";

  startButton.addEventListener("click", () => {
    const treasure = Math.floor(Math.random() * 25) + 1;
    alert("New game started - select a square to find the treasure!");

    cells.forEach((cell) => {
      cell.style.backgroundColor = ""; // Reset cell colors at game start
      cell.addEventListener(
        "click",
        function () {
          const cellNumber = parseInt(this.textContent);
          const isLeftEdge = columnLeftNumbers.includes(cellNumber);
          const isRightEdge = columnRightNumbers.includes(cellNumber);
          if (cellNumber === treasure) {
            this.style.backgroundColor = "#6ea66a"; // Indicate the correct guess
            if (fireworks) {
              fireworks.style.display = "block"; // Show the fireworks
            }
            setTimeout(() => {
              alert("Congratulations! You found the treasure!");
            }, 500); // 1000 milliseconds = 1 second
          } else if (
            cellNumber === treasure - 5 ||
            cellNumber === treasure + 5 || // Directly above or below
            (cellNumber === treasure + 1 && !isLeftEdge) || // Right, but not if on the left edge
            (cellNumber === treasure - 1 && !isRightEdge) // Left, but not if on the right edge
          ) {
            this.style.backgroundColor = "#FFA500"; // Indicate close guess
          } else {
            this.style.backgroundColor = "#d65347"; // Feedback for a wrong guess
          }
        },
        { once: true }
      );
    });
  });
});
