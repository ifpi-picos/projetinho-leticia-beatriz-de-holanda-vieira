import { tarefas, Tconcluidas} from "./usuario";


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
    
    // let exibir = []
    // for(let i = 0; i < tarefas.length; i++){
    //     let tarefa = tarefas[i].titulo.charAt(0).toUpperCase() + tarefas[i].titulo.slice(1).toLowerCase()
    //     exibir.push(tarefa)
    // }
    // console.table(exibir)

};

export function pesquisa(){

};

export function resume(){

};