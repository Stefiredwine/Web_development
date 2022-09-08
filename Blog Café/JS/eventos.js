

/*Eventos*/


console.log('Soy el 1');
/*Cuando el evento ocurra, empieza una función*/
window.addEventListener('load', imprimir);

window.addEventListener('load', function() { /*load espera a que el JS y los archivos
	que dependen de HTML estén listos*/
	console.log('Yo el 2do evento');
});

window.onload = function(){ /*onload y load son lo mismo*/
	console.log('Yo me muestro luego del 2');
}

document.addEventListener('DOMContentLoaded', function() { /*Solamente espera a que se descargue el HTML*/
	console.log(4);
})

console.log(5);

function imprimir(){
	console.log(0);

}



/*Eventos de los Inputs y Textarea*/

const datos ={
	nombre:'',
	email:'',
	mensaje:''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('formulario');


nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

/*El Evento de Submit*/
formulario.addEventListener('submit', function(evento) {
	evento.preventDefault();

	/*Validar Formulario*/

	const { nombre, email, mensaje }= datos;
	console.log(nombre);
	console.log(email);
	console.log(mensaje);

	/*Enviar Formulario*/

	console.log('Enviando Formulario');
});



function leerTexto (e){
/*	console.log(evento.target.value);*/

datos[e.target.id]= e.target.value;


console.log(datos);
}
