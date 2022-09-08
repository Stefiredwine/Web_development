/*querySelector*/
const heading= document.querySelector('.header__texto h2')
heading.textContent= 'Nuevo Heading con JS';
console.log(heading);

/*querySelectorAll*/

 const enlaces = document.querySelectorAll('.navegacion a');
 enlaces[0].textContent='Nuevo Enlace JS';
/*enlaces[0].href = 'htt//otraPágina.com';*/
 enlaces[0].classList.add('nueva-clase');

 /*get ElementByID*/

/* const heading2 = document.getElementbyId('heading'); sin colocar # del id*/


/*Generar un nuevo enlace*/

const nuevoEnlace = document.createElement('A')/*permite crear código HTML*/
/*Agregar href*/
nuevoEnlace.href = 'nuevo-enlace.html';
/*Agregar el texto*/
nuevoEnlace.textContent = 'Nuevo Enlace JS';

/*Agregar la clase*/
nuevoEnlace.classList.add('navegacion__enlace');

/*Agregarlo al documento*/
const navegacion = document.querySelector('.nagevacion');
navegacion.appendChild(nuevoEnlace);/*appendChild es agregar un hijo de*/

console.log(nuevoEnlace);

