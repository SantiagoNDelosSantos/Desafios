class Contador {

    constructor(responsable){
        this.responsable = responsable
        this.contador = 0
    }

    static contadorGlobal = 0

    getResponsable = ()=>{
        return this.responsable
    }

    contar = ()=>{
        this.contador++
        Contador.contadorGlobal++
    }

    getCuentaIndividual = ()=> {
        return this.contador
    }

    static getCuentaGlobal () {
        return Contador.contadorGlobal
    }

}

const cuenta1 = new Contador('Marcos')
cuenta1.contar()
cuenta1.contar()

console.log(cuenta1.getCuentaIndividual())

const cuenta2 = new Contador('Carlos')
cuenta2.contar()

console.log(cuenta2.getCuentaIndividual())

console.log(Contador.getCuentaGlobal())