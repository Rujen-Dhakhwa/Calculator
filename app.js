const display = document.querySelector('.display');

function addToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = ""; // Clear the display completely
}

function calculate() {
    try {
        // Use eval() cautiously, as it can execute arbitrary code
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = "Error"; // Handle invalid expressions
    }
    
}