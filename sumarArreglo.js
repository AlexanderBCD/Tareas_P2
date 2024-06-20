function sumarArreglo(){
    let inputArray = document.getElementById("inputArray").value.split(',').map(Number);
    let sum = inputArray.reduce((acc, num) => acc + num, 0);

    document.getElementById("output").innerText = sum;
}