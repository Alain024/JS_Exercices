//Se puede ver como una clase de Java
function Satelite(pnombre, ptamanno) {
    this.sNombre = pnombre;
    this.nTamanno = ptamanno;
}

var btnRegistrar = document.querySelector('#btnRegistrar'),
    btnRedireccionar = document.querySelector('#btnRedireccionar');
    btnRegistrar.addEventListener('click', function(){

    var sNombreSatelite = document.querySelector('#txtNombre').value,
        nTamanoSatelite = document.querySelector('#txtTamanno').value;
        //crea una variable y usa el constructor para crear un objeto nuevo
        objSatelite = new Satelite(sNombreSatelite, nTamanoSatelite);
        /*setItem crea una variable dentro del LocalStorage y stringify lo
        convierte a JSON*/
        localStorage.setItem("satelite", JSON.stringify(objSatelite));



});

btnRedireccionar.addEventListener('click', function(){
    window.location.assign("pagina2.html")
});
