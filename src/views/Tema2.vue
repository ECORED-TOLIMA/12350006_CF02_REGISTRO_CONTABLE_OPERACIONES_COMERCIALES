<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 2
      h1 Etapas del ciclo contable y su relación con las operaciones financieras
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-4
        figure
          img(src='@/assets/curso/temas/tema2/img1.png', alt='Imagen decorativa')
      .col-lg-8
        p El #[b ciclo contable] inicia con la #[b identificación y recolección de los documentos soporte], que son las evidencias de las transacciones financieras. Por ejemplo, si una empresa compra materia prima por #[b $ 2.500.000], la factura de compra será el soporte que originará el registro contable. Fierro Martínez (2011) indica que “sin documentos fuente confiables, el registro contable pierde validez y se compromete la calidad de los estados financieros” (p. 52). Esta etapa es crucial porque cada documento define qué cuentas se verán afectadas y con qué valores, estableciendo el punto de partida del proceso contable.
        .cajon.color-secundario.p-4.mb-4
          p Posteriormente, se realiza el #[b registro de las operaciones en los libros principales], aplicando el principio de la partida doble. Continuando con el ejemplo, la compra de materia prima por #[b $ 2.500.000] se registraría como un #[b débito a Inventarios] y un #[b crédito a Proveedores], manteniendo el equilibrio contable. Si en el mismo mes la empresa vende productos terminados por #[b $ 4.000.000] en efectivo, el registro sería un #[b débito a Caja] y un #[b crédito a Ingresos por Ventas]. León García (2009) resalta que “el registro ordenado de las operaciones garantiza la consistencia de la información y permite analizar su efecto en la posición financiera de la empresa” (p. 93).
    p.mb-4 En el cierre del ciclo contable se realizan #[b ajustes, conciliaciones y elaboración de los estados financieros]. Siguiendo con los ejemplos, al cierre del mes el balance de comprobación reflejará un incremento de #[b $ 2.500.000 en Inventarios] y un aumento en #[b Proveedores], mientras que Caja mostrará un incremento de #[b $ 4.000.000] por las ventas realizadas. Con esta información, se elabora el #[b Estado de Resultados], que mostraría un ingreso neto de #[b $ 4.000.000], y el #[b Balance General], que reflejaría los activos, pasivos y patrimonio actualizados. Ortiz Anaya (2018) afirma que “cada etapa del ciclo contable está interrelacionada y su correcta ejecución garantiza la generación de reportes financieros confiables y útiles para la toma de decisiones” (p. 35).
    .row.justify-content-center.align-items-center
      .col-lg-10
        p.mb-4 La siguiente figura muestra la estructura básica de una cuenta T, con sus elementos principales organizados de forma clara.
        .titulo-sexto.color-acento-contenido.offset-0(data-aos="fade-left")
          h5 Figura 2.
          i  Etapas del ciclo contable
      .col-lg-10.desktop(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema2/img2.svg', alt=' Infografía circular titulada “Etapas del ciclo contable y su relación con las operaciones financieras”. Muestra cuatro fases numeradas: Identificación y recolección. Registro en libros. Ajustes y conciliaciones. Estados financieros. A la derecha aparecen íconos que representan operaciones financieras: compras, ventas, gastos, pagos e ingresos, indicando su vínculo con las etapas del ciclo contable.')
      .col-lg-10.movil(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema2/img2_1.svg', alt=' Infografía circular titulada “Etapas del ciclo contable y su relación con las operaciones financieras”. Muestra cuatro fases numeradas: Identificación y recolección. Registro en libros. Ajustes y conciliaciones. Estados financieros. A la derecha aparecen íconos que representan operaciones financieras: compras, ventas, gastos, pagos e ingresos, indicando su vínculo con las etapas del ciclo contable.')

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.1	Importancia del registro contable en la gestión financiera
    p.mb-4 El #[b registro contable] es fundamental para garantizar la transparencia y confiabilidad de la información financiera, ya que permite reflejar con exactitud las operaciones económicas de una organización. Gracias a este proceso, los administradores pueden conocer en tiempo real el estado de los recursos, las obligaciones pendientes y la rentabilidad de las actividades desarrolladas. Fierro Martínez (2011) destaca que “el registro oportuno y sistemático de las transacciones asegura la integridad de los datos contables, evitando omisiones o distorsiones que puedan afectar la toma de decisiones” (p. 61). De esta manera, llevar un control adecuado de cada movimiento contable contribuye al orden interno y facilita el cumplimiento de las obligaciones legales y fiscales.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
      :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img3.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Además de ser una exigencia normativa, el registro contable es una herramienta estratégica para la gestión financiera. Permite analizar tendencias de ingresos y gastos, proyectar flujos de efectivo y evaluar la sostenibilidad económica de la empresa. León García (2009) afirma que “la contabilidad bien organizada es la base para la planeación financiera, ya que ofrece datos verificados que apoyan las decisiones de inversión y financiamiento” (p. 97). Así, registrar cada operación no es solo un requisito administrativo, sino una acción que genera valor, mejora el control interno y optimiza la planificación a corto y largo plazo.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img4.svg', alt='Imagen decorativa')
      .col-lg-6
        p Entre sus principales beneficios se destacan:
        ul.lista-ul--color.mb-4
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            p.mb-0 Permite tener información actualizada y verificable.
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            p.mb-0 Facilita la detección de errores y su corrección oportuna.
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            p.mb-0 Asegura el cumplimiento de la normativa contable y tributaria.
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            p.mb-0 Mejora la planeación y el análisis financiero.
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            p.mb-0 Sirve de base para la rendición de cuentas y las auditorías.
        p En conclusión, el ciclo contable es #[b el eje que articula la contabilidad con la gestión empresarial], convirtiendo los hechos económicos en información confiable para la toma de decisiones estratégicas.
    .row.justify-content-center.align-items-center
      .col-lg-8
        .cajon.color-secundario.p-4.mb-4
          p Dominar el ciclo contable permite comprender cómo cada operación registrada en los asientos contables fluye hasta consolidarse en los estados financieros finales.
          p.mb-0 En el siguiente tema se abordará el funcionamiento de los libros contables, que constituyen el soporte formal y legal de todas las etapas del ciclo.

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.2	Registro de compras, ventas, gastos, pagos e ingresos
    p.mb-4 El registro de #[b compras] es una de las operaciones más frecuentes en cualquier empresa y consiste en contabilizar la adquisición de bienes o servicios necesarios para la operación. Por ejemplo, si una empresa adquiere materia prima por #[b $ 3.000.000 a crédito], el asiento contable sería: #[b Débito a Inventarios por $ 3.000.000] y #[b Crédito a Proveedores por $ 3.000.000]. Fierro Martínez (2011) explica que “el registro de compras permite controlar los costos y planificar las necesidades de aprovisionamiento de manera eficiente” (p. 75). Además, este registro es clave para determinar el costo de ventas y mantener actualizado el saldo de los inventarios.
    .tarjeta-BG05.px-md-5.px-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-2.col-4.mb-4
          figure
            img(src='@/assets/curso/temas/tema2/img5.svg', alt='Imagen decorativa')
        .col-lg-8
          p En el caso de las #[b ventas], estas representan los ingresos principales de la empresa. Si se vende mercancía por #[b $5.000.000 en efectivo], el asiento sería #[b Débito a Caja por $ 5.000.000] y #[b Crédito a Ingresos por Ventas por $ 5.000.000]. Cuando las ventas son a crédito, se registra un #[b Débito a Cuentas por Cobrar] y un #[b Crédito a Ventas], reflejando la expectativa de cobro futuro. León García (2009) señala que “el adecuado registro de las ventas permite analizar la rentabilidad del negocio y proyectar los flujos de efectivo esperados” (p. 104). Así, registrar las ventas de forma ordenada contribuye a un mejor control de las cuentas por cobrar y de la gestión comercial.
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          p Los #[b gastos] son desembolsos necesarios para mantener la operación, como el pago de servicios, salarios o alquileres. Por ejemplo, si se paga el servicio de energía por #[b $ 800.000 en efectivo], se registra un #[b Débito a Gastos de Servicios Públicos] y un #[b Crédito a Caja]. 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          p.mb-0  Ortiz Anaya (2018) afirma que “registrar los gastos con detalle es fundamental para evaluar la eficiencia operativa y reducir costos innecesarios” (p. 48). Con un registro claro de los gastos, la empresa puede identificar cuáles son fijos, variables o extraordinarios, y tomar decisiones para optimizar sus recursos.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema2/img6.png', alt='Imagen decorativa')
      .col-lg-8(data-aos="fade-right")
        p En cuanto a los #[b pagos], estos representan la salida de recursos para saldar obligaciones previamente registradas. Si la empresa paga a un proveedor #[b $ 2.000.000 mediante transferencia bancaria], el asiento sería #[b Débito a Proveedores por $ 2.000.000 y Crédito a Bancos por $ 2.000.000], reflejando la disminución del pasivo. Fierro Martínez (2011) destaca que “la correcta aplicación de los pagos permite mantener relaciones comerciales sanas y evita acumulación innecesaria de deudas” (p. 83). Este control también ayuda a planificar la liquidez y a evitar retrasos que puedan generar intereses o recargos.
        .bloque-texto-c.color-primario.p-4.mb-4
          p.mb-0 Los #[b ingresos] incluyen tanto las ventas como otras entradas de recursos, como intereses o rendimientos financieros. Por ejemplo, si la empresa recibe intereses por #[b $ 500.000] en su cuenta bancaria, se registra #[b Débito a Bancos por $ 500.000 y Crédito a Ingresos Financieros por $ 500.000]. León García (2009) sostiene que “registrar los ingresos de manera diferenciada permite identificar sus fuentes y medir el impacto de cada línea de negocio en los resultados financieros” (p. 109). Con un adecuado control de las compras, ventas, gastos, pagos e ingresos, el ciclo contable mantiene la información actualizada y confiable para la toma de decisiones estratégicas.
          
    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.3	Relación entre el ciclo contable y la elaboración de informes financieros
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-8.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img6.svg', alt='Imagen decorativa')
      .col-lg-10
        p El ciclo contable constituye el conjunto ordenado de procesos que permiten transformar los hechos económicos en información financiera útil y comprensible. Cada etapa —desde la identificación de la transacción hasta el cierre contable— alimenta de manera directa la preparación de los informes financieros que reflejan la situación económica de la organización.
        p Según Muñoz Maza (2016), “el objetivo fundamental del ciclo contable es producir información financiera confiable y comparable, que sirva como base para evaluar la gestión y apoyar la toma de decisiones” (p. 188).
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
      :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img7.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Esto implica que la calidad de los informes finales depende directamente de la rigurosidad con la que se ejecutan las fases intermedias del ciclo: si existen errores en el registro de comprobantes, omisiones en los libros principales o fallas en los ajustes, los estados financieros resultantes presentarán inconsistencias que afectarán la credibilidad de la información.
    p.mb-4 El ciclo contable organiza de forma cronológica y lógica el recorrido de la información financiera, desde el registro inicial de las operaciones hasta su presentación en los informes finales. La siguiente figura ilustra cómo cada etapa se conecta entre sí, permitiendo transformar los datos diarios en estados financieros consolidados que reflejan la situación económica de la organización. 
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        p.mb-4 La siguiente figura muestra la estructura básica de una cuenta T, con sus elementos principales organizados de forma clara.
        .titulo-sexto.color-acento-contenido.offset-0(data-aos="fade-left")
          h5 Figura 3.
          i  Flujo del ciclo contable hacia los informes financieros
      .col-lg-10.desktop(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema2/img8.svg', alt='Diagrama de flujo que muestra el proceso contable desde los hechos económicos y soportes, pasando por el libro diario, libro mayor y balance de comprobación, hasta la elaboración de los estados financieros e informe de gestión.')
      .col-lg-10.movil(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema2/img8_1.svg', alt='Diagrama de flujo que muestra el proceso contable desde los hechos económicos y soportes, pasando por el libro diario, libro mayor y balance de comprobación, hasta la elaboración de los estados financieros e informe de gestión.')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        p De acuerdo con Fierro Martínez (2011), “los estados financieros no son un producto aislado, sino la consecuencia lógica y secuencial de todas las operaciones registradas durante el ciclo contable” (p. 219). Por ello, resulta esencial aplicar controles de revisión cruzada y conciliación entre etapas, para asegurar que los saldos sean consistentes antes de presentar los informes.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          p En síntesis, el ciclo contable funciona como un sistema de procesamiento de datos, mientras que los estados financieros representan el resultado final de ese procesamiento. Garantizar la correcta articulación entre ambos asegura que los informes financieros sean coherentes, verificables y útiles para la toma de decisiones estratégicas y el cumplimiento normativo.



</template>

<script>
export default {
  name: 'Tema2',
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
