export default {
  global: {
    componenteFormativo: 'Registros contables y ciclo financiero básico',
    descripcionCurso:
      'Este componente formativo permite a los aprendices adquirir competencias para registrar y validar operaciones económicas mediante asientos contables, aplicando el principio de partida doble y la cuenta T. Aborda las etapas del ciclo contable, el uso de libros principales y auxiliares y la elaboración de estados financieros básicos, garantizando información contable confiable, trazable y útil para la toma de decisiones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1_1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1_2.svg'),
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
        titulo: 'Asientos contables',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Principio de partida doble',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Representación en cuenta T',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Variables y elementos del asiento contable',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Asientos de ajuste',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Procedimiento para el registro de asientos contables',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Etapas del ciclo contable y su relación con las operaciones financieras',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Importancia del registro contable en la gestión financiera',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Registro de compras, ventas, gastos, pagos e ingresos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Relación entre el ciclo contable y la elaboración de informes financieros',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Libros contables',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tipos de libros contables y sus componentes',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Normativa legal aplicable a los libros contables en Colombia',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Estados financieros básicos y cierre contable',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Estado de situación financiera (Balance General)',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Estado de resultados (Pérdidas y ganancias)',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Relación entre los estados financieros y el ciclo contable',
            hash: 't_4_3',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_XX_DU.pdf',
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
      tema: 'Ciclo contable: guía completa para principiantes',
      referencia:
        'Canal Aprende Contabilidad. (2023). Ciclo contable paso a paso – guía completa. YouTube.',
      tipo: 'Video educativo',
      link: 'https://www.youtube.com/watch?v=ra7ag3GGxYM',
    },
    {
      tema: 'Ciclo contable explicado paso a paso',
      referencia:
        'Canal Contabilidad para Principiantes. (2023). Registros contables para principiantes: ciclo contable paso a paso. YouTube.',
      tipo: 'Video educativo',
      link: 'https://youtu.be/Nr2dkFpT6GE',
    },
  ],
  glosario: [
    {
      termino: 'Ciclo contable',
      significado:
        'conjunto de etapas ordenadas que transforman las operaciones financieras en información contable útil, desde la identificación de documentos hasta la elaboración de estados financieros.',
    },
    {
      termino: 'Libro diario',
      significado:
        'registro contable en el que se anotan de forma cronológica todas las transacciones realizadas por la empresa durante un periodo.',
    },
    {
      termino: 'Libro mayor',
      significado:
        'registro contable donde se concentran los movimientos y saldos de cada cuenta individual provenientes del libro diario.',
    },
    {
      termino: 'Balance de prueba',
      significado:
        'documento que resume los saldos de todas las cuentas del libro mayor para verificar que los débitos y créditos estén equilibrados.',
    },
    {
      termino: 'Conciliación bancaria',
      significado:
        'proceso de comparación entre los registros contables de la cuenta bancos y el extracto emitido por la entidad financiera para identificar diferencias.',
    },
    {
      termino: 'Estado de situación financiera',
      significado:
        'informe contable que presenta los activos, pasivos y patrimonio de una empresa en un momento determinado.',
    },
    {
      termino: 'Estado de resultados',
      significado:
        'informe contable que muestra los ingresos, costos, gastos y la utilidad o pérdida generada durante un periodo.',
    },
    {
      termino: 'Cierre contable',
      significado:
        'proceso mediante el cual se revisan y ajustan las cuentas al final de un periodo, dejando en ceros las cuentas de resultados y trasladando la utilidad o pérdida al patrimonio.',
    },
  ],
  referencias: [
    {
      referencia:
        'Burbano Ruiz, J. E. (2011). Presupuestos: Un enfoque estratégico, gestión y control de recursos (4.ª ed.). McGraw-Hill Latinoamericana.',
      link: '',
    },
    {
      referencia:
        'Fierro, H. (2011). Contabilidad general: fundamentos y aplicaciones. Ecoe Ediciones.',
      link: '',
    },
    {
      referencia:
        'González, J. (2021). Fundamentos de contabilidad financiera. Editorial Universidad Cooperativa de Colombia.',
      link: '',
    },
    {
      referencia:
        'León García, M. (2009). Teoría contable y estados financieros. McGraw-Hill Interamericana.',
      link: '',
    },
    {
      referencia:
        'Muñoz Maza, J. (2016). Contabilidad: teoría y práctica. Fondo Editorial Universidad EAFIT.',
      link: '',
    },
    {
      referencia:
        'Ortiz Anaya, A. (2018). Contabilidad financiera: una perspectiva práctica. Ediciones de la U.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje SENA. (2023). Clasificación Nacional de Ocupaciones: Diccionario ocupacional e índice alfabético de denominaciones ocupacionales.',
      link: 'https://observatorio.sena.edu.co/clasificacion/cno',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (2015). Sistema Nacional de Formación para el Trabajo.',
      link:
        'https://competencias.sena.edu.co/page?3,plantilla,productos-aprobados,O,es,0',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gustavo Ernesto Mariño Puentes',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>Full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },

        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Desarrollador <em>Full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
}
