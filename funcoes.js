const tarefas = [
    {titulo: 'limpar', 
     descricao: 'limpeza', 
     vencimento: 2, 
     prioridade: 'baixa',
     status: false}
    ]
        
const Tconcluidas = []


export function adiciona(){

    let atividade = prompt('Digite sua tarefa:\n° ').trim().toLowerCase()

    let desc
    const opc = prompt('Deseja colocar a descrição de sua tarefa? Digite "s" para Sim ou "n" para Não...\n').trim().toLowerCase()
    opc == 's' ? desc = prompt('Escreva a descrição de sua tarefa: ').trim().toLowerCase(): desc = 'Não há descrição para essa atividade';

    let venc = Number(prompt('Digite o número de dias  que falta para acabar o prazo de sua atividade:\n'))
    venc != 0? venc = venc : venc = null;

    let nivel = Number(prompt('Qual a prioridade de sua tarefa?(Digite o número correspodente)\n1 - Baixa\n2 - Média\n3 - Alta\n-> '))
    nivel == 3? nivel = 'alta':(nivel == 2? nivel = 'media' : (nivel == 1? nivel = 'baixa' : nivel = null)); 

    while(atividade.length === 0 || venc === null|| nivel === null ){
        console.log('Funções obrigatórias em branco!')
        if(atividade.length === 0){
            atividade = prompt('Digite sua tarefa:\n° ').trim().toLowerCase()
            return atividade

        }else if(venc === null){
            venc = Number(prompt('Digite o número de dias  que falta para acabar o prazo de sua atividade:\n'))
            venc != 0? venc = venc : venc = null;
        
        }else if(nivel === null){
            nivel = Number(prompt('Qual a prioridade de sua tarefa?(Digite o número correspodente)\n1 - Baixa\n2 - Média\n3 - Alta\n-> '))
            nivel == 3? nivel = 'alta':(nivel == 2? nivel = 'media' : nivel ='baixa');
        }
    }

    tarefas.push({titulo: atividade, descricao: desc, vencimento: venc, prioridade: nivel, status: false})

    console.table(tarefas)
};

function filtros(){

};

export function lista(){
    let exibir = []
    for(let i = 0; i < tarefas.length; i++){
        let tarefa = tarefas[i].titulo.charAt(0).toUpperCase() + tarefas[i].titulo.slice(1).toLowerCase()

        exibir.push(tarefa)
    }

};

export function edita(){

};

export function remove(){

};

export function concluida(){

};

export function pesquisa(){

};

export function resume(){

};