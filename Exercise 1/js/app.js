const item3 = document.getElementById("container1").children[2];
const containerGreen = document.getElementById("container2");
containerGreen.appendChild(item3);

const item4 = document.getElementById("container2").children[0];
item4.remove();

const item10 = document.createElement("div");
item10.className="item";
item10.textContent="10";

const container3 = document.getElementById("container3");
container3.appendChild(item10);

const containers = document.getElementsByClassName("containerBlue");

for (var i = 0; i < containers.length; i++) {
    containers[i].style.color = "red"; 
}



