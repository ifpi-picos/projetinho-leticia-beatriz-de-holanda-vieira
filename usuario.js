// Os .trim() são adicionados no código por causa do sistema operacional do hardware utilizado(windows)
import { adiciona, edita, remove, concluida} from "./funcoesModifica";
import { lista, pesquisa, resume} from "./funcoesVisualiza";

export const tarefas = [
    {dtcriacao : '16/08/2024',
     titulo: 'limpar a casa', 
     descricao: 'limpeza', 
     vencimento: '20/08/2024', 
     prioridade: 'media',
     status: false}
]
        
export const Tconcluidas = [
    {dtcriacao : '16/08/2024',
    titulo: 'atividade de artes', 
    descricao:'Não há descrição para essa atividade', 
    vencimento: '02/09/2024', 
    prioridade: 'baixa',
    status: true}
]

let repete = true

while(repete){

    const menu = Number(prompt(`
        ----- Menu Inicial -----
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