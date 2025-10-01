<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este componente formativo aborda de manera integral el proceso contable, desde el registro inicial de las operaciones mediante asientos contables hasta la elaboración de los estados financieros básicos. Se estudian los principios de la partida doble, la representación en la cuenta T y las variables que intervienen en la construcción de un asiento, incorporando también el registro de ajustes y correcciones.
    p Asimismo, se analizan las etapas del ciclo contable y su papel como estructura que organiza y conecta cada fase del registro contable, garantizando la coherencia, trazabilidad y verificabilidad de la información. Se profundiza en el manejo técnico y normativo de los libros contables principales y auxiliares, resaltando su función como soporte legal, documental y de control interno.
    p Finalmente, se estudian los tipos y componentes de los estados financieros, destacando su importancia como producto final del ciclo contable para evaluar la situación económica y los resultados de la entidad. Este proceso permite a los aprendices comprender la integración de los registros contables y su transformación en información financiera clara, confiable y útil para la toma de decisiones.
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis describe el proceso contable completo, desde el registro de operaciones mediante asientos contables —aplicando partida doble, cuenta T, ajustes y correcciones—, pasando por las etapas del ciclo contable y el uso normativo de los libros principales y auxiliares, hasta la elaboración de estados financieros básicos que integran y presentan la información contable para la toma de decisiones.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
