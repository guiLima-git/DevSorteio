function generateNumber() {

    const min = Math.ceil(parseInt(document.getElementById('minimo').value));
    const max = Math.floor(parseInt(document.getElementById('maximo').value));
    const resultado = document.getElementById('resultado');

    if (isNaN(min) || isNaN(max)) {
        resultado.innerText = "Digite números válidos!";
        return;
    }

    if (min > max) {
        resultado.innerText = "O mínimo não pode ser maior que o máximo!";
        return;
    }

    resultado.innerText = Math.floor(Math.random() * (max - min + 1)) + min;
}
