function invertirCadena() {
    let inputString = document.getElementById("inputString").value;
    let reversedString = inputString.split('').reverse().join('');
    document.getElementById("output").innerText = reversedString;
}
