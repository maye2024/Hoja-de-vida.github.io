document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems);

});

// Or with jQuery




document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});


// ################## Formulario #############################3

//Para el select
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
});

// para la fecha
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(elems);
});


//// modal
function abrirModal(e) {
  e.preventDefault()
  document.addEventListener('DOMContentLoaded', () => {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
    const modal = M.Modal.getInstance(document.getElementById('modal1'));
    // const form = document.getElementById('formulario');

    // form.addEventListener('submit', (e) => { //el usuario presiona el boton submit
    //   e.preventDefault(); // Evita que se recargue

    console.log('Datos capturados:', { nombre, tel, email });

    modal.open()
  });
  // });
}


// funcion obtener Datos formularios  

function ObtenerDatos(e) {
  e.preventDefault()
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
  const modal = M.Modal.getInstance(document.getElementById('modal1'));

  // window.addEventListener('DOMContentLoaded', () => {
  //   const form = document.getElementById('formulario');

  //   //addEventListener función de JavaScript que sirve para escuchar eventos en un elemento HTML (Click - submit)
  //   form.addEventListener('submit', (e) => { //el usuario presiona el boton submit
  //     e.preventDefault(); // Evita que se recargue


  let nombre = document.getElementById('nombre').value.trim();
  let tel = document.getElementById('telefono').value.trim();
  let email = document.getElementById('email').value.trim();
  let ciudad = document.getElementById('ciudad').value.trim();
  let pais = document.getElementById('pais').value.trim();
  let genero = document.querySelector("input[name='genero']:checked").value;
    //let genero = document.getElementById('genero').value.trim();
  let Consumo = parseFloat(document.getElementById('consumo').value);
  let desde = document.getElementById('fecha-inicio').value;
  let hasta = document.getElementById('fecha-hasta').value;

  //VALIDACION DE REGISTRTOS

  document.registro.nombreobtenido.value = nombre
  document.registro.telobtenido.value = tel
  document.registro.emailobtenido.value = email
  document.registro.ciudadobtenida.value = ciudad
  document.registro.paisobtenido.value = pais
  document.registro.generobtenido.value = genero
  document.registro.Consumobtenido.value = Consumo
  document.registro.fechadesdeontenido.value = desde
  document.registro.fechahastaontenido.value = hasta


  console.log('Datos capturados:', { nombre, tel, email, ciudad, pais, genero, Consumo, desde, hasta });
  //  alert('Datos capturados:', { nombre, tel, email });

  modal.open()

  //   });
  // });
}



