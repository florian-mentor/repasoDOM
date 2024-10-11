// Declaracion e inicializacion de variables.
let existenciaMedicamento1 = 0;
let existenciaMedicamento2 = 0;
let pacientesAtendidos = 0;
let pacientesMedicamento1 = 0;
let pacientesMedicamento2 = 0;

// Actualizar las existencias de los medicamentos
document.getElementById("actualizarExistencias").addEventListener('click', () =>{
    existenciaMedicamento1 = parseInt(document.getElementById('medicamento1').value);
    existenciaMedicamento2 = parseInt(document.getElementById('medicamento2').value);

    if (existenciaMedicamento1 > 0 && existenciaMedicamento2 > 0) {
        document.getElementById('mostrarExistencias').innerHTML = `<h1>Medicamento 1: ${existenciaMedicamento1} unidades, Medicamento 2: ${existenciaMedicamento2} unidades </h1>`;
        document.getElementById('mensaje').textContent = '';    // No se visualice el mensaje de error.
    }else{
        document.getElementById('mensaje').textContent = 'Atencion: Valores no permitidos (Valores Negativos o en 0)';
    }
});

// Validamos los valores de presiones , asignacmos tipo de medicamente y realizamos deducciones de medic.
document.getElementById('procesarPaciente').addEventListener('click', () => {
    let sistolica = parseFloat(document.getElementById('sistolica').value);
    let diastolica = parseFloat(document.getElementById('diastolica').value);
    let categoria = '';
    let medicamentoEntregado = 0;
    let dosis = 0;
    let mensaje = '';
    
    // Validando los rangos de presiones
    if (sistolica < 69 && diastolica < 48) {
        categoria = 'Hipotension';
        medicamentoEntregado = 2;
        dosis = 6;
    }else if (sistolica >= 69 && sistolica < 98 && diastolica >= 48 && diastolica < 66 ){
        categoria = 'Optima';   
    }else if (sistolica >= 98 && sistolica < 143 && diastolica >= 66 && diastolica < 92 ){
        categoria = 'Común';   
    }else if (sistolica >= 143 && sistolica < 177 && diastolica >= 92 && diastolica < 124 ){
        categoria = 'Pre-HTA';
        medicamentoEntregado = 1;
        dosis = 6;
    }

});
