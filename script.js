const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafo = document.getElementsByClassName('parrafo');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log(h1);

console.log({
    h1,
    p,
    parrafo,
    pid,
    input,
});

h1.innerHTML = 'Patito <br> Feo'; // convierte todo en codigo HTML

h1.innerText = 'Patito <br> Feo'; //Convierte todo en texto

// console.log(h1.getAttribute('class'));

// h1.setAttribute('class', 'rojo'); // Cambia la palabra del HTML al string de JS

h1.classList.add('rojo'); // Agrega el string en el HTML
h1.classList.remove('verde'); // Quita el string del HTML

input.value = "456" // agrega valor por defecto de acuerdo a lo que dejemos escrito

const img = document.createElement('img');
img.setAttribute('src', 'https://media.airedesantafe.com.ar/p/4edc8b148563700d094a067c636a8cc2/adjuntos/268/imagenes/000/989/0000989534/1200x675/smart/galaxiasjpg.jpg')
console.log(img);

pid.innerHTML = ""
pid.appendChild(img);
