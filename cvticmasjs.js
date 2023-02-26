let nombreVisitante= ""
nombreVisitante= prompt ("¿Cual es tu nombre?")
alert ("Bienvenidx al perfil de Agustina " + nombreVisitante)

function ocultar () {
    document.getElementById('botonVerMenos').style.display='none';
    document.getElementById('botonVerMas').style.display='block';
    document.getElementById('textoDeCursos').style.display= 'none';
}

function mostrar () {
    document.getElementById('botonVerMenos').style.display='block';
    document.getElementById('botonVerMas').style.display='none';
    document.getElementById('textoDeCursos').style.display= 'block';
}
