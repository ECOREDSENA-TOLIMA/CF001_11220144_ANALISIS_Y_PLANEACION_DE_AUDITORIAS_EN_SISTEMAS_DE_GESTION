<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Sistema de gestión

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Hace referencia a una herramienta que controla, planifica y organiza las tareas de una organización. También se podría decir que es un conjunto de elementos que establece objetivos, políticas y procesos. El sistema de gestión tiene como único propósito agrupar y organizar las áreas totales de una organización, planificando adecuadamente las actividades del proceso. Se busca la gestión de la administración como base de datos a la hora de tomar decisiones con información precisa en tiempo real.
      
    .titulo-segundo.color-acento-contenido
      h3 Generalidades del sistema de gestión
    
    p.mb-4(data-aos="fade") Un sistema de gestión facilita al gestor la optimización de calidad y tiempos en la automatización de los flujos de información brindando muchos beneficios, el cual trata el control de todos los procesos de la compañía. Por lo que se busca el beneficio general de las áreas para brindar seguridad en la toma de decisiones, logrando establecer una relación de confianza sobre el gestor o el grupo encargado de la administración del sistema, permitiendo conocer el proceso que llevará a cabo a los objetivos que se establecieron al comienzo de la gestión en el sistema.

    p.mb-4(data-aos="fade") Un sistema de gestión comprende componentes que incluyen estrategias organizacionales, procesos, talento humano, sistemas de información y tecnología. Este sistema se establece como un mecanismo regulado para la estructuración, dirección y desarrollo de organizaciones. Las principales características que se presentan en un sistema de gestión se muestran en la siguiente figura.

    .row.justify-content-center.mb-5
      .col-12.col-md-10.col-lg-8(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 1. </b> <i>Características de un sistema de gestión</i>
        figure 
          img(src='@/assets/curso/temas/tema1/tema1-2.svg', alt='En la figura 1 se muestran las características de los sistemas de gestión en cuanto a exclusividad, difusión y realización.')

    p.mb-4(data-aos="fade") En una empresa, se pueden implementar varios tipos de sistemas de gestión con el fin de alcanzar los objetivos y metas necesarios para el funcionamiento adecuado del negocio. Entre ellos tenemos:



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
