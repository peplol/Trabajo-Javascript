// Formulario de presupuesto
var producto = document.getElementById('producto');
var plazo = document.getElementById('plazo');
var total = document.getElementById('total');
var extras = document.getElementsByClassName('extra');
var formulario = document.getElementById('formulario');

function calcularPresupuesto(){
    var precio = Number(producto.value);
    var dias = Number(plazo.value);

    for(var i = 0; i < extras.length; i++){
        if(extras[i].checked){
            precio = precio + Number(extras[i].value);
        }
    }

    if(dias >= 30){
        precio = precio * 0.90;
    }else if(dias >= 20){
        precio = precio * 0.95;
    }

    total.value = precio.toFixed(2) + ' €';
}

function borrarErrores(){
    document.getElementById('errorNombre').innerHTML = '';
    document.getElementById('errorApellidos').innerHTML = '';
    document.getElementById('errorTelefono').innerHTML = '';
    document.getElementById('errorEmail').innerHTML = '';
}

function validarDatos(){
    var bien = true;
    var nombre = document.getElementById('nombre').value.trim();
    var apellidos = document.getElementById('apellidos').value.trim();
    var telefono = document.getElementById('telefono').value.trim();
    var email = document.getElementById('email').value.trim();

    borrarErrores();

    if(!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,15}$/.test(nombre)){
        document.getElementById('errorNombre').innerHTML = 'Solo letras y máximo 15 caracteres.';
        bien = false;
    }

    if(!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,40}$/.test(apellidos)){
        document.getElementById('errorApellidos').innerHTML = 'Solo letras y máximo 40 caracteres.';
        bien = false;
    }

    if(!/^[0-9]{9}$/.test(telefono)){
        document.getElementById('errorTelefono').innerHTML = 'Debe tener 9 números.';
        bien = false;
    }

    if(!/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(email)){
        document.getElementById('errorEmail').innerHTML = 'Correo electrónico incorrecto.';
        bien = false;
    }

    return bien;
}

producto.onchange = calcularPresupuesto;
plazo.oninput = calcularPresupuesto;

for(var i = 0; i < extras.length; i++){
    extras[i].onchange = calcularPresupuesto;
}

formulario.onsubmit = function(evento){
    evento.preventDefault();
    var mensaje = document.getElementById('mensaje');
    var privacidad = document.getElementById('privacidad').checked;

    if(validarDatos() && privacidad){
        mensaje.style.color = 'green';
        mensaje.innerHTML = 'Presupuesto enviado correctamente.';
    }else{
        mensaje.style.color = 'red';
        mensaje.innerHTML = 'Revisa los datos y acepta las condiciones.';
    }
};

formulario.onreset = function(){
    setTimeout(calcularPresupuesto, 50);
};

calcularPresupuesto();
