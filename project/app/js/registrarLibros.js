//Crea los arrays vacios
var aIsbn = [],
    aTitulos = [],
    aAutores = [],
    aEditoriales = [],
    aAnnoPublicacion = [];
//Validacion si esta vacio
if(localStorage.getItem('isbn_libros') != null) {
  aIsbn = JSON.parse(localStorage.getItem('isbn_libros'));
  aTitulos = JSON.parse(localStorage.getItem('titulos_libros'));
  aAutores = JSON.parse(localStorage.getItem('autores_libros'));
  aEditoriales = JSON.parse(localStorage.getItem('editoriales_libros'));
  aAnnoPublicacion = JSON.parse(localStorage.getItem('annos_libros'));
}
//Captura el btnRegistrar con un querySelector
var elementoBotonRegistrar = document.querySelector('#btnRegistrar');
//EventListener para el Boton Registrar
elementoBotonRegistrar.addEventListener('click', registrarLibro);

//Funcion que se triggerea al darle 'click' al btnRegistrar
function registrarLibro() {
  var nIsbn = document.querySelector('#txtIsbn').value,
  sTitulo = document.querySelector('#txtTitulo').value,
  sAutor = document.querySelector('#txtAutor').value,
  sEditorial = document.querySelector('#txtEditorial').value,
  nAnno = document.querySelector('#txtAnno').value;

//Pushea los valores de los campos de texto al respectivo Array
  aIsbn.push(nIsbn);
  aTitulos.push(sTitulo);
  aAutores.push(sAutor);
  aEditoriales.push(sEditorial);
  aAnnoPublicacion.push(nAnno);

/*setItem añade el item al localStorage
  JSON.stringify convierte un objeto a un string
*/
  localStorage.setItem('isbn_libros', JSON.stringify(aIsbn));
  localStorage.setItem('titulos_libros', JSON.stringify(aTitulos));
  localStorage.setItem('autores_libros', JSON.stringify(aAutores));
  localStorage.setItem('editoriales_libros', JSON.stringify(aEditoriales));
  localStorage.setItem('annos_libros', JSON.stringify(aAnnoPublicacion));


  llenarTabla();

}
