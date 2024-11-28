const chaveDaApi = "5934a220b93c4a8eb83155301242411"

const botaoDeBusca = document.querySelector(".btn-busca");

botaoDeBusca.addEventListener("click", async () => {
    const cidade = document.getElementById("input-busca").value

    if (!cidade) return

    const dados = await buscarDadosDaCidade(cidade);

    if (dados) preecherDadosNaTela(dados, cidade);
});

async function buscarDadosDaCidade(cidade) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${chaveDaApi}&q=${cidade}&aqi=no&lang=pt`;

    const resposta = await fetch(apiUrl);

    if (resposta.status !== 200) return

    const dados = resposta.json();

    return dados;
}

function preecherDadosNaTela(dados, cidade) {
    const temperatura = dados.current.temp_c;
    const condicao = dados.current.condition.text;
    const humidade = dados.current.humidity;
    const velocidadeDoVento = dados.current.wind_kph;
    const iconeCondicao = dados.current.condition.icon

    document.getElementById("cidade").textContent = cidade;

    document.getElementById("temperatura").textContent = `${temperatura} °C`;

    document.getElementById("condicao").textContent = condicao;

    document.getElementById("humidade").textContent = `${humidade}%`;

    document.getElementById("Velocidade do Vento").textContent = `${velocidadeDoVento} km/h`;

    document.getElementById("incone-condicao").setAttribute("src", iconeCondicao);
}