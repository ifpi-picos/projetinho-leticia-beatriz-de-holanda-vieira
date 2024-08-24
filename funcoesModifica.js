// Os .trim() são adicionados no código por causa do sistema operacional do hardware utilizado(windows)
import { tarefas, Tconcluidas } from "./usuario";
import { exibe } from "./funcoesVisualiza";

function verificaData(dt){
    let quebradata = dt.split('/')

    if(quebradata.length === 3 && 
    Number(quebradata[0]) == quebradata[0] &&
    Number(quebradata[1]) == quebradata[1] &&
    Number(quebradata[2]) == quebradata[2]){

        let formdata = new Date(quebradata[2], quebradata[1]- 1, quebradata[0])
        return formdata

    }else{
        let formdata = null

        return formdata
    }
}

export function adiciona(){
    //Título
    let atividade = prompt('Digite sua tarefa:\n° ').trim().toLowerCase()

    //Para descrição
    let desc
    const opc = prompt('Deseja colocar a descrição de sua tarefa? Digite "s" para Sim ou "n" para Não...\n').trim().toLowerCase()
    opc == 's' ? desc = prompt('Escreva a descrição de sua tarefa: ').trim().toLowerCase(): desc = 'Não há descrição para essa atividade';

    //criação da data de vencimento e verificação
    let data = prompt('Digite a data de vencimento:\n(No formato DD/MM/AAAA)\n->').trim()
    verificaData(data)

    //data de criação da tarefa
    let dataCriacao = new Date()

    //Prioridade
    let nivel = Number(prompt('Qual a prioridade de sua tarefa?(Digite o número correspodente)\n1 - Baixa\n2 - Média\n3 - Alta\n-> '))
    nivel == 3? nivel = 'alta':(nivel == 2? nivel = 'media' : (nivel == 1? nivel = 'baixa' : nivel = null)); 

    //Verificação de campos obrigatórios
    while(atividade.length == 0 || verificaData(data) == null|| nivel == null ){

        console.log('Funções obrigatórias em branco(ou digitadas erradas)!')
        
        if(atividade.length == 0){
            atividade = prompt('Digite sua tarefa:\n° ').trim().toLowerCase()

        }else if(verificaData(data) == null){
            data = prompt('Digite a data de vencimento:\n(No formato DD/MM/AAAA)\n->').trim()
            verificaData(data)
        }else if(nivel == null){
            nivel = Number(prompt('Qual a prioridade de sua tarefa?(Digite o número correspodente)\n1 - Baixa\n2 - Média\n3 - Alta\n-> '))
            nivel == 3? nivel = 'alta':(nivel == 2? nivel = 'media' : (nivel == 1? nivel = 'baixa' : nivel = null));
        }
    }

    //Coloca na lista
    (atividade.length != 0 && verificaData(data) != null && nivel != null)? tarefas.push({dtcriacao : dataCriacao, titulo: atividade, descricao: desc, vencimento: verificaData(data), prioridade: nivel, status: false}): console.log('ERROR');
    
    exibe(tarefas)
};

