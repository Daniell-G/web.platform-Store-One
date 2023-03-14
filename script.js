// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Formulario de registro</h1>`;

const scriptURL =
  'https://script.google.com/macros/s/AKfycbzbf3P5tHXEyz9yUUfwvoHYm1App6NUXl7dm1NQzbocddScrKc/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => console.log('Success!', response))
    .catch((error) => console.error('Error!', error.message));
});
.header2 {
	position: fixed;
	height:100px;
}

.header2 .logo {
	line-height:100px;
	font-size:30px;
}

.header2 nav {
	line-height:100px;
}
Ya para finalizar con CSS vamos a agregar la parte que nos permite adaptar el header a un dispositivo móvil.

@media screen and (max-width: 950px) {
	header .logo,
	header nav {
		width:100%;
		text-align:center; /*Centramos el menu y el logotipo*/
		line-height:100px;
	}

	.header2 {
		height:auto;
	}

	.header2 .logo,
	.header2 nav {
		line-height:50px;
	}
}
Y ya por ultimo vamos a pasar al código Javascript en donde detectamos cuando el usuario baje en pantalla y cambiamos de un header a otro, esto simplemente agregando la clase .header2 al bajar en pantalla y quitandola al subir de nuevo hasta arriba.

$(document).ready(function(){

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('header').addClass('header2');
		} else {
			$('header').removeClass('header2');
		}
	});
  header, header nav, header nav .logo{
    -webkit-transition:height 0.3s;
    -moz-transition:height 0.3s;
    -ms-transition:height 0.3s;
    -o-transition:height 0.3s;
    transition:height 0.3s;
    }
