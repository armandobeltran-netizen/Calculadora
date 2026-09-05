const pantalla = document.getElementById('pantalla');

function agregarValor(valor) {
  pantalla.value += valor;
}

function borrarTodo() {
  pantalla.value = '';
}

function borrarUltimo() {
  pantalla.value = pantalla.value.slice(0, -1);
}

function calcular() {
  try {
    // Reemplazamos el símbolo de porcentaje por /100 antes de evaluar
    const expresion = pantalla.value.replace(/%/g, '/100');
    pantalla.value = eval(expresion);
  } catch (error) {
    pantalla.value = 'Error';
  }
}
