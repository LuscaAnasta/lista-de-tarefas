function exec(e){
    e.preventDefault()
    if(validar()){
        adicionarCoisa();
    }

    let x = document.getElementById('lista')
    let a = x.getElementsByTagName('span');
    //console.log(x.rows.length)
    //console.log(a[0].firstChild.textContent)

    mudarEstadoVazio();
    
}

function validar(){
    if (getCoisa() == "") {
        tostando("Coisa must be filled...")
        return false;
    }
    return true;
}

function adicionarCoisa() {
    let temp = `<tr>
            <td class="td-span lato-regular">
                <span>${getCoisa()}</span>
            </td>
            <td class="td-btn">
                <button><i class="fa-solid fa-check"></i></button>
                <button><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>`;
    let clon = document.createElement('tr')
    clon.innerHTML = temp;
    document.getElementById('lista').appendChild(clon);
    alterarValorLista();
    

    //let sp = clon.getElementsByTagName('span');
    
    
}
function alterarValorLista(){

    let x = document.getElementById("lista");
    x.value = listaTamanho();
    console.log(x.value)
    
}
function listaVazia(){
    let x = document.getElementById('lista');
    return x.rows.length == 0;
}
function listaTamanho(){
    let x = document.getElementById('lista');
    return x.rows.length;
}

//document.getElementById('lista').addEventListener(listaVazia(), mudarEstadoVazio());
function mudarEstadoVazio(){
    console.log("aqui 1");
    let x = document.getElementById('h1coisa');
    if(listaVazia()){
        
        x.className = "show";
        console.log("aqui 12")
    }else{
        x.className = "hidden"
        console.log("aqui 13")
    }
    console.log("aqui 2")
}



function getCoisa(){
    let x = document.forms["form-entrada"]["fentrada"].value;
    return x;
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