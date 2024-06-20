function esPrimo() {
    let num = parseInt(document.getElementById('inputNumber').value);
    let esPrimo = true;

    if (num <=1) {
        esPrimo = false;
    }
    else {
        for (let i = 2; i < num; i++){
            if(num % i === 0) {
                esPrimo = false;
                break;
            }
        }
    }

    document.getElementById('output').innerText = esPrimo ?  "Es primo" : "No es primo";
}