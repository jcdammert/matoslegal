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
    { num: "24", suffix: "+", label: "Años de Experiencia" },
    { num: "1000", suffix: "+", label: "Casos Manejados" },
    { num: "100", suffix: "%", label: "Servicio Bilingüe" },
    { num: "Gratis", suffix: "", label: "Consulta" },
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
        desc: "Protegemos a propietarios e inversores frente a ejecuciones hipotecarias con defensa legal estratégica y experimentada.",
        slug: "foreclosure-defense",
        detail: {
          heroSub:
            "Defensa estratégica en cada etapa. Dos décadas de experiencia en los tribunales de ejecución hipotecaria de Florida.",
          intro:
            "Enfrentar una acción de ejecución hipotecaria es una de las experiencias más aterradoras que puede vivir un propietario. La amenaza de perder su hogar o propiedad de inversión puede sentirse abrumadora — especialmente cuando el proceso legal parece diseñado para avanzar rápidamente en su contra. Pero una demanda de ejecución hipotecaria no es una conclusión inevitable. Existen defensas reales y sustanciales disponibles bajo la ley de Florida, y sabemos cómo encontrarlas y utilizarlas.",
          body: [
            "Florida es un estado de ejecución hipotecaria judicial, lo que significa que un prestamista no puede ejecutar su propiedad sin presentar una demanda y obtener una orden judicial. Ese proceso crea múltiples oportunidades para impugnar el derecho del prestamista a ejecutar, exponer violaciones de procedimiento y proteger sus intereses.",
            "Hemos representado a propietarios en todas las etapas del proceso de ejecución hipotecaria — desde los avisos iniciales de incumplimiento hasta las audiencias de sentencia sumaria, juicios y procedimientos post-sentencia. Si ha recibido un Aviso de Incumplimiento o ha sido notificado con una demanda de ejecución, no espere. Cuanto antes involucre a un abogado, más opciones tendrá.",
          ],
          services: {
            heading: "Defensas Que Planteamos en Casos de Ejecución",
            items: [
              "Falta de legitimación — si el prestamista realmente tiene el pagaré y la hipoteca originales",
              "Defectos en la cadena de título y cesiones — asignaciones hipotecarias impropias o fraudulentas",
              "Pagos mal aplicados — exponiendo incumplimientos falsos creados por errores del administrador",
              "Violaciones de rastreo dual — prestamistas que ejecutan mientras procesan una solicitud de modificación",
              "Defensas contra hipotecas zombi — prescripción, abandono de gravamen y disputas de cadena de propiedad",
              "Incumplimiento de condiciones previas — defectos de aviso que pueden ser una defensa completa",
              "Violaciones de RESPA y TILA — infracciones federales que dan a los propietarios poderosa ventaja",
              "Reclamaciones de ejecución hipotecaria ilegal — acciones para restaurar derechos y recuperar daños",
            ],
          },
          approach: {
            eyebrow: "— NUESTRO ENFOQUE",
            heading: "Una Demanda de Ejecución No Es el Final",
            body: "También representamos a clientes víctimas de acciones de ejecución hipotecaria ilegales — donde un prestamista ha ejecutado sin la debida autoridad, en violación de una orden judicial o de un acuerdo de modificación de préstamo activo. Presentamos reclamaciones afirmativas por ejecución hipotecaria ilegal y trabajamos para restaurar los derechos de nuestros clientes y, cuando corresponde, recuperar daños. La abogada Matos comenzó su carrera ayudando a familias de bajos ingresos a salvar sus hogares en el Servicio de Asistencia Legal del Condado de Broward y luego gestionó un departamento entero de ejecuciones hipotecarias.",
          },
        },
      },
      {
        num: "02",
        icon: "building",
        title: "Disputas entre Arrendador e Inquilino",
        desc: "Representamos a arrendadores e inquilinos en disputas residenciales y comerciales en todo el Sur de la Florida.",
        slug: "landlord-tenant",
        detail: {
          heroSub:
            "Representación experimentada para arrendadores e inquilinos — residencial y comercial.",
          intro:
            "Las disputas entre arrendadores e inquilinos residenciales son algunos de los asuntos inmobiliarios más comunes y consecuentes que manejan los tribunales de Florida. La Ley de Arrendadores e Inquilinos Residenciales de Florida (Capítulo 83) regula los derechos y responsabilidades de ambas partes. Representamos tanto a arrendadores como a inquilinos en disputas residenciales y comerciales en todo el Sur de la Florida.",
          body: [
            "Para un inquilino, su hogar no es simplemente un asunto legal — es la estabilidad y seguridad de su familia. Para un arrendador, una propiedad de alquiler es una inversión significativa que debe protegerse. Aportamos igual dedicación a ambas partes, ya sea que la disputa involucre vivienda residencial o un arrendamiento comercial complejo.",
            "Las disputas comerciales entre arrendadores e inquilinos requieren un nivel de conocimiento aún más profundo. Los contratos de arrendamiento comercial son documentos ampliamente negociados — a menudo de docenas de páginas — con términos que pueden afectar drásticamente los derechos y remedios disponibles para cada parte cuando surge una disputa.",
          ],
          services: {
            heading: "Cómo Lo Ayudamos",
            items: [
              "Defensa contra desahucio ilegal y reclamaciones por cierre ilegal o corte de servicios",
              "Desalojo constructivo — cuando la negligencia del arrendador obliga al inquilino a abandonar la propiedad",
              "Disputas sobre depósitos de seguridad y retención indebida bajo los estrictos estatutos de Florida",
              "Reclamaciones de habitabilidad y garantía de aptitud — responsabilizando a los arrendadores",
              "Reclamaciones de represalia del arrendador contra inquilinos que ejercen sus derechos",
              "Procedimientos de desahucio por falta de pago, violaciones del contrato e inquilinos holdover",
              "Disputas sobre cargos de mantenimiento de áreas comunes (CAM) en arrendamientos comerciales",
              "Disputas sobre cesión de arrendamiento, subarrendamiento, opción de renovación y co-tenencia",
              "Ejecución de cláusulas de arrendamiento comercial y disposiciones de exclusividad",
              "Redacción y revisión de contratos de arrendamiento residenciales y comerciales",
            ],
          },
          approach: {
            eyebrow: "— NUESTRO ENFOQUE",
            heading: "La Ley de Desahucio de Florida Es Estrictamente Procesal",
            body: "Los procedimientos de desahucio de Florida son urgentes y procesalmente exigentes. Un arrendador que omite un paso requerido — o un inquilino que pierde un plazo crítico — puede perder derechos importantes. Manejamos cada requisito procesal correctamente desde el inicio, desde la redacción de avisos previos al juicio legalmente conformes hasta la presentación y defensa de una acción de desahucio. Ya sea que sea un inquilino residencial que enfrenta un desahucio o un arrendador comercial que ejecuta un arrendamiento complejo, aportamos la misma minuciosidad y compromiso.",
          },
        },
      },
      {
        num: "03",
        icon: "home",
        title: "Disputas Inmobiliarias",
        desc: "Disputas entre compradores y vendedores, acciones de título quieto y conflictos de depósito en plica en el mercado del Sur de la Florida.",
        slug: "real-estate-disputes",
        detail: {
          heroSub:
            "Protegiendo a compradores, vendedores y propietarios en el competitivo mercado inmobiliario del Sur de la Florida.",
          intro:
            "En el competitivo mercado inmobiliario del Sur de la Florida, las transacciones pueden avanzar a un ritmo vertiginoso — y cuando algo sale mal, las consecuencias financieras pueden ser devastadoras. Ya sea que sea un comprador que ha perdido un depósito, un vendedor acusado de ocultar un defecto, o un propietario cuyo título ha sido nublado por una reclamación en competencia, tenemos la experiencia y tenacidad para proteger sus intereses.",
          body: [
            "Las disputas de compraventa inmobiliaria en Florida se rigen principalmente por el propio contrato, junto con los requisitos de divulgación de Florida y la ley general de contratos. Hemos manejado disputas que involucran los contratos estándar FAR/BAR y AS-IS utilizados en toda Florida, así como acuerdos de compraventa personalizados en transacciones comerciales y residenciales de alto valor.",
            "También manejamos acciones de título quieto — demandas que solicitan al tribunal que determine formalmente la titularidad de una propiedad y elimine todas las reclamaciones en competencia — que surgen de errores en la cadena de título, escrituras fraudulentas, gravámenes no resueltos, reclamaciones de posesión adversa y problemas de título post-ejecución.",
          ],
          services: {
            heading: "Cómo Lo Ayudamos",
            items: [
              "Incumplimiento de contrato de compraventa — compradores y vendedores que no cumplen",
              "Disputas sobre depósitos en plica y procedimientos de interpleader",
              "Tergiversación del vendedor y no divulgación de defectos materiales conocidos",
              "Cumplimiento específico — obligar a una parte a completar la transacción acordada",
              "Disputas de contratos AS-IS sobre derechos de inspección y reclamaciones de rescisión",
              "Disputas con desarrolladores de nueva construcción incluyendo depósitos pre-construcción",
              "Acciones de título quieto para limpiar nubes sobre el título y establecer propiedad indiscutida",
              "Errores, brechas o quiebres en la cadena de título y escrituras fraudulentas",
              "Disputas post-cierre sobre defectos no divulgados y problemas de título",
              "Responsabilidad del agente de plica y reclamaciones por desembolso indebido de fondos",
            ],
          },
          approach: {
            eyebrow: "— NUESTRO ENFOQUE",
            heading: "Los Contratos Inmobiliarios Tienen Plazos Estrictos",
            body: "Los contratos de bienes raíces contienen plazos estrictos y requisitos de aviso que pueden afectar permanentemente sus derechos si se incumplen. Actuamos rápidamente cuando los clientes vienen a nosotros con una disputa inmobiliaria — evaluando el contrato, la conducta de las partes y la ley aplicable antes de asesorar sobre un curso de acción. Ya sea que el asunto pueda resolverse mediante negociación o requiera una acción de título quieto o litigio completo, perseguimos el resultado que mejor proteja sus intereses financieros.",
          },
        },
      },
      {
        num: "04",
        icon: "scale",
        title: "Litigio Civil",
        desc: "Defensa estratégica en incumplimiento de contrato, daños comerciales y disputas civiles complejas.",
        slug: "civil-litigation",
        detail: {
          heroSub:
            "Desde incumplimiento de contrato hasta daños comerciales — defensa hábil en cada fase del litigio.",
          intro:
            "Somos, en esencia, litigantes. El litigio civil es el proceso legal mediante el cual los individuos y las empresas resuelven disputas en los tribunales — buscando compensación por daños, ejecución de derechos legales o medidas cautelares para detener conductas ilícitas. En Matos Legal, representamos tanto a demandantes como a demandados en asuntos civiles que van desde simples disputas contractuales hasta litigios complejos con múltiples partes.",
          body: [
            "Manejamos cada fase del proceso de litigio civil: investigación y demanda pre-juicio, presentación o respuesta a demandas, descubrimiento escrito y documental, deposiciones, testigos expertos, práctica de mociones, mediación, juicio y — cuando es necesario — apelación.",
            "Nuestros años de experiencia en la ACLU de Florida y en la práctica civil privada en todo el Sur de la Florida nos brindan una amplitud de perspectiva — y un conjunto de herramientas estratégicas — que los abogados con enfoque estrecho simplemente no pueden igualar. Sin importar la naturaleza de su disputa, nuestro objetivo es el mismo: comprender su situación a fondo, asesorarle honestamente y perseguir el mejor resultado posible.",
          ],
          services: {
            heading: "Cómo Lo Ayudamos",
            items: [
              "Incumplimiento de contrato — contratos comerciales, acuerdos de servicio y pagarés",
              "Disputas de contratos de construcción y reclamaciones de subcontratistas",
              "Fraude, tergiversación negligente e inducción fraudulenta",
              "Interferencia tortuosa con relaciones o contratos comerciales",
              "Incumplimiento del deber fiduciario por oficiales, directores, socios o miembros administradores",
              "Hurto civil y conversión — apropiación ilícita de bienes bajo la ley de Florida",
              "Enriquecimiento injusto y reclamaciones equitativas",
              "Reclamaciones bajo la Ley de Prácticas Comerciales Desleales y Engañosas de Florida (FDUTPA)",
            ],
          },
          approach: {
            eyebrow: "— NUESTRO ENFOQUE",
            heading: "Estrategia Primero. Litigio Cuando Sea Necesario.",
            body: "No toda disputa requiere un tribunal. Comenzamos evaluando todos los caminos disponibles — negociación, mediación y arbitraje — porque resolver disputas de manera eficiente ahorra a nuestros clientes tiempo, dinero y estrés. Cuando el litigio es la decisión correcta, lo perseguimos con precisión en cada fase del proceso. La abogada Matos ha manejado asuntos civiles desde la demanda inicial hasta el juicio y la apelación en tribunales estatales y federales, aportando una profundidad de experiencia que marca una diferencia real.",
          },
        },
      },
      {
        num: "05",
        icon: "briefcase",
        title: "No Competencia y Disputas Comerciales",
        desc: "Ejecución y defensa de acuerdos de no competencia, disputas societarias y litigio de cobro de deudas.",
        slug: "non-compete-business",
        detail: {
          heroSub:
            "Protegiendo a empresas y profesionales en disputas de alto riesgo sobre competencia, propiedad societaria y deudas.",
          intro:
            "Las disputas de no competencia y no solicitud se han convertido en una de las áreas de litigio civil más frecuentes en Florida. El Estatuto de Florida § 542.335 crea un marco generalmente más favorable a la ejecución que la ley en muchos otros estados, lo que hace que la representación legal experimentada sea fundamentalmente importante para ambas partes. Representamos a empleadores que buscan hacer cumplir convenios restrictivos y a empleados y contratistas que luchan para que sean declarados inejecutables o reducidos.",
          body: [
            "También manejamos disputas de propiedad societaria y entre socios comerciales — que pueden ser algunos de los asuntos más cargados emocionalmente y financieramente que manejamos, porque a menudo involucran personas que alguna vez confiaron profundamente entre sí, y negocios que representan años de arduo trabajo e inversión compartida.",
            "Cuando alguien le debe dinero — o cuando usted es el destinatario de una demanda de cobro — representamos tanto a acreedores como a deudores hasta la sentencia. Nota: no manejamos trabajos de cobro post-sentencia como embargos o mandamientos de ejecución.",
          ],
          services: {
            heading: "Cómo Lo Ayudamos",
            items: [
              "Ejecución de no competencia — medidas cautelares para detener violaciones de acuerdos válidos",
              "Defensa contra reclamaciones de no competencia — impugnando alcance, duración y ejecutabilidad",
              "Protección de secretos comerciales bajo la Ley de Secretos Comerciales de Florida y la DTSA federal",
              "Ejecución y defensa de acuerdos de no solicitud para empleadores y empleados",
              "Acciones de sentencia declaratoria — obteniendo claridad antes de que el empleador presente demanda",
              "Disputas entre miembros de LLC — autoridad de gestión, distribuciones y expulsión de miembros",
              "Disputas entre accionistas — opresión de minorías, congelamiento y gobierno corporativo",
              "Disoluciones de sociedades y disputas sobre valoración de compra",
              "Demandas de cobro de deudas por obligaciones comerciales impagas y pagarés",
              "Defensa contra demandas de cobro, incluyendo violaciones de la FCCPA y la FDCPA",
            ],
          },
          approach: {
            eyebrow: "— NUESTRO ENFOQUE",
            heading: "Las Disputas de No Competencia Se Mueven a Velocidad de Emergencia",
            body: "Los empleadores frecuentemente solicitan órdenes de restricción temporal dentro de días de la salida de un empleado — lo que significa que no hay tiempo que perder. Respondemos rápida y contundentemente para proteger a nuestros clientes en ambos lados de estas disputas. Ya sea que sea un empleador que intenta proteger sus relaciones comerciales y secretos comerciales, o un empleado cuyo sustento está en riesgo, proporcionamos la representación experimentada y estratégica que estos asuntos de movimiento rápido exigen.",
          },
        },
      },
      {
        num: "06",
        icon: "users",
        title: "Lesiones Personales",
        desc: "Buscamos justicia para los lesionados por negligencia con compasión y dedicación.",
        slug: "personal-injury",
        detail: {
          heroSub:
            "Sin honorarios a menos que recuperemos. Dedicación total a su caso desde el primer día.",
          intro:
            "Cuando usted o un ser querido sufre una lesión por negligencia de otra persona, todo puede cambiar en un instante. Las facturas médicas se acumulan, los ingresos se detienen, y la compañía de seguros comienza a velar por sus propios intereses — no los suyos. La abogada Rosalind J. Matos está de su lado desde el momento en que llama.",
          body: [
            "Manejamos casos de lesiones personales derivados de accidentes automovilísticos, responsabilidad de locales, caídas y otras lesiones basadas en negligencia en todo el Sur de la Florida. Nuestro bufete investiga cada caso a fondo, trabajando con proveedores médicos y especialistas en reconstrucción de accidentes cuando es necesario para construir la reclamación más sólida posible.",
            "Los casos de lesiones personales se manejan en base a honorarios contingentes — no paga honorarios de abogado a menos que recuperemos compensación para usted. Anticipamos todos los costos del caso y somos compensados solo cuando ganamos.",
          ],
          services: {
            heading: "Cómo Lo Ayudamos",
            items: [
              "Accidentes automovilísticos y reclamaciones por choques",
              "Caídas y responsabilidad de locales",
              "Negociación con compañías de seguros",
              "Documentación de lesiones y tratamiento médico",
              "Reclamación de salarios perdidos e ingresos futuros",
              "Daños por dolor y sufrimiento",
              "Reclamaciones por muerte injusta",
              "Representación en juicio cuando los aseguradores no ofrecen compensación justa",
            ],
          },
          approach: {
            eyebrow: "— NUESTRO ENFOQUE",
            heading: "Su Recuperación Es Nuestra Prioridad",
            body: "Las compañías de seguros tienen equipos de ajustadores y abogados cuyo trabajo es minimizar lo que le pagan. Nuestro trabajo es lo opuesto — maximizar su recuperación y asegurar que cada elemento de sus daños esté correctamente documentado, valorado y reclamado. Nos encargamos de todo, desde la investigación hasta el acuerdo o el juicio, para que pueda concentrarse en lo que más importa: recuperarse.",
          },
        },
      },
      {
        num: "07",
        icon: "gavel",
        title: "Litigio de Derechos Civiles",
        desc: "Casos selectos de derechos civiles y constitucionales — manejados con convicción y experiencia de la ACLU.",
        slug: "civil-rights",
        detail: {
          heroSub:
            "Derechos constitucionales defendidos con convicción. Formación de la ACLU. Sin miedo.",
          intro:
            "Antes de entrar en la práctica privada, la abogada Rosalind J. Matos adquirió extensa experiencia en litigio de derechos civiles durante casi ocho años como Abogada de Personal del Sur de la Florida para la Unión Americana de Libertades Civiles de Florida — una de las organizaciones de libertades civiles más respetadas del país. Esa experiencia, fundamentada en el derecho constitucional y en la creencia de que los derechos de cada persona merecen ser tomados en serio, moldea la forma en que abordamos cada caso que manejamos hoy.",
          body: [
            "Si bien el litigio de derechos civiles no es el enfoque principal de nuestra práctica actual, continuamos aceptando asuntos selectos de derechos civiles donde creemos que podemos marcar una diferencia significativa y duradera. Evaluamos todas las consultas de derechos civiles de manera honesta y cuidadosa — si creemos que podemos ayudar, se lo diremos. Si su asunto es mejor manejado por otro abogado u organización, también se lo diremos y haremos nuestro mejor esfuerzo para orientarle en la dirección correcta.",
            "Toda persona merece que sus derechos sean tomados en serio.",
          ],
          services: {
            heading: "Casos Que Podemos Aceptar",
            items: [
              "Violaciones de igual protección y debido proceso derivadas de la acción gubernamental",
              "Reclamaciones bajo la Sección 1983 contra funcionarios gubernamentales estatales y locales",
              "Primera Enmienda — libertad de expresión, asociación o petición",
              "Cuarta Enmienda — registro y arresto ilegal",
              "Reclamaciones de derechos civiles relacionadas con bienes raíces — préstamos discriminatorios y desahucio",
              "Mala conducta policial y fuerza excesiva",
              "Perfilamiento racial y étnico",
              "Arresto ilegal y encarcelamiento falso",
            ],
          },
          approach: {
            eyebrow: "— NUESTRO ENFOQUE",
            heading: "Experimentada. Honesta. Comprometida.",
            body: "Estos casos son complejos, a menudo involucrando inmunidad calificada y otras defensas gubernamentales. Comenzamos con una cuidadosa investigación fáctica, revisando toda la evidencia disponible antes de asesorar sobre la viabilidad. Cuando los hechos apoyan una reclamación, la perseguimos con precisión y convicción — en tribunal estatal, federal y en el registro público. Los ocho años de la abogada Matos en la ACLU significan que tiene a alguien en su equipo que lleva mucho tiempo luchando estas batallas.",
          },
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
  practiceDetailCta: {
    headlineStart: "¿Necesita",
    headlineAccent: "Ayuda Legal",
    headlineEnd: "?",
    sub: "Contáctenos hoy para una consulta telefónica gratuita. Sin obligación — solo respuestas claras.",
    cta: "Contáctenos",
    phone: "954-531-5658",
  },
  exploreMore: "Otras Áreas de Práctica",
  learnMore: "Más Información",
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
    headlineStart: "Contacte a",
    headlineAccent: "Matos Legal",
    subhead:
      "Consulta telefónica gratuita. Sin obligación. Solo respuestas claras y orientación honesta.",
    address:
      "Lakeside Executive Suites, 2645 Executive Park Drive, Ste. 676, Weston FL 33331",
    formCard: {
      eyebrow: "— CONSULTA GRATUITA",
      headlineStart: "Envíenos Un",
      headlineAccent: "Mensaje",
      sub: "Complete este formulario para programar una consulta telefónica GRATUITA. ¡Esperamos saber de usted!",
    },
    reachUs: {
      eyebrow: "— CONTÁCTENOS",
      heading: "Comuníquese",
      office: "OFICINA",
      phoneLabel: "TELÉFONO",
      emailLabel: "CORREO",
    },
    formTitle: "Envíenos un Mensaje",
    formFields: {
      name: "Nombre",
      firstName: "Nombre",
      lastName: "Apellido",
      email: "Correo Electrónico",
      phone: "Número de Teléfono",
      matter: "Tipo de Asunto",
      message: "Mensaje",
      submit: "Enviar",
      disclaimer:
        "El envío de este formulario no crea una relación abogado-cliente. No se hace ni se implica ninguna garantía de un resultado particular.",
      success: "¡Gracias! Nos comunicaremos con usted en un día hábil.",
      matters: [
        "Defensa ante Ejecución Hipotecaria",
        "Disputa Arrendador-Inquilino",
        "Disputa Inmobiliaria",
        "Litigio Civil",
        "No Competencia / Disputa Comercial",
        "Lesiones Personales",
        "Derechos Civiles",
        "Otro",
      ],
    },
  },
  resources: {
    eyebrow: "— ENLACES ÚTILES",
    headlineStart: "Recursos",
    headlineAccent: "Legales",
    subhead:
      "Registros de tribunales, tasadores de propiedades y organizaciones legales de confianza en el Sur de la Florida.",
    categories: [
      {
        num: "01",
        icon: "landmark",
        title: "Registros de Tribunales y Propiedades",
        links: [
          { label: "Búsqueda de Casos Públicos de Broward", url: "https://www.browardclerk.org/" },
          { label: "Tasador de Propiedades del Condado de Broward", url: "https://www.bcpa.net/" },
          { label: "Búsqueda de Registros Oficiales de Broward", url: "https://officialrecords.broward.org/" },
          { label: "Búsqueda de Casos del Tribunal de Miami-Dade", url: "https://www.miami-dadeclerk.com/" },
          { label: "Tasador de Propiedades de Miami-Dade", url: "https://www.miamidade.gov/pa/" },
          { label: "Búsqueda de Registros Oficiales de Miami-Dade", url: "https://onlineservices.miami-dadeclerk.com/" },
          { label: "Registros del Tribunal de Palm Beach", url: "https://www.mypalmbeachclerk.com/" },
          { label: "Tasador de Propiedades de Palm Beach", url: "https://pbcpao.gov/" },
          { label: "Registros Oficiales de Palm Beach", url: "https://or.pbcgov.com/" },
        ],
      },
      {
        num: "02",
        icon: "book-open",
        title: "Organizaciones Legales",
        links: [
          { label: "Estatutos de Florida en Línea", url: "https://www.leg.state.fl.us/statutes/" },
          { label: "El Colegio de Abogados de Florida", url: "https://www.floridabar.org/" },
          { label: "Tribunal de Apelaciones del Tercer Distrito", url: "https://3dca.flcourts.org/" },
          { label: "Tribunal de Apelaciones del Cuarto Distrito", url: "https://4dca.flcourts.org/" },
          { label: "Servicio de Asistencia Legal del Condado de Broward", url: "https://legalaid.org/" },
          { label: "Servicios Legales del Gran Miami", url: "https://www.lsgmi.org/" },
          { label: "Sociedad de Asistencia Legal del Condado de Palm Beach", url: "https://www.legalaidpbc.org/" },
          { label: "Fiscal General de Florida", url: "https://myfloridalegal.com/" },
        ],
      },
    ],
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
