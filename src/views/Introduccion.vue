<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-8.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/intro/imgintro.svg', alt='Imagen decorativa')
      .col-lg-9
        p La contabilidad es el lenguaje con el que las organizaciones expresan su realidad económica y financiera. A través de ella es posible registrar, clasificar, resumir y comunicar los hechos económicos de manera ordenada y verificable, convirtiéndose en una herramienta clave para la transparencia, el control interno y la toma de decisiones fundamentadas.
        p Este componente formativo ofrece una visión completa de los asientos contables y su registro mediante el principio de partida doble y la cuenta T, el desarrollo del ciclo contable con cada una de sus etapas, el uso de los libros contables como base legal de la información financiera, y la elaboración e interpretación de los estados financieros básicos.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          p.mb-0 A partir de este proceso, se fortalecen las competencias para registrar operaciones de forma correcta, estructurar y analizar la información contable, y asegurar que los datos financieros sean claros, confiables y coherentes con la normativa vigente, aportando a una gestión organizacional más eficiente y responsable.


    p.mb-5 Partiendo de lo anterior, se invita a que acceda al siguiente video, el cual relaciona la temática a tratar durante este componente formativo:

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
