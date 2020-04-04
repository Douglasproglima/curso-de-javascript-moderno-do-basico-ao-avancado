/*
try {
    Executa quando não há erros
} catch (error) {
    Executa quando há erros
} finally {
    Executa Sempre
}
*/

function contextMain(){
    try {
        /* Exemplo de uma situação real que é usado o Finally */
        const openFile = 'C:\Users\douglasproglima\Desktop\Curso Spring Framework Experts – Algaworks.txt';
        const indexFile = openFile.indexOf('Curso');
        const file = openFile.substring(indexFile, openFile.length-1);

        //MANIPULACAO DO ARQUIVO............OU ABRIR E FECHAR CONEXAO COM BD
        //Erro e não fecha o arquivo pois o try encerra o programa
        file123;

    } catch (error) {
        console.log('Erro ao salvar arquivo . ');    
    }finally{
        closeFile();
        //OU closeConnectionBd();
    }
    
    function closeFile () { console.log('Arquivo Finalizado.') };


};
//contextMain();

function contextMain2(){
    const getTimePtBr = (data) => {
        if(data && !(data instanceof Date))
            throw new TypeError('Não é uma data válida');
        
        if(!data)
            data = new Date();

        return data.toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        })
    }

    try {
        console.log(getTimePtBr(11));
    } catch (error) {
        console.log('Ocorreu o seguinte erro: ' + error);
    }finally{
        console.log('Fim da operação!');
    }
    
}
contextMain2();