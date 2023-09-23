const tipoDeAtaque = require('./utils/heroi.utils');

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome,
            this.idade = idade,
            this.tipo = tipo;
    }

    atacar() {
        console.log(`o ${this.tipo} atacou usando ${tipoDeAtaque(this.tipo)}`)
    }
}

module.exports = Heroi;
