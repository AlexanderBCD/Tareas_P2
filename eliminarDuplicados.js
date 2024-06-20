function eliminarDuplicados() {
    let inputArray = document.getElementById("inputArray").value.split(',').map(Number);
    let uniqueArray = [...new Set(inputArray)];
    document.getElementById("output").innerText = uniqueArray.join(', ');
}