// A function to apply the .active class to the button that is clicked
function activateButton(button) {
  // Select all buttons
  let buttons = document.querySelectorAll(".button");
  // Loop through the each button
  for (let btn of buttons) {
    // Remove the .active class from each button
    btn.classList.remove("active");
  }
  // Add the .active class to the clicked button
  button.classList.add("active");
}; // Add a semicolon here

// A function to filter grid items by category
function filterItems(category) {
  // Select all grid items
  let items = document.querySelectorAll(".grid-item");
  //  Loop through the each item
  for (let item of items) {
    // Get the category data of each item
    let data = item.dataset.category;
    // If the category data matches the category parameter, display the item
    if (data === category || category === "all") {
      item.style.display = "grid";
    // Otherwise, hide the item
    } else {
      item.style.display = "none";
    }
  }
}

// Select the buttons by id
let allButton = document.getElementById("all");
let architectureButton = document.getElementById("architecture");
let artButton = document.getElementById("art");
let natureButton = document.getElementById("nature");
let sportButton = document.getElementById("sport");
let wildlifeButton = document.getElementById("wildlife");

// Add click event listeners to the buttons and call the filterItems function with the corresponding category and pass the button as an argument to the activateButton function
allButton.addEventListener("click", () => {
  filterItems("all");
  activateButton(allButton);
});
artButton.addEventListener("click", () => {
  filterItems("art");
  activateButton(artButton);
});
architectureButton.addEventListener("click", () => {
  filterItems("architecture");
  activateButton(architectureButton);
});
natureButton.addEventListener("click", () => {
  filterItems("nature");
  activateButton(natureButton);
});
sportButton.addEventListener("click", () => {
  filterItems("sport");
  activateButton(sportButton);
});
wildlifeButton.addEventListener("click", () => {
  filterItems("wildlife");
  activateButton(wildlifeButton);
});
