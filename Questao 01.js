function encontraMediana(arr) {

    let lista = arr.sort((a, b) => a - b);

    let meio = Math.floor(lista.length / 2);

    let mediana = lista.length % 2 !== 0 ? lista[meio] : (lista[meio - 1] + lista[meio]) / 2;

    return mediana;

}