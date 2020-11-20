//Primero tengo que traerme los elementos que quiero modificar del DOM 
const textos = document.querySelectorAll('.claro_texto');
const cajas = document.querySelectorAll('.claro_container');
const switcher = document.querySelector('#dark_switch')

//Creo una variable booleana para saber si tengo activado el modo oscuro.
let darkToggle = false;
switcher.addEventListener(
  'click',
  (darkMode = () => {
    if (!darkToggle) {
      //Como 'textos' y 'cajas' es un array que puede tener varios elementos le aplico un forEach para agregarle estilos:
      textos.forEach( el => el.style = 'color: #E8E8E8');
      cajas.forEach( el => el.style = 'background-color: #313131');
      document.body.style = 'background-color: #1c1c1c';
      switcher.innerHTML = 'Modo Claro';
      darkToggle = true;
    } else {
      textos.forEach( el => el.style = 'color: #2B4D36');
      cajas.forEach( el => el.style = 'background-color: #E8E8E8');
      document.body.style = 'background-color: #FFFFFF';
      switcher.innerHTML = 'Modo Oscuro';
      darkToggle = false;
    }
  })
);

