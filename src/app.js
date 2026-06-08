import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");
};


let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon', 'puedes', 'com'];

let extensiones = ['com', 'es', 'io', 'net']

let phrases = [];


const formarFrase = (pronombres, adjetivos, sustantivos) => {


  for (let i = 0; i < pronombres.length; i++) {

    for (let j = 0; j < adjetivos.length; j++) {



      for (let z = 0; z < sustantivos.length; z++) {

        phrases.push(`${pronombres[i]}${adjetivos[j]}${sustantivos[z]}`);

        console.log(`${pronombres[i]}${adjetivos[j]}${sustantivos[z]}`);


      }




    }




  }






}

let fraseSufijo = [];

const agregarSufijo = (arr, extensiones) => {

  for (let numero in arr) {


    fraseSufijo.push(`${arr[numero]}.${extensiones[Math.floor(numero / 2) % extensiones.length]}`);
    


  }
}

function probarHack(arr) {


  for (let dominio of arr) {

    const dominioSeparada = dominio.split(".");
    let indice = 0;



    if (dominioSeparada[0].slice(-3) === 'com' || dominioSeparada[0].slice(-3) === 'net') {

      
      indice = arr.indexOf(dominio);
      arr[indice] = `${dominioSeparada[0].slice(0, -3) + '.'}${dominioSeparada[0].slice(-3)}`; 


    } else if (dominioSeparada[0].slice(-2) === 'es' || dominio[0].slice(-2) === 'io') {

      
      indice = arr.indexOf(dominio);
      arr[indice] = `${dominioSeparada[0].slice(0, -3) + '.'}${dominioSeparada[0].slice(-3)}`;
    }

  }




}
formarFrase(pronoun, adj, noun);


console.log(phrases);

agregarSufijo(phrases, extensiones);

console.log(fraseSufijo);

probarHack(fraseSufijo);


console.log(fraseSufijo);