export function edita(){
    let repete = true
    while(repete){
        //Unir todas as atividades para que o usuário consiga ver todas de uma vez
        let tudo = tarefas.concat(Tconcluidas)

        //Formatação para aparecer só as informações relevantes
        let mostra = []
        for(let i = 0; i < tudo.length; i++){
            let situacao
            tudo[i].status == false? situacao = '❌ 🫣' : situacao = '✅👌';
            mostra.push({'Título': tudo[i].titulo, 'Descrição': tudo[i].descricao, 'Data de Vencimento': tudo[i].vencimento, 'Prioridade': tudo[i].prioridade, 'Status': situacao});
        }

        console.log('Todas as tarefas:')
        console.table(mostra)
        //Opção de escolha
        let opcao = Number(prompt('Quais dessas atividades deseja editar?\n(Digite o número correspodente)\n'))
        
        //Verificação se a opção existe
        if(opcao >= tudo.length || opcao < 0){
            console.log('Essa tarefa não existe! Digite um número válido.')
            let pause = Number(prompt(`
                Deseja parar o modo de edição?
                Digite:
                1 - Sim
                2 - Não
                -> `))
            pause != 2 ? repete = false : repete = true;
        }else{
            let testeTarefas = tarefas.findIndex((atv) => atv.titulo == tudo[opcao].titulo)
            let testeConcluidas = Tconcluidas.findIndex((concluida) => concluida.titulo == tudo[opcao].titulo)
            const menu = Number(prompt(`
                Escolha o que deseja editar da tarefa:
                1 - Título
                2 - Descrição
                3 - Data de Vencimento
                4 - Prioridade
                Digite qualquer outra tecla para concluir a edição
                -> `))
            if(menu == 1){
                let novoTitulo = prompt('Digite o novo titulo para a tarefa\n').trim().toLowerCase()
                
                if(testeTarefas > -1){
                    tarefas[testeTarefas].titulo = novoTitulo
                    console.log('Título Alterado!')

                }else{
                    Tconcluidas[testeConcluidas].titulo = novoTitulo
                    console.log('Título Alterado')
                };

            }else if(menu == 2){
                let novdesc = prompt('Digite uma nova descrição para a tarefa\n').trim().toLowerCase()
                
                if(testeTarefas > -1){
                    tarefas[testeTarefas].descricao = novdesc
                    console.log('Descrição Alterada!')

                }else{
                    Tconcluidas[testeConcluidas].descricao = novdesc
                    console.log('Descrição Alterada!')
                };
            }else if(menu == 3){
                if(testeTarefas > -1){
                    let datanova = prompt('Digite a data de vencimento:\n(No formato DD/MM/AAAA)\n->').trim()
                    verificaData(datanova)
                    while(verificaData(datanova) == null){
                        console.log('Digite uma data válida!')
                        datanova = prompt('Digite a data de vencimento:\n(No formato DD/MM/AAAA)\n->').trim()
                        verificaData(datanova)
                    }

                    tarefas[testeTarefas].vencimento = verificaData(datanova)
                    console.log('Data de vencimento alterado!')
                }else{
                    console.log('Essa tarefa já foi concluída!')
                } 
            }else if(menu == 4){
                let nivel = Number(prompt('Qual a prioridade de sua tarefa?(Digite o número correspodente)\n1 - Baixa\n2 - Média\n3 - Alta\n-> '))
                nivel == 3? nivel = 'alta': (nivel == 2? nivel = 'media' : nivel = 'baixa');

                console.log('Nivel de prioridade alterado!')

                testeTarefas > -1 ? (tarefas[testeTarefas].prioridade = nivel) : (Tconcluidas[testeConcluidas].prioridade = nivel);
                
            }
        }; 
    };
};

export function remove(){

    let repete = true
    while(repete){
        let tudo = tarefas.concat(Tconcluidas)

        //Verifica se existe elementos para a exclusão
        if(tudo.length == 0){
            console.log('Não há nenhuma tarefa para ser removida!!')
            repete = false
        }else{
            exibe(tudo)

            let opcao = Number(prompt('Que Tarefa deseja remover?\n-> '))
            //Verificação se a opção existe
            if(opcao >= tudo.length || opcao < 0){
                console.log('Essa tarefa não existe! Digite um número válido.')
                let pause = Number(prompt(`
                    Deseja parar o modo de edição?
                    Digite:
                    1 - Sim
                    2 - Não
                    -> `))
                pause != 2 ? repete = false : repete = true;
            }else{
                let testeTarefas = tarefas.findIndex((atv) => atv.titulo == tudo[opcao].titulo)
                let testeConcluidas = Tconcluidas.findIndex((concluida) => concluida.titulo == tudo[opcao].titulo)

                //Verifica se a tarefa que será removida está na lista de tarefas ou na Tconcluida
                if(testeTarefas > -1){
                    tarefas.splice(testeTarefas, 1)
                    tarefas.length == 0? console.log('Tarefa removida!\nLista de tarefas pendentes está vazia!') : (console.log('Tarefa Removida!'), exibe(tarefas))
                }else{
                    Tconcluidas.splice(testeConcluidas, 1)
                    Tconcluidas.length == 0? console.log('Tarefa removida!\nLista de tarefas concluidas está vazia!') : (console.log('Tarefa Removida!'), exibe(Tconcluidas))
                }
            }
        }
    }
};

export function concluida(){
    let repete = true
    while(repete){
        if(tarefas.length == 0){
            console.log('Não há tarefas para ser concluida!')
            repete = false
        }else{
            exibe(tarefas)       
            let TarefaConcluida = Number(prompt('Qual dessas tarefas foi concluida?\n-> '))
            
            if(TarefaConcluida >= tarefas.length || TarefaConcluida < 0 ){
                console.log('Opção inválida!')

                let escolha = Number(prompt('Deseja parar a operação? (Digite o número correspondente)\n1 - Sim\n2 - Não\n-> '))
                escolha == 1? repete = false : repete = true;

            }else{
                
                tarefas[TarefaConcluida].status = true
                Tconcluidas.push(tarefas[TarefaConcluida])
                console.log('Tarefas concluídas: ')
                exibe(Tconcluidas)

                tarefas.splice(TarefaConcluida, 1)

                let escolha = Number(prompt('Deseja continuar a operação? (Digite o número correspondente)\n1 - Sim\n2 - Não\n-> '))
                escolha == 1? repete = true : repete = false;


            }
        }
    }
};