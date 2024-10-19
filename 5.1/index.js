function addCharacter(character) {
    document.getElementById("display").value += character;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}



function calculateResult() {
    let display = document.getElementById("display").value;
    if (display) {
        document.getElementById("display").value = eval(display);
    }
}
