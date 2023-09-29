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
      
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Generalidades del sistema de gestión
    
    p.mb-4(data-aos="fade") Un sistema de gestión facilita al gestor la optimización de calidad y tiempos en la automatización de los flujos de información brindando muchos beneficios, el cual trata el control de todos los procesos de la compañía. Por lo que se busca el beneficio general de las áreas para brindar seguridad en la toma de decisiones, logrando establecer una relación de confianza sobre el gestor o el grupo encargado de la administración del sistema, permitiendo conocer el proceso que llevará a cabo a los objetivos que se establecieron al comienzo de la gestión en el sistema.

    p.mb-4(data-aos="fade") Un sistema de gestión comprende componentes que incluyen estrategias organizacionales, procesos, talento humano, sistemas de información y tecnología. Este sistema se establece como un mecanismo regulado para la estructuración, dirección y desarrollo de organizaciones. Las principales características que se presentan en un sistema de gestión se muestran en la siguiente figura.

    .row.justify-content-center.mb-5
      .col-12.col-md-10.col-lg-8(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 1. </b> <i>Características de un sistema de gestión</i>
        figure 
          img(src='@/assets/curso/temas/tema1/fig-1.svg', alt='En la figura 1 se muestran las características de los sistemas de gestión en cuanto a exclusividad, difusión y realización.')

    p.mb-5(data-aos="fade") En una empresa, se pueden implementar varios tipos de sistemas de gestión con el fin de alcanzar los objetivos y metas necesarios para el funcionamiento adecuado del negocio. Entre ellos tenemos:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="fade-down")
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-3.svg' alt='')
        h4.text-center ERP
        p.text-center Es un sistema que relaciona y determina los procesos en una empresa, facilitando el flujo de información entre ellos.

      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-4.svg' alt='')
        h4.text-center CRM
        p.text-center Está relacionado con el manejo comercial y acompañamiento al cliente en los procesos de venta y posventa.

      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-5.svg' alt='')
        h4.text-center SGA
        p.text-center Está relacionada con el manejo de las actividades de logística y gestión de almacenes, con el fin de implementar una automatización.

      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-6.svg' alt='')
        h4.text-center DMS
        p.text-center Son todos aquellos diseños para la organización y manejo de un número importante de información, suele rastrear, almacenar, archivar y organizar documentos.
        
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-7.svg' alt='')
        h4.text-center BPM
        p.text-center Es la capacidad de coordinación del flujo de trabajo a lo que se le denomina gestión de procesos empresariales.

      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-8.svg' alt='')
        h4.text-center BI
        p.text-center Están orientados al análisis de la información disponible, facilitando la toma de decisiones. 

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Directrices del sistema de gestión

    p.mb-3(data-aos="fade") La Organización Internacional de Normalización más conocida por sus siglas ISO, es la encargada de la elaboración de las normas internacionales entre las que se destaca, la ISO 19011 del 2018 Directrices para la auditoría de los sistemas de gestión . Esta norma ha sufrido unas modificaciones y actualizaciones desde que apareció en el 2011, evolucionando en aspectos como la estructura común, requisitos básicos idénticos, términos y definiciones comunes. 
    p.mb-4(data-aos="fade") En la siguiente figura puede revisar el concepto de gestión articulado al programa de auditoría y su función o propósito.
    
    .row.justify-content-center.mb-5
      .col-12.col-md-11.col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 2. </b> <i>Concepto de gestión y programa de auditoría</i>
        figure 
          img(src='@/assets/curso/temas/tema1/fig-2.svg', alt='En la figura 2 se indica el concepto de gestión y programa de auditoría de manera articulada.')

    p.mb-4(data-aos="fade") Por esta razón, en la versión más reciente de la norma ISO 19011:2018, se adoptó un enfoque más completo para las auditorías, con el objetivo de proporcionar una guía más genérica. Esta versión aún conserva las orientaciones sobre la gestión de un programa de auditoría, la ejecución de auditorías, las competencias y la evaluación del equipo auditor. A continuación, se mencionan los principales cambios o modificaciones que ha tenido esta norma.
 
    .row.justify-content-center.mb-5
      .col-12.col-md-11.col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 3. </b> <i>Cambios de la Norma ISO 19011:2018</i>
        figure 
          img(src='@/assets/curso/temas/tema1/fig-3.svg', alt='En la figura 3 se indican cada uno de los cambios que ha sufrido la norma ISO 19011:2018 en sus diferentes versiones.')

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          p De acuerdo con la ISO 19011:2018, un sistema de gestión puede tratar una sola norma o varias normas, por ejemplo, gestión de la calidad, gestión financiera o gestión ambiental. Es por esto, que el alcance de un sistema de gestión puede incluir la totalidad de la organización, funciones particulares de la empresa, áreas específicas e identificadas por la empresa o más funciones dentro de un grupo de organizaciones.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Beneficios de los sistemas de gestión para las organizaciones.

    p.mb-4(data-aos="fade") El sistema de gestión juega un papel importante en las organizaciones, este ha ido evolucionando hasta convertirse en la guía para el correcto funcionamiento de cualquier área de la empresa, teniendo en cuenta los beneficios de un correcto sistema de gestión, podemos destacar los siguientes:

    ul.lista-ul.mb-5.ms-md-3.ms-lg-4(data-aos="fade-down")
      li 
        i.lista-ul__vineta
        | Permite mayor rapidez en llevar a cabo los procesos, facilitando la automatización de los flujos de información.
      li 
        i.lista-ul__vineta
        | Mayor control en todos los procesos de la empresa.
      li 
        i.lista-ul__vineta
        | Mayor comunicación con los clientes y su entorno. 
      li 
        i.lista-ul__vineta
        | Reducción de costos en los procesos operativos de la empresa.
      li 
        i.lista-ul__vineta
        | Acceso a la información en tiempo real para la toma de decisiones. 
      li 
        i.lista-ul__vineta
        | Condiciones de trabajo saludables y seguras.
      li 
        i.lista-ul__vineta
        | Acceso a herramientas que facilitan la gestión diaria de la empresa.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Proceso de implementación del sistema de gestión en una organización

    p.mb-4(data-aos="fade") Un sistema de gestión se implementa y se ejecuta mediante el ciclo de mejora continua PHVA (Planificar, Hacer, Verificar y Actuar), también conocido como el Círculo de Deming según Edward Deming su autor y da una orientación real de cómo es su funcionamiento aplicado a cualquier tipo de organización.
    p.mb-4(data-aos="fade") En la siguiente figura, se muestra la forma como cada una de las etapas del ciclo se adaptan para implementar un sistema de gestión organizado.

    .row.justify-content-center.mb-5
      .col-12.col-md-11.col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 4. </b> <i>Círculo de Deming</i>
        figure 
          img(src='@/assets/curso/temas/tema1/fig-4.svg', alt='En la figura 4 se muestra el concepto de cada una de las etapas del ciclo de Deming, planificar, hacer, verificar y actuar.')

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Seguimiento y medición del sistema de gestión

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-2.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 Una vez que se habla del seguimiento y medición del sistema de gestión, se habla de un componente importante en la optimización continua, debido a que el seguimiento es el delegado de buscar la definición total del estado que muestra el sistema y la medición en buscar un costo en el proceso que lleva las metas que realiza el sistema, logrando un sistema de administración de calidad en la toma de decisiones.

    p.mb-5(data-aos="fade-right") Un sistema productivo es el modo cómo se aplican y se combinan los componentes para realizar su transformación y luego convertirlos en bienes y servicios. La administración en un sistema productivo busca facilitar un control en la toma de decisiones del proceso beneficioso que se crea al ámbito de la producción, llevando a cabo la facilidad de obtención de la información del proceso para el cumplimiento de las metas en la mejora de calidad y tiempo del flujo de información de la organización, controlando la producción en sus procesos. 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-9.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 En los procesos operativos, el sistema de administración desempeña un papel fundamental. Este sistema sirve como base de datos que ayuda a tomar decisiones acertadas para establecer normas internas en la organización, lo que influye directamente en la satisfacción del cliente. La productividad de la organización depende en gran medida de estos procesos, y su eficiencia puede impactar en el costo para el cliente. Los procesos operativos son vitales para cualquier organización, aunque varían según el tamaño de la empresa, con algunas teniendo más procesos que otras.

    p.mb-5(data-aos="fade-right") Los procesos operativos no tienen la posibilidad de ser considerados como algo exclusivo o definitivo. Constantemente se tienen que adaptar y actualizar para que respondan mejor a los requerimientos de los consumidores. Por todo lo mencionado es aconsejable que todos los procesos operativos se encuentren bien determinados y controlados. Es correcto mejorarlos de forma continua, ya que de ellos dependerá el buen desempeño de la organización.

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          p Cuando se habla de un plan de acción, como su mismo nombre lo indica, es el camino que se traza la organización para cumplir con las metas propuestas, siendo necesario para que la organización crezca de manera adecuada y sólida, llevando una planificación correcta de lo que se va a hacer en busca del cumplimiento de la meta. 
    
    p.mb-5(data-aos="fade-right") En la siguiente figura, se puede observar los elementos principales que conforman un plan de acción.

    .row.justify-content-center.mb-5
      .col-12.col-md-11.col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 5. </b> <i>Elementos de un plan de acción</i>
        figure 
          img(src='@/assets/curso/temas/tema1/fig-5.svg', alt='En la figura 5 se muestran los elementos de un plan de acción, perfil de la empresa, valor para la comunidad y beneficios esperados.')

    p.mb-5(data-aos="fade-right") Estos elementos tienen como propósito la orientación e identidad que se le va a dar a la organización en el transcurso del camino, ejecutando un plan de desarrollo de acuerdo con el cronograma establecido. A continuación, podemos observar los tipos de plan de acción más utilizados en las organizaciones.

    .row.justify-content-center.mb-5
      .col-12.col-md-11.col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 6. </b> <i>Tipos de plan de acción</i>
        figure 
          img(src='@/assets/curso/temas/tema1/fig-6.svg', alt='En la figura 6 se muestran los 11 tipos de plan de acción establecidos.')

    p.mb-4(data-aos="fade-right") Anteriormente se ha visto los planes de acción que se deben tener en cuenta en la organización, seguido a esto, es indispensable verificar el mapa de procesos, el cual es una representación gráfica que muestra cómo se lleva a cabo un proceso dentro de una organización. Se utiliza para visualizar y comprender las etapas, las actividades, las interacciones y las relaciones entre los diferentes componentes de un proceso. Los mapas de procesos son herramientas efectivas para documentar, analizar y mejorar los procesos organizacionales.

    p.mb-5(data-aos="fade-right") Un mapa de procesos típicamente incluye los siguientes elementos:

    ol.lista-ol.lista-ol--separador.ms-md-3.ms-lg-4.mb-5(data-aos="fade-down")
      li 
        span.text-bold a) Flujo de actividades: 
        | representa las acciones y tareas que se realizan en orden secuencial durante el proceso.
      li 
        span.text-bold b)	Eventos de inicio y fin:  
        | indica el punto de inicio y el punto de finalización del proceso.
      li 
        span.text-bold c)	Decisiones: 
        | muestra las decisiones que deben tomarse en el transcurso del proceso y las ramificaciones que resultan de esas decisiones.
      li 
        span.text-bold d)	Conexiones:  
        | representa las relaciones y las conexiones entre diferentes etapas o actividades del proceso.
      li 
        span.text-bold e)	Entradas y salidas: 
        | identifica las entradas necesarias para comenzar el proceso y las salidas que se generan como resultado.

    p.mb-4(data-aos="fade-right") El objetivo principal de un mapa de procesos es proporcionar una visión clara y detallada de cómo funciona un proceso, lo que facilita la identificación de áreas de mejora, la optimización de la eficiencia y la comunicación efectiva entre los miembros del equipo que participan en el proceso.
    p.mb-5(data-aos="fade-right") Los mapas de procesos son comunes en la gestión de la calidad, la gestión de proyectos y la Gestión de Procesos Empresariales (BPM), donde ayudan a identificar oportunidades de mejora y a garantizar la alineación de los procesos con los objetivos estratégicos de la organización. A continuación, se puede visualizar la estructura de este mapa:

    .row.justify-content-center.mb-5
      .col-12.col-md-12.col-lg-11(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 7. </b> <i>Mapa de procesos </i>
        figure 
          img(src='@/assets/curso/temas/tema1/fig-7.svg', alt='En la figura 7 se detalla un mapa de procesos de la norma ISO 9001, teniendo en cuenta: procesos estratégicos, operativos y de soporte.')
          figcaption Nota. Tomado de IsoTools Excellence #[a( style="color:blue" target="_blank" href="https://www.isotools.com.mx/norma-iso-9001-se-realiza-mapa-procesos/") https://www.isotools.com.mx/norma-iso-9001-se-realiza-mapa-procesos/]

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Reglamentos del sistema de gestión

    p.mb-5(data-aos="fade-right") Son conjuntos de normas encargadas de regir y regular las características de la fabricación, comercialización y comunicación de las organizaciones, este reglamento es más conocido como Normas ISO. Las Normas ISO buscan ofrecer como beneficios el mejoramiento de la productividad de las organizaciones, reconocimiento de la marca y prestigio de la empresa. Algunas de esas normas son las siguientes:

    .row.justify-content-center.mb-5
      .col-md-10.col-lg-6.mb-3.mb-lg-0(data-aos="fade-right")
        LineaTiempoD.color-acento-botones
          p.text-small(numero="1" titulo="ISO 9001") Es la encargada de gestionar y mantener el control de la calidad en las organizaciones. 
          p.text-small(numero="2" titulo="ISO 14001") Define las responsabilidades de las organizaciones en aspectos ambientales que pueden producirse internamente en la empresa.
          p.text-small(numero="3" titulo="ISO 27001") Es una norma que explica cómo gestionar la información en una organización, generando seguridad, estabilidad y confidencialidad. 
          p.text-small(numero="4" titulo="ISO 28000") Es la encargada de identificar los puntos críticos para gestionar y asegurar la estabilidad de los peligros en la cadena de abastecimiento. 
          p.text-small(numero="5" titulo="ISO 20000") Se encarga de la aplicación de los procesos coordinados de la administración de servicio. Su objetivo es conceder un control continuo para seguir mejorando.
          p.text-small(numero="6" titulo="ISO 27701") Ayuda a las organizaciones a implementar un sistema que respalde la privacidad de los datos.
      .col-md-10.col-lg-6.mb-md-0(data-aos="fade-left")
        LineaTiempoD.color-acento-botones
          p.text-small(numero="7" titulo="ISO 27031") Sirve como guía para la “gestión de las Tecnologías de la Información y la Comunicación”.
          p.text-small(numero="8" titulo="ISO 27018") Ayuda a asegurar que los datos de identificación personal de los proveedores se encuentren debidamente salvaguardados, con el objetivo de asegurar la privacidad. 
          p.text-small(numero="9" titulo="ISO 22301") Tiene como objetivo defender a las organizaciones de una extensa gama de probables amenazas e interrupciones. Está diseñada para contribuir a las empresas a prevenir, elaborar, contestar y recuperar incidentes indescifrables. 
          p.text-small(numero="10" titulo="ISO 31000") Es la norma internacional de gestión del riesgo, que permite a las organizaciones  el análisis y evaluación de estos datos.
          p.text-small(numero="11" titulo="ISO 37001") Es un estándar internacional que  especifica unos requisitos y proporciona una guía diseñada para apoyar y prevenir el antisoborno en una organización.
          p.text-small(numero="12" titulo="ISO 45001") Es un estándar de gestión y salud en el trabajo, donde se establecen directrices para la prevención de accidentes laborales y enfermedades profesionales.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Importancia de los estándares del sistema de gestión

    p.mb-4(data-aos="fade-right") Los estándares ISO ayudan a las organizaciones a mejorar su desempeño al especificar pasos repetitivos que las organizaciones implementan conscientemente para alcanzar sus metas y objetivos, a crear una cultura organizacional que se involucra reflexivamente en un ciclo continuo de autoevaluación, corrección y mejora de las operaciones y procesos a través de una mayor conciencia de los empleados, el liderazgo y compromiso de la administración.
    p.mb-5(data-aos="fade-right") La entrada de información es el proceso mediante el cual un sistema recopila datos, ya sea de forma manual o automática, con el propósito de procesar la información. Se utilizan diversos métodos de recolección de datos, que incluyen encuestas, entrevistas, pruebas, evaluaciones fisiológicas, observaciones, revisión de registros y toma de muestras biológicas.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-10.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 Cuando se habla de entrada de la información se hace referencia a todo lo relacionado con un software, por lo cual sus características son intangibles, ya que se debe y se habla de las características como sistema. Es por eso que es fácil diferenciar una entrada de información como su entrada principal de acceso a los datos.  Un sistema de información es el encargado de recibir, manipular, almacenar y distribuir los datos e información sobre la fabricación, producción y proceso que se está llevando a cabo en el desarrollo de los objetivos de la organización.
          br
          br
          | Además, se puede decir que los sistemas de información se dividen en diferentes niveles, como se muestra a continuación:
          
    .row.justify-content-center.mb-5
      .col-12.col-md-12.col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 8. </b> <i>Sistemas de información</i>
        figure 
          img(src='@/assets/curso/temas/tema1/fig-8.svg', alt='En la figura 8 se muestra la forma como se dividen  los sistemas de información teniendo en cuenta: nivel estratégico, nivel administrativo, nivel de conocimiento y nivel operativo.')
          
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Análisis de resultados de la auditoría 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-11.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 Una auditoría es un proceso de verificación y/o validación del cumplimiento de una actividad según lo planeado y las directrices estipuladas. De acuerdo con la ISO (Organización Mundial de Normalización) es un proceso sistemático sin dependencia y documentado, que posibilita obtener la prueba de auditoría y hacer una evaluación objetiva para decidir en qué medida son alcanzados los criterios de auditoría (conjunto de políticas, métodos o requisitos a revisar).

    p.mb-4(data-aos="fade-right") El fin de una auditoría es diagnosticar, detectar qué ocupaciones se desarrollan según lo deseado, cuáles no y esas que son propensas de optimización. Hacer una auditoría empresarial es el equivalente a hacer un examen médico a una persona, donde desde una prueba o examen se tiene la posibilidad de identificar fallas, fomentar mejoras y juntar información objetiva del estado de la organización para tomar decisiones.
    p.mb-4(data-aos="fade-right") Este proceso en las compañías juega un papel bastante fundamental y no se debe olvidar que las metas de las auditorías constantemente tienen que estar alineadas con las metas de las altas direcciones.
    p.mb-4(data-aos="fade-right") Aunque aún hay personas que perciben la auditoría como algo negativo para su proceso, la verdad es todo lo opuesto, ya que con esta revisión y evaluación el jefe de proceso y los individuos que lo incorporan tienen la posibilidad de detectar esas ocupaciones que no permanecen ejecutándose según con los lineamientos o según lo deseado, y así corregir   para mejorar el rendimiento en los procesos, incrementar la productividad y efectividad, y conservar una compañía alineada  ante su táctica, fines y objetivo.
    p.mb-5(data-aos="fade-right") Durante el ejercicio de auditoría y la recopilación de información, el equipo auditor identifica hallazgos, los cuales clasifica y posteriormente emite unas conclusiones sobre los resultados, dicho proceso se resume en la siguiente figura.
  
    .row.justify-content-center.mb-5
      .col-12.col-md-12.col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 9. </b> <i>Recopilación de información</i>
        figure 
          img(src='@/assets/curso/temas/tema1/fig-9.svg', alt='En la figura 9 se muestra la estructura de recopilación de información según lo establecido en la Norma ISO 19011:2018.')
          
    p.mb-5(data-aos="fade-right") Por lo tanto, un hallazgo de auditoría es cualquier evento, documento y registro que aparece durante la auditoría y que servirá para evaluar lo que se está auditando. A continuación, se puede observar 8 pasos para realizar el desarrollo de hallazgos en una auditoría:

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 8 pasos para el desarrollo de hallazgos

    .row.justify-content-center.mb-5
      .col-md-12.col-lg-8.mb-3.mb-lg-0(data-aos="fade-right")
        .tarjeta.tarjeta--gris.p-4.mb-5
          LineaTiempoC.color-acento-contenido(text-small)
            .row(titulo="1")
              .col-9.col-md-10.col-.mb-4.mb-md-0
                p Identificar la condición o asuntos deficientes.
            .row(titulo="2")
              .col-9.col-md-10.mb-4.mb-md-0
                p Identificar líneas de autoridad y responsabilidad.
            .row(titulo="3")
              .col-9.col-md-10.mb-4.mb-md-0
                p Determinar las causas de la deficiencia.
            .row(titulo="4")
              .col-9.col-md-10.mb-4.mb-md-0
                p Comprobar si la deficiencia es un caso aislado.
            .row(titulo="5")
              .col-9.col-md-10.mb-4.mb-md-0
                p Determinar los efectos negativos que produce la deficiencia.
            .row(titulo="6")
              .col-9.col-md-10.mb-4.mb-md-0
                p Obtener comentarios de las personas que pueden estar afectados.
            .row(titulo="7")
              .col-9.col-md-10.mb-4.mb-md-0
                p Determinar las conclusiones de la auditoría, con base en la evidencia acumulada.
            .row(titulo="8")
              .col-9.col-md-10.mb-4.mb-md-0
                p Determinar las acciones correctivas o recomendaciones que permitan introducir mejoras.
      .col-md-12.col-lg-4.mb-lg-0.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema1/tema1-12.svg' alt='')

    p.mb-4(data-aos="fade-right") En la generación de hallazgos según la Norma ISO 19011:2018, establece que la evidencia de auditoría debería ser:
    
    ul.lista-ul.mb-5.ms-md-3.ms-lg-4(data-aos="fade-down")
      li 
        i.lista-ul__vineta
        | Evaluada contra los criterios de auditoría para determinar los hallazgos de auditoría.
      li 
        i.lista-ul__vineta
        | Indicar conformidad o no conformidad con los criterios de auditoría.
      li 
        i.lista-ul__vineta
        | Los hallazgos de la auditoría individual deberían incluir conformidad y buenas prácticas junto con su evidencia.
      li 
        i.lista-ul__vineta
        | Cuando el plan de auditoría especifica las oportunidades de mejora y cualquier recomendación al auditado.
      li 
        i.lista-ul__vineta
        | Las no conformidades y su evidencia de auditoría de respaldo.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-5.col-12
        .tarjeta.color-primario.p-4.mb-4
          h4.text-center.mb-0 Observación
      .col-md-5.col-12
        .tarjeta.color-acento-botones.p-4.mb-4
          h4.text-center.mb-0 Oportunidad de mejora

    h3(data-aos="fade-right") Criterios de auditoría

    p.mb-4(data-aos="fade-right") Se entiende por criterios de auditoría, el grupo de políticas, prácticas, métodos o requisitos ante los cuales el auditor, en ejecución de su trabajo, compara las pruebas logradas.
    p.mb-5(data-aos="fade-right") A continuación, se presentan los criterios adecuados con sus propiedades:

    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul" data-aos="fade-down")
      .row.justify-content-center(titulo="Relevancia")
        .col-md-8.col-lg-9.mb-4.mb-md-0
          p Otorgan como consecuencia un informe del profesional que ayuda a la toma de elecciones de los usuarios previstos.
        .col-md-4.col-lg-2
          img(src='@/assets/curso/temas/tema1/tema1-13.svg', alt='')
      .row.justify-content-center(titulo="Totalidad")
        .col-md-8.col-lg-9.mb-4.mb-md-0
          p Los criterios permanecen enteros una vez que no omiten componentes importantes que razonablemente se podrían aguardar y que perjudiquen las elecciones de los usuarios previstos.
        .col-md-4.col-lg-2
          img(src='@/assets/curso/temas/tema1/tema1-14.svg', alt='')
      .row.justify-content-center(titulo="Fiabilidad")
        .col-md-8.col-lg-9.mb-4.mb-md-0
          p Los criterios confiables permiten una medición o evaluación razonablemente consistente de la materia subyacente una vez que se aplican en situaciones semejantes por diferentes expertos.
        .col-md-4.col-lg-2
          img(src='@/assets/curso/temas/tema1/tema1-15.svg', alt='')
      .row.justify-content-center(titulo="Neutralidad")
        .col-md-8.col-lg-9.mb-4.mb-md-0
          p Los criterios neutrales proporcionan como consecuencia un informe del profesional que está independiente de sesgos según sea apropiado en las situaciones del compromiso.
        .col-md-4.col-lg-2
          img(src='@/assets/curso/temas/tema1/tema1-16.svg', alt='')
      .row.justify-content-center(titulo="Comprensibilidad")
        .col-md-8.col-lg-9.mb-4.mb-md-0
          p Los criterios comprensibles proporcionan como consecuencia un informe del profesional que podría ser comprendido por los usuarios previstos. Ejemplos de criterios son: requisitos ISO, estatutos internos, requisitos reglamentarios y guías contables.
        .col-md-4.col-lg-2
          img(src='@/assets/curso/temas/tema1/tema1-17.svg', alt='')

    p.mb-5(data-aos="fade-right") Según los criterios mencionados anteriormente, podríamos afirmar que el alcance en una auditoría se refiere fundamentalmente a quién, qué, dónde y cuándo se va a auditar, mientras que el criterio se refiere a lo que se está auditando, ya sea el estándar o los métodos internos, entre otros. Los equipos de auditoría son los encargados de determinar tanto el alcance como el criterio de la auditoría en función del compromiso adquirido.

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
