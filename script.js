// Variables de existencias y estadísticas
let existenciasMedicamento1 = 0;
let existenciasMedicamento2 = 0;
let pacientesAtendidos = 0;
let pacientesMedicamento1 = 0;
let pacientesMedicamento2 = 0;
let auxMedic1 = 0;
let auxMedic2 = 0;
// Actualizar existencias de medicamentos
document.getElementById('actualizarExistencias').addEventListener('click', () => {

    auxMedic1 = parseInt(document.getElementById('medicamento1').value);
    auxMedic2 = parseInt(document.getElementById('medicamento2').value);

    if(auxMedic1 > 0 && auxMedic2 > 0){
        if (pacientesAtendidos > 0) {
            existenciasMedicamento1 = parseInt(existenciasMedicamento1) + auxMedic1;    // Lo concatena sino esta convertdio a Int
            existenciasMedicamento2 = parseInt(existenciasMedicamento2) + auxMedic2;
            /* document.getElementById('mostrarExistencias').innerHTML = 
            `<h3> Medicamento 1: ${existenciasMedicamento1} unidades, <br> Medicamento 2: ${existenciasMedicamento2} unidades </h3>`;
            document.getElementById("existenciasMedic1").textContent = existenciasMedicamento1; // Actualizar existe final */
            document.getElementById('mensaje').textContent = "";
        }else{
            existenciasMedicamento1 = document.getElementById('medicamento1').value;        // La primera vez esariasn en 0 daria negativo
            existenciasMedicamento2 = document.getElementById('medicamento2').value;
          /*   document.getElementById('mostrarExistencias').innerHTML = 
            `<h3> Medicamento 1: ${existenciasMedicamento1} unidades, <br> Medicamento 2: ${existenciasMedicamento2} unidades </h3>`;
            document.getElementById("existenciasMedic2").textContent = existenciasMedicamento2; */
            document.getElementById('mensaje').textContent = "";
        }
    }else{
        document.getElementById('mensaje').textContent = "Atencion: Valores no permitidos como Negativos o Ceros..";
    }
    document.getElementById('mostrarExistencias').innerHTML = 
            `<h3> Medicamento 1: ${existenciasMedicamento1} unidades, <br> Medicamento 2: ${existenciasMedicamento2} unidades </h3>`;
    document.getElementById("existenciasMedic1").textContent = existenciasMedicamento1; // Actualizar existe final
    document.getElementById("existenciasMedic2").textContent = existenciasMedicamento2;
});

// Procesar datos del paciente
document.getElementById('procesarPaciente').addEventListener('click', () => {

    const sistolica = parseInt(document.getElementById('sistolica').value);
    const diastolica = parseInt(document.getElementById('diastolica').value);
    let categoria = '';
    let medicamentoEntregado = 0;
    let dosis = 0;
    let mensaje = '';
    
    if (sistolica < 69 && diastolica < 48) {
        categoria = 'Hipotensión';
        medicamentoEntregado = 2;
        dosis = 6;
        document.getElementById('mensaje').textContent = "";    // Borrar mensaje si se cumple una condic
    } else if (sistolica >= 69 && sistolica <= 97 && diastolica >= 48 && diastolica <= 65) {
        categoria = 'Óptima';
        document.getElementById('mensaje').textContent = "";
    } else if (sistolica >= 98 && sistolica <= 142 && diastolica >= 66 && diastolica <= 91) {
        categoria = 'Común';
        document.getElementById('mensaje').textContent = "";
    } else if (sistolica >= 143 && sistolica <= 176 && diastolica >= 92 && diastolica <= 123) {
        categoria = 'Pre-HTA';
        medicamentoEntregado = 1;
        dosis = 6;
        document.getElementById('mensaje').textContent = "";
    } else {
        //mensaje = 'Valores fuera de rango permitido.';
        document.getElementById('mensaje').textContent = "Atencion: Valores fuera de rango permitido...";
    }

    // Si el medicamento está disponible, se entrega
    if (categoria != "") {      // Control a Mensajes
        
        if (medicamentoEntregado === 1 && existenciasMedicamento1 >= dosis) {
            existenciasMedicamento1 -= dosis;
            pacientesMedicamento1++;
            document.getElementById("existenciasMedic1").textContent = existenciasMedicamento1;
        } else if (medicamentoEntregado === 2 && existenciasMedicamento2 >= dosis) {
            existenciasMedicamento2 -= dosis;
            pacientesMedicamento2++;
            document.getElementById("existenciasMedic2").textContent = existenciasMedicamento2;
        }else{
            document.getElementById('mensaje').textContent = "Atencion: Dosis exceden la cantidad de existencias del medicamento..";
        }

     }else{
        document.getElementById('mensaje').textContent = "Atencion: Valores fuera de rango permitido...";
    }
    // NVO- Actualizar valores de Existencias iniciales cada vez que se modifiquen...
    document.getElementById('mostrarExistencias').innerHTML = 
            `<h3> Medicamento 1: ${existenciasMedicamento1} unidades, <br> Medicamento 2: ${existenciasMedicamento2} unidades </h3>`;
    
    // Actualizar estadísticas
    pacientesAtendidos++;

    // Mostrar resultados del paciente   // usa OPERADOR CONDICIONAL TERNARIO
    mensaje += `Categoría: ${categoria || 'No clasificada'}. Medicamento Entregado: ${medicamentoEntregado === 1 ? '1' : medicamentoEntregado === 2 ? '2' : 'Ninguno'}.`;

    document.getElementById('resultadoPaciente').textContent = mensaje; 

    document.getElementById('estadisticas').textContent = 
        `Pacientes Atendidos: ${pacientesAtendidos}, Medicamento 1 Entregado: ${pacientesMedicamento1}, Medicamento 2 Entregado: ${pacientesMedicamento2}.`;
});
