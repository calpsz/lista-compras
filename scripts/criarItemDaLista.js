/*pegando a info que foi colocada no input no html */
const inputItem = document.getElementById("input-item")

/*contador pra ir incrementando no id do checkbox*/
let contator = 0;

export function criarItemDaLista() {
    
    
    /*verificando se o input é vazio*/
    if(inputItem.value === "") {
        alert("Por favor, insira um item!");
        return
    }

    /*criamos uma const que cria elementos li*/
    const itemDaLista = document.createElement("li");

    /*criamos uma const que cria uma div*/
    const containerItemDaLista = document.createElement("div");


    /*pegamos a const que cria div e adicionamos a ela uma classe já existente no css*/
    containerItemDaLista.classList.add("lista-item-container");


    /*criamos uma const que cria um elemento input*/
    const inputCheckbox = document.createElement("input");

    /*selecionamos qual tipo de input queremos*/
    inputCheckbox.type = "checkbox";

    /*aqui definimos o nome do id de cada item*/
    inputCheckbox.id = "checkbox-" + contator++;


    /*criamos uma const que cria um elemento paragrafo*/
    const nomeItem = document.createElement("p");

    /*jogamos o que foi escrito no input no html para dentro do paragrafo*/
    nomeItem.innerText = inputItem.value;


    /*o fofoqueiro fica de olho quando o checkbox for clicado*/
    inputCheckbox.addEventListener("click", function(){
        /*se for checked, deixa riscado, se não, deixa normal*/
        if(inputCheckbox.checked) {
            nomeItem.style.textDecoration = "line-through";
        } else {
            nomeItem.style.textDecoration = "none";
        }
    })

    /*colocamos a checkbox e o nome do item dentro da div*/
    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);

    /*colocamos a div dentro do item da lista*/
    itemDaLista.appendChild(containerItemDaLista);

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

    /*criando um paragrafo*/
    const itemData = document.createElement("p");

    /*jogando as as infos da data pra dentro do paragrafo*/
    itemData.innerText = dataCompleta;

    /*adicionando uma classe ao paragrafo*/
    itemData.classList.add("texto-data");

    /*colocando a data dentro do item da lista*/
    itemDaLista.appendChild(itemData)

    return itemDaLista;
}