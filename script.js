
const btnIncrementar = document.getElementById('btn-incrementar');
const btnDecrementar = document.getElementById('btn-decrementar');
const valorContador = document.getElementById('valor-contador');

const campoTexto = document.getElementById('campo-texto');
const contagemCaracteres = document.getElementById('contagem-caracteres');
const containerParagrafos = document.getElementById('container-paragrafos');

const tipoLista = document.getElementById('tipo-lista');
const btnAdicionarLista = document.getElementById('btn-adicionar-lista');
const listaContainer = document.getElementById('lista-container');

const btnReset = document.getElementById('btn-reset');


let contador = 0;

btnIncrementar.addEventListener('click', function() {
    contador++; 
    valorContador.textContent = contador; 
});

btnDecrementar.addEventListener('click', function() {
    if (contador > 0) {
        contador--; 
        valorContador.textContent = contador; 
    } else {
        
        alert("O contador já está em zero!");
    }
});

campoTexto.addEventListener('input', function() {
    let texto = campoTexto.value;
    
    let textoSemEspacos = texto.replace(/\s/g, ''); 
    contagemCaracteres.textContent = textoSemEspacos.length;
});


campoTexto.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        let mensagem = campoTexto.value;

        if (mensagem !== "") {
           
            let novoParagrafo = document.createElement('p');
            novoParagrafo.textContent = mensagem;
            
            containerParagrafos.appendChild(novoParagrafo);
            
           
            campoTexto.value = "";
            contagemCaracteres.textContent = 0;
        }
    }
});



btnAdicionarLista.addEventListener('click', function() {
    let tipo = tipoLista.value; 
    let novaLista = document.createElement(tipo);
    
    
    for (let i = 1; i <= 3; i++) {
        let item = document.createElement('li');
        item.textContent = "Item de exemplo " + i;
        novaLista.appendChild(item);
    }
    
    
    listaContainer.appendChild(novaLista);
});



btnReset.addEventListener('click', function() {
    
    contador = 0;
    valorContador.textContent = 0;
    
    
    campoTexto.value = "";
    contagemCaracteres.textContent = 0;
    
    
    containerParagrafos.innerHTML = "";
    
    
    listaContainer.innerHTML = "";
});