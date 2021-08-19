function findPower(num, exp) {
    let res = 1;
    for (let i = 0; i < exp; i++) {
        res *= num;
    }
    return res;
}
//console.log(findPower(2, 4));

function findDecimal(binary) {
    let decimal = 0;
    for (let i = 0; i < binary.length; i++) {
        decimal += binary[i] * findPower(2, (binary.length - 1 - i));
    }
    return decimal;
}


document.getElementById("btns").addEventListener("click", function (event) {
    let moment = document.getElementById("btns");

    if (isNaN(event.target.innerText)) {
        if (event.target.innerText == "C") {
            document.getElementById("input").value = "";
            document.getElementById("output").value = "";
        }
        if (event.target.innerText == "Submit") {
            document.getElementById("output").value = findDecimal(document.getElementById("input").value);
        }
    }
    else {
        let clickValue = event.target.innerText;
        let nowOnScreen = document.getElementById("input").value;
        let finalValue = nowOnScreen + clickValue;
        document.getElementById("input").value = finalValue;

    }


})



