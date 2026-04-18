import type { Content } from "./en";

export const content: Content = {
  nav: {
    home: "Inicio",
    attorney: "Perfil de la Abogada",
    practice: "Áreas de Práctica",
    resources: "Recursos",
    contact: "Contáctenos",
    cta: "Consulta Gratis",
  },
  topBar: {
    phone: "954-531-5658",
    email: "rosalind@matoslegal.com",
    language: "WE SPEAK ENGLISH",
  },
  hero: {
    eyebrow: "LITIGIO CIVIL EN EL SUR DE LA FLORIDA · EST. 2014",
    headlineStart: "",
    headlineAccent: "Contáctenos",
    subhead:
      "Representación confiable en Miami-Dade, Broward y Palm Beach. Dos décadas de experiencia, adaptadas a su caso.",
    ctaPrimary: "Más Información",
    ctaSecondary: "Consulta Gratis",
  },
  stats: [
    { num: "24+", label: "Años de Experiencia" },
    { num: "1000+", label: "Casos Manejados" },
    { num: "100%", label: "Servicio Bilingüe" },
    { num: "Gratis", label: "Consulta" },
  ],
  urgency: {
    title: "¿Enfrenta una Ejecución Hipotecaria? ¿Disputa Contractual?",
    sub: "Programe su consulta telefónica GRATUITA hoy mismo.",
    cta: "Contáctenos Hoy",
  },
  about: {
    eyebrow: "— SOBRE EL BUFETE",
    headlineStart: "Sobre",
    headlineAccent: "Matos Legal",
    badge: "Propiedad de Mujer · Bilingüe",
    paragraphs: [
      "MATOS LEGAL es un bufete de litigio civil ubicado en el Sur de la Florida que maneja casos en el área tricomarcal (Miami-Dade, Broward y Palm Beach). Representamos clientes, tanto individuos como empresas, que buscan representación legal en asuntos de litigio civil, incluyendo defensa ante ejecuciones hipotecarias, disputas de propiedad, del consumidor y contractuales, lesiones personales y derechos civiles.",
      "Nos preocupamos por nuestros clientes y somos apasionados de nuestro trabajo. Tenemos la experiencia, determinación y dedicación para ayudarle a encontrar una solución a su problema legal y restaurar su tranquilidad. No podemos garantizar resultados — pero sí podemos garantizar compromiso, comunicación abierta, integridad y una estrategia bien pensada adaptada a sus necesidades específicas.",
    ],
  },
  practice: {
    eyebrow: "— LO QUE HACEMOS",
    headlineStart: "Nuestras",
    headlineAccent: "Áreas",
    headlineEnd: "de Práctica",
    subhead:
      "Representación legal integral basada en dos décadas de experiencia en juicios y apelaciones.",
    areas: [
      {
        num: "01",
        icon: "shield",
        title: "Defensa ante Ejecución Hipotecaria",
        desc: "Protegemos a los propietarios que enfrentan ejecuciones hipotecarias con defensa legal estratégica y soluciones personalizadas.",
        slug: "foreclosure-defense",
        detail: {
          overview: [
            "Enfrentar una ejecución hipotecaria es una de las experiencias más estresantes que puede vivir un propietario. En Matos Legal, PLLC entendemos la urgencia y el peso emocional de la situación. La abogada Rosalind J. Matos ha trabajado en primera línea de la defensa hipotecaria en el Sur de la Florida, ayudando a propietarios a combatir a los prestamistas y proteger sus hogares.",
            "Nuestro bufete examina cada aspecto de su hipoteca, la documentación del préstamo y la conducta del prestamista para identificar posibles defensas y margen de negociación. Ya sea que su objetivo sea salvar su hogar, gestionar una modificación de préstamo o ganar tiempo mientras planifica sus próximos pasos, desarrollamos una estrategia legal adaptada a sus circunstancias particulares.",
            "Atendemos a propietarios en Miami-Dade, Broward y Palm Beach y tenemos experiencia tanto en tribunales estatales como federales y en procedimientos de quiebra. No tiene que enfrentar la ejecución hipotecaria solo — cuanto antes nos contacte, más opciones tendrá.",
          ],
          howWeHelp: [
            "Revisar e impugnar presentaciones y documentación hipotecaria incorrectas",
            "Negociar modificaciones de préstamos y planes de pago con los prestamistas",
            "Plantear defensas afirmativas basadas en mala conducta del prestamista o errores procedimentales",
            "Representar clientes en mediaciones hipotecarias y audiencias judiciales",
          ],
          whatToExpect:
            "Tras su consulta gratuita, revisaremos los documentos relevantes y explicaremos sus opciones con honestidad. Si decide contratarnos, presentamos escritos de respuesta, realizamos el descubrimiento de pruebas y lo representamos en cada etapa. Lo mantenemos informado en todo momento y siempre estamos disponibles para responder sus preguntas.",
        },
      },
      {
        num: "02",
        icon: "scale",
        title: "Litigio Civil",
        desc: "Representamos clientes en todas las etapas del litigio civil, desde disputas comerciales hasta personales.",
        slug: "civil-litigation",
        detail: {
          overview: [
            "El litigio civil abarca un amplio espectro de disputas legales — desde desacuerdos en contratos comerciales y conflictos de propiedad hasta reclamaciones de protección al consumidor y asuntos entre arrendatarios e inquilinos. Matos Legal, PLLC aporta más de dos décadas de experiencia en juicios y apelaciones a cada caso, garantizando que sus intereses sean representados con solidez en cada etapa del proceso.",
            "Representamos tanto a individuos como a empresas en los tribunales del Sur de la Florida. Nuestro enfoque es estratégico: antes de litigar, evaluamos si la negociación, mediación o arbitraje pueden resolver la disputa de manera más eficiente. Cuando el litigio es necesario, procedemos con precisión y determinación.",
            "La abogada Matos tiene una sólida trayectoria en procedimientos civiles estatales y federales y comprende cómo construir el expediente necesario para prevalecer en juicio y proteger la posición del cliente en apelación.",
          ],
          howWeHelp: [
            "Evaluar los méritos de su reclamación y desarrollar una estrategia de litigio",
            "Redactar y presentar demandas, mociones y escritos procesales",
            "Realizar un descubrimiento exhaustivo que incluye deposiciones y revisión de documentos",
            "Representar clientes en mediaciones, audiencias, juicios y apelaciones",
          ],
          whatToExpect:
            "Comenzamos con una evaluación franca de su caso — incluyendo resultados realistas y costos. A partir de ahí, nos encargamos de todos los aspectos del litigio para que usted pueda enfocarse en su vida o negocio. Nos comunicamos proactivamente y nos aseguramos de que entienda cada desarrollo en su asunto.",
        },
      },
      {
        num: "03",
        icon: "users",
        title: "Lesiones Personales",
        desc: "Buscamos justicia para los lesionados por negligencia con compasión y dedicación.",
        slug: "personal-injury",
        detail: {
          overview: [
            "Cuando usted o un ser querido sufre una lesión por la negligencia de otra persona, el impacto físico, emocional y financiero puede ser devastador. Matos Legal, PLLC defiende a las personas lesionadas en el Sur de la Florida, trabajando para obtener una compensación justa para que usted pueda concentrarse en su recuperación.",
            "Manejamos casos derivados de accidentes automovilísticos, caídas, responsabilidad de locales y otras lesiones basadas en negligencia. Nuestro bufete investiga cada caso a fondo, colaborando con profesionales médicos y expertos en reconstrucción de accidentes cuando es necesario para construir la reclamación más sólida posible.",
            "Manejamos casos de lesiones personales en base a honorarios contingentes — lo que significa que no paga honorarios de abogado a menos que recuperemos para usted. Su recuperación es nuestra prioridad.",
          ],
          howWeHelp: [
            "Investigar el accidente, recopilar evidencia y preservar el testimonio de testigos",
            "Coordinar con proveedores médicos para documentar sus lesiones con precisión",
            "Negociar de manera asertiva con las compañías de seguros para lograr acuerdos justos",
            "Llevar su caso a juicio cuando los aseguradores se niegan a ofrecer una compensación justa",
          ],
          whatToExpect:
            "Su consulta gratuita es confidencial y no implica ninguna obligación. Explicaremos el proceso de reclamaciones por lesiones personales, evaluaremos el valor de su caso y delinearemos los próximos pasos. Si avanzamos juntos, nos encargamos de cada aspecto de su reclamación para que pueda concentrarse en su recuperación.",
        },
      },
      {
        num: "04",
        icon: "gavel",
        title: "Litigio de Derechos Civiles",
        desc: "Defendemos las libertades civiles y los derechos constitucionales con experiencia y convicción.",
        slug: "civil-rights",
        detail: {
          overview: [
            "Las violaciones de derechos civiles — incluyendo mala conducta policial, perfilamiento racial, detención ilegal e infracciones a la libertad de expresión o religiosa — exigen un defensor sin miedo. La abogada Rosalind J. Matos inició su carrera legal como Abogada de Personal del Sur de la Florida para la ACLU de Florida, donde pasó casi ocho años litigando casos federales de derechos civiles.",
            "Esa base informa todo lo que hacemos en asuntos de derechos civiles. Entendemos el marco constitucional, el panorama procesal del litigio federal de derechos civiles bajo la Sección 1983, y la importancia de construir un expediente exhaustivo y bien documentado. Tomamos estos casos en serio porque sus derechos importan.",
            "Representamos a individuos y comunidades cuyos derechos constitucionales y civiles han sido violados por actores gubernamentales, agencias de aplicación de la ley e instituciones.",
          ],
          howWeHelp: [
            "Evaluar reclamaciones de mala conducta policial, fuerza excesiva y registro o arresto ilegal",
            "Presentar quejas de derechos civiles en tribunales estatales y federales incluyendo acciones bajo la Sección 1983",
            "Buscar medidas cautelares e indemnización en nombre de las personas afectadas",
            "Colaborar con organizaciones de defensa y grupos comunitarios en asuntos sistémicos",
          ],
          whatToExpect:
            "Los casos de derechos civiles requieren una investigación fáctica cuidadosa y una estrategia legal precisa. Comenzamos por entender exactamente qué ocurrió, revisando cualquier evidencia disponible y evaluando la viabilidad. Somos directos sobre los desafíos que presentan estos casos y estamos comprometidos a buscar justicia donde existe una reclamación viable.",
        },
      },
    ],
  },
  why: {
    eyebrow: "— POR QUÉ ELEGIRNOS",
    headlineStart: "Construido Sobre",
    headlineAccent: "Confianza",
    headlineEnd: "y Experiencia",
    items: [
      {
        icon: "clock",
        title: "24+ Años de Experiencia",
        desc: "La abogada Rosalind J. Matos aporta más de dos décadas de experiencia legal en tribunales estatales y federales, tanto a nivel de juicio como de apelación.",
      },
      {
        icon: "languages",
        title: "Servicios Bilingües",
        desc: "Atendemos con orgullo a nuestra comunidad de habla inglesa y española. We speak English.",
      },
      {
        icon: "target",
        title: "Estrategia Personalizada",
        desc: "Cada caso es único. Desarrollamos estrategias legales individualizadas adaptadas a sus necesidades y objetivos específicos.",
      },
      {
        icon: "phone",
        title: "Consulta Telefónica Gratuita",
        desc: "Ofrecemos una consulta telefónica inicial gratuita para que pueda entender sus opciones antes de asumir cualquier compromiso.",
      },
    ],
  },
  testimonials: {
    eyebrow: "— TESTIMONIOS DE CLIENTES",
    headlineStart: "Lo Que Nuestros",
    headlineAccent: "Clientes",
    headlineEnd: "Dicen",
    items: [
      {
        quote:
          "No hay palabras suficientes para describir a Rosalind. Poner mi caso en sus manos me dio paz y esperanza. Es una persona valiosa, excelente, profesional, dedicada y disciplinada. Nos mantuvo constantemente informados durante el proceso. Siempre estuvo disponible para responder nuestras inquietudes, usando todo su conocimiento e ingenio a nuestro favor. Mi familia y yo estamos muy agradecidos.",
        author: "UN CLIENTE AGRADECIDO",
      },
      {
        quote:
          "Mi esposa y yo le enviamos esta carta para informarle cuán satisfechos estuvimos con su servicio. Quedamos tan impresionados con su compromiso y servicio que cuando usted abrió su propio bufete, la seguimos para que pudiera continuar representándonos personalmente. Gloria y honra a nuestro Señor — fuimos muy bendecidos de tenerla. Le agradecemos mucho su dedicación y servicio.",
        author: "LA FAMILIA DUPREE",
      },
      {
        quote:
          "Rosalind, una vez más gracias por su ayuda. Le felicito por el profesionalismo con que trabaja y le agradezco por ayudar a mis amigos ya que todos han quedado contentos con sus resultados. Sobre todo, le agradezco a Dios por su don de servicio.",
        author: "HENRY BAQUERO",
      },
      {
        quote:
          "Es fantástico tener una abogada con corazón, con la experiencia, conocimiento, paciencia y amor que la Dra. Rosalind Matos le dedica a sus clientes — o mejor dicho, a nuestra familia. Cuando toma un caso, se convierte en parte de él. Es como tener una abogada en su hogar a su disposición.",
        author: "JANET BAUTA",
      },
    ],
  },
  finalCta: {
    headlineStart: "¿Listo Para Una",
    headlineAccent: "Consulta",
    headlineEnd: "Gratis?",
    sub: "Hable directamente con la abogada Rosalind J. Matos. Sin obligación, sin presión — solo respuestas claras y orientación honesta.",
    ctaPrimary: "Agendar Ahora",
    ctaSecondary: "954-531-5658",
  },
  attorney: {
    badge: "FUNDADORA Y PROPIETARIA",
    headlineStart: "Conozca a",
    headlineAccent: "Rosalind J. Matos",
    subhead:
      "Dos décadas de experiencia en juicios y apelaciones en tribunales estatales y federales — completamente bilingüe, profundamente comprometida.",
    bioEyebrow: "— BIOGRAFÍA",
    photoName: "Rosalind J. Matos",
    photoRole: "FUNDADORA / PROPIETARIA",
    photoEmail: "rosalind@matoslegal.com",
    bio: [
      "Rosalind J. Matos tiene 24 años de experiencia legal y ha representado exitosamente a clientes en tribunales estatales y federales tanto a nivel de juicio como de apelación. Completamente bilingüe, aporta una sólida trayectoria en litigio civil con enfoque en disputas inmobiliarias incluyendo defensa ante ejecuciones hipotecarias, asuntos entre arrendatarios e inquilinos, y conflictos entre compradores y vendedores.",
      "Su carrera comenzó como Abogada de Personal del Sur de la Florida para la ACLU de Florida en Miami — casi 8 años trabajando en asuntos de libertades civiles incluyendo mala conducta policial, perfilamiento racial, derechos de privacidad, libertad de expresión, derechos estudiantiles y libertad religiosa. En la ACLU litigó casos federales de derechos civiles, evaluó legislación por preocupaciones constitucionales, testificó ante comités legislativos y colaboró con defensores. Sirvió en el Comité Asesor de Perfilamiento Racial de Miami-Dade y presionó a favor del Panel de Investigación Civil (CIP).",
      "Posteriormente se unió al Servicio de Asistencia Legal del Condado de Broward para la defensa hipotecaria, ayudando a familias de bajos ingresos a salvar sus hogares mediante litigios y negociaciones de modificación de préstamos. Luego asumió un papel de liderazgo en Glantz and Glantz gestionando el departamento de ejecuciones hipotecarias.",
      "Fundó Matos Legal, PLLC en marzo de 2014. Con una formación en gestión hotelera de FIU, el bufete ha servido a clientes en el área Tricomarcal durante más de una década con profundas raíces en la comunidad, ganándose una reputación de confianza, fiabilidad y excelencia legal.",
    ],
    credentials: {
      bar: {
        title: "Admisiones al Foro",
        items: [
          "Florida (2001)",
          "Puerto Rico (2001)",
          "Tribunal de Apelaciones de EE.UU. para el Undécimo Circuito (2004)",
          "Tribunales de Distrito de EE.UU. para el Distrito Sur de Florida (2001)",
          "Tribunales de Distrito de EE.UU. para el Distrito Norte de Florida (2001)",
          "Tribunal de Quiebras de EE.UU. para el Distrito Sur de Florida (2010)",
        ],
      },
      education: {
        title: "Educación",
        items: [
          {
            school: "Escuela de Derecho de la Universidad de Puerto Rico",
            detail: "Juris Doctor · GPA 3.4 · cum laude · Top 15%",
          },
          {
            school: "Florida International University",
            detail: "B.S. Gestión de Hospitalidad · GPA 3.65 · cum laude",
          },
        ],
      },
      memberships: {
        title: "Membresías",
        items: ["Broward Lawyers Care – Servicio de Asistencia Legal del Condado de Broward"],
      },
    },
  },
  contact: {
    eyebrow: "— CONTÁCTENOS",
    headlineStart: "Hablemos",
    headlineAccent: "",
    subhead:
      "Sea lo que sea que esté enfrentando, el primer paso es una conversación gratuita y honesta. En inglés o en español.",
    address:
      "Lakeside Executive Suites, 2645 Executive Park Drive, Ste. 676, Weston FL 33331",
    formTitle: "Envíenos un Mensaje",
    formFields: {
      firstName: "Nombre",
      lastName: "Apellido",
      email: "Correo Electrónico",
      phone: "Número de Teléfono",
      matter: "Tipo de Asunto",
      message: "Descripción Breve",
      submit: "Enviar Mensaje",
      disclaimer:
        "El envío de este formulario no crea una relación abogado-cliente. No se hace ni se implica ninguna garantía de un resultado particular.",
      success:
        "¡Gracias! Nos comunicaremos con usted en un día hábil.",
      matters: [
        "Defensa ante Ejecución Hipotecaria",
        "Litigio Civil",
        "Lesiones Personales",
        "Derechos Civiles",
        "Otro",
      ],
    },
  },
  resources: {
    eyebrow: "— RECURSOS",
    headlineStart: "Recursos",
    headlineAccent: "Legales",
    coming:
      "Estamos trabajando en una biblioteca de recursos legales útiles para los residentes del Sur de la Florida. Vuelva pronto.",
    ctaText:
      "Mientras tanto, contáctenos para hablar directamente con la abogada Matos.",
  },
  footer: {
    blurb:
      "Un bufete de litigio civil con sede en el Sur de la Florida que maneja casos en el área tricomarcal.",
    quickLinks: "Enlaces Rápidos",
    contactUs: "Contáctenos",
    copyright: "© 2026 Matos Legal, PLLC. Todos los derechos reservados.",
    disclaimer:
      "El material presentado en este sitio tiene únicamente fines informativos y se incluye con el entendimiento y acuerdo de que MATOS LEGAL no presta servicios legales ni otros servicios profesionales al publicar dicho material. Se debe buscar la asesoría de un profesional competente si se requiere asistencia legal u otra especializada. Algunos enlaces dentro de este sitio web pueden llevar a otros sitios. MATOS LEGAL no necesariamente patrocina, respalda ni aprueba los materiales que aparecen en dichos sitios.",
  },
};
