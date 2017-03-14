llenarTabla();

function llenarTabla(){
  var tbody = document.querySelector('#tblLibros tbody');

  tbody.innerHTML = '';
 //parse convierte un texto a Objeto
  var aIsbn = JSON.parse(localStorage.getItem('isbn_libros')),
      aTitulos = JSON.parse(localStorage.getItem('titulos_libros')),
      aAutores = JSON.parse(localStorage.getItem('autores_libros')),
      aEditoriales = JSON.parse(localStorage.getItem('editoriales_libros')),
      aAnnoPublicacion = JSON.parse(localStorage.getItem('annos_libros'));

  var nCantidadLibros = aIsbn.length;

  for(var i = 0; i < nCantidadLibros; i++ ) {

    var fila = document.createElement('tr'),
        celdaIsbn = document.createElement('td'),
        celdaTitulo = document.createElement('td'),
        celdaAutor = document.createElement('td'),
        celdaEditorial = document.createElement('td'),
        celdaAnno = document.createElement('td');

    var nodoTextoIsbn = document.createTextNode(aIsbn[i]),
        nodoTextoTitulo = document.createTextNode(aTitulos[i]),
        nodoTextoAutor = document.createTextNode(aAutores[i]),
        nodoTextoEditorial = document.createTextNode(aEditoriales[i]),
        nodoTextoAnno = document.createTextNode(aAnnoPublicacion[i]);

        celdaIsbn.appendChild(nodoTextoIsbn);
        celdaTitulo.appendChild(nodoTextoTitulo);
        celdaAutor.appendChild(nodoTextoAutor);
        celdaEditorial.appendChild(nodoTextoEditorial);
        celdaAnno.appendChild(nodoTextoAnno);

        fila.appendChild(celdaIsbn);
        fila.appendChild(celdaTitulo);
        fila.appendChild(celdaAutor);
        fila.appendChild(celdaEditorial);
        fila.appendChild(celdaAnno);

        tbody.appendChild(fila);

  }

}
