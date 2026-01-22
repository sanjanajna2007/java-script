// Function to generate random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Select button
const btn = document.getElementById("btn");

// Add click event
btn.addEventListener("click", () => {
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
});
