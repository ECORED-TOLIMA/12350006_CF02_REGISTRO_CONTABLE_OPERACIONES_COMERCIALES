<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 4
      h1 Estados financieros básicos y cierre contable
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-4.lg-mb-0
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema4/img1.png', alt='Imagen decorativa')
      .col-lg-8
        p Los estados financieros básicos son el resultado final del ciclo contable, ya que presentan de manera ordenada y resumida la situación económica y financiera de la empresa. Entre los más importantes se encuentran el Estado de Situación Financiera (Balance General), que muestra los activos, pasivos y patrimonio, y el Estado de Resultados, que refleja los ingresos, costos y gastos del periodo contable. Fierro Martínez (2011) explica que “los estados financieros son el medio de comunicación entre la empresa y los usuarios internos y externos de la información contable” (p. 132). Por ello, su elaboración debe basarse en registros confiables y ajustados mediante conciliaciones previas.
        p Su importancia radica en que:
        ul.lista-ul--color.mb-4
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            p.mb-0 Permiten conocer la situación económica y financiera de la empresa.
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            p.mb-0 Sirven de base para decisiones de inversión, crédito y distribución de utilidades.
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            p.mb-0 Facilitan el control interno y la rendición de cuentas a los entes de vigilancia.
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            p.mb-0 Garantizan la transparencia ante socios, empleados, proveedores y el Estado.
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            p.mb-0 Permiten analizar tendencias y proyectar el crecimiento de la empresa.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4
          p Los principales estados financieros obligatorios en Colombia son el estado de situación financiera (balance general) y el #[b estado de resultados (pérdidas y ganancias).]
          p.mb-0 También existen otros informes complementarios como el estado de cambios en el patrimonio, el estado de flujos de efectivo y las notas a los estados financieros.

    p.mb-4 La elaboración de los estados financieros es el resultado final del proceso contable, en el que se consolidan y presentan los datos registrados a lo largo del ciclo contable. Este procedimiento sigue una secuencia lógica que transforma los movimientos individuales en informes resumidos y estructurados. La siguiente figura ilustra las principales etapas que intervienen en la elaboración de los estados financieros.

    .titulo-sexto.color-acento-contenido.offset-0(data-aos="fade-left")
      h5 Figura 5.
      i Diagrama de elaboración de estados financieros
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.desktop(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema4/img2.svg', alt='Diagrama de flujo que muestra el proceso para elaborar estados financieros: inicia con el registro de operaciones en el libro diario, continúa con el traslado de saldos al libro mayor, luego la verificación en el balance de comprobación, y finaliza con la preparación de los estados financieros que resumen la situación económica de la empresa.')
      .col-lg-12.movil(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema4/img2_1.svg', alt='Diagrama de flujo que muestra el proceso para elaborar estados financieros: inicia con el registro de operaciones en el libro diario, continúa con el traslado de saldos al libro mayor, luego la verificación en el balance de comprobación, y finaliza con la preparación de los estados financieros que resumen la situación económica de la empresa.')

    p.mb-4 El proceso de #[b cierre contable] consiste en revisar y ajustar todas las cuentas para dejar en ceros las de resultado (ingresos, costos y gastos) y trasladar su saldo neto al patrimonio, reflejando la utilidad o pérdida del ejercicio. Por ejemplo, si en el periodo se obtuvieron ingresos por #[b $ 20.000.000] y gastos por #[b $ 15.000.000], el resultado neto será una utilidad de #[b $ 5.000.000], que se sumará al patrimonio. León García (2009) sostiene que “el cierre contable permite depurar las cuentas y consolidar los saldos definitivos que serán presentados en los estados financieros” (p. 148). Este proceso garantiza que la información presentada al final del periodo sea precisa y cumpla con la normativa vigente.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
      :style="{'background-image':`url(${require('@/assets/curso/temas/tema4/img3.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Además, los estados financieros son esenciales para la #[b toma de decisiones estratégicas], ya que permiten evaluar la rentabilidad, la liquidez y la solvencia de la empresa. Ortiz Anaya (2018) afirma que “la interpretación adecuada de los estados financieros facilita identificar oportunidades de mejora y anticipar riesgos financieros” (p. 85). Así, un Balance General bien elaborado mostrará, por ejemplo, si los activos circulantes son suficientes para cubrir las obligaciones inmediatas, mientras que el Estado de Resultados permitirá analizar si los ingresos generados compensan los costos y gastos operativos.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-8.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema4/img4.svg', alt='Imagen decorativa')
      .col-lg-8
        p El cierre contable y la elaboración de los estados financieros también cumplen una función #[b egal y fiscal], pues son exigidos por las entidades de control y constituyen la base para la presentación de declaraciones tributarias y reportes oficiales. Burbano Ruiz (2011) destaca que “el cierre contable no solo ordena la contabilidad interna, sino que prepara la empresa para cumplir con sus compromisos externos en materia de control, impuestos y auditoría” (p. 203). De esta forma, los estados financieros básicos no solo informan, sino que consolidan el resultado de todo el ciclo contable, integrando las operaciones realizadas durante el periodo.
    
    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Los estados financieros y sus elementos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-8.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema4/img5.png', alt='Imagen decorativa')
      .col-lg-7(data-aos="fade-right")
        p Los estados financieros presentan la compilación, la tipificación y el resumen final de los datos contables en una fecha de corte determinada. El encargado de la preparación y presentación es el administrador de la empresa. Las clases de estados financieros se encuentran en el reglamento general de contabilidad, los cuales son necesarios para ofrecer información para aquellos que no tienen acceso a los registros contables.
        p Para certificar los estados financieros de una empresa, el representante legal y el contador público los deben preparar y para ser dictaminados solo los que tengan opinión del revisor fiscal o, a falta de este, un contador público independiente.
        .bloque-texto-c.color-primario.p-4.mb-4
          p.mb-0 Los elementos de los estados financieros representan las categorías básicas en las que se agrupan los hechos económicos registrados por una organización. Estos elementos permiten evaluar tanto la situación financiera (mediante el balance general) como el desempeño de las operaciones (mediante el estado de resultados). La siguiente figura presenta los principales elementos que componen los estados financieros.
    
    .titulo-sexto.color-acento-contenido.offset-1(data-aos="fade-left")
      h5 Figura 6.
      i Los estados financieros y sus elementos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.desktop(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema4/img6.svg', alt='Diagrama circular titulado “Los estados financieros y sus elementos” ubicado en el centro. Alrededor, cuatro círculos conectados por flechas indican los aspectos clave: Marco conceptual de presentación de estados financieros según las y las. Marco conceptual para la preparación de estados financieros según las. Importancia de los estados financieros. Naturaleza de los estados financieros.')
      .col-lg-8.movil(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema4/img6_1.svg', alt='Diagrama circular titulado “Los estados financieros y sus elementos” ubicado en el centro. Alrededor, cuatro círculos conectados por flechas indican los aspectos clave: Marco conceptual de presentación de estados financieros según las y las. Marco conceptual para la preparación de estados financieros según las. Importancia de los estados financieros. Naturaleza de los estados financieros.')    

    .tarjeta.tarjeta--BG04.p-5.mb-5(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            h4 Marco conceptual de presentación de estados financieros según las NIC y las NIIF
            p Esta norma internacional tiene como finalidad establecer los fundamentos para presentar los estados financieros de propósito general, para que sean comparables interna y externamente con periodos anteriores; así mismo, instituir los requisitos generales para su presentación. Esta norma no aplica a estados de propósitos intermedios.
            p.mb-0 Es una guía que detalla los objetivos de la información que contienen los estados financieros, sus características cualitativas y sus elementos, y la forma de reconocerlos y valorarlos. Estos estados tienen como propósito informar sobre la situación financiera a los usuarios interesados.
          .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema4/img7.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            h4 Importancia de los estados financieros
            p.mb-0 La importancia radica en que brindan información contable de manera transparente a terceros. Además posibilitan analizar los ahorros y gastos de la empresa.
          .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema4/img7.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            h4 Naturaleza de los estados financieros
            p Los estados financieros nacen en la contabilidad. Son preparados para presentar informes periódicos sobre de la situación del negocio, los progresos de la administración y los resultados de un periodo. En éstos se observan los hechos registrados.
            p.mb-0 En los estados financieros observamos los hechos registrados (datos obtenidos de los registros contables) estructurados conforme a los principios de contabilidad, convenciones contables (procedimientos y supuestos) y juicios personales (decisiones que pueda tomar el contador).
          .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema4/img7.png' alt="Imagen decorativa")

    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Estados Financieros Básicos
    p Se consideran básicos dentro de los estados financieros, el balance general y el estado de pérdidas y ganancias. Además de estos existen otros estados, aunque las normas legales los toman por básicos, para efectos de análisis financieros se consideran auxiliares o complementarios
    p.mb-4 En la práctica los más utilizados son los estados financieros de propósito general, o estados financieros básicos, son:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="El balance general")
            .col-lg-6.order-lg-1.order-2
              p Permite identificar la situación empresa en un período de tiempo determinado: activos, pasivos y patrimonio, los cuales son las divisiones principales del balance. Este estado financiero también se le conoce como:
              ul.lista-ul
                li
                  i.lista-ul__vineta
                  p.mb-0 Estado de situación financiera.
                li
                  i.lista-ul__vineta
                  p.mb-0 Estado de inversiones.
                li
                  i.lista-ul__vineta
                  p.mb-0 Estado de recursos y obligaciones.
                li
                  i.lista-ul__vineta
                  p.mb-0 Estado de activo, pasivo y capital.
            .col-lg-6.col-12.order-1.order-lg-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema4/img8.png', alt='Texto que describa la imagen')
          .row(titulo="Estado de resultados")
            .col-lg-6.order-lg-1.order-2
              p También denominado como: estado de rentas y gastos; estado de ingresos y egresos; estado de utilidades; o estado de pérdidas y ganancias. Para algunos expertos este último es el más adecuado (aunque reconociendo que solo puede presentarse una a la vez: pérdidas o utilidades).
              p.mb-0 Este estado muestra los ingresos y los egresos, y la utilidad o pérdida resultante de las operaciones generalmente por período de un año. Es un estado dinámico porque refleja actividad; es acumulativo porque resume las operaciones de una empresa desde su primer año hasta el último del período asociado.
            .col-lg-6.col-12.order-1.order-lg-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema4/img9.png', alt='Texto que describa la imagen')
          .row(titulo="Estado de cambios en el patrimonio o estado de superávit")
            .col-lg-6.order-lg-1.order-2
              p Es el estado que refleja el saldo inicial, el movimiento y el saldo final de cada una de las cuentas que conforman el patrimonio. Permite conocer la variación durante el período contable del capital, las reservas, las revalorizaciones, las utilidades, entre otras.
              p.mb-0 
            .col-lg-6.col-12.order-1.order-lg-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema4/img10.png', alt='Texto que describa la imagen')
          .row(titulo="Estado de fuentes y aplicación de fondos (EFAF)")
            .col-lg-6.order-lg-1.order-2
              p Este se utiliza para predecir situaciones de riesgo que pueda llegar a tener la empresa. Por lo que muestra los cambios financieros y sus orígenes, proporcionando información sobre la financiación e inversiones de la empresa en un período determinado. No obstante, su objetivo principal se centra en la utilidad que tiene para evaluar la procedencia y uso de fondos en el largo plazo, lo que posibilita que el administrador financiero planee adecuadamente los requerimientos de fondos futuros.
              p.mb-0 Se le conoce con otros nombres como:
            .col-lg-6.col-12.order-1.order-lg-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema4/img11.png', alt='Texto que describa la imagen')
          .row(titulo="Estado de flujos de efectivo (EFE)")
            .col-lg-6.order-lg-1.order-2
              p Los estados financieros básicos son informes contables esenciales que permiten conocer la situación económica, financiera y los resultados operativos de una organización durante un período determinado. Entre ellos se encuentra el estado de flujos de efectivo, que muestra de manera detallada el origen y uso del efectivo en actividades de operación, inversión y financiación. La siguiente figura presenta los principales estados financieros básicos.
              ul.lista-ul
                li
                  i.lista-ul__vineta
                  p.mb-0 Estado de cambios en la situación financiera.
                li
                  i.lista-ul__vineta
                  p.mb-0 Estado de fuentes y uso de fondos.
                li
                  i.lista-ul__vineta
                  p.mb-0 Flujo de fondos.
                li
                  i.lista-ul__vineta
                  p.mb-0 Estado de origen y aplicación de fondos o recursos.
            .col-lg-6.col-12.order-1.order-lg-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema4/img12.png', alt='Texto que describa la imagen')
    .titulo-sexto.color-acento-contenido.offset-1(data-aos="fade-left")
      h5 Figura 7.
      i Estados Financieros Básicos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.desktop(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema4/img16.svg', alt='Diagrama circular titulado “Estados financieros básicos” en el centro. Alrededor, siete círculos naranjas conectados indican sus componentes clave: Estado de resultados. Estado de cambios en el patrimonio o estado de superávit. Estado de cambios en la situación financiera. Estado de flujos de efectivo. Principios de los estados financieros. Limitaciones de los estados financieros. Balance general')
      .col-lg-8.movil(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema4/img16_1.svg', alt='Diagrama circular titulado “Estados financieros básicos” en el centro. Alrededor, siete círculos naranjas conectados indican sus componentes clave: Estado de resultados. Estado de cambios en el patrimonio o estado de superávit. Estado de cambios en la situación financiera. Estado de flujos de efectivo. Principios de los estados financieros. Limitaciones de los estados financieros. Balance general')    

    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.1	Estado de situación financiera (Balance General)
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-4.lg-mb-0
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema4/img17.png', alt='Imagen decorativa')
      .col-lg-6
        .cajon.color-primario.p-4.mb-4
          p.mb-0 El #[b Estado de Situación Financiera], conocido también como Balance General, es un informe contable que muestra la situación económica de la empresa en un momento determinado. Este documento presenta de forma ordenada los activos, que son los recursos y derechos de la organización; los pasivos, que representan las obligaciones con terceros; y el patrimonio, que es la inversión de los propietarios más los resultados acumulados. Su estructura se basa en la ecuación contable fundamental: Activos = Pasivos + Patrimonio, garantizando el equilibrio de las cifras y reflejando la realidad financiera de la entidad.
        p Por ejemplo, si una empresa tiene activos compuestos por efectivo en bancos por #[b $ 15.000.000], inventarios por #[b $ 8.000.000] y cuentas por cobrar por #[b $ 5.000.000], el total de sus activos sería #[b $ 28.000.000]. Si, a su vez, mantiene pasivos por préstamos bancarios de #[b $ 10.000.000] y cuentas por pagar a proveedores por #[b $ 6.000.000], el total de sus pasivos sería #[b $ 16.000.000]. En este caso, el patrimonio sería la diferencia: #[b $ 12.000.000], que corresponde al capital aportado y las utilidades retenidas. Este ejemplo evidencia cómo el balance refleja la posición financiera de manera clara y resumida.
    .row.justify-content-center.align-items-center
      .col-lg-10
        .cajon.color-primario.p-4
          p El Balance General se presenta generalmente en dos grandes secciones: la parte de activos, ordenados según su liquidez, y la parte de pasivos y patrimonio, ordenados según su exigibilidad. Esta clasificación permite que los usuarios de la información identifiquen rápidamente qué recursos son más fáciles de convertir en efectivo y qué obligaciones deben cumplirse en el corto o largo plazo. Además, facilita analizar la solvencia de la empresa, evaluando si sus activos corrientes son suficientes para cubrir las obligaciones inmediatas, lo que se conoce como el análisis de liquidez.
          p.mb-0 Además de ser un requisito contable y legal, el Estado de Situación Financiera es una herramienta clave para la toma de decisiones. Permite a los administradores conocer la capacidad de endeudamiento, planificar inversiones y controlar el crecimiento financiero de la empresa. También sirve a inversionistas, bancos y entidades de control para evaluar la estabilidad y sostenibilidad económica de la organización. Por ello, su correcta elaboración es fundamental para que represente fielmente la situación financiera y sirva de base para el análisis y la planeación estratégica.      
    
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.2	Estado de resultados (Pérdidas y ganancias)
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p El #[b Estado de Resultados], también conocido como #[b Estado de Pérdidas y Ganancias], es un informe contable que muestra el desempeño financiero de la empresa durante un periodo determinado. A diferencia del Balance General, que presenta la situación en un momento específico, este estado refleja la #[b dinámica de los ingresos, costos y gastos,] permitiendo determinar si la organización obtuvo utilidad o pérdida. Se elabora partiendo de las ventas netas, restando el costo de ventas para obtener la #[b utilidad bruta], y posteriormente se deducen los gastos operativos y financieros para llegar a la #[b utilidad neta del ejercicio].
        .cajon.color-primario.p-4
          p Por ejemplo, si una empresa registra ingresos por ventas de $25.000.000 y su costo de ventas es de #[b $ 10.000.000], su utilidad bruta será de #[b $ 15.000.000]. Si además incurre en gastos administrativos por #[b $ 5.000.000] y gastos financieros por #[b $ 2.000.000], la utilidad operativa quedará en #[b $ 8.000.000]. Finalmente, si debe pagar impuestos por #[b $ 2.000.000], la utilidad neta del periodo será de #[b $ 6.000.000]. Este flujo de cálculo permite analizar la rentabilidad de cada etapa del negocio, desde la producción hasta la operación y el resultado final.
      .col-lg-5.col-8.mb-4.lg-mb-0
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema4/img18.svg', alt='Imagen decorativa')

    p.mb-4 El Estado de Resultados es clave para evaluar la #[b eficiencia operativa] de la empresa, ya que revela qué proporción de los ingresos se consume en costos y gastos. También permite identificar qué áreas generan más rentabilidad y cuáles requieren ajustes para mejorar el margen de utilidad. Los administradores utilizan este estado para tomar decisiones como optimizar costos, renegociar precios o redefinir estrategias comerciales, mientras que inversionistas y acreedores lo revisan para medir la capacidad de la empresa para generar utilidades y cumplir sus obligaciones.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-8.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema4/img19.svg', alt='Imagen decorativa')
      .col-lg-9
        p.MB-0 Además de ser un instrumento de análisis financiero, este estado contable cumple un papel #[B normativo y legal], pues su resultado neto se traslada al patrimonio en el Balance General durante el cierre contable. De este modo, la utilidad o pérdida del periodo afecta directamente el capital contable de la empresa. Asimismo, el Estado de Resultados sirve como base para el cálculo de impuestos y la distribución de utilidades, por lo que debe elaborarse con exactitud y soportarse con registros contables confiables.
    
    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Principios de los estados financieros
    p.mb-4 Los contadores deben acogerse a estos, porque comprenden las convenciones, las normas y los procedimientos que se requieren con el fin de delimitar prácticas contables. Conocer de estos principios facilitará comprender estados financieros.

    .tarjeta--BG07.px-md-5.p-lg-0.p-4.mb-5
      .row.justify-content-center.align-items-center.my-lg-5.my-4
        .col-lg-4.col-md-8.col-sm-6.mb-md-4.mb-sm-4.desktop(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/tema4/img20.png', alt='Imagen decorativa' style='margin-bottom: -23px;')
        .col-lg-8(data-aos="fade-left")
          SlyderF.color-acento-botones(columnas="col-lg-4 col-xl-4")
            .tarjeta.bgblanco3.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/tema4/img21.svg' alt='Imagen decorativa')
              p.text-center Los datos contables se registran en Colombia en términos de pesos.
            .tarjeta.bgblanco3.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/tema4/img22.svg' alt='Imagen decorativa')
              p.text-center Las transacciones se contabilizan por partida doble.
            .tarjeta.bgblanco3.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/tema4/img23.svg' alt='Imagen decorativa')
              p.text-center La empresa es distinta a los propietarios.
            .tarjeta.bgblanco3.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/tema4/img24.svg' alt='Imagen decorativa')
              p.text-center Solo se suponen las operaciones de un negocio en marcha.
            .tarjeta.bgblanco3.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/tema4/img25.svg' alt='Imagen decorativa')
              p.text-center Los estados financieros emplean técnicas contables idénticas siempre.
            .tarjeta.bgblanco3.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/tema4/img26.svg' alt='Imagen decorativa')
              p.text-center Cuando el proceso de devengar se cumple y hay un intercambio económico, se reconocen los ingresos.
            .tarjeta.bgblanco3.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/tema4/img27.svg' alt='Imagen decorativa')
              p.text-center Los ingresos y los gastos deben ser razonablemente equilibrados.
            .tarjeta.bgblanco3.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/tema4/img28.svg' alt='Imagen decorativa')
              p.text-center Las partidas del balance general, en la mayoría de los casos, están valuadas al costo.
            .tarjeta.bgblanco3.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/tema4/img29.svg' alt='Imagen decorativa')
              p.text-center Se prefiere que los errores por medida tiendan a subestimar las utilidades y activos netos.











    
    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.3	Relación entre los estados financieros y el ciclo contable

</template>

<script>
export default {
  name: 'Tema4',
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
