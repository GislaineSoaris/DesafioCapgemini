function Encrypt(string) {

    let arrayStr = []; // Array que os caracteres a cada interação.
    let strSEspaço = string.split(" ").sort((a, b) => a - b).join("") // remove os espaços.
    let strLength = strSEspaço.length; // Quantidade de caracteres.
    let colunXY = Math.ceil(Math.sqrt(strLength)); // Raiz quadrada do tamanho da string(√T)
    let txtEncrypt = ""; // Armazena o resultado da criptografia.

    // Loop intera na string, fatiando o texto e salvando na variável txtEncrypt
    for (var i = 0; i < strLength; i = i + colunXY) {
        arrayStr.push(strSEspaço.slice(i, i + colunXY));
    }

    for (let i = 0; i < colunXY; i++) {
        for (let j = 0; j < colunXY; j++) {
            if (arrayStr[j][i] != undefined) {
                txtEncrypt += arrayStr[j][i]
            }
        }
        txtEncrypt += " "
    }


    return txtEncrypt
}