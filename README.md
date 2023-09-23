# Projeto de Classes de um Jogo

Este é um projeto que implementa classes para representar heróis de uma aventura em JavaScript puro. O projeto foi desenvolvido de acordo com as especificações fornecidas para o terceiro desafio de projeto do bootcamp Programação do zero da [DIO](dio.me) em parceria com o [Potência Tech](potenciatech.com).

## Requisitos

Para este projeto, foram utilizados os seguintes conceitos e recursos da linguagem JavaScript:

- Variáveis
- Operadores
- Estruturas de decisão
- Funções
- Classes e Objetos

## Descrição

O projeto consiste em uma classe genérica chamada `Heroi`. Essa classe possui as seguintes propriedades:

- `nome`: O nome do herói.
- `idade`: A idade do herói.
- `tipo`: O tipo do herói (por exemplo: guerreiro, mago, monge, ninja).

Além disso, a classe `Heroi` possui um método chamado `atacar` que atende aos seguintes requisitos:

- Exibe a mensagem: "O {tipo} atacou usando {ataque}".
- O {tipo} é concatenado com o tipo que está na propriedade da classe.
- O {ataque} segue uma descrição diferente de acordo com o tipo do herói, conforme a tabela abaixo:

  - Se o herói for um mago, exibe "usou magia".
  - Se o herói for um guerreiro, exibe "usou espada".
  - Se o herói for um monge, exibe "usou artes marciais".
  - Se o herói for um ninja, exibe "usou shuriken".

## Uso

Claro, aqui estão as instruções adicionadas para clonar e executar o projeto, incluindo informações sobre o arquivo principal:

## Uso

Para utilizar este projeto, siga as etapas abaixo:

1. Clone o repositório para o seu ambiente local usando o seguinte comando:

   ```bash
   git clone https://github.com/livnascimento/escrevendo-as-classes-de-um-jogo.git
   ```

2. Navegue até a pasta do projeto:

   ```bash
   cd escrevendo-as-classes-de-um-jogo
   ```
3. Para usar a classe `Heroi`, você pode criar instâncias da classe com os valores desejados e chamar o método `atacar`. Aqui está um exemplo de como usar a classe:

    ```javascript
    const heroi = new Heroi("Super-Herói", 30, "guerreiro");
    heroi.atacar(); // Deve imprimir: "O guerreiro atacou usando espada"
    ```

3. Execute o projeto com o Node.js. O arquivo principal está localizado em `src/index.js`. Para executá-lo, use o comando:

   ```bash
   node src/index.js
   ```

4. Você verá a saída no terminal, mostrando como a classe `Heroi` funciona com diferentes tipos de heróis e seus ataques.

   Exemplo:

   ```bash
   O guerreiro atacou usando espada
   O mago atacou usando magia
   O monge atacou usando artes marciais
   O ninja atacou usando shuriken
   ```

## Contribuição

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novos recursos para este projeto. Para contribuir, siga estas etapas:

1. Faça um fork deste repositório.
2. Crie um branch com a sua feature: `git checkout -b minha-feature`.
3. Faça commit das suas mudanças: `git commit -m 'Adicionei uma nova feature'`.
4. Envie as mudanças para o seu fork: `git push origin minha-feature`.
5. Crie um Pull Request no repositório original.