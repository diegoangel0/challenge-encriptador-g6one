const textoArea = document.querySelector(".textA");

function encriptarDesencriptar(op) {//La funcion principal
    if (textoArea.value != "") {
        if (op === "encriptar") {//encriptacion
            document.querySelector(".parrafo").innerText = textoArea.value.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");
        }else if(op == "desencriptar"){//desencriptacion
            document.querySelector(".parrafo").innerText = textoArea.value.replaceAll("ai", "a").replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ufat", "u");
        }
        document.querySelector(".container-img").style.display = "none";//oculta container 
        document.querySelector(".container-p").style.display = "flex";//muestra container
    }
}

function bCopiar() {
    navigator.clipboard.writeText(document.querySelector(".parrafo").innerText).then(()=>{//metodo copiado, retorna promesa
        alert("Mensaje copiado");//copia, muestra msj y resetea valores
        document.querySelector(".textA").value = "";
        document.querySelector(".container-img").style.display = "flex";
        document.querySelector(".container-p").style.display = "none";
        
    }).catch(()=>alert("No se pudo copiar el mensaje"));//no copia, muestra msj
}

function validarTexto() {
    //validaciones
        textoArea.value = textoArea.value.replace(/[^a-z\s]/g, '');
    
}