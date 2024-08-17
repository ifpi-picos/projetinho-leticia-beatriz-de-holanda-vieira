// Os .trim() são adicionados no código por causa do sistema operacional do hardware utilizado(windows)
import { adiciona, edita, remove, concluida} from "./funcoesModifica";
import { lista, pesquisa, resume} from "./funcoesVisualiza";

export const tarefas = [
    {titulo: 'limpar', 
     descricao: 'limpeza', 
     vencimento: 2, 
     prioridade: 'baixa',
     status: false}
]
        
export const Tconcluidas = [
    {titulo: 'ing', 
        descricao:'Não há descrição para essa atividade', 
        vencimento: 2, 
        prioridade: 'baixa',
        status: true}
]

let repete = true

while(repete){

    const menu = Number(prompt(`
        1 - Adicionar tarefas
        2 - Listar tarefas
        3 - Edita a lista de tarefas
        4 - Remover tarefa
        5 - Marcar tarefa como concluída
        6 - Pesquisar tarefa
        7 - Resumir tarefas
        0 - Finalizar programa
        --> `))

    switch(menu){
        case 1: 
            adiciona()
            break;

        case 2:
            lista()
            break;
        
        case 3:
            edita()
            break;
        
        case 4:
            remove()
            break;

        case 5:
            concluida()
            break;

        case 6:
            pesquisa()
            break;
        
        case 7:
            resume()
            break;

        case 0:
            console.log('PROGRAMA ENCERRADO!')
            repete = false
            break;

        default:
            console.log('OPÇÃO INVÁLIDA!')

    }

}