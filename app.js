

// var display_lower = document.getElementById('display')

// var operators = ["+", "-", "*", "/"];

// function btnClick(num) {

//     var lastIndex = display.value.slice(-1);
//     if (operators.includes(lastIndex) && operators.includes(num) ) {
//     } else {
//       display.value += num;
//     }

// }

// function clearAll() {
//     display.value = "";
// }
  

// function Calculate() {
//     var total = eval(display.value)
//     display.value = total
// }

// function undo() {
//     display.value = display.value.slice(0,-1)
// }


// section





var display_lower = document.getElementById('display')

var display = document.getElementById('upper_display')

var operators = ["+", "-", "*", "/"];

function btnClick(num) {

    var lastIndex = display.value.slice(-1);
    if (operators.includes(lastIndex) && operators.includes(num) ) {
    } else {
      display.value += num;
    }

}

function clearAll() {
    display.value = "";
}
  

function Calculate() {
    var total = eval(display.value)
    display_lower.value = total
}

function undo() {
    display.value = display.value.slice(0,-1)
}