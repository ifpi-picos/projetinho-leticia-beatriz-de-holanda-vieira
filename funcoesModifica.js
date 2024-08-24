// Os .trim() são adicionados no código por causa do sistema operacional do hardware utilizado(windows)
import { tarefas, Tconcluidas} from "./usuario";
import { exibe } from "./funcoesVisualiza";

export function adiciona(){
    //Título
    let atividade = prompt('Digite sua tarefa:\n° ').trim().toLowerCase()

    //Para descrição
    let desc
    const opc = prompt('Deseja colocar a descrição de sua tarefa? Digite "s" para Sim ou "n" para Não...\n').trim().toLowerCase()
    opc == 's' ? desc = prompt('Escreva a descrição de sua tarefa: ').trim().toLowerCase(): desc = 'Não há descrição para essa atividade';

    //Data de vencimento
    let data = prompt('Digite a data de entrega:(coloque na forma DD/MM/AAAA)\n-> ').trim()
    data != ''? dt(data) : data = null;

    //Essa função quebra a string *data* e formata para o padrão nacional
    function dt(dados){
        let datalocal
        let quebraData = dados.split('/')
        
        datalocal = new Date(quebraData[2], quebraData[1] - 1, quebraData[0]).toLocaleDateString();

        return datalocal.toLocaleString("pt-BR", {timeZone : "America/Sao_Paulo"});
    }

    //Data de criação
    let dataCriacao= new Date().toLocaleDateString()
    dataCriacao = dataCriacao.toLocaleString("pt-BR", {timeZone : "America/Sao_Paulo"})

    //Prioridade
    let nivel = Number(prompt('Qual a prioridade de sua tarefa?(Digite o número correspodente)\n1 - Baixa\n2 - Média\n3 - Alta\n-> '))
    nivel == 3? nivel = 'alta':(nivel == 2? nivel = 'media' : (nivel == 1? nivel = 'baixa' : nivel = null)); 

    //Verificação de campos obrigatórios
    while(atividade.length == 0 || data == null|| nivel == null ){

        console.log('Funções obrigatórias em branco(ou digitadas erradas)!')
        
        if(atividade.length == 0){
            atividade = prompt('Digite sua tarefa:\n° ').trim().toLowerCase()

        }else if(data == null){
            data = prompt('Digite a data de entrega:(coloque na forma DD/MM/AAAA)\n-> ').trim()
            data != ''? dt(data): data = null;
        
        }else if(nivel == null){
            nivel = Number(prompt('Qual a prioridade de sua tarefa?(Digite o número correspodente)\n1 - Baixa\n2 - Média\n3 - Alta\n-> '))
            nivel == 3? nivel = 'alta':(nivel == 2? nivel = 'media' : (nivel == 1? nivel = 'baixa' : nivel = null));
        }
    }

    //Coloca na lista
    (atividade.length != 0 && data != null && nivel != null)? tarefas.push({dtcriacao : dataCriacao, titulo: atividade, descricao: desc, vencimento: data, prioridade: nivel, status: false}): console.log('ERROR');
    
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
                    let novaDt = prompt('Digite a data de entrega:(coloque na forma DD/MM/AAAA)\n-> ').trim()
                    let quebraData = novaDt.split('/')
                
                    let datalocal = new Date(quebraData[2], quebraData[1] - 1, quebraData[0]).toLocaleDateString();
                    datalocal = datalocal.toLocaleString("pt-BR", {timeZone : "America/Sao_Paulo"});

                    tarefas[testeTarefas].vencimento = datalocal
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

};