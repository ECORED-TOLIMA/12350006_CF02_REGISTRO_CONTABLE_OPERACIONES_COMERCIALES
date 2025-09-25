<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Asientos contables    

    figure.mb-5(data-aos="zoom-in")
      img(src='@/assets/curso/temas/tema1/img1.png', alt='Imagen decorativa')
    
    p Los asientos contables constituyen la #[b unidad básica del registro contable]. Cada uno representa una operación económica realizada por la empresa, traducida al lenguaje contable para reflejar su efecto sobre las cuentas de activo, pasivo, patrimonio, ingresos o gastos.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-8.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img2.png', alt='Imagen decorativa')
      .col-lg-5
        .bloque-texto-c.color-primario.p-4.mb-4
          i.fas.fa-quote-left
          h4.mb-2 Un asiento contable es el vehículo que transforma los hechos económicos en información organizada, verificable y comparable
          span - Muñoz Maza (2016) (p. 110)
          i.fas.fa-quote-right
        P Dominar su estructura y funcionamiento es indispensable para asegurar la trazabilidad de las operaciones, la confiabilidad de los estados financieros y el cumplimiento de los principios contables.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade-left")
        .cajon.color-secundario.p-4
          p.mb-0 En este tema se estudiará cómo funciona el principio de partida doble, cómo se representa gráficamente la dinámica de las cuentas mediante la cuenta T, cuáles son los elementos esenciales de un asiento contable, qué tipos de asientos existen y cómo se desarrolla el procedimiento completo para registrarlos de manera correcta.
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.1	Principio de partida doble
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-8.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img3.svg', alt='Imagen decorativa')
      .col-lg-9
        p El principio de partida doble es la #[b base del sistema contable moderno] y establece que #[b toda transacción debe registrarse afectando al menos dos cuentas, una en el debe (débito) y otra en el haber (crédito) por el mismo valor].
        p Según Fierro Martínez (2011), “la partida doble garantiza que los recursos utilizados tengan un origen identificado, manteniendo la igualdad entre activos, pasivos y patrimonio” (p. 56).
        p La siguiente tabla resume el efecto que producen los movimientos de débito y crédito sobre los principales tipos de cuentas del Plan Único de Cuentas (PUC), indicando también su saldo normal. Esta información permite identificar de manera clara cómo se comportan las cuentas en el proceso de registro contable.
    .titulo-sexto.color-acento-contenido.offset-1(data-aos="fade-left")
      h5 Tabla 1.
      i Efecto de los débitos y créditos según el tipo de cuenta
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade-left")
        .tabla-a.color-acento-contenido.mb-5
          table(alt="Texto alternativo tabla")
            thead
              tr
                th Tipo de cuenta
                th Aumenta con
                th Disminuye con
                th Naturaleza
            tbody
              tr
                td Activos
                td Débito
                td Crédito
                td Deudora
              tr
                td Pasivos
                td Crédito
                td Débito
                td Acreedora
              tr
                td Patrimonio
                td Crédito
                td Débito
                td Acreedora
              tr
                td Ingresos
                td Crédito
                td Débito
                td Acreedora
              tr
                td Gastos y costos
                td Débito
                td Crédito
                td Deudora
    p Este principio asegura que el sistema contable #[b permanezca en equilibrio matemático], pues la suma de todos los débitos siempre será igual a la suma de todos los créditos.
    p Así, la partida doble permite comprender de dónde provienen los recursos (créditos) y en qué se utilizan (débitos), creando un registro coherente y verificable.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.2	Representación en cuenta T
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        p La cuenta T es una representación gráfica tradicional que facilita entender cómo se registran los débitos y créditos en una cuenta contable específica.
        p Aunque los sistemas contables actuales han reemplazado su uso operativo, sigue siendo un recurso pedagógico fundamental para visualizar el comportamiento de las cuentas.
        .bloque-texto-c.color-primario.p-4.mb-4
          i.fas.fa-quote-left
          h4.mb-2 La cuenta T permite aislar gráficamente los movimientos de débito y crédito para comprender la dinámica de cada cuenta
          span - León García (2009) (p. 45)
          i.fas.fa-quote-right
      .col-lg-5.order-1.order-lg-2.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema1/img4.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        p.mb-4 La siguiente figura muestra la estructura básica de una cuenta T, con sus elementos principales organizados de forma clara.
        .titulo-sexto.color-acento-contenido.offset-0(data-aos="fade-left")
          h5 Figura 1.
          i Estructura de la cuenta T
      .col-lg-10.desktop(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema1/img5.svg', alt='Diagrama de una cuenta en forma de “T” con el encabezado superior que indica “Código y nombre de la cuenta”. El lado izquierdo está identificado como Débito (Debe) y el lado derecho como Crédito (Haber). Debajo de cada columna se muestran las secciones de Movimientos y Saldo, indicando “Movimientos débitos” y “Saldo deudor” a la izquierda, y “Movimientos créditos” y “Saldo acreedor” a la derecha.')
      .col-lg-10.movil(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema1/img5_1.svg', alt='Diagrama de una cuenta en forma de “T” con el encabezado superior que indica “Código y nombre de la cuenta”. El lado izquierdo está identificado como Débito (Debe) y el lado derecho como Crédito (Haber). Debajo de cada columna se muestran las secciones de Movimientos y Saldo, indicando “Movimientos débitos” y “Saldo deudor” a la izquierda, y “Movimientos créditos” y “Saldo acreedor” a la derecha.')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-8.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img6.png', alt='Imagen decorativa')
      .col-lg-5
        .titulo.mb-5(data-aos="fade-left")
          h5.mb-0 Ejemplo práctico
        p Compra de mercancías en efectivo por $ 1.000.000
        .tabla-a.color-primario.mb-5
          table
            thead
              tr
                th Cuenta
                th Débito
                th Crédito
            tbody
              tr
                td Inventarios
                td $ 1.000.000
                td
              tr
                td Caja
                td
                td $ 1.000.000
        p Comprender la cuenta T permite #[b anticipar el efecto de cada operación en el saldo de las cuentas] y aplicar correctamente el principio de partida doble.
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.3	Variables y elementos del asiento contable
    p Cada asiento contable debe incluir una serie de elementos que garanticen su #[b validez legal, trazabilidad y confiabilidad técnica].
    p Según Ortiz Anaya (2018), “un registro sin soporte completo carece de valor probatorio y compromete la confiabilidad de toda la información contable” (p. 31).
    p.mb-4 A continuación se presentan los elementos mínimos de un asiento contable en el libro diario:
    SlyderF.color-acento-botones.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-lg-6.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema1/img7.svg' alt='Imagen decorativa')
          h5.text-center Fecha de la operación
          p.text-center.mb-0 Día en que ocurrió el hecho económico.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-lg-6.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema1/img8.svg' alt='Imagen decorativa')
          h5.text-center Descripción o concepto
          p.text-center.mb-0 Breve explicación de la transacción registrada.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-lg-6.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema1/img9.svg' alt='Imagen decorativa')
          h5.text-center Cuentas afectadas
          p.text-center.mb-0 Nombres y códigos correspondientes del Plan Único de Cuentas (PUC).
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-lg-6.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema1/img10.svg' alt='Imagen decorativa')
          h5.text-center Valores de débito
          p.text-center.mb-0 Montos que aumentan activos o gastos.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-lg-6.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema1/img11.svg' alt='Imagen decorativa')
          h5.text-center Valores de crédito
          p.text-center.mb-0 Montos que aumentan pasivos, patrimonio o ingresos.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-lg-6.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema1/img12.svg' alt='Imagen decorativa')
          h5.text-center Identificación de terceros
          p.text-center.mb-0 Nombre o código de clientes, proveedores, empleados, etc.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-lg-6.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema1/img13.svg' alt='Imagen decorativa')
          h5.text-center Documentos soporte
          p.text-center.mb-0 Facturas, recibos, extractos, contratos, nóminas, entre otros.
    .row.justify-content-center.align-items-center
      .col-lg-5.order-2.order-lg-1(data-aos="fade-right")
        .titulo.mb-4(data-aos="fade-left")
          h5.mb-0 Ejemplo
        p Compra de materia prima en efectivo por $ 2.000.000 el 1 de marzo:
        ul.lista-ul--color.mb-4
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            p.mb-0 Débito a Inventarios (1435) por $ 2.000.000
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            p.mb-0 Crédito a Caja (1105) por $ 2.000.000
        .cajon.color-secundario.p-4
          p.mb-0 Estos elementos permiten que cada asiento sea #[b verificable durante auditorías, revisiones fiscales o procesos legales], garantizando la transparencia y la responsabilidad contable.
      .col-lg-5.col-8.order-1.order-lg-2.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema1/img14.png', alt='Imagen decorativa')

    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.4	Asientos de ajuste
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-8.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img15.svg', alt='Imagen decorativa')
      .col-lg-10
        p Los asientos contables se clasifican de acuerdo con su función dentro del proceso contable. Reconocerlos permite organizar el flujo de registros y facilitar su análisis posterior.
        p Los asientos contables se clasifican según su función dentro del proceso contable. Cada tipo cumple un propósito específico que garantiza la integridad y coherencia de la información financiera registrada en los libros. A continuación, se presentan los principales tipos de asientos contables, con su finalidad y ejemplos representativos.
    .desktop
      .row.mb-5
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5
                h4 Asientos operativos
                p #[b Finalidad]: Registrar las transacciones diarias de la empresa.
                p.mb-0 #[b Ejemplos]: Compras, ventas, pagos, cobros.
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img16.png')})`}")

        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img17.png')})`}")
              .tarjeta-slide__contenido.p-4.p-xl-5
                h4 Asientos de ajuste
                p #[b Finalidad]: Reconocer operaciones devengadas que aún no han sido registradas.
                p.mb-0 #[b Ejemplos]: Provisiones, depreciaciones, amortizaciones.

        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img18.png')})`}")
              .tarjeta-slide__contenido.p-4.p-xl-5
                h4 Asientos de cierre
                p #[b Finalidad]: Cancelar las cuentas de ingresos y gastos al final del periodo contable.
                p.mb-0 #[b Ejemplos]: Determinar el resultado del ejercicio.

        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img19.png')})`}")
              .tarjeta-slide__contenido.p-4.p-xl-5
                h4 Asientos de corrección
                p #[b Finalidad]: Subsanar errores detectados en registros anteriores.
                p.mb-0 #[b Ejemplos]: Reversar asientos mal registrados.
   
    .movil
      .row.justify-content-center.align-items-center.mb-5
        .col-10
          .tarjeta.tarjeta--BG02.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/tema1/img16_1.png', alt='Imagen decorativa')
            h4 Asientos operativos
            p #[b Finalidad]: Registrar las transacciones diarias de la empresa.
            p.mb-0 #[b Ejemplos]: Compras, ventas, pagos, cobros.
      .row.justify-content-center.align-items-center.mb-5
        .col-10
          .tarjeta.tarjeta--BG02.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/tema1/img17_1.png', alt='Imagen decorativa')
            h4 Asientos de ajuste
            p #[b Finalidad]: Reconocer operaciones devengadas que aún no han sido registradas.
            p.mb-0 #[b Ejemplos]: Provisiones, depreciaciones, amortizaciones.
      .row.justify-content-center.align-items-center.mb-5
        .col-10
          .tarjeta.tarjeta--BG02.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/tema1/img18_1.png', alt='Imagen decorativa')
            h4 Asientos de cierre
            p #[b Finalidad]: Cancelar las cuentas de ingresos y gastos al final del periodo contable.
            p.mb-0 #[b Ejemplos]: Determinar el resultado del ejercicio.
      .row.justify-content-center.align-items-center.mb-5
        .col-10
          .tarjeta.tarjeta--BG02.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/tema1/img19_1.png', alt='Imagen decorativa')
            h4 Asientos de corrección
            p #[b Finalidad]: Subsanar errores detectados en registros anteriores.
            p.mb-0 #[b Ejemplos]: Reversar asientos mal registrados.
    p Como señala Burbano Ruiz (2011), “la clasificación de los asientos permite construir informes ordenados y comparables, esenciales para la toma de decisiones” (p. 77).
    p Esta tipología también facilita la revisión de la información y el control interno contable.

    separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.5	Procedimiento para el registro de asientos contables
    .tarjeta-BG05.px-md-5.px-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.col-8.mb-4(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/tema1/img20.svg', alt='Imagen decorativa')
        .col-lg-8
          p El registro contable de una operación no consiste en un acto aislado, sino en un #[b proceso técnico que va desde la identificación del hecho económico hasta su integración en los estados financieros].
          .bloque-texto-c.color-primario.p-4.mb-4
            i.fas.fa-quote-left
            h4.mb-2 La disciplina en la secuencia del registro contable evita errores acumulativos que comprometen la calidad de la información
            span - Fierro Martínez (2011) (p. 132)
            i.fas.fa-quote-right
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          p El registro contable de las operaciones sigue un procedimiento estructurado que asegura la coherencia, trazabilidad y validez de la información financiera. Cada etapa cumple una función específica dentro del ciclo contable, desde la identificación del hecho económico hasta su incorporación en los estados financieros. A continuación, se describen las fases principales de este proceso.
      .titulo.mb-5(data-aos="fade-left")
        img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
        h5.mb-0 Etapas del procedimiento de registro contable
    .tarjeta--BG01.p-4.px-md-5.mb-5
      .tarjeta.tarjeta--FBG01.p-4.my-4(data-aos="fade-left")
        PasosB.color-acento-botones
          .row.justify-content-center
            .col-lg-4.order-2.order-lg-1
              h4 Identificación del hecho económico
              p #[b Descripción:] Reconocer una operación que afecta la situación financiera.
              p #[b Producto generado:] Hecho económico identificado.

            .col-lg-6.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img21.png', alt='Imagen decorativa')
          .row.justify-content-center
            .col-lg-4.order-2.order-lg-1
              h4 Validación del soporte contable
              p #[b Descripción:] Verificar la existencia, legalidad y pertinencia del documento que respalda la operación.
              p #[b Producto generado:] Soporte validado.
            .col-lg-6.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img22.png', alt='Imagen decorativa')
          .row.justify-content-center
            .col-lg-4.order-2.order-lg-1
              h4 Clasificación y codificación en el Plan Único de Cuentas (PUC)
              p #[b Descripción:] Determinar las cuentas afectadas y sus códigos conforme al PUC.
              p #[b Producto generado:] Cuentas codificadas.
            .col-lg-6.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img23.png', alt='Imagen decorativa')
          .row.justify-content-center
            .col-lg-4.order-2.order-lg-1
              h4 Elaboración del comprobante de contabilidad
              p #[b Descripción:] Crear el documento con fecha, valores, glosa, terceros y firmas autorizadas.
              p #[b Producto generado:] Comprobante contable listo.
            .col-lg-6.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img24.png', alt='Imagen decorativa')
          .row.justify-content-center
            .col-lg-4.order-2.order-lg-1
              h4 Registro en libro diario
              p #[b Descripción:] Ingresar cronológicamente la operación.
              p #[b Producto generado:] Asiento registrado.
            .col-lg-6.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img25.png', alt='Imagen decorativa')
          .row.justify-content-center
            .col-lg-4.order-2.order-lg-1
              h4 Mayorización a libro mayor
              p #[b Descripción:] Trasladar los movimientos para acumular saldos por cuenta.
              p #[b Producto generado:] Saldos actualizados.
            .col-lg-6.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img26.png', alt='Imagen decorativa')
          .row.justify-content-center
            .col-lg-4.order-2.order-lg-1
              h4 Conciliación y verificación
              p #[b Descripción:] Comprobar saldos, totales y soporte documental.
              p #[b Producto generado:] Balance de comprobación parcial.
            .col-lg-6.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img27.png', alt='Imagen decorativa')
          .row.justify-content-center
            .col-lg-4.order-2.order-lg-1
              h4 Consolidación en estados financieros
              p #[b Descripción:] Incorporar los saldos finales de cuentas en los informes contables.
              p #[b Producto generado:] Estados financieros elaborados.
            .col-lg-6.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img28.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-2.order-lg-1
        p Este procedimiento asegura que los registros sean #[b completos, consistentes y auditables], conectando cada operación con los informes financieros que la resumen.
        .cajon.color-secundario.p-4.mb-4
          p Los asientos contables son el punto de partida del proceso contable. Comprender el principio de partida doble, la representación en cuenta T, los elementos y tipos de asientos, así como el procedimiento de registro, garantiza que los hechos económicos se conviertan en información clara, ordenada y confiable.
          p.mb-0 En el siguiente tema se estudiará el ciclo contable, que organiza cronológicamente estos registros para asegurar su trazabilidad y coherencia.
      .col-lg-5.col-10.order-1.order-lg-2.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img29.svg', alt='Imagen decorativa')
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
