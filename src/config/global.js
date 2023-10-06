export default {
  global: {
    componenteFormativo: 'Sistema de gestión y plan de auditoría',
    descripcionCurso:
      'Este componente se centra en identificar las directrices del sistema de gestión en auditorías, sus principios, criterios y requisitos. Asimismo, cómo implementar un plan de auditoría, partiendo de conceptos y criterios que se deben revisar.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Sistema de gestión',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Seguimiento y medición del sistema de gestión',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Reglamentos del sistema de gestión',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Análisis de resultados de la auditoría',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fundamentos del trabajo en equipo, riesgos y oportunidades',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Construcción de objetivos y metas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Estrategias y características técnicas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Plan de auditoría',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_01_11220144.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Sistema de gestión',
      referencia:
        'Procem Consultores. (s.f.). Qué es un sistema de gestión [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=5X64YBXdq24',
    },
    {
      tema: 'Reglamentos del sistema de gestión',
      referencia:
        'Procem Consultores. (s.f.). ISO 19011:2018 [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=pHUuMDt7EMg',
    },
    {
      tema: 'Reglamentos del sistema de gestión',
      referencia:
        'Universidad ISO. (s.f.). Sistema Integrado de Gestión ISO 9001 ISO 14001 ISO 45001 Gestión Integrados HSEQ UNE 66177 2020 [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=yCTJ3V1ONZE',
    },
    {
      tema: 'Plan de auditoría',
      referencia:
        'Virtual Training Team. (s.f.). Auditoría principios y generalidades [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=i6pwCBrmN8Q',
    },
  ],
  glosario: [
    {
      termino: 'Auditado',
      significado: 'organización o parte de esta que es auditada.',
    },
    {
      termino: 'Auditor',
      significado: 'persona que lleva a cabo una auditoría.',
    },
    {
      termino: 'Eficacia',
      significado:
        'grado en el que las actividades planificadas son realizadas y se logran resultados planificados.',
    },
    {
      termino: 'Plan de auditoría',
      significado:
        'descripción de las actividades y de los detalles acordados de una auditoría.',
    },
    {
      termino: 'Procesos',
      significado:
        'conjunto de actividades interrelacionadas o interactuantes que usan entradas para entregar un resultado previsto.',
    },
    {
      termino: 'Programa de auditoría',
      significado:
        'conjunto de una o más auditorías planificadas para un periodo de tiempo determinado y dirigidas hacia un propósito específico.',
    },
    {
      termino: 'Requisito',
      significado:
        'necesidad o expectativa que es declarada, generalmente implícita u obligatoria.',
    },
    {
      termino: 'Riesgo',
      significado: 'efecto de la incertidumbre.',
    },
    {
      termino: 'Sistema de gestión',
      significado:
        'conjunto de elementos interrelacionados o interactuantes de una organización para establecer políticas, procesos y objetivos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Berenstein, G. (2020). ¿Cuál es el propósito de un sistema de gestión? SociosPlus. ',
      link:
        'https://www.sociosplus.la/cual-es-el-proposito-de-un-sistema-de-gestion/',
    },
    {
      referencia:
        'Esan BUSINESS. (2016). ¿Qué es el mapa de procesos de la organización? Conexión Esan. ',
      link:
        'https://www.esan.edu.pe/conexion-esan/que-es-el-mapa-de-procesos-de-la-organizacion#:~:text=Un%20mapa%20de%20procesos%20es,una%20organizaci%C3%B3n%20en%20forma%20interrelacionada.&text=El%20mapa%20de%20procesos%20recoge,hacer%20un%20mapa%20de%20procesos',
    },
    {
      referencia:
        'Evaluando erp. (2016). Sistema de gestión, ¿qué es?, ¿cuántos tipos hay? Evaluandoerp.com. ',
      link: 'https://www.evaluandoerp.com/software-erp/sistema-de-gestion/',
    },
    {
      referencia:
        'ICONTEC. (2018). Guía técnica colombiana GTC-ISO 19011:2018. Directrices para la auditoría de los sistemas de gestión. ICONTEC. ',
      link:
        'https://cmdcertification.com/wp-content/uploads/2020/11/ISO-19011-2018.pdf',
    },
    {
      referencia:
        'Rodríguez, I. (2019). ¿Qué es un programa de auditoría? Red global de conocimiento en auditoría y control interno. ',
      link:
        'https://www.auditool.org/blog/auditoria-externa/que-es-un-programa-de-auditoria',
    },
    {
      referencia:
        'Torres, I. (2018). Programa de auditoría vs. plan de auditoría. Ive consultores. ',
      link:
        'https://iveconsultores.com/programa-auditoria-y-plan-de-auditoria/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'May Stefanny González',
          cargo: 'Experta temática',
          centro:
            'Regional Norte de Santander - Centro de Industria empresa y servicios regionales',
        },
        {
          nombre: 'Gloria Lida Álzate Suarez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial de Diseño y la Manufactura',
        },
        {
          nombre: 'Sergio Augusto Ardila Ortiz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Aruzidna Sánchez Alonso',
          cargo: 'Diseñadora web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marín',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboarde Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Produccióon audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marín',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
