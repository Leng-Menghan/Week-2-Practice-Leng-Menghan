const COLORS = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "cyan", "lime", "brown"];


function randomColor() {
    const randomIndex = Math.floor(Math.random() * COLORS.length);
    return COLORS[randomIndex];
}

function createCard() {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundColor = randomColor(); 

    const description = document.createElement("p");
    description.textContent = "Description";

    const cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove Card";


    removeButton.addEventListener("click", function () {
        card.remove();
    });


    cardFooter.appendChild(removeButton);
    card.appendChild(description);
    card.appendChild(cardFooter);

    document.querySelector(".container").appendChild(card);
}

document.getElementById("create").addEventListener("click", createCard);
