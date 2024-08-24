// Os .trim() são adicionados no código por causa do sistema operacional do hardware utilizado(windows)
import { tarefas, Tconcluidas} from "./usuario";


export function exibe(array){
    //Esses *for* abaixo formata as palavras da array para uma exibição mais bonita
    let exibir = []
    for(let i = 0; i < array.length; i++){

        let datadecriacao = array[i].dtcriacao

        let palavras = array[i].titulo.split(' ') //Quebra a string e coloca numa lista para depois ser formatada

        let tarefa = ''
        for(let i = 0; i < palavras.length; i++){
            let forma = palavras[i].charAt(0).toUpperCase() + palavras[i].slice(1).toLowerCase()
            tarefa.length == 0? tarefa += forma : tarefa += ' ' + forma
            //Formata cada palavra da mesma string deixando a primeira letra maiúscula e o restante minúscula
        }

        //Deixa a primeira letra da descrição maiúscula
        let desc
        array[i].descrição != 'Não há descrição para essa atividade'? desc = array[i].descricao.charAt(0).toUpperCase() + array[i].descricao.slice(1).toLowerCase() : desc = array[i].descricao;

        let vence = array[i].vencimento

        //Primeira letra da prioridade maiúscula
        let priori = array[i].prioridade.charAt(0).toUpperCase() + array[i].prioridade.slice(1).toLowerCase()

        //Muda o emoji do status conforme seu valor
        array[i].status == true ? exibir.push({'Data de criação': datadecriacao, 'Título da tarefa': tarefa, 'Descrição': desc,'Prioridade': priori, 'Status': '✅👌'}) : exibir.push({'Data de criação': datadecriacao, 'Título da tarefa': tarefa, 'Descrição': desc,'Prioridade': priori,'Data de vencimento': vence, 'Status': '❌ 🫣'}) //, 'Dias restantes': resto
    }

    console.table(exibir)
};

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
            5 - Aplicar filtro
            -> `))

        switch(visualiza){
            case 1:
                console.log('Tarefas Pendentes:')
                exibe(tarefas)
                console.log('Tarefas concluídas:')
                exibe(Tconcluidas)
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            default:
                const filtra = prompt('Deseja aplicar algum filtro? Digite "s" para Sim ou "n" para Não...').trim().toLowerCase()
                filtra === 's'? filtros() : repete = false, console.log('\nVoltando para o menu inicial...');
                //Para o laço de repetição o fazendo voltar para o menu inicial

        }
    }

};

export function pesquisa(){

};

export function resume(){

};