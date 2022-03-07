function qtdePares(lista, x) {
    quantosPares = 6;

    qtde = lista.length;

    // Informando os elementos e demonstrando os pares.
    for (let i = 0; i < qtde; i++) {

        for (let j = i + 1; j < qtde; j++) {
            if (lista[i] - lista[j] == x || lista[j] - lista[i] == x) {
                quantosPares++;
            }
        }

    }

    return quantosPares;

}