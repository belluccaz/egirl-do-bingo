document.addEventListener("DOMContentLoaded", function() {
    const texto = `Lorena,

    Desde o momento em que nos encontramos naquele mundo virtual de aventuras e desafios, algo em você me despertou. Ao seu lado, em Azeroth, a amizade floresceu naturalmente. Foi nas batalhas, nos risos e até mesmo nos silêncios que percebi algo diferente. A conexão que criamos ultrapassou pixels e bytes... E aqui estou eu, tentando encontrar palavras para expressar tudo o que sinto por você.

    Eu jamais imaginei que, entre tantas jornadas, a mais importante seria a nossa. Você me mostrou uma forma de ver o mundo com mais cor, mesmo nas sombras de incertezas e distâncias. E eu não estou mais disposto a ignorar o que sinto. Quero estar ao seu lado, em cada desafio da vida real, assim como estive ao seu lado em tantas batalhas virtuais.

    Sei que a distância pode ser um obstáculo, mas também acredito que o que sinto por você é capaz de superar qualquer barreira. Cada risada sua, cada mensagem que recebo de você, fortalece o que eu quero para nós. Lorena, você é incrível, e não importa quanto tempo passe ou quantos quilômetros nos separem, eu vou continuar acreditando nisso.

    Com você, quero criar novas memórias, realizar sonhos e, quem sabe, construir um futuro juntos. Até que possamos estar lado a lado, eu estarei aqui, esperando o momento certo para te dizer isso pessoalmente.`;

    let index = 0;
    const speed = 50; // Velocidade de digitação (milissegundos)

    function typeWriter() {
        if (index < texto.length) {
            document.getElementById("carta-texto").innerHTML += texto.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});
