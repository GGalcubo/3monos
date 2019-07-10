$(document).ready(function(){
    setInterval(cambiarMenu, 100);
    $('#fullpage').fullpage({
        anchors: ['home', 'concepto', 'trabajo', 'contacto'],
        sectionsColor: ['#424245', '#424245', '#424245', '#424245'],
        css3: true
    });
    crearGaleriaJson();
});