<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Fundamentos de trabajo en equipo, riesgos y oportunidades

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 El trabajo en equipo es, antes que nada, una evolución cualitativa de los grupos de trabajo. Es una forma estructurada de laborar entre numerosas personas para conseguir metas usuales. En el trabajo de equipo las capacidades de los miembros son complementarias, mantienen una responsabilidad personal y recíproca, además de un marcado compromiso común por las metas, producen una sinergia positiva por medio del esfuerzo coordinado de sus miembros, como consecuencia, logran más rendimiento, productividad y satisfacción personal.

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          h4 Para tener en cuenta
          p Un auditor es el encargado de evaluar si la compañía refleja la verdad, verificando que cada una de las operaciones hayan sido debidamente registradas y justificadas.

    p.mb-5(data-aos="fade-right") Los auditores internos y externos tienen intereses mutuos con respecto a la eficacia de los controles de la organización. Ambas profesiones se adhieren a códigos de ética y a normas profesionales establecidas por sus respectivas empresas. A continuación, se puede ver los tipos de auditores:
    
    .tarjeta--container.row.mb-5(data-aos="fade-down")
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-2.svg', alt='')
        h4.text-center Auditor interno
        p Forma parte de la organización, cuyos objetivos están determinados por normas profesionales, por el consejo directivo y la gerencia o dirección.
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-3.svg', alt='')
        h4.text-center Auditor externo
        p Es contratado por una tercera persona. Su principal objetivo es ofrecer una opinión independiente para evaluar los estados anuales de la organización.

    p.mb-5(data-aos="fade-right") Un equipo auditor puede estar formado por un número de personas que dependen del tipo y tamaño de la empresa a auditar, se enfocan en cumplir con los requisitos de auditoría aplicables, transmitir lo que se va a llevar a cabo, planificar y desarrollar con eficiencia los cometidos que le sean encargados y documentar adecuadamente cada una de las observaciones. Por lo anterior, se invita a revisar el siguiente recurso donde se explicará la conformación de un equipo auditor:

    .row.justify-content-center.mb-5
      .col-12.col-lg-11.mb-3.mb-lg-0(data-aos="fade-right")
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Asistente de auditoría 0-2 años")
            .col-lg-2.col-md-4.col-8
              img(src='@/assets/curso/temas/tema2/tema2-4.svg', alt='')
            .col-lg-10.col-md-8.col-12
              ul.lista-ul.mb-5(data-aos="fade-down")
                li 
                  i.lista-ul__vineta
                  | Ejecutar y documentar los procedimientos asignados en los programas de auditoría.
                li 
                  i.lista-ul__vineta
                  | Administrar el tiempo asignado en el presupuesto.
                li 
                  i.lista-ul__vineta
                  | Tener comunicación oportuna con el Senior de auditoría sobre el avance del trabajo, de hallazgos y/o situaciones críticas identificadas.
                li 
                  i.lista-ul__vineta
                  | Sugerir mejoras en el proceso de auditoría.
          .row(numero="2" titulo="Auditor Senior 2-5 años")
            .col-lg-2.col-md-4.col-8
              img(src='@/assets/curso/temas/tema2/tema2-5.svg', alt='')
            .col-lg-10.col-md-8.col-12
              ul.lista-ul.mb-5(data-aos="fade-down")
                li 
                  i.lista-ul__vineta
                  | Coordina y es responsable del trabajo de campo de la auditoría, así como de la supervisión y revisión del trabajo del personal.
                li 
                  i.lista-ul__vineta
                  | Responsable de la planificación, ejecución y finalización de la auditoría.
                li 
                  i.lista-ul__vineta
                  | Diseña el presupuesto y supervisa su ejecución.
                li 
                  i.lista-ul__vineta
                  | Revisa todos los papeles de trabajo y asegura que la evidencia sea suficiente y adecuada.
          .row(numero="3" titulo="Gerente auditoría 5-10 años")
            .col-lg-2.col-md-4.col-8
              img(src='@/assets/curso/temas/tema2/tema2-6.svg', alt='')
            .col-lg-10.col-md-8.col-12
              ul.lista-ul.mb-5(data-aos="fade-down")
                li 
                  i.lista-ul__vineta
                  | Asignar el equipo de auditoría que ejecutará el trabajo.
                li 
                  i.lista-ul__vineta
                  | Definir el cronograma de trabajo de acuerdo con los clientes a su cargo, los compromisos con los clientes y la disponibilidad del equipo de auditoría.
                li 
                  i.lista-ul__vineta
                  | Monitorear la ejecución de la auditoría de acuerdo con el cronograma y el presupuesto.
                li 
                  i.lista-ul__vineta
                  | Revisar y aprobar los procedimientos de auditoría en cada una de las etapas.
          .row(numero="4" titulo="Socio auditoría 10 + años")
            .col-lg-2.col-md-4.col-8
              img(src='@/assets/curso/temas/tema2/tema2-7.svg', alt='')
            .col-lg-10.col-md-8.col-12
              ul.lista-ul.mb-5(data-aos="fade-down")
                li 
                  i.lista-ul__vineta
                  | Acordar con el cliente los términos del trabajo de auditoría.
                li 
                  i.lista-ul__vineta
                  | Asegurar la independencia del equipo de auditoría.
                li 
                  i.lista-ul__vineta
                  | Revisar y aprobar el plan de auditoría.
                li 
                  i.lista-ul__vineta
                  | Mantener actualizado al cliente respecto al avance de la auditoría.
                li 
                  i.lista-ul__vineta
                  | Supervisar y asesorar a los miembros del equipo de auditoría.
          .row(numero="5" titulo="Socio concurrente")
            .col-lg-2.col-md-4.col-8
              img(src='@/assets/curso/temas/tema2/tema2-8.svg', alt='')
            .col-lg-10.col-md-8.col-12
              p Se caracteriza por no haber participado en la dirección de la auditoría. Su objetivo es efectuar una revisión a los estados financieros con un enfoque crítico, de la misma manera como lo haría un accionista o interesado en la compañía auditada (#[em stakeholders]).

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Riesgos y oportunidades del programa de auditoría

    p.mb-5(data-aos="fade-right") Tanto los peligros como las oportunidades pueden resumirse como el grupo de actividades para identificar los peligros inherentes al entorno interno y externo de una organización, para determinar cada uno de estos, se necesita haber llevado a cabo antes una evaluación, la cual encierra las ocupaciones que permitan a la organización detectar, examinar y apreciar sus peligros. La administración por medio de la cual una organización evalúa, trata los peligros y las oportunidades de su entorno interno y externo se llama gestión de riesgos, este proceso constituye una base para incrementar la efectividad del sistema de administración de la calidad, conseguir superiores resultados y prevenir los efectos negativos.

    .row.justify-content-center.mb-5
      .col-12.col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Tabla 1. </b> <i>Riesgos y oportunidades</i>
        .tabla-b.color-acento-contenido.mb-5
          table 
            thead.text-center(style="background-color:#BCF987")
              tr
                th Riesgo: efecto de la incertidumbre
                th Oportunidad: riesgos positivos
            tbody
              tr
                td Error en la planificación del programa.
                td Permitir llevar a cabo múltiples auditorías en una única visita.
              tr
                td Objetivos inadecuados para el programa.
                td Minimizar el tiempo y las distancias viajando a la sede.
              tr
                td No hay definición clara del alcance.
                td Igualar el nivel de competencia del equipo auditor con el necesario para alcanzar los objetivos de la auditoría.  
              tr
                td Definición ineficaz de los recursos requeridos.
                td Alinear las fechas de la auditoría con la disponibilidad del personal clave del auditado.

    p.mb-4(data-aos="fade-right") La ISO 31000 otorga un enfoque común para gestionar cualquier tipo de peligro, sin limitarse a una industria o un sector, donde el proceso de la administración involucra la aplicación sistemática de políticas, métodos y prácticas a las ocupaciones de comunicación y consulta, establecimiento del entorno y evaluación, procedimiento, seguimiento, revisión, registro e informe del peligro.
    p.mb-5(data-aos="fade-right") A continuación, se revisa los métodos y prácticas para la gestión y administración del peligro.

    .row.justify-content-center.mb-5
      .col-xl-3.col-lg-6.col-md-10.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/tema2-9.png", alt="")
          .crd_hover_txt--body
            h4.mb-4.text-center Comunicación y consulta
            p.mb-0 Las bases con las que se toman elecciones y las causas por las que son primordiales ocupaciones concretas.

      .col-xl-3.col-lg-6.col-md-10.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/tema2-10.png", alt="")
          .crd_hover_txt--body
            h4.mb-4.text-center Alcance, entorno y criterios
            p.mb-0 Ocupaciones para conceptualizar el alcance del proceso, entorno (interno y externo) y los criterios para ver el valor del peligro.

      .col-xl-3.col-lg-6.col-md-10.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/tema2-11.png", alt="")
          .crd_hover_txt--body
            h4.mb-4.text-center Evaluación del peligro
            p.mb-0 Ocupaciones sistemáticas, iterativas y colaborativas, para  detectar, examinar y apreciar el peligro, por medio de la comparación de los resultados.

      .col-xl-3.col-lg-6.col-md-10.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/tema2-12.png", alt="")
          .crd_hover_txt--body(style="width:100%")
            h4.mb-4.text-center Procedimiento del peligro
            p.mb-0 Ocupaciones destinadas a cambiar el peligro.

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Construcción de objetivos y metas

    p.mb-5(data-aos="fade-right") La Norma ISO 19011:2018, establece los objetivos de un programa de auditoría, estos se encuentran definidos en el numeral 5.2 de la norma. En el que asegura los objetivos para dirigir la planificación, la implementación efectiva del programa, alineación con la orientación estratégica, los objetivos y la política del sistema de gestión.

    .tarjeta.color-primario.p-3.mb-4(data-aos="flip-left")
      h4.mb-0.text-center Elementos para el diseño de objetivos del programa de auditoría

    .row.justify-content-center.mb-5
      .col-12.col-lg-10.mb-3.mb-lg-0(data-aos="fade-right")
        PasosA.color-primario.mb-5(tipo="l")
          div
            p Las necesidades internas y externas de acuerdo con las expectativas de la organización.
          div
            p Identificación de características y requisitos.
          div
            p Requisitos del sistema de gestión.
          div
            p Evaluación de proveedores externos.
          div
            p Rendimiento y nivel de madurez del sistema de gestión auditado.
          div
            p Identificación de riesgos y oportunidades.
          div
            p Resultados de auditorías anteriores.
        figcaption Nota. Elementos a tener en cuenta en la definición de los objetivos del programa de auditoría, tomados de la Norma ISO 19011, 2018.

    p.mb-4(data-aos="fade-right") Es importante mencionar que después de revisar los elementos que se deben tener en cuenta para la construcción de los objetivos en el plan de auditoría se puede construir y establecer objetivos como:

    ul.lista-ul.mb-5.ms-md-3.ms-lg-4(data-aos="fade-down")
      li 
        i.lista-ul__vineta
        | Identificar oportunidades para mejorar el sistema de administración.
      li 
        i.lista-ul__vineta
        | Determinar y entender el entorno de la organización.
      li 
        i.lista-ul__vineta
        | Evaluar peligros y establecer procedimientos para tratarlos.
      li 
        i.lista-ul__vineta
        | Verificar el cumplimiento con requisitos importantes del sistema, de alguna parte interesada, de un organismo regulador o derivados de requisitos legales o compromisos contractuales.
      li 
        i.lista-ul__vineta
        | Aumentar o conservar el grado de confianza entre consumidores y proveedores.
      li 
        i.lista-ul__vineta
        | Conservar el sistema de administración alineado con la dirección estratégica de la organización.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Redacción de los objetivos

    p.mb-4(data-aos="fade-right") Cuando se inició el proceso de redacción de objetivos se debe tener presente que este debe describir un propósito o finalidad y es importante tener en cuenta las siguientes características:

    ul.lista-ul.mb-5.ms-md-3.ms-lg-4(data-aos="fade-down")
      li 
        i.lista-ul__vineta
        | Iniciar con un verbo en infinitivo.
      li 
        i.lista-ul__vineta
        | Que sean cortos y concisos.
      li 
        i.lista-ul__vineta
        | Claros sobre la acción a realizar.
      li 
        i.lista-ul__vineta
        | La redacción debe ser de modo impersonal en tercera persona.
      li 
        i.lista-ul__vineta
        | Es conveniente definirlo en dos oraciones: la primera ¿qué es lo que se va a hacer?, y la segunda oración ¿para qué se va a hacer?

    p.mb-4(data-aos="fade-right") En la siguiente figura se presenta la estructura para la construcción de objetivos.

    .row.justify-content-center.mb-5
      .col-12.col-md-12.col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 10. </b> <i>Estructura para construir objetivos</i>
        figure  
          img(src='@/assets/curso/temas/tema2/fig-10.svg', alt='En la figura 10 se muestran los componentes fundamentales para la construcción de un objetivo teniendo en cuenta, el verbo, el ¿qué? Y el ¿para qué?')
          
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Las metas de las auditorías

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-13.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 Es buscar la aprobación del auditor autorizado que en estos casos es el contador público, que es el encargado de brindar la opinión confiable con respeto a la fiabilidad de los estados financieros y que esa opinión sea expresada en el informe del auditor que esté acompañando los estados financieros.
          br
          br
          | Como se mencionó anteriormente, un sistema de gestión de riesgos es la administración por medio de la cual una organización evalúa, trata los peligros y las oportunidades de su entorno interno y externo. Un sistema de gestión de riesgos cuenta con las siguientes características:

    ul.lista-ul.mb-5.ms-md-3.ms-lg-4(data-aos="fade-down")
      li 
        i.lista-ul__vineta
        | Es un proceso constante y en continuo desarrollo en la organización. 
      li 
        i.lista-ul__vineta
        | Trata de forma metódica todos los peligros que rodean las ocupaciones de la organización. 
      li 
        i.lista-ul__vineta
        | Es incluido en la cultura organizacional de la compañía.

    p.mb-4(data-aos="fade-right") Un sistema de gestión de riesgos aporta mejoras significativas en la toma de decisiones al optimizar el proceso. La gestión de riesgos es el procedimiento mediante el cual se identifican, analizan y abordan los factores de riesgo en toda la vida de una organización.
    p.mb-4(data-aos="fade-right") Los sistemas de gestión de riesgos están diseñados para identificar, cuantificar y prever los riesgos que pueden afectar a una organización. Estos riesgos se clasifican como aceptables o inaceptables, dependiendo de su viabilidad para operar con ellos o si resolverlos implica un impacto mayor que el propio riesgo. En última instancia, esta clasificación se basa en el criterio del gerente de proyectos.

    .row.justify-content-center.mb-5
      .col-12.col-md-12.col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 11. </b> <i>Procesos del sistema de gestión</i>
        figure  
          img(src='@/assets/curso/temas/tema2/fig-11.svg', alt='En la figura 11 se muestran los componentes de los procesos del sistema de gestión: Identificar, cuantificar, calificar el impacto de manera aceptable o inaceptable.')
        
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Estrategias y características técnicas

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-14.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 Las técnicas de muestreo son un grupo de técnicas estadísticas que estudian la manera de elegir una muestra representativa poblacional, es de mencionar, que represente lo más fielmente viable a la población a la que se pretende extrapolar o deducir los resultados de la averiguación, aceptando un error mesurable y definido.
          br
          br
          | El muestreo en la auditoría se emplea para obtener una prueba real y una base razonable para la formulación de conclusiones sobre una población de la cual se extrae la muestra. El auditor interno tendrá que diseñar y elegir una muestra, realizar los métodos de la auditoría y evaluar los resultados de la muestra para obtener una prueba suficiente, fiable, importante y eficaz para consumar las metas propuestas.
    
    p.mb-4(data-aos="fade-right") La finalidad del auditor al usar el muestreo de auditoría, es proveer una base razonable desde la cual conseguir condiciones sobre la población en la que se selecciona la muestra. Hay varios métodos de los cuales un auditor puede utilizar para la realización de la muestra:
    
    ul.lista-ul.mb-5.ms-md-3.ms-lg-4(data-aos="fade-down")
      li 
        i.lista-ul__vineta
        | Selección aleatoria.
      li 
        i.lista-ul__vineta
        | Selección sistemática.
      li 
        i.lista-ul__vineta
        | Muestreo por unidad monetaria.
      li 
        i.lista-ul__vineta
        | Selección fortuita o casual.
      li 
        i.lista-ul__vineta
        | Selección en bloque.

    p.mb-4(data-aos="fade-right") El concepto de fuentes de información confiables se refiere a la práctica de centralizar todos los datos comerciales en un único lugar. El objetivo es que todas las personas dentro de una organización puedan tomar decisiones cruciales para el negocio basadas en los datos disponibles para todos.
    p.mb-4(data-aos="fade-right") Las fuentes de información confiable para un auditor son:

    .row.justify-content-center.mb-5
      .col-12.col-lg-12(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Tabla 2. </b> <i>Fuentes de información confiable</i>
        .tabla-b.color-acento-contenido.mb-5
          table 
            thead.text-center(style="background-color:#BCF987")
              tr
                th Fuentes de información financiera interna
                th Fuentes de información financiera externa
            tbody
              tr
                td.p-3
                  ul.lista-ul.mb-5.ps-lg-3
                    li ✔ Estados financieros.
                    li ✔ Presupuestos.
                    li ✔ Reportes.
                    li ✔ Medidas del desempeño.
                    li ✔ Declaraciones de impuestos.
                    li ✔ Políticas contables en uso.
                    li ✔ Juicios y estimaciones.
                td.p-2
                  ul.lista-ul.mb-5
                    li ✔ Información en Internet.
                    li ✔ Información de la industria. 
                    li ✔ Inteligencia competitiva. 
                    li ✔ Agencias de calificación del crédito. 
                    li ✔ Acreedores. 
                    li ✔ Dependencias del gobierno. 
                    li ✔ Medios y otras partes externas. 
   
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Plan de auditoría

    p.mb-4(data-aos="fade-right") El auditor y las empresas cuentan hoy en día con una herramienta que brinda directrices internacionalmente aceptadas para planificar y ejecutar auditorías a diferentes sistemas de gestión, entre ellos, sistemas de gestión de seguridad y salud en el trabajo, sistemas de gestión de la calidad, sistemas de gestión ambiental, sistemas de gestión integrados, entre otros; por esta razón, es importante conocer los términos y las definiciones que define dicha norma internacional y así poder iniciar de la mejor forma posible, el proceso de aprendizaje en la auditoría de sistemas de gestión. 
    p.mb-4(data-aos="fade-right") Cuando se implementa esta herramienta del plan de auditoría, la empresa debe revisar que existen 2 tipos de auditorías, la combinada y la conjunta, a continuación, se revisará sus diferencias:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-6.col-lg-5.col-12.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/tema2-15.svg' alt='')
          .tarjeta.color-primario-c
            .p-4.text-center
              h2 Auditoría combinada
              p Llevada a cabo conjuntamente a un único auditado en dos o más sistemas de gestión.
      .col-md-6.col-lg-5.col-12.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/tema2-16.svg' alt='')
          .tarjeta.color-primario-c
            .p-4.text-center
              h2 Auditoría conjunta
              p Llevada a cabo a un único auditado por dos o más organizaciones auditoras.

    p.mb-4(data-aos="fade-right") Es importante tener en cuenta el concepto de auditoría según la norma ISO 19011. La norma ISO 19011 proporciona directrices para la auditoría de sistemas de gestión, lo que incluye definir el alcance de la auditoría, los criterios de auditoría, la planificación y realización de auditorías, la evaluación de evidencia y la elaboración de informes de auditoría.
    p.mb-5(data-aos="fade-right") El concepto de auditoría según la norma ISO 19011 se refiere a un proceso sistemático y documentado para obtener evidencia de auditoría objetiva y evaluarla de manera objetiva con el fin de determinar la extensión en la que se cumplen los criterios de auditoría. Estos criterios pueden incluir estándares, regulaciones, políticas internas y otros requisitos pertinentes.

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
        .cajon.color-primario.p-4.mb-5
          h4 Auditoría (ISO 19011:2018)
          p.mb-0 Proceso sistemático, independiente y documentado para obtener evidencias objetivas y evaluarlas de manera objetiva, con el fin de determinar el grado en que se cumplen los criterios de auditoría.

    p.mb-4(data-aos="fade-right") A continuación, se revisarán los criterios que debe tener un auditor en su comportamiento ético a la hora de realizar una auditoría y la importancia que tiene para las empresas implementarlo.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Principios del auditor

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-17.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0  Los valores éticos que debe tener un auditor muchas veces poseen un impacto sobre la tranquilidad de un número de personas o conjuntos. Ejemplificando, si un auditor toma una elección carente de ética sobre el contenido de un informe de auditoría, el patrimonio de la empresa que se está llevando a cabo en la auditoría se verá afectado, por eso, los valores éticos más importantes que el auditor continuamente debería de proteger son: honestidad, cumplimiento, lealtad, imparcialidad, pluralidad, excelencia y responsabilidad. Es por esto por lo que el comportamiento del auditor debería de ser apegado a dichos valores, inclusive más allá de lo profesional.

    p.mb-4(data-aos="fade-right") Todo auditor debe tener sus principios éticos muy claros siendo siempre una persona íntegra, objetiva, completamente confidencial con la información que como profesional competente debe manejar con el debido cuidado, obteniendo un comportamiento profesional adecuado.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Desarrollo de un programa de auditoría
    
    p.mb-5(data-aos="fade-right") Según Rodríguez (2019), un programa de auditoría es un documento que establece de manera lógica y ordenada los procedimientos de auditoría que se utilizarán, así como la extensión y el momento de su aplicación. Su objetivo principal es proporcionar orientación durante la ejecución del trabajo de auditoría y servir como un registro permanente de las actividades realizadas.

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          h4 Para tener en cuenta
          p El programa de auditoría es, sin duda, una herramienta de gran importancia para la planificación de la auditoría, el cual representa la hoja de ruta para el auditor y la organización, además de que brinda la información necesaria para asegurar la objetividad del proceso.

    p.mb-5(data-aos="fade-right") Para comprender lo que implica un programa, es necesario evidenciar las diferencias entre el programa y el plan de auditoría, como se muestra a continuación:
    
    TabsA.color-acento-botones.mb-4(data-aos="fade-right")
      .tarjeta.tarjeta--azul.p-4(titulo="¿Qué función tienen?")
        h4 Programa de auditoría
        p Ser la agenda de todas las auditorías que se llevarán a cabo en un periodo determinado.
        h4 Plan de auditoría
        p Ser la guía de lo que se va a examinar en una auditoría.
      .tarjeta.tarjeta--azul.p-4(titulo="¿Quién lo hace?")
        h4 Programa de auditoría
        p Responsable del sistema de gestión.
        h4 Plan de auditoría
        p Auditor.
      .tarjeta.tarjeta--azul.p-4(titulo="¿Quién debe conocerlo?")
        h4 Programa de auditoría
        p Los que van a ser auditados.
        h4 Plan de auditoría
        p Los que van a ser auditados.
      .tarjeta.tarjeta--azul.p-4(titulo="¿Cuándo se debe conocer?")
        h4 Programa de auditoría
        p En el momento en que quedan planificadas las distintas auditorías que se realizarán durante el año.
        h4 Plan de auditoría
        p Unos días antes de ser auditados.

    p.mb-4(data-aos="fade-right") Un programa de auditoría es un documento que se relaciona, de manera lógica y ordenada, con los procedimientos de auditoría a ser empleados, así como la extensión y oportunidad de su aplicación. El propósito del programa es servir de orientación durante la ejecución del trabajo y de registro permanente de la labor efectuada. Además, debe ser planeado y elaborado con anticipación y su contenido debe ser flexible, sencillo y conciso, de tal manera que los procedimientos empleados en cada auditoría estén de acuerdo con las circunstancias del examen. 
    p.mb-4(data-aos="fade-right") Un programa de auditoría consta de 5 partes, las cuales son:

    ol.lista-ol--cuadro.mb-5.ms-md-3.ms-lg-4(data-aos="fade-down")
      li 
        .lista-ol--cuadro__vineta
          span.texto-negro a
        | Determinación del tema.
      li 
        .lista-ol--cuadro__vineta
          span.texto-negro b
        | Definición de los objetivos.
      li 
        .lista-ol--cuadro__vineta
          span.texto-negro c
        | Establecimiento de su alcance y de los tipos de indicadores.
      li 
        .lista-ol--cuadro__vineta
          span.texto-negro d
        | Realización de la planificación previa.
      li 
        .lista-ol--cuadro__vineta
          span.texto-negro e
        | Procedimientos de auditoría y pasos para la recopilación de datos.

    p.mb-4(data-aos="fade-right") Para elaborar un programa de auditoría y poder aplicarlo se lleva a cabo el siguiente orden:
    
    ul.lista-ul.mb-5.ms-md-3.ms-lg-4(data-aos="fade-down")
      li 
        i.lista-ul__vineta
        | Definir objetivos.
      li 
        i.lista-ul__vineta
        | Análisis de riesgos y oportunidades.
      li 
        i.lista-ul__vineta
        | Definir el alcance.
      li 
        i.lista-ul__vineta
        | Programar las auditorías (calendario o cronograma).
      li 
        i.lista-ul__vineta
        | Definir el tipo de auditorías (internas, externas, 1ra, 2da o 3ra parte).
      li 
        i.lista-ul__vineta
        | Definir el o los criterios de la auditoría.
      li 
        i.lista-ul__vineta
        | Definir los métodos de la auditoría.
      li 
        i.lista-ul__vineta
        | Definir los criterios de selección del equipo auditor y aplicarlos.
      li 
        i.lista-ul__vineta
        | Definir la información documentada pertinente al proceso de auditoría.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Desarrollo de un plan de auditoría 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-18.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 El plan de auditoría es un plan de acción que documenta qué procedimientos seguirá el auditor para validar que una organización está cumpliendo con las regulaciones de acatamiento. Además, se presenta un archivo de alusión, el cual debería ser lo suficientemente flexible para permitir los cambios que tienen la posibilidad de hacerse necesarios mientras las labores de auditoría se vayan realizando, lo que posibilite tener una guía de los recursos importantes a tener en cuenta en el desarrollo de la misma. 
    
    p.mb-4(data-aos="fade-right") En otros términos, el plan de auditoría define especialmente los detalles de la auditoría, incluyendo el grupo de ocupaciones que se programan en la agenda para realizar cada auditoría de primera, segunda o tercera parte. Es importante señalar que el plan de auditoría no es un requisito en Colombia; sin embargo, es una buena práctica que ayuda al éxito de la auditoría al realizar una planeación previa de las actividades.
    p.mb-4(data-aos="fade-right") La estructura de un plan de auditoría consta de los siguientes elementos:
    
    ul.lista-ul.mb-5.ms-md-3.ms-lg-4(data-aos="fade-down")
      li 
        i.lista-ul__vineta
        | Objetivos de la auditoría.
      li 
        i.lista-ul__vineta
        | Documentos y criterios de referencia.
      li 
        i.lista-ul__vineta
        | Alcance.
      li 
        i.lista-ul__vineta
        | Lugares donde se realizan las auditorías.
      li 
        i.lista-ul__vineta
        | Fecha, hora y duración de actividades.
      li 
        i.lista-ul__vineta
        | Responsabilidades y funciones de los miembros del equipo auditor.
      li 
        i.lista-ul__vineta
        | Recursos que se emplean.
      li 
        i.lista-ul__vineta
        | Identificación del representante auditado.
      li 
        i.lista-ul__vineta
        | Cualquier tipo de preparativo adicional necesario.
      li 
        i.lista-ul__vineta
        | Otra documentación de trabajo para la auditoría: listas de verificación, planes de muestreo y formularios.

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          p Normalmente, es el líder del equipo auditor quien debe informar dichas conclusiones. Estas deberán proporcionar un registro completo, preciso, conciso y claro de la auditoría que se llevó a cabo.

    p.mb-4(data-aos="fade-right") Con respecto a las personas u organizaciones que intervienen en una auditoría, es preciso revisar los siguientes términos de la NTC-ISO19011:2018.

    .row.justify-content-center.mb-5
      .col-12.col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Tabla 3. </b> <i>Conceptos básicos de auditoría</i>
        .tabla-b.color-acento-contenido.mb-5
          table 
            tr
              th.p-2.text-center(style="background-color:#BCF987") Cliente de la auditoría
              td.p-3 Organización o persona que solicita una auditoría.
            tr
              th.p-2.text-center(style="background-color:#CDA7FF") Auditado
              td.p-3 Organización que es auditada en su totalidad o en parte.
            tr
              th.p-2.text-center(style="background-color:#BCF987") Equipo auditor
              td.p-3 Una o más personas que llevan a cabo una auditoría con el apoyo, si es necesario, de expertos técnicos.
            tr
              th.p-2.text-center(style="background-color:#CDA7FF") Auditor
              td.p-3 Persona que lleva a cabo una auditoría.
            tr
              th.p-2.text-center(style="background-color:#BCF987") Experto técnico
              td.p-3 Persona que aporta conocimientos o experiencia específicos al equipo auditor.
            tr
              th.p-2.text-center(style="background-color:#CDA7FF") Observador
              td.p-3 Persona que acompaña al equipo auditor; pero no actúa como un auditor. 

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Procedimientos estadísticos en auditorías

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-19.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 La principal utilidad de los procedimientos estadísticos en auditoría, es lograr un nivel definido de confianza en todas las pruebas estadísticas realizadas y proporcionar al auditor una fórmula para calcular el tamaño de la muestra o el número de documentos que debe revisar. Estos documentos deben seleccionarse al azar y de acuerdo con las suposiciones requeridas por el método de muestreo utilizado. A continuación, podemos visualizar como un auditor utiliza estos procedimientos: 

    .row.justify-content-center.mb-5
      .col-12.col-md-11.col-lg-9(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 12. </b> <i>Procedimientos estadísticos</i>
        figure
          img(src='@/assets/curso/temas/tema2/fig-12.svg', alt='En la figura 12 se muestran los tipos de muestreo que se pueden usar por parte de un auditor, el muestreo estadístico y no estadístico y cada una de sus características fundamentales.')
        
    p.mb-4(data-aos="fade-right") El muestreo estadístico, necesita la implementación de técnicas que permitan la formulación de conclusiones sobre una población con una base matemática. También posibilita al auditor obtener conclusiones soportadas en niveles de confianza aritmética sobre una población de datos. Al igual, existen varias técnicas de muestreo, las cuales son:
 
    ul.lista-ul.mb-5.ms-md-3.ms-lg-4(data-aos="fade-down")
      li 
        i.lista-ul__vineta
        | Muestreo aleatorio.
      li 
        i.lista-ul__vineta
        | Muestreo por unidades monetarias.
      li 
        i.lista-ul__vineta
        | Muestreo estratificado. 
      li 
        i.lista-ul__vineta
        | Muestreo por atributos. 
      li 
        i.lista-ul__vineta
        | Muestreo variable.
      li 
        i.lista-ul__vineta
        | Muestreo basado en juicio.
      li 
        i.lista-ul__vineta
        | Muestreo por descubrimiento.


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
