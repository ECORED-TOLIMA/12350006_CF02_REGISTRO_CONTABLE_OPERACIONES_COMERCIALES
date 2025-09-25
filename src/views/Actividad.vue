<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'tema_actividad_didactica',
      titulo: 'Cuestionario',
      introduccion: 'texto_introductorio_actividad_didactica',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'El ciclo contable inicia con la elaboración del balance de comprobación.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'El libro diario registra las transacciones en orden cronológico',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'El libro mayor permite visualizar los movimientos y saldos por cuenta contable.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'La conciliación bancaria se realiza para comparar los registros contables con los del banco.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'El estado de resultados refleja la situación económica de un momento específico.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'El balance general se basa en la ecuación contable Activos = Pasivos + Patrimonio.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'Los registros contables de compras e ingresos son opcionales para las empresas.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'Los errores contables se corrigen mediante asientos de ajuste.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'El balance de comprobación permite verificar que los débitos y créditos estén equilibrados.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'El cierre contable traslada las cuentas de resultado al patrimonio.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'La revisión cruzada de registros contables no es necesaria si se usa <em>software<em> contable.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'El ciclo contable siempre termina con la preparación de los estados financieros',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'El estado de resultados también es llamado estado de pérdidas y ganancias.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'El libro diario y el libro mayor cumplen exactamente la misma función.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: 'Las conciliaciones solo se aplican a cuentas de gastos.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'El balance general permite conocer la liquidez, solvencia y rentabilidad de la empresa.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'Los registros contables deben hacerse siguiendo normas y principios contables.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'La corrección de errores no afecta la presentación de los estados financieros.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            'El ciclo contable puede ser mensual, trimestral o anual, según las políticas de la empresa.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'El estado de resultados muestra los ingresos, costos y gastos de un periodo determinado.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos clave sobre la importancia de la contabilidad, la clasificación de las empresas, el desarrollo del ciclo contable y la aplicación del Plan Único de Cuentas como herramienta normativa en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
