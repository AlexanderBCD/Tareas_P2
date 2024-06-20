function contarVocales() {

    let inputString = document.getElementById("inputString").value;
    let vowels = inputString.match(/[aeiouAEIOUáéíóúÁÉÍÓÚ]/g);
    let numVowels = vowels ? vowels.length : 0;
    document.getElementById("output").innerText = numVowels;

}