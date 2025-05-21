function exec(e){
   
    e.preventDefault()
    if(validar()){
        adicionarCoisa();
    }
    //let x = document.getElementById('lista')
    //let a = x.getElementsByTagName('span');
    //console.log(x.rows.length)
    //console.log(a[0].firstChild.textContent)

    mudarEstadoVazio();
    
}

function validar(){
    if (getCoisa() == "") {
        tostando("Coisa must be filled...")
        return false;
    }
    let existente = false//getPosCoisaLista(getCoisa()) >=0; 
    if(existente){
        tostando("Coisa already exist...")
        return false;
    }
    return true;
}

function adicionarCoisa() {
    
    let temp = `<tr>
            <td class="td-span lato-regular">
                <span class="span-coisa">${getCoisa()}</span>
            </td>
            <td class="td-btn">
                <button><i class="fa-solid fa-check"></i></button>
                <button onclick=buttonRemover(event)><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>`;
    let clon = document.createElement('tr')
    clon.innerHTML = temp;
    document.getElementById('lista').appendChild(clon);
    alterarValorLista();
    

    //let sp = clon.getElementsByTagName('span');
}

function buttonRemover(event){
    let a = $(event.target).parents('tr').remove();
    //$(event.target).parents('tr').getElementsByTagName('span')[0].firstChild.textContent;
    console.log(a);

    mudarEstadoVazio()
}


function checkCoisa(){

} 

//Alterar Value Lista
function alterarValorLista(){
    let x = document.getElementById("lista");
    x.value = listaTamanho();
    //console.log(x.value)
}
//Getters
function getPosCoisaLista(coisa){
    i = 0;
    for(i = 0;getSpanLista().length>i;i++){
        //console.log(`pos = ${i + getSpanLista()[i].firstChild.textContent}`)
        if(getSpanLista()[i].firstChild.textContent == coisa){
            return i;
        }
    }
    return -1;
}

function getCoisa(){
    let x = document.forms["form-entrada"]["fentrada"].value;
    return x;
}
function getLista(){
    let x = document.getElementById('lista');
    return x;
}
function getSpanLista(){
    let x = getLista().getElementsByTagName('span');
    return x;
}

//Verificar estado
function listaVazia(){
    let x = document.getElementById('lista');
    return x.rows.length == 0;
}
function listaTamanho(){
    let x = document.getElementById('lista');
    return x.rows.length;
}


//Add/Remove Mensagem Lista Vazia;
function mudarEstadoVazio(){
    let x = document.getElementById('h1coisa');
    if(listaVazia()){
        x.className = "show";
        //console.log("aqui 12")
    }else{
        x.className = "hidden";
       // console.log("aqui 13")
    }
    //console.log("aqui")
}


//Toast

let showon = 0;
function tostando(text) {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
    let sp = x.getElementsByTagName('span');
    sp[0].innerHTML = text ? text : "texto vazio";
    //console.log(x.className)
    if(x.className == "show"){
        showon +=1
        sp[1].innerHTML = ` (${showon})` 
    }

    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    //setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
} 

function closeTostando(){
    var x = document.getElementById("snackbar");
    showon = 0;
    x.className="hidden";
    let sp = x.getElementsByTagName('span');
    sp[1].innerHTML = ""
}