function probarValidarNombre() {
  console.assert(

      validarNombre('') === 'El nombre debe tener al menos un caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  let stringDePrueba = '';
  for (let i=1 ; i<=51; i++){
      stringDePrueba += 'a'
  }
  console.assert(
      validarNombre(stringDePrueba) ===
          'El nombre debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );
  console.assert(
      validarNombre('abca22') === 'El nombre debe contener solo letras', 'validarNombre no valida que nombre contenga solo letras'
  )
  console.assert(
      validarNombre('Juanito') === '',
    'validarNombre no valida nombres correctos'
  )
}

probarValidarNombre();

function probarValidarProvincia(){
    console.assert(
        validarProvincia('') === 'Debes seleccionar una provincia',
        'validarProvincia no validó no esté vacío'
    );
    console.assert(
        validarProvincia('a') === '',
        'validarProvincia no valida entradas correctas'
    )
}

probarValidarProvincia();

function probarValidarDescripcionRegalo(){
    let stringDePrueba = '';
    for (let i=1 ; i<=101; i++){
        stringDePrueba += 'a'
    }
    console.assert(
        validarDescripcionRegalo(stringDePrueba) ==='La descripcion del regalo es muy larga',
        'no se validó que Descripcion no sea muy largo'
    );
    console.assert(
        validarDescripcionRegalo('') === 'Por favor, describe el regalo',
        'no se validó que haya descripcion'
    )
    console.assert(
        validarDescripcionRegalo('Quiero un regalo') === '',
        'validarDescripcionRegalo no valida entradas correctas'
    )
    console.assert(
        validarDescripcionRegalo('·') === 'La descripcion del regalo solo debe contener letras y numeros',
        'La descripcion solo debe contener letras y numeros'
    )
}

probarValidarDescripcionRegalo();
