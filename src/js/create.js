function create() {

    // ==================== RETORNANDO UMA STRING COM APENAS NUMEROS 
    const cleanCpf = cpf => cpf.replace(/\D+/g, '');

    // ==================== RETORNANDO UM ARRAY 
    const arrayCpf = cpf => Array.from(cleanCpf(cpf))

    // ==================== PEGANDO A PARTE CALCULAVEL DO CPF
    const parcialCpf = cpf => cpf.slice(0, -2)

    // ==================== DIGITOS
    function digit(cpf, secondDigit, firstDigit) {
        const array = arrayCpf(cpf)

        let parcial = parcialCpf(array)
        let regressive = parcial.length + 1;
        
        // PARA CALCULAR O SEGUNDO DIGITO
        if(secondDigit){ 
            const secondDigitString = parcial + ',' + firstDigit
            const secondDigitArr = secondDigitString.split(',')
            parcial = secondDigitArr
            regressive = parcial.length + 1;
        }

        // USANDO REDUCE PARA PEGAR A SOMA DOS NÚMEROS DO CPF
        let total = parcial.reduce((ac, val) => {
            ac += (regressive * val)
            regressive--;
            return ac
        }, 0)
        
        
        const digit = 11 - (total % 11) //CALCULO NECESSARIO PARA PEGAR O DIGITO
        let digitResult = digit > 9 ? 0 : digit; 
        return digitResult  //RETORNANDO O DIGITO
    }

    // ==================== RETORNANDO FUNCOES
    return {
        arrayCpf,
        parcialCpf,
        cleanCpf,
        digit,
    }

}

export default create;