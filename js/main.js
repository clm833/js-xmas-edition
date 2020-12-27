<<<<<<< Updated upstream
// Write all your javascript code in this file
=======
// document.querySelector('#enviar-carta').onclick = function(){
//     console.log(document.formulario.nombre.value);
//     console.log(document.formulario.provincia.value);
//     console.log(document.formulario.comportamiento.value);
//     console.log(document.formulario['descripcion-regalo'].value);
//     return false;
// }

function validarNombre(nombre) {
    const contieneSoloLetras = /^[A-z]+$/.test(nombre);
    if (nombre.length === 0)
        return 'El nombre debe tener al menos un caracter';
    if (nombre.length > 50)
        return 'El nombre debe tener menos de 50 caracteres';
    if (!contieneSoloLetras)
        return 'El nombre debe contener solo letras';
    return '';
}

function validarProvincia(provincia) {
    if (provincia === '')
        return 'Debes seleccionar una provincia';
    return '';
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length >= 100)
        return 'La descripcion del regalo es muy larga'
    if (descripcionRegalo === '')
        return 'Por favor, describe el regalo'
    if (!/^[a-z0-9 ]+$/i.test(descripcionRegalo))
        return 'La descripcion del regalo solo debe contener letras y numeros'
    return '';
}

function validarForm(event) {
    const $nombre = $form.nombre.value;
    const $provincia = $form.provincia.value;
    const $descripcionRegalo = $form['descripcion-regalo'].value;
    const errores = {
        nombre: validarNombre($nombre),
        provincia: validarProvincia($provincia),
        "descripcion-regalo": validarDescripcionRegalo($descripcionRegalo),
    }
    event.preventDefault();
    const envioExitoso = manejarErrores(errores) === 0;

    if (envioExitoso){
        $form.className = 'oculto';
        document.querySelector('#exito').className = '';
        setTimeout(function(){window.location.href = 'wishlist.html';},5000);
    }
    
}

function manejarErrores(errores) {
    const keys = Object.keys(errores);
    const $contenedorErrores = document.querySelector('#errores');
    $contenedorErrores.innerText = '';
    let contarErrores = 0;

    keys.forEach(function(key){
        const error = errores[key];
        if (error) {
            contarErrores++;
            $form[key].className = 'error';
            const nuevoLi = document.createElement('li');
            nuevoLi.innerText = error;
            $contenedorErrores.appendChild(nuevoLi);
        } else {
            $form[key].className = '';
        }
    });
    return contarErrores;
}
const $form = document.formulario;
document.formulario.onsubmit = validarForm;
>>>>>>> Stashed changes
