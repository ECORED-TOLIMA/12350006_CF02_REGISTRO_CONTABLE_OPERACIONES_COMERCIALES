<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 3
      h1 Libros contables   

    .row.justify-content-center.align-items-center
      .col-lg-12
        figure.mb-5(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema3/img1.png', alt='Imagen decorativa')
    
    p.mb-5(data-aos="fade-left") El #[b registro contable en libros principales] es la etapa del ciclo contable en la que se ordenan cronológicamente las operaciones financieras de la empresa, asegurando que cada transacción quede documentada de manera formal. Los principales libros son el #[b libro diario], donde se registran todas las operaciones en orden de ocurrencia; el #[b libro mayor], donde se clasifican los movimientos por cuentas; y el #[b balance de comprobación], que permite verificar la exactitud aritmética de los registros. Fierro Martínez (2011) explica que “los libros contables constituyen la evidencia formal del registro financiero y son exigidos legalmente como prueba de las operaciones realizadas” (p. 93). Su uso adecuado garantiza transparencia, orden y facilita la posterior elaboración de estados financieros.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-6.mb-4.lg-mb-0
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema3/img2.svg', alt='Imagen decorativa')
      .col-lg-6
        p.mb-5(data-aos="fade-left") Los libros contables son registros oficiales donde se documentan de manera ordenada y sistemática todas las operaciones financieras de una organización. Para que cumplan su función legal y técnica, deben reunir ciertas características que aseguren la confiabilidad, integridad y utilidad de la información registrada. A continuación, se presentan sus principales características.
        .titulo.mb-5(data-aos="fade-left")
          img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
          h5.mb-0 Características principales de los libros contables:        
        ul.lista-ul--color.mb-4
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            p.mb-0 Deben llevarse en idioma castellano y en moneda nacional.
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            p.mb-0 Los registros deben ser cronológicos, completos, claros y sin enmendaduras.
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            p.mb-0 Deben conservarse durante mínimo 10 años, según el Código de Comercio.
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            p.mb-0 Pueden llevarse en formato físico o en medios electrónicos, cumpliendo requisitos de autenticidad y seguridad.
        p Estos requisitos garantizan que los libros contables sean #[b fuentes confiables y legalmente válidas de información financiera].
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4(data-aos="fade-left")
          p En la práctica, cada operación registrada en el libro diario se traslada al libro mayor, donde se acumulan los movimientos de cada cuenta específica, permitiendo conocer su saldo actualizado. Por ejemplo, si la empresa registra la compra de suministros por #[b $ 1.500.000] y el pago de servicios públicos por #[b $ 800.000], ambos movimientos quedan primero anotados en el libro diario y luego se trasladan a las cuentas correspondientes en el libro mayor: #[b Suministros, Gastos de Servicios Públicos y Caja o Bancos]. León García (2009) resalta que “los libros contables son instrumentos de control interno y permiten analizar el comportamiento de las cuentas para la toma de decisiones financieras” (p. 112).
    p(data-aos="fade-left") El balance de comprobación complementa este proceso, ya que resume los saldos de todas las cuentas para verificar que la suma de los débitos sea igual a la suma de los créditos, manteniendo el equilibrio contable. Por ejemplo, si al cierre del mes los débitos totalizan #[b $ 12.000.000] y los créditos también #[b $ 12.000.000], se confirma que no hay errores aritméticos en los registros. Ortiz Anaya (2018) sostiene que “la correcta utilización de los libros principales no solo responde a exigencias normativas, sino que facilita el análisis financiero y la preparación de los informes contables” (p. 56). De esta forma, los libros principales son la base para consolidar la información y dar paso a los estados financieros básicos.
    
    separador
    .tarjeta-BG05.px-md-5.px-4
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
        h2 3.1	Tipos de libros contables y sus componentes
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-2.col-4.mb-4.lg-mb-0
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/tema3/img3.svg', alt='Imagen decorativa')
        .col-lg-10
          p(data-aos="fade-left") Existen #[b libros principales y libros auxiliares], que cumplen funciones complementarias dentro del sistema contable.
          p(data-aos="fade-left") Los principales son obligatorios y resumen los movimientos de la empresa; los auxiliares detallan operaciones específicas por terceros, cuentas o centros de costos.
          p(data-aos="fade-left") Los libros contables se organizan en un esquema jerárquico que refleja el nivel de detalle y consolidación de la información financiera. Esta estructura permite registrar primero las operaciones de forma individual y luego agruparlas progresivamente para su análisis y presentación. La siguiente figura muestra cómo se relacionan jerárquicamente los principales libros contables dentro del sistema de registro.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.offset-0(data-aos="fade-left")
          h5 Figura 4.
          i  Esquema jerárquico de libros contables
      .col-lg-10.desktop(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema3/img4.svg', alt='Diagrama en forma jerárquica que organiza los libros contables en dos niveles principales. En la parte superior se ubican los libros principales: libro diario, libro mayor y libro de inventarios y balances, que concentran el registro formal y obligatorio de las operaciones. Desde ellos descienden los libros auxiliares, que detallan información específica de cuentas como bancos, cuentas por cobrar, cuentas por pagar, inventarios y nómina, sirviendo de soporte para los libros principales.')
      .col-10.movil(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema3/img4_1.svg', alt='Diagrama en forma jerárquica que organiza los libros contables en dos niveles principales. En la parte superior se ubican los libros principales: libro diario, libro mayor y libro de inventarios y balances, que concentran el registro formal y obligatorio de las operaciones. Desde ellos descienden los libros auxiliares, que detallan información específica de cuentas como bancos, cuentas por cobrar, cuentas por pagar, inventarios y nómina, sirviendo de soporte para los libros principales.')
    
    p.mb-5(data-aos="fade-left") Los libros contables se clasifican según su función y el tipo de información que recopilan, lo cual permite organizar de manera coherente el registro de las operaciones financieras. Cada tipo cumple un papel específico dentro del proceso contable y aporta distintos niveles de detalle para el análisis y control. La siguiente tabla presenta los principales tipos de libros contables y su contenido característico.
    .titulo-sexto.color-acento-contenido.offset-1(data-aos="fade-left")
      h5 Tabla 2.
      i Tipos de libros contables
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade-left")
        .tabla-a.color-acento-contenido
          table(alt="Texto alternativo tabla")
            thead
              tr(data-aos="fade-left")
                th Tipo de libro
                th Descripción
                th Contenido principal
            tbody
              tr(data-aos="fade-left")
                td Libro diario
                td Registra cronológicamente todos los asientos contables con sus débitos y créditos.
                td Fecha, cuentas afectadas, valores, glosa, soportes.
              tr(data-aos="fade-left")
                td Libro mayor
                td Acumula los movimientos de cada cuenta contable provenientes del diario.
                td Movimientos por cuenta, saldos parciales y finales.
              tr(data-aos="fade-left")
                td Balance de comprobación
                td Lista los saldos finales de cada cuenta para verificar que los débitos igualen a los créditos.
                td Códigos, nombres de cuentas, saldos débitos y créditos.
              tr(data-aos="fade-left")
                td Libros auxiliares
                td Detallan movimientos específicos por terceros, centros de costos u operaciones.
                td Subcuentas, terceros, documentos, valores.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4(data-aos="fade-left")
          p Según Ortiz Anaya (2018), “la correcta integración entre libros principales y auxiliares asegura la trazabilidad de la información contable y permite detectar errores en tiempo real” (p. 94).
          P.mb-0 El uso coordinado de estos libros permite construir los estados financieros y atender los requerimientos de auditoría interna y externa.
    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Componentes de los libros contables
    p(data-aos="fade-left") Cada libro contable, independientemente de su tipo, debe contener #[b ciertos elementos mínimos que permitan verificar su autenticidad, integridad y coherencia técnica].
    p(data-aos="fade-left") Estos elementos aseguran que la información registrada sea completa y pueda ser auditada en cualquier momento.
    p.mb-4(data-aos="fade-left") Para garantizar la validez técnica y legal de la información registrada, los libros contables deben contener ciertos elementos básicos que permitan identificar, clasificar y verificar cada operación. Estos componentes facilitan la lectura, el control y la auditoría de los registros contables. A continuación, se presentan los principales componentes que deben incluir los libros contables. 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-10.mb-4.lg-mb-0
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/tema3/img5.png', alt='Imagen decorativa')
      .col-lg-5
        .titulo.mb-5(data-aos="fade-left")
          img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
          h5.mb-0 Componentes de los libros contables
              
        ul.lista-ul--color.mb-4
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            p.mb-0  #[b Encabezado o carátula:] contiene el nombre de la empresa, NIT, razón social, nombre del libro y periodo contable.       
        ul.lista-ul--color.mb-4
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            p.mb-0  #[b Columnas de registro:] incluyen la fecha, número de comprobante, código y nombre de cuenta, y la descripción o glosa de la operación.       
        ul.lista-ul--color.mb-4
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            p.mb-0  #[b Columnas de valores:] presentan los montos en débito, crédito, saldos parciales y acumulados.       
        ul.lista-ul--color.mb-4
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            p.mb-0  #[b Firma y responsabilidad:] firma de quien elabora y revisa los registros para validar su autenticidad.       
        ul.lista-ul--color.mb-4
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            p.mb-0  #[b Soportes adjuntos:] referencias a documentos externos que respaldan los asientos (facturas, recibos, nóminas, contratos, entre otros). 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4.mb-4(data-aos="fade-left")
          p Según León García (2009), “la calidad técnica de los libros contables depende de que cada registro esté completo, firmado y referenciado a su soporte” (p. 139).
          p.mb-0 Disponer de libros con estos componentes evita rechazos durante auditorías o inspecciones de entes de control.
    
    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Libro diario: estructura, normativa y ejemplo de registro
    .tarjeta-BG05.px-md-5.px-4
      p(data-aos="fade-left") El #[b libro diario] es el registro contable principal en el que se anotan, de forma cronológica, todas las operaciones financieras realizadas por la empresa. Su finalidad es dejar constancia detallada de cada transacción, indicando la fecha, el concepto, las cuentas afectadas y los valores en débitos y créditos. Según Fierro Martínez (2011), “el libro diario es el punto de partida para el proceso contable, pues concentra la información original que luego se traslada a otros registros auxiliares y libros mayores” (p. 102). En Colombia, su uso está regulado por el Código de Comercio y las normas contables vigentes, que exigen su diligenciamiento de manera clara, sin tachones ni enmendaduras, garantizando la transparencia de la información.
      p.mb-5(data-aos="fade-left") Cada asiento registrado en el libro diario debe contener los siguientes elementos:

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          ol.lista-ol--cuadro.lista-ol--separador
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta(style="color: #12263F; font-weight: 700")
                span 1
              p.mb-0 #[b Fecha de la operación:] indica el día en que ocurrió la transacción económica.
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta(style="color: #12263F; font-weight: 700")
                span 2
              p.mb-0 #[b Descripción o concepto:] presenta una breve explicación de la operación registrada.
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta(style="color: #12263F; font-weight: 700")
                span 3
              p.mb-0 #[b Cuentas afectadas (PUC):] incluye los códigos y nombres de las cuentas involucradas, según el Plan Único de Cuentas (PUC).
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta(style="color: #12263F; font-weight: 700")
                span 4
              p.mb-0 #[b Valor débito:] corresponde al monto que se registra en la columna del debe, para reflejar un aumento en cuentas de naturaleza deudora.
            li(data-aos="fade-left") 
              .lista-ol--cuadro__vineta(style="color: #12263F; font-weight: 700")
                span 5
              p.mb-0 #[b Valor crédito:] corresponde al monto que se registra en la columna del haber, para reflejar un aumento en cuentas de naturaleza acreedora.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.order-2.order-lg-1
        .titulo.mb-5(data-aos="fade-left")
          h5.mb-0 Ejemplo
        ul.lista-ul--color.mb-4
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            p.mb-0 Fecha: 01 de marzo
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            p.mb-0 Concepto: Compra de materia prima en efectivo
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            p.mb-0 Cuentas:
              br
              | - Débito: Inventarios (1435) → $ 2.000.000
              br
              | - Crédito: Caja (1105) → $ 2.000.000
        .cajon.color-secundario.p-4.mb-4
          p.mb-0(data-aos="fade-left") Según León García (2009), “un libro diario bien organizado permite una lectura clara de las transacciones y facilita el control interno de los movimientos económicos” (p. 118).
      .col-lg-5.col-10.mb-4.lg-mb-0.order-1.order-lg-2
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema3/img6.png', alt='Imagen decorativa')
    p.mb-5 Este registro se convierte en la base para trasladar los movimientos al #[b libro mayor], donde se consolidan los saldos de cada cuenta. Además, el libro diario sirve como evidencia legal ante auditorías y revisiones externas, ya que refleja la realidad económica de la empresa. Ortiz Anaya (2018) afirma que “la correcta elaboración del libro diario evita errores posteriores en el balance y asegura que la información financiera sea confiable” (p. 62). Por ello, se considera un documento esencial para mantener la integridad contable y cumplir con las obligaciones fiscales y normativas.
    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Libro mayor: traspaso de movimientos y saldos
    p(data-aos="fade-left") El #[b libro mayor] es el registro contable donde se concentran los movimientos de cada cuenta individual, organizados de manera sistemática para conocer su saldo actualizado. Después de registrar las operaciones en el libro diario, se trasladan al libro mayor, agrupando los débitos y créditos de cada cuenta. Fierro Martínez (2011) explica que “la mayorización es el proceso mediante el cual se clasifican las transacciones del libro diario para determinar el comportamiento y saldo final de cada cuenta” (p. 108). Este procedimiento permite que la empresa conozca, en cualquier momento, cuánto debe, cuánto tiene invertido o cuánto ha gastado.
    p.mb-5(data-aos="fade-left") En el libro mayor se acumulan los movimientos y se determinan los saldos. Este procedimiento permite consolidar la información de cada cuenta para su posterior análisis y presentación en los estados financieros. A continuación, se muestra un ejemplo práctico de cómo se realiza este traslado.
    .titulo.mb-5(data-aos="fade-left")
      h5.mb-0 Ejemplo de traslado de registros del libro diario al libro mayor
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.dvprimario.p-5(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-lg-3.col-6
            figure
              img(src='@/assets/curso/temas/tema3/img7.svg', alt='Texto que describa la imagen')
        h4.text-center 1.	Registro en el libro diario 
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            p Durante el mes se registraron las siguientes operaciones:
            ul.lista-ul
              li
                i.lista-ul__vineta
                p.mb-0 Compra de mercancías por #[b $ 2.000.000]
              li
                i.lista-ul__vineta
                p.mb-0 Pago de un servicio por #[b $ 500.000]
              li
                i.lista-ul__vineta
                p.mb-0 Venta en efectivo por #[b $ 3.500.000]
      .col-md.tarjeta.color-secundario.p-5(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-lg-3.col-6
            figure
              img(src='@/assets/curso/temas/tema3/img8.svg', alt='Texto que describa la imagen')
        h4.text-center 2.	Traslado al libro mayor 
        
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            p Los valores se registran en las cuentas correspondientes:
            ul.lista-ul
              li
                i.lista-ul__vineta
                p.mb-0 Cuenta Inventarios: Débito acumulado de #[b $ 2.000.000]
              li
                i.lista-ul__vineta
                p.mb-0 Cuenta Gastos de Servicios Públicos: Débito de #[b $ 500.000]
              li
                i.lista-ul__vineta
                p.mb-0 Cuenta Gastos de Servicios Públicos: Débito de #[b $ 500.000]
              li
                ul
                  li 
                    i.lista-ul__vineta
                    p.mb-0 Crédito por la compra #[b ( $ 2.000.000 )]
                  li 
                    i.lista-ul__vineta
                    p.mb-0 Débito por la venta #[b ( $ 3.500.000 )]
                  li 
                    i.lista-ul__vineta
                    p.mb-0 #[b Saldo final positivo de $ 3.000.000]
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4(data-aos="fade-left")
          p.mb-0 León García (2009) sostiene que “el libro mayor permite analizar cada cuenta de manera individual, facilitando el control de activos, pasivos y patrimonio” (p. 123).

    p.mb-5(data-aos="fade-left") Este proceso de traspaso y clasificación no solo es clave para conocer los saldos intermedios, sino también para preparar el #[b balance de comprobación], que es el paso previo a la elaboración de estados financieros. Ortiz Anaya (2018) afirma que “sin un libro mayor bien estructurado, el ciclo contable se vería interrumpido, pues no habría forma de consolidar saldos ni garantizar la exactitud de la información financiera” (p. 68). En síntesis, el libro mayor actúa como un puente entre los registros cronológicos del libro diario y la presentación ordenada de la información contable para la toma de decisiones.

    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Balance de comprobación y su elaboración
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-8.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/img9.svg', alt='Imagen decorativa')
      .col-lg-10
        p(data-aos="fade-left") El #[b balance de comprobación] es un documento contable que resume los saldos de todas las cuentas del libro mayor, con el propósito de verificar que los registros mantengan el equilibrio contable. Su principal objetivo es confirmar que la suma total de los débitos sea igual a la suma total de los créditos, validando que no existan errores aritméticos en el proceso de registro y mayorización. Fierro Martínez (2011) explica que “el balance de comprobación actúa como una herramienta de control intermedio antes de preparar los estados financieros, garantizando la exactitud de la información contable” (p. 112). Aunque este balance no muestra resultados económicos ni la situación patrimonial definitiva, es un paso obligatorio para asegurar la confiabilidad del ciclo contable.
        p.mb-0(data-aos="fade-left") Para su elaboración, se listan todas las cuentas del libro mayor con su saldo final, clasificándolas como débito o crédito. A continuación se presenta un ejemplo para ilustrar mejor el concepto:
    
    .titulo.mb-5(data-aos="fade-left")
      h5.mb-0 Ejemplo de verificación del balance en el libro mayor
    .row.mb-5
      .col-md-6.col-xl.mb-4.mb-xl-0(data-aos="fade-left")
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 1
          p.text-center 
            b Saldos en el libro mayor:
          p.mb-0 #[b Inventarios:] $2.000.000 (débito)
          p.mb-0 #[b Gastos de servicios públicos:] $500.000 (débito)
          p.mb-0 #[b Caja:] $3.500.000 (débito)
          p.mb-0 #[b Proveedores:] $2.000.000 (crédito)
          p.mb-0 #[b Ingresos por ventas:] $4.000.000 (crédito)
      .col-md-6.col-xl.mb-4.mb-xl-0(data-aos="fade-left")
        .tarjeta-numerada.color-acento-contenido.p-5.h-100
          .tarjeta-numerada__numero
            .h2 2
          p.text-center 
            b Verificación aritmética:
          p.mb-0 #[b Total débitos:] $6.000.000
          p.mb-0 #[b Total créditos:] $6.000.000

      .col-md-6.col-xl.mb-4.mb-xl-0(data-aos="fade-left")
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 3
          p.text-center 
            b Resultado:
          p Al coincidir los totales, se confirma que el balance está cuadrado.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10(data-aos="fade-left")
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 León García (2009) destaca que “esta verificación aritmética permite detectar omisiones, duplicaciones o errores de traspaso antes de continuar con el cierre contable” (p. 130).
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
      :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img10.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Además de ser una herramienta de control interno, el balance de comprobación facilita la preparación de los #[b estados financieros básicos], ya que organiza la información necesaria para elaborar el Estado de Situación Financiera y el Estado de Resultados. Ortiz Anaya (2018) afirma que “sin un balance de comprobación confiable, los estados financieros perderían validez, ya que se basarían en registros con posibles inconsistencias” (p. 72). De esta manera, su correcta elaboración asegura que cada etapa del ciclo contable esté alineada, garantizando la integridad de la información que se presentará a los usuarios internos y externos.

    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Conciliaciones y revisión cruzada de registros
    p(data-aos="fade-left") Las #[b conciliaciones contables] son procesos de verificación que permiten comparar los registros internos de la empresa con información externa para garantizar su exactitud. La más común es la #[b conciliación bancaria], donde se revisan los saldos del libro contable de bancos y se contrastan con el extracto emitido por la entidad financiera. Si, por ejemplo, el libro contable refleja un saldo de #[b $ 10.000.000], pero el banco reporta #[b $ 9.500.000], se deben identificar las diferencias, como cheques en tránsito o consignaciones no registradas. 
    p.mb-4(data-aos="fade-left") Fierro Martínez (2011) señala que “la conciliación es esencial para detectar errores, omisiones o movimientos no contabilizados que afecten la confiabilidad de la información financiera” (p. 120).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.lg-mb-0.mb-4(data-aos="fade-left")
        .cajon.color-secundario.p-4
          p.mb-0 Por su parte, la #[b revisión cruzada de registros contables] consiste en comprobar que las operaciones se encuentren correctamente registradas en todos los libros y soportes correspondientes. 
      .col-lg-7(data-aos="fade-left")
        .tarjeta.color-primario.p-4.h-100
          .row
            .col-4
              figure
                img(src='@/assets/curso/temas/tema3/img11.svg', alt='Imagen decorativa')
            .col-8
              p.mb-0 Por ejemplo, si una factura de venta por #[b $ 3.000.000] está registrada en el libro diario, debe coincidir con el movimiento de #[b Cuentas por Cobrar] en el libro mayor y reflejarse en el balance de comprobación. 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade-left")
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4.mb-0 León García (2009) afirma que “la revisión cruzada ayuda a mantener la integridad del ciclo contable, garantizando que cada transacción esté reflejada en las cuentas correctas y con el valor adecuado” (p. 135). 
            i.fas.fa-quote-right
            br
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
      :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img12.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Este procedimiento también facilita detectar registros duplicados o mal clasificados.
          br
          br
          | Este proceso de traspaso y clasificación no solo es clave para conocer los saldos intermedios, sino también para preparar el balance de comprobación, que es el paso previo a la elaboración de estados financieros. Ortiz Anaya (2018) afirma que “sin un libro mayor bien estructurado, el ciclo contable se vería interrumpido, pues no habría forma de consolidar saldos ni garantizar la exactitud de la información financiera” (p. 68). En síntesis, el libro mayor actúa como un puente entre los registros cronológicos del libro diario y la presentación ordenada de la información contable para la toma de decisiones.

    .row.justify-content-center
      .col-lg-10
        .titulo.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
          h5.mb-0 Conciliación bancaria básica
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema3/img13.png', alt='Imagen decorativa')
      .col-lg-6(data-aos="fade-right")
        p La #[b conciliación bancaria] básica es el proceso mediante el cual se comparan los registros contables de la cuenta Bancos con el extracto oficial emitido por la entidad financiera, con el objetivo de identificar diferencias y ajustar la contabilidad. Estas diferencias pueden originarse por cheques girados pero aún no cobrados, consignaciones en tránsito, cargos bancarios o errores en los registros internos. 
        p Por ejemplo, si el libro contable de Bancos refleja un saldo de $12.500.000 y el extracto bancario muestra $12.000.000, la diferencia de $ 500.000 puede deberse a un cheque pendiente de cobro. 
        .bloque-texto-c.color-primario.p-4.mb-4
          p.mb-0 Fierro Martínez (2011) explica que “la conciliación bancaria asegura que la contabilidad interna coincida con la realidad financiera, evitando distorsiones que afecten la liquidez y el control de efectivo” (p. 125).

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        p(data-aos="fade-left") Además de ser una herramienta de control interno, la conciliación bancaria permite detectar movimientos no autorizados o cargos bancarios no registrados. Si, por ejemplo, el banco cargó #[b $ 50.000] por comisiones y este valor no fue registrado en la contabilidad, la conciliación revelará el ajuste necesario: #[b Débito a Gastos Bancarios $50.000 y Crédito a Bancos $ 50.000.]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4
          .row.justify-content-center
            .col-lg-1.col-6.mb-4.lg-mb-0(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/tema3/img14.svg', alt='Imagen decorativa')
            .col-lg-10
              p.mb-0 León García (2009) afirma que “mantener actualizadas las conciliaciones bancarias es esencial para garantizar que la información contable sea confiable y facilite la toma de decisiones financieras” (p. 142). De esta forma, la conciliación bancaria básica no solo verifica cifras, sino que contribuye a la transparencia y seguridad del manejo de los recursos monetarios.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Revisión cruzada de registros contables
    p.mb-5(data-aos="fade-left") La #[b revisión cruzada de registros contables] es una práctica de control interno que consiste en verificar que todas las operaciones estén registradas de forma correcta y consistente en los diferentes libros y soportes contables. Este proceso implica comparar los valores asentados en el libro diario con los movimientos del libro mayor, el balance de comprobación y los documentos fuente, como facturas, recibos y comprobantes de pago. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-8.mb-4(data-aos="fade-right")
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema3/img15.svg', alt='Imagen decorativa')
      .col-lg-9(data-aos="fade-left")
        p Por ejemplo, si el libro contable de Bancos refleja un saldo de $12.500.000 y el extracto bancario muestra $12.000.000, la diferencia de $500.000 puede deberse a un cheque pendiente de cobro.
        p.mb-0 Además, la revisión cruzada permite identificar errores comunes como registros duplicados, transacciones omitidas o valores mal clasificados. Este procedimiento no solo ayuda a mantener el orden en la contabilidad, sino que también previene inconsistencias que podrían afectar el análisis financiero y la elaboración de los estados financieros. Una revisión cruzada periódica garantiza que cada movimiento esté soportado, registrado en las cuentas adecuadas y reflejado de forma correcta en los saldos finales, asegurando que la información contable sea clara y confiable para la gestión administrativa y las auditorías externas.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
          h5.mb-0 Corrección de errores comunes en registros contables
      .col-lg-10
        p(data-aos="fade-left") En la práctica contable es común que se presenten errores durante el registro de operaciones, ya sea por omisiones, duplicaciones o valores incorrectos. Estos errores pueden afectar la exactitud de los saldos y distorsionar la información financiera de la empresa. Entre los errores más frecuentes se encuentran registrar una operación en una cuenta equivocada, colocar un valor diferente al real o no trasladar correctamente un movimiento del libro diario al libro mayor. Por ejemplo, si una compra por #[b $ 1.200.000] se registra por error como #[b $ 12.000.000], el saldo de la cuenta Inventarios quedará inflado, generando una diferencia significativa en el balance de comprobación.

    .row.justify-content-center.align-items-center
      .col-lg-4.col-8.mb-4.lg-mb-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema3/img16.png', alt='Imagen decorativa')
      .col-lg-6(data-aos="fade-right")
        p La corrección de estos errores debe realizarse mediante #[b asientos de ajuste], que permiten anular o rectificar el registro incorrecto sin alterar los documentos originales. Siguiendo el ejemplo anterior, para corregir el error se registraría un asiento inverso por #[b $ 10.800.000] en Inventarios (crédito) y Proveedores (débito), restableciendo el valor real de la transacción. También es importante documentar claramente la justificación del ajuste para mantener la trazabilidad de los cambios realizados en los libros contables.
        .cajon.color-secundario.p-4
          p.mb-0 Implementar controles como conciliaciones periódicas, revisiones cruzadas y supervisión por parte de personal capacitado ayuda a minimizar la ocurrencia de estos errores y facilita su detección temprana. Corregirlos de forma oportuna garantiza que los estados financieros reflejen la verdadera situación económica de la empresa, evitando decisiones basadas en información errónea y reduciendo riesgos frente a auditorías externas o revisiones fiscales.
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.2	Normativa legal aplicable a los libros contables en Colombia
    p(data-aos="fade-left") En Colombia, el uso y conservación de los libros contables está regulado por el Código de Comercio y diversas normas contables.
    p(data-aos="fade-left") Toda persona natural o jurídica que ejerza actividades mercantiles está obligada a llevar contabilidad y a conservar sus libros durante al menos diez años.
    p.mb-5(data-aos="fade-left") El uso y manejo de los libros contables en Colombia está regulado por un conjunto de normas que establecen los requisitos legales, técnicos y formales para su elaboración, conservación y presentación. Cumplir con esta normativa garantiza la validez jurídica de los registros y facilita la supervisión por parte de los entes de control. La siguiente tabla presenta las principales disposiciones legales aplicables.

    .titulo-sexto.color-acento-contenido.offset-1(data-aos="fade-left")
      h5 Tabla 3.
      i Normativa básica sobre libros contables en Colombia
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade-left")
        .tabla-a.color-acento-contenido
          table(alt="Texto alternativo tabla")
            thead
              tr
                th Norma
                th Contenido relevante
            tbody
              tr(data-aos="fade-left")
                td Código de Comercio (arts. 48 a 60)
                td Obligatoriedad de llevar contabilidad, conservación por 10 años, requisitos de forma y fondo.
              tr(data-aos="fade-left")
                td Decreto 2649 de 1993
                td Establece principios y normas de contabilidad generalmente aceptados en Colombia.
              tr(data-aos="fade-left")
                td Decreto 2650 de 1993
                td Implementa el Plan Único de Cuentas (PUC) como modelo estándar de codificación contable.
              tr(data-aos="fade-left")
                td Ley 527 de 1999
                td Reconoce validez legal a los libros contables electrónicos.
              tr(data-aos="fade-left")
                td Normas Internacionales de Información Financiera (NIIF)
                td Lineamientos generales sobre presentación y revelación de información financiera.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.order-2.order-lg-1
        p(data-aos="fade-left") Según Burbano Ruiz (2011), “la observancia de las normas sobre libros contables es un requisito legal y un mecanismo para garantizar la transparencia y credibilidad de la información” (p. 141).
        p(data-aos="fade-left") Cumplir con estos requisitos protege a la empresa ante sanciones legales y facilita los procesos de auditoría fiscal, tributaria o financiera.
        .cajon.color-primario.p-4.mb-4
          p(data-aos="fade-left") Los libros contables constituyen el respaldo formal de todos los registros contables, asegurando que la información financiera de la empresa sea verificable, ordenada y legalmente válida.
          p(data-aos="fade-left") Constituyen el puente entre los asientos contables diarios y los informes financieros periódicos.
          p.mb-0(data-aos="fade-left") En el siguiente tema se estudiarán los estados financieros, que son el producto final del proceso contable y el medio principal de comunicación de la información económica de la empresa.


      .col-lg-4.col-6.order-1.order-lg-2.mb-4.lg-mb-0
        figure
          img(src='@/assets/curso/temas/tema3/img17.svg', alt='Imagen decorativa')
</template>

<script>
export default {
  name: 'Tema3',
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
