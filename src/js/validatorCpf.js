import createJs from './create.js'

function validatorCpf() {

    const create = createJs();

    // ======================================== INICIANDO O APP
    function start() {
        // INSIRA AQUI O CPF QUE VOCE DESEJA VALIDAR
        // EXEMPLOS: 
        isValid('705.484.450-52');
        isValid('370.250.620-81');
        isValid('07098772003');
        isValid('11100011122');
        isValid('00000000000');
    }

    // ======================================== VALIDANDO  O CPF
    function validate(cpf) {
        const array = create.arrayCpf(cpf)
        const parcial = create.parcialCpf(array)
        const cleanCpf = create.cleanCpf(cpf)

        if (typeof array === 'undefined') return false
        if (array.length !== 11) return false // SE O CPF NAO FOR DO TAMANHO ADEQUADO ELE IRA RETORNA FALSE
        if (isSequence(cpf)) return false // VERIFICANDO SE O CPF TEM UMA SEQUÊNCIA REPITIDA

        const firstDigit = create.digit(cpf, false) // PEGANDO O PRIMEIRO DIGITO
        const secondDigt = create.digit(cpf, true, firstDigit) // PEGANDO O SEGUNDO DIGITO

        console.log('Primeiro digito resultante:', firstDigit)
        console.log('Segundo digito resultante:', secondDigt)

        parcial.push(String(firstDigit), String(secondDigt))
        const compare = parcial.join('') // JUNTANDO OS DIGITOS COM O RESTO DO CPF PARA A COMPARACAO

        if (cleanCpf !== compare) return false

        return true
    }

    // ======================================== VALIDANDO SE HÁ UMA SEQUÊNCIA
    function isSequence(cpf) {
        const sequence = cpf[0].repeat(create.cleanCpf(cpf).length)
        return sequence === create.cleanCpf(cpf)
    }



    // ======================================== EXIBINDO RESULTADO
    function isValid(cpf) {
        if (validate(cpf)) {
            console.log('CPF:', cpf)
            console.log('RESULTADO: CPF valido')
            console.log('==================================')
        } else {
            console.log('CPF:', cpf)
            console.log("RESULTADO: Esse CPF nao e valido")
            console.log('==================================')
        }
    }

    // ======================================== RETORNANDO O INICIADOR DO APP
    return {
        start,
    }

}

export default validatorCpf;