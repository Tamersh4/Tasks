function convert() {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const inputUnit = document.getElementById("inputUnit").value;
    const outputUnit = document.getElementById("outputUnit").value;

    let valueInMeters;

    if (inputUnit == "m") valueInMeters = inputValue;
    if (inputUnit == "cm") valueInMeters = inputValue / 100;
    if (inputUnit == "km") valueInMeters = inputValue * 1000;

    let result;


    if (outputUnit == "m") result = valueInMeters;
    if (outputUnit == "cm") result = valueInMeters * 100;
    if (outputUnit == "km") result = valueInMeters / 1000;

    document.getElementById("result").textContent = `Result: ${result} ${outputUnit}`;
}
