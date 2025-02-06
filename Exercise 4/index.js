// Hide a given element
function hide(element) {
    element.style.display = "none";
}
// Display a given element
function show(element) {
    element.style.display = "block";
}

const lostView = document.getElementById("lostView");
const passwordView = document.getElementById("passwordView");
const wonView = document.getElementById("wonView");
const buttonCheck = document.getElementById("checkButton");
const buttonTryAgain = document.getElementById("tryAgainButton");
const passwordInput = document.getElementById("passwordInput");

var chanceRemaining = 3;
const secret = "12345";

buttonCheck.addEventListener("click", function(){
    const passwordEntered = passwordInput.value;
    if(passwordEntered == secret){
        hide(passwordView);
        show(wonView);
        hide(lostView);
    }else{
        show(lostView);
        hide(wonView);
        hide(passwordView);
        chanceRemaining--;
        buttonTryAgain.textContent="Try again! (" + chanceRemaining + " chances left)";
        if(chanceRemaining == 0){
            hide(buttonTryAgain);
        }
        buttonTryAgain.addEventListener("click", () => {
            show(passwordView);
            hide(wonView);
            hide(lostView);
            passwordInput.value="";
        });
    }
    
})
