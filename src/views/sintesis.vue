<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 A continuación, se describe el tema principal del componente formativo Sistema de gestión y plan de auditorías, esenciales para cualquier organización que busque operar de manera eficiente y cumplir con estándares de calidad. Implica establecer procesos, políticas y procedimientos para alcanzar objetivos y satisfacer las expectativas. Para asegurar que este sistema funcione adecuadamente, se requiere un plan de auditoría. Este documento detalla cómo se llevarán a cabo las auditorías internas y externas para evaluar la conformidad con los estándares y la efectividad del sistema de gestión. El plan de auditoría define objetivos, alcance, responsabilidades y cronograma, asegurando una revisión sistemática y continua para mejorar el desempeño organizacional.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis se muestran los temas fundamentales del componente formativo: el sistema de gestión y el plan de auditoría con cada una de sus características buscando una acción conjunta: generar acciones de mejora.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
