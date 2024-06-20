function calcularFactorial() {

    let num = parseInt(document.getElementById('inputNumber').value);
    let factorial = 1;

    for (let i = num; i > 0; i--){
        factorial *= i;
    }

    document.getElementById('output').innerText =  factorial;
}