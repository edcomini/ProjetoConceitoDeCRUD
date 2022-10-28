
var id = 0;
var arrayDeDados = [];

function inserirEntrada(){
    var entrada = {};
    id++;
    entrada.id = id;
    entrada.informacaoDeEntrada = document.getElementById('entrada').value;
    
    if(verificacao(entrada.informacaoDeEntrada)){
        arrayDeDados.push(entrada);       
    }

    desenhaNoCanvas();
}

function verificacao(informacaoDeEntrada){

    let msg = '';
    if(informacaoDeEntrada == ''){
        msg += '\n Informe uma cor de entrada';
    }
    if(msg != ''){
        alert(msg);
        return false;
    }else{
        return true;
    }
}

var statusLimpeza = 0;

function desenhaNoCanvas(){
    var area = document.getElementById("meuCanvas");
    var pincel = area.getContext('2d');
    if(statusLimpeza){
        pincel.clearRect(0, 0, area.width, area.height);
        statusLimpeza = 0;
        limpaEntrada();
    }
  
    let xOffset = 0;

    for (let i= 0; i < arrayDeDados.length; i++) {
         
         pincel.fillStyle = arrayDeDados[i].informacaoDeEntrada;
         pincel.fillRect(xOffset, 0, 15, 300);
         xOffset = xOffset + 15;
         

         limpaEntrada();
    }   
}

function limpaEntrada(){
    document.getElementById("entrada").value = '';
    document.getElementById("identificacao").value = '';
}

var buscaId;

function lerDado(){
        buscaId = document.getElementById("identificacao").value;
    
   for (let i = 0; i < arrayDeDados.length; i++) {
        if(buscaId == arrayDeDados[i].id){
           
        document.getElementById("entrada").value = arrayDeDados[i].informacaoDeEntrada;
        break; 
        }      
   }
   if(buscaId == 0){
    alert('Informe o Id da cor. ');   
   }
   for (let i = 0; i < dadosDeletados.length; i++) {    
        if (buscaId == dadosDeletados[i]) {
            alert('Dado procurado já foi excluído.');
        }
        break;
   }
   
}

function atualizarDado(){
    buscaId = document.getElementById("identificacao").value;
   
    if(document.getElementById('entrada').value == ''){
        for (let i = 0; i < arrayDeDados.length; i++) {
            if(buscaId == arrayDeDados[i].id){
               
            document.getElementById("entrada").value = arrayDeDados[i].informacaoDeEntrada;
            break; 
            
            }          
       }
    }else{
        for (let i = 0; i < arrayDeDados.length; i++) {
            if(buscaId == arrayDeDados[i].id){
              arrayDeDados[i].informacaoDeEntrada =  document.getElementById('entrada').value;
              
              desenhaNoCanvas();       
             
                    }    
                }
    }
    if(buscaId == '' ){
        alert('Digite um Id do dado.');
    }      
}

var dadosDeletados = [];

function deletarDado(){


    for (let i = 0; i < arrayDeDados.length; i++) {
        if (arrayDeDados[i].id == document.getElementById('identificacao').value) {

            dadosDeletados.push(arrayDeDados[i].id);    
            arrayDeDados.splice(i, 1);
        }
        
    }

    statusLimpeza = 1;
    desenhaNoCanvas(); 
       
}

