// Os .trim() são adicionados no código por causa do sistema operacional do hardware utilizado(windows)
import { tarefas, Tconcluidas} from "./usuario";


function exibe(array){

    if(array[0].status == false){
        console.log('Tarefas Pendentes:')
    }else{
        console.log('Tarefas concluídas:')
    }

    //Esses for abaixo formata as palavras da array para uma exibição mais bonita
    let exibir = []
    for(let i = 0; i < array.length; i++){
        let palavras = array[i].titulo.split(' ') //Quebra a string e coloca numa lista para depois ser formatada

        let tarefa = ''
        for(let i = 0; i < palavras.length; i++){
            let forma = palavras[i].charAt(0).toUpperCase() + palavras[i].slice(1).toLowerCase()
            tarefa.length == 0? tarefa += forma : tarefa += ' ' + forma
            //Formata cada palavra da mesma string deixando a primeira letra maiúscula e o restante minúscula
        }

        let desc
        array[i].descrição != 'Não há descrição para essa atividade'? desc = array[i].descricao.charAt(0).toUpperCase() + array[i].descricao.slice(1).toLowerCase() : desc = array[i].descricao;

        let vence = `Em ${array[i].vencimento} dias`

        let priori = array[i].prioridade.charAt(0).toUpperCase() + array[i].prioridade.slice(1).toLowerCase()
        
        exibir.push({'Título da tarefa': tarefa, 'Descrição': desc,'Prioridade': priori,'Vencimento da tarefa': vence})
    }
    console.table(exibir)
}

//let tarefa = array[i].titulo.charAt(0).toUpperCase() + array[i].titulo.slice(1).toLowerCase()

function filtros(){

};

export function lista(){

    let repete = true
    while(repete){
        const visualiza = Number(prompt(`
            Escolha que maneira deseja visualizar as tarefas:
            1 - Tarefas pendentes e concluidas
            2 - Por data de vencimento
            3 - Por prioridade de conclusão
            4 - Por data de criação 
            -> `))

        switch(visualiza){
            case 1:
                exibe(tarefas)
                exibe(Tconcluidas)
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
            default:
                const filtra = prompt('Deseja aplicar algum filtro? Digite "s" para Sim ou "n" para Não...').trim().toLowerCase()
                filtra === 's'? filtros() : repete = false;

        }
    }

};

export function pesquisa(){

};

export function resume(){

};