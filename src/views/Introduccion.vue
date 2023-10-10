<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-primario
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .cajon-b.color-acento-contenido.p-3.mb-4(data-aos="fade")
      p.mb-0 Los sistemas de gestión cumplen un propósito importante en las organizaciones, ya que estos permiten organizar y coordinar las actividades y operaciones de cada una de las áreas de las empresas, con el fin de lograr alcanzar sus metas y objetivos de una forma más eficiente y organizada, reduciendo costos y eliminando gastos innecesarios. Partiendo de lo anterior, se da la bienvenida al estudio de este componente formativo, para comenzar se invita a explorar el video que se presenta a continuación:

    figure.mb-4(data-aos="fade")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/5GKuxz6zFuQ" title="Sistema de gestión y plan de auditoría" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Sistema de gestión y plan de auditoría

    p.mb-4(data-aos="fade") Por otro lado, es importante conocer la normativa ISO 19011:2018, que establece las directrices y requisitos para la planificación de auditorías. Además, es fundamental familiarizarse con los estándares ISO que abordan aspectos como riesgos, calidad, aspectos ambientales, entre otros. También es crucial comprender cómo implementar un sistema de gestión organizado, utilizando el ciclo de Deming, que incluye los pasos de planificar, hacer, verificar y actuar.

    p.mb-4(data-aos="fade") Asimismo, es necesario identificar el perfil del auditor, sus habilidades, competencias y ética profesional en la evaluación del plan de auditoría. Esto implica diferenciar entre los diferentes tipos de auditores, su experiencia y responsabilidades. También se debe comprender cómo construir objetivos y metas en un plan de auditoría.

    
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
