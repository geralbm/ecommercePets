/***************Programa que permite inscribirse al mailing de Ofertas**************/

//Inicialización de variables
let mail = "";
let longMail = 0;
let valido = true;
let reinten = false;
let cantReint = 1;


//Inicio del Programa
while (valido === true && cantReint <= 3) {
    
    if (reinten === false){
        mail = prompt ("¿Queres recibir Ofertas por mail?:");
        longMail = mail.toString().length; 
    }else if (reinten === true){
        mail= prompt("Reingresa el mail:");
        longMail = mail.toString().length; 
        cantReint++;
    }

    if (longMail !== 0 && valido === true){
        for (let i=0; i<=longMail; i++){
            if (mail[i] === "@" ){
                valido = false;
                i= longMail;
                alert("¡Genial! Recibiras nuestras Ofertas por mail");
            }else if (longMail === i && mail[i]!=="@" && reinten === false){
                valido=true;
                reinten = true;
                alert ("Mail Incorrecto.Tenes 3 oporutnidades para reingresar el mail.")
            }
        }
    }
}
