function buscarMaximo() {

    let inputArray = document.getElementById("inputArray").value.split(",").map(Number);
    let max = Math.max(...inputArray);

    document.getElementById("output").innerText = max;

}