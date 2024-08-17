// Os .trim() são adicionados no código por causa do sistema operacional do hardware utilizado(windows)
import { tarefas, Tconcluidas} from "./usuario";

export function adiciona(){

    let atividade = prompt('Digite sua tarefa:\n° ').trim().toLowerCase()

    let desc
    const opc = prompt('Deseja colocar a descrição de sua tarefa? Digite "s" para Sim ou "n" para Não...\n').trim().toLowerCase()
    opc == 's' ? desc = prompt('Escreva a descrição de sua tarefa: ').trim().toLowerCase(): desc = 'Não há descrição para essa atividade';

    let data = prompt('Digite a data de entrega:(coloque na forma DD/MM/AAAA)\n-> ').trim()
    data != ''? dt(data) : data = null;


    function dt(dados){
        let datalocal
        let quebraData = dados.split('/')
        
        datalocal = new Date(quebraData[2], quebraData[1] - 1, quebraData[0]);

        return datalocal.toLocaleString("pt-BR", {timeZone : "America/Sao_Paulo"});
    }

    
    let nivel = Number(prompt('Qual a prioridade de sua tarefa?(Digite o número correspodente)\n1 - Baixa\n2 - Média\n3 - Alta\n-> '))
    nivel == 3? nivel = 'alta':(nivel == 2? nivel = 'media' : (nivel == 1? nivel = 'baixa' : nivel = null)); 

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

    (atividade.length != 0 && data != null && nivel != null)? tarefas.push({titulo: atividade, descricao: desc, vencimento: data, prioridade: nivel, status: false}): console.log('ERROR');
    
    console.table(tarefas)
};

export function edita(){

};

export function remove(){

};

export function concluida(){

};