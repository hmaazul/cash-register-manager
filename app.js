const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const notesAvailable = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function clickHandeler(){
    hideMessage();
    if(billAmount.value>0){
        if(cashGiven.value >= billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value;

            calculateCashToBeResturned(amountToBeReturned);

        }
        else{
            showMessage("Do you wanna wash plates?");
        }
    }
    else{
        showMessage("Invalid Message");
    }
});

function calculateCashToBeResturned(amountToBeReturned){
    for(var i=0;i< notesAvailable.length; i++){
        const  notes = Math.trunc(amountToBeReturned / notesAvailable[i]);
        amountToBeReturned %= notesAvailable[i];
        noOfNotes[i].innerText = notes;
    }
}

function hideMessage(){
    errorMessage.style.display = "none";
}

function showMessage(message){
    errorMessage.style.display = "block";
    errorMessage.innerText = message;
}



