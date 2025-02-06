const COLORS = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "cyan", "lime", "brown"];

// Function to get a random color from the COLORS array
function randomColor() {
    const randomIndex = Math.floor(Math.random() * COLORS.length);
    return COLORS[randomIndex];
}

// Function to create a new card
function createCard() {
    // Create card elements
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundColor = randomColor(); // Set a random background color

    const description = document.createElement("p");
    description.textContent = "Description";

    const cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove Card";

    // Remove card when button is clicked
    removeButton.addEventListener("click", function () {
        card.remove();
    });

    // Append elements together
    cardFooter.appendChild(removeButton);
    card.appendChild(description);
    card.appendChild(cardFooter);

    // Append the new card to the container
    document.querySelector(".container").appendChild(card);
}

// Attach event listener to the "Create Card" button
document.getElementById("create").addEventListener("click", createCard);
