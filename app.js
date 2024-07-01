// Variables
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible+1);
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 7;


while (numeroUsuario != numeroSecreto) { 
    numeroUsuario = parseInt (prompt(`Me indicas un numero entre 1 y ${numeroMaximoPosible} por favor:`));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //acertamos, fue verdadera la condicion. Usa comilla invertida, SIGNO DE PESOS y CORCHETES, para llamar al numero correcto. If es con simbolo ?, el de else :
        alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        // la condicion no se cumplio
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        } else {
        alert('Lo siento, el numero secreto es mayor');
        }
        // Incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;

        //palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`);
            break;
        }
    }
    

}   