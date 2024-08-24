// Os .trim() são adicionados no código por causa do sistema operacional do hardware utilizado(windows)
import { tarefas, Tconcluidas} from "./usuario";


export function exibe(array){
    //Esses *for* abaixo formata as palavras da array para uma exibição mais bonita
    let exibir = []
    for(let i = 0; i < array.length; i++){

        let datadecriacao = array[i].dtcriacao.toLocaleString("pt-BR", {timeZone : "America/Sao_Paulo"})
        datadecriacao = datadecriacao.split(', ')[0];

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

        let vence = array[i].vencimento.toLocaleString("pt-BR", {timeZone : "America/Sao_Paulo"})
        vence = vence.split(', ')[0];

        //Primeira letra da prioridade maiúscula
        let priori = array[i].prioridade.charAt(0).toUpperCase() + array[i].prioridade.slice(1).toLowerCase()

        //Muda o emoji do status conforme seu valor
        array[i].status == true ? exibir.push({'Data de criação': datadecriacao, 'Título da tarefa': tarefa, 'Descrição': desc,'Prioridade': priori, 'Status': '✅👌'}) : exibir.push({'Data de criação': datadecriacao, 'Título da tarefa': tarefa, 'Descrição': desc,'Prioridade': priori,'Data de vencimento': vence, 'Status': '❌ 🫣'}) //, 'Dias restantes': resto
    }

    console.table(exibir)
};

function filtros(){
    let repete = true
    while(repete){
        const opc = Number(prompt(`
            Escolha que maneira deseja filtrar as tarefas:
            1 - Filtrar por status (pendente/concluída).
            2 - Filtrar por prioridade.
            3 - Filtrar por data de vencimento.
            Digite outro número se deseja voltar ao menu de visualização
            -> `))

        switch(opc){
            case 1:
                const qual = Number(prompt('Escolha um status:\n1 - Pendentes\n2 - Concluídas\n-> '))
                qual === 1? exibe(tarefas) : exibe(Tconcluidas);
                break;
            case 2:
                let priori = Number(prompt('Qual prioridade deseja filtrar?\n1 - Baixa\n2 - Média\n3 - Alta\n-> '));
                priori === 1? priori = 'baixa' : ( priori === 2? priori = 'media' : priori = 'alta');

                let listanv = []
                for(let j in tarefas){
                    console.log(tarefas[j].prioridade)
                    if(tarefas[j].prioridade == priori){
                        listanv.push(tarefas[j])

                    }else{
                        continue
                    }
                }
                if(listanv.length == 0){
                    console.log('Não há tarefa com esse nível de prioridade!')
                }else{
                exibe(listanv)
                }
                break;
            case 3:
                tarefas.sort((a, b) => a.vencimento - b.vencimento)
                console.log('Lista de tarefas: ')
                exibe(tarefas)
                break;
            default:
                console.log('Suas listas de tarefas está assim: ')
                if(tarefas.length == 0){
                    console.log('Não há tarefas pendentes!')
                }else{
                console.log('Tarefas Pendentes:')
                exibe(tarefas)}

                if(Tconcluidas.length == 0){
                    console.log('Não há tarefas concluídas!')
                }else{
                console.log('Tarefas concluídas:')
                exibe(Tconcluidas)}

                console.log('Voltando para para o menu de visualização...')
                repete = false
        }
    }
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
            0 - Voltar para o menu inicial
            -> `))

        switch(visualiza){
            case 1:
                if(tarefas.length == 0){
                    console.log('Não há tarefas pendentes!')
                }else{
                console.log('Tarefas Pendentes:')
                exibe(tarefas)}

                if(Tconcluidas.length == 0){
                    console.log('Não há tarefas concluídas!')
                }else{
                console.log('Tarefas concluídas:')
                exibe(Tconcluidas)}

                break;
            case 2:
                tarefas.sort((a, b) => a.vencimento - b.vencimento)
                console.log('Lista de tarefas: ')
                exibe(tarefas)
                break;
            case 3:
                //Atribui um número pelo nível da prioridade
                for(let i in tarefas){
                    let n
                    if(tarefas[i].prioridade == 'alta'){
                        n = 1
                    }else if(tarefas[i].prioridade == 'media'){
                        n = 2
                    }else{
                        n =3
                    }
                    tarefas[i].N = n
                }
                tarefas.sort((a, b) => a.N - b.N)
                exibe(tarefas)
                break;
            case 4:
                if(tarefas.length != 0 ){
                    tarefas.sort((a, b) => a.dtcriacao - b.dtcriacao)
                    console.log('Lista de tarefas pendentes: ')
                    exibe(tarefas)}
                if(Tconcluidas.length != 0 ){
                    console.log('Lista de tarefas concluídas: ')
                    Tconcluidas.sort((a, b) => a.dtcriacao - b.dtcriacao)
                    exibe(Tconcluidas)
                }
                break;
            case 5:
                filtros()
                break;
            case 0 :
                repete = false
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