/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

// Funzione che calcola l'area del rettangolo
function area(l1, l2) {
  return l1 * l2;
}

const returnArea = area(6, 7);
console.log("Ecco l'area calcolata:", returnArea);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/*const n1 = parseFloat(prompt("Inserisci un numero intero"));
const n2 = parseFloat(prompt("Inserisci un numero intero"));
//Funzione che addiziona due numeri se diversi fra di loro altrimenti li molriplica

/*function crazySum(n1, n2) {
  if (n1 === n2) {
    return (n1 + n2) * 3;
  } else {
    return n1 + n2;
  }
}
const risultatoCrazy = crazySum(n1, n2);
console.log("Risultato", risultatoCrazy);


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/*let n3 = 19;
function crazyDiff(n1, n3) {
  if (n1 > 19) {
    return Math.abs(n1 - n3) * 3;
  } else if (n1 < n3) {
    return Math.abs(n1 - 19);
  }
}
const differenzaCrazy = crazyDiff(n1, 19);
console.log("DifferenzaCrazy", differenzaCrazy);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

let n = 30;
console.log("Riconoscimento di n", typeof n); //qui vedi che il numero è ancora riconosciuto come numero
function boundary(n) {
  if (n > 20 <= 100 || n === 400) {
    return true;
  } else {
    return false;
  }
}
const boundaryResult = boundary(n);
console.log("Risultato boundary", boundaryResult); //qui ci dice che è diventato true
console.log("Conversione", typeof boundaryResult); //qui vedi che il numero ora è booleano, non serve ai fini dell'esericizio semplicemente per mettermi un po' in testa il typeof

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/*let str = prompt("Scrivi la tua frase"); //Alessio ricordati che tutto ciò che ti viene detto tramite prompt è comunque stringa!
function epify(str) {
  //(str) è fittizio se scrivi const risultatoStr = epify(n) quella n vale come quello str, scrivi str per ricordarti che vuoi un valore stringa magari ma alla fine vicino a epify(esatto qui basta che ti riferisci a qualcosa che ti da valore!)
  if (str.startsWith("EPICODE")) {
    return str;
  } else {
    return "EPICODE" + " " + str;
  }
}
const risultatoStr = epify(str);
console.log("Risultato", risultatoStr);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

let npositivo = 7;
function check3and7(npositivo) {
  if (npositivo % 3 === 0) {
    return npositivo + " " + " è multiplo di 3";
  } else if (npositivo % 7 === 0) {
    return npositivo + " " + "è multiplo di 7";
  } else {
    return npositivo + " " + "non è multiplo nè di 3 nè di 7";
  }
}
const risultatoCheck = check3and7(npositivo);
console.log("Il numero:", risultatoCheck);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(str) {
  //Alessio ricordi prima? Uguale str sta lì mezzo molto è per dirti di aggiungere un qualcosa che sia valore
  const arrayLettere = str.split(""); // "split("")" ti prende una stringa e te la fa diventare un array e te la divide per lettere se avessi messo uno spazio tra le virgolette, (" "), l'avrebbe divise per parole, utile in caso di frase
  const inversione = arrayLettere.reverse(); // qui inverti le lettere, in caso avessi fatto la divisione per parole inverti la posizione di parole ma non quella delle lettere.
  const assemblamento = inversione.join(""); //qui riunisci tutto come sottoforma di stringa, attenzione ai ("") in questo caso va bene perchè non servono spazi o altri caratteri, altrimenti glie li avresti dovuti inserire dentro.
  return assemblamento; //non ti scordare mai il return.
}
const risultatoReverse = reverseString("EPICODE");
console.log("L'inversione", risultatoReverse);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(parole) {
  const arrayParole = parole.split(" ");
  const paroleMaiuscole = arrayParole.map(function (parola) {
    //.map è un metodo che passa ogni singolo elemento dell’array alla funzione che gli dai, ovvero detto terra terra è come se mandassi tutte le parole divise fra di loro e le analizza tutte
    const primaLettera = parola.charAt(0).toUpperCase(); // Prendo la prima lettera e la trasformo in maiuscolo
    const restoParola = parola.slice(1); // Prendo il resto della parola senza la prima lettera
    return primaLettera + restoParola;
  });
  return paroleMaiuscole.join(" ");
}
const RisultatoUpper = upperFirst("dopo il corso saremo i maghi di JavaScript");
console.log("Il risultato è:", RisultatoUpper);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(stringa) {
  const tagliamo = stringa.slice(1, -1);
  return tagliamo;
}
const risultatoCut = cutString("Sono Solo Parole Le Nostre");
console.log("Risultato di Cut", risultatoCut);
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(random) {
  return Math.floor(Math.random() * 10); //math.floor arrotondi per difetto, Math.ciel arrotondi per eccesso e Math.around a seconda se sta dopo o prima del ,5
}
let randomNum = giveMeRandom(); //qui lasciamo () vuoto perchè essendo che deve dare numeri randomici se gli dai valore poi non è più randomico.
console.log(randomNum);
