function gerarDiaDaSemana() {
    /*configurando o objeto que pega as informações de data*/
    /*pegando o dia da semana, no caso, ele vai pegar o nome do dia por completo (ex: segunda-feira) */
    const diaDaSemana = new Date().toLocaleDateString("pt-BR", {
        weekday: "long" 
    });

    /*pegando a data (DD/MM/YYYY) e a hora (00:00)*/
    const data = new Date().toLocaleDateString("pt-BR")
    const hora = new Date().toLocaleTimeString("pt-BR", {
        hour: "numeric",
        minute: "numeric"
    });

    /*criando uma const com todas as infos que precisamos sobre a data e já configurando como vai ser escrita no html*/
    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`

    return dataCompleta;
}

export default gerarDiaDaSemana;