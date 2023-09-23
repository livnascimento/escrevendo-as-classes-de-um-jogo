const tipoDeAtaque = (tipoHeroi) => {
    const tipo = tipoHeroi.toLowerCase();
    console.log(tipo);

    if (tipo == "mago") return "magia";
    else if (tipo == "guerreiro") return "espada";
    else if (tipo == "monge") return "artes marciais";
    else if (tipo == "ninja") return "shuriken";
    else return "sua habilidade especial";
}

module.exports = tipoDeAtaque