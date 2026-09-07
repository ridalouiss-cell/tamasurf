/* ============================================================
   TAMASURF: behaviour only (no animation library)
   ============================================================ */

/* ---------- i18n: EN / FR / ES dictionary ---------- */
const I18N = {
  en: {
    nav_packages: "Packages", nav_about: "About", nav_activities: "Activities", nav_reviews: "Reviews",
    nav_book: "Book via WhatsApp",
    hero_cta_book: "Book Your Session", hero_cta_packages: "View Packages",
    hero_sub: "Top-Rated Surf Coach in Tamraght, Taghazout & Aourir",
    hero_tagline_1: "Whether you're a beginner or chasing barrels,",
    hero_tagline_2: "we've got the perfect wave for you.",
    hero_sr: ": Surf Lessons & Coaching in Taghazout, Morocco",

    courses_eyebrow: "Courses", courses_title: "Find Your Wave",
    courses_sub: "From your first wave to uncrowded lineups, I've got the right session for you.",
    lbl_from: "Starting from",
    unit_person_2h_group: "/ person, 2h group",
    unit_person_per_day: "/ person, per day",
    unit_person_group: "/ person, group",
    unit_person: "/ person",
    feat_2h_lesson: "2h lesson: 40€ private / 35€ group",
    feat_full_day: "Full day: 45€ private / 40€ group",
    feat_full_day_breakdown: "Full day = 2h lesson + beach lunch + 2h free surf",
    feat_board_wetsuit: "Board & wetsuit included",
    feat_transport: "Transport included",
    feat_best_spot: "Best spot of the day, chosen daily",
    feat_small_groups: "Small groups, all levels welcome",
    feat_local_knowledge: "Local knowledge & surf etiquette",
    feat_equipment_request: "Equipment available on request",
    btn_book_now: "Book Now",

    pkg1_title: "Beginner Surf Lesson",
    pkg1_desc: "Your first steps into surfing: warm-up, paddling, the take-off and riding your first waves, in a relaxed and supportive setting.",
    pkg2_title: "Green Wave Surf Lesson",
    pkg2_desc: "Ready to leave the whitewater? Work on wave selection, timing, positioning and proper take-offs on clean unbroken waves.",
    pkg3_title: "Intermediate Lesson",
    pkg3_desc: "Already catching green waves? Refine your turns, speed generation and linking manoeuvres.",
    pkg4_title: "Surf Guiding",
    pkg4_desc: "Daily guiding to the best spot based on swell, wind, tides and your level. Uncrowded lineups.",

    activities_eyebrow: "Activities", activities_title: "Beyond the Waves",
    activities_sub: "Explore Morocco's most unforgettable adventures on land and in the mountains.",
    gallery_eyebrow: "Gallery", gallery_title: "Moments on the Water",
    gallery_sub: "Snapshots from students learning to surf, conquering waves, and celebrating the Moroccan coast.",
    act1_title: "Surfskate",
    act1_desc: "Improve your balance, flow and turning technique on land. Perfect training to boost your surf skills before you paddle out.",
    feat_act1_price: "Private 25€ / Group 20€ per person",
    feat_surfskate_provided: "Surfskate provided",
    feat_balance_flow: "Balance, flow & turning technique",
    feat_great_training: "Great training for the water",
    act2_title: "Sand Dunes",
    act2_desc: "Guided trip to the Timlaline Sand Dunes: sandboarding, desert views and traditional Moroccan tea.",
    feat_min_3: "Minimum 3 people",
    feat_sandboarding: "Sandboarding & desert views",
    feat_moroccan_tea: "Traditional Moroccan tea",
    act3_title: "Paradise Valley",
    act3_desc: "A guided excursion to a hidden mountain oasis in the Atlas: natural pools, palm groves and mountain scenery.",
    feat_hidden_oasis: "Hidden oasis in the Atlas",
    feat_natural_pools: "Natural pools & palm groves",

    about_welcome_top: "Welcome to",
    about_us_heading: "About me",
    about_us_text: "I grew up in the small village of Tamawanza, right by the ocean, and started surfing at the age of 10. Surfing is more than a sport to me. It's my lifestyle. As a surf coach, I'm passionate about sharing my experience and love for the ocean with others.",
    mission_heading: "My vision",
    mission_text: "From surfing and surfskating to swimming, diving and fishing, the ocean is where I feel at home. I love helping every surfer, beginner to advanced, feel confident, safe and stoked in the water.",
    stat_students: "Students coached", stat_rating: "Google Rating", stat_years: "Years of experience",

    process_eyebrow: "Process", process_title: "Your Surf Day, Step by Step",
    process_sub: "Learning to surf made easy, safe and fun. No experience needed.",
    p1_title: "Book",
    p1_text: "Send me a message on WhatsApp and tell me your dates and level, and I'll help you pick the session that fits you best.",
    p2_title: "Meet & Warm Up",
    p2_text: "We meet on the sand, loosen up together and go through a quick safety briefing so you feel ready before we paddle out.",
    p3_title: "Lesson",
    p3_text: "Two hours in the water with me, one-on-one or in a small group, with feedback tailored to exactly where you are.",
    p4_title: "Lunch at the Beach",
    p4_text: "On full-day packages we share a fresh lunch on the beach. Time to rest, refuel and swap stories before the next surf.",
    p5_title: "Free Surf",
    p5_text: "Two more hours to put it all into practice and just enjoy the waves, with me close by whenever you need a hand.",
    p6_title: "Progress",
    p6_text: "We look back on how your session went and map out your next step, from whitewater to green waves to point breaks.",

    tst_eyebrow: "Testimonials", tst_title: "Riders' Words",
    tst_sub: "Real stories from surfers who paddled out with Youness and fell in love with Morocco's waves.",
    tst_google_review: "Google review",

    faq_eyebrow: "FAQs", faq_title: "Got Questions?",
    faq_sub: "Everything you need to know before you grab your board and hit the waves.",
    faq_q1: "Do I need any surfing experience to join?",
    faq_a1: "Not at all. Our beginner courses start from zero. We cover everything from safety and paddling to catching your first waves. All levels are welcome.",
    faq_q2: "What's included in the price?",
    faq_a2: "Every session includes your board, wetsuit, and expert coaching. Group sessions also include transport to the best spot of the day.",
    faq_q3: "Are lessons available for kids?",
    faq_a3: "Yes! We offer dedicated kids' and teens' sessions with smaller groups, softer boards and extra supervision in safe, gentle conditions.",
    faq_q4: "Can I book a private lesson?",
    faq_a4: "Absolutely. Private lessons give you one-on-one coaching tailored to your goals and pace. Just message us on WhatsApp to arrange a time.",
    faq_q5: "How long is a typical session?",
    faq_a5: "A standard session runs about 2 hours in the water, plus warm-up and a safety briefing. Full-day packages include a lunch break on the beach.",

    cta_title: "Ready to catch your first wave?",
    cta_text: "Tell me your dates and your level on WhatsApp, and I’ll help you pick the session that fits and answer any question before you book.",

    footer_about: "About me", footer_how: "How it works", footer_faq: "FAQ", footer_contact: "Contact",
  },

  fr: {
    nav_packages: "Forfaits", nav_about: "À propos", nav_activities: "Activités", nav_reviews: "Avis",
    nav_book: "Réserver via WhatsApp",
    hero_cta_book: "Réservez votre session", hero_cta_packages: "Voir les forfaits",
    hero_sub: "Coach de surf le mieux noté à Tamraght, Taghazout & Aourir",
    hero_tagline_1: "Débutant ou en quête de tubes,",
    hero_tagline_2: "on a la vague parfaite pour vous.",
    hero_sr: " : Cours et coaching de surf à Taghazout, Maroc",

    courses_eyebrow: "Cours", courses_title: "Trouvez votre vague",
    courses_sub: "De votre première vague aux spots sans foule, j'ai la session qu'il vous faut.",
    lbl_from: "À partir de",
    unit_person_2h_group: "/ personne, 2h en groupe",
    unit_person_per_day: "/ personne, par jour",
    unit_person_group: "/ personne, groupe",
    unit_person: "/ personne",
    feat_2h_lesson: "Cours de 2h : 40€ en privé / 35€ en groupe",
    feat_full_day: "Journée complète : 45€ en privé / 40€ en groupe",
    feat_full_day_breakdown: "Journée complète = cours de 2h + déjeuner sur la plage + 2h de surf libre",
    feat_board_wetsuit: "Planche et combinaison incluses",
    feat_transport: "Transport inclus",
    feat_best_spot: "Meilleur spot du jour, choisi chaque jour",
    feat_small_groups: "Petits groupes, tous niveaux bienvenus",
    feat_local_knowledge: "Connaissance locale et étiquette du surf",
    feat_equipment_request: "Équipement disponible sur demande",
    btn_book_now: "Réserver",

    pkg1_title: "Cours de surf débutant",
    pkg1_desc: "Vos premiers pas dans le surf : échauffement, pagayage, le take-off et vos premières vagues, dans une ambiance détendue et bienveillante.",
    pkg2_title: "Cours de surf vague verte",
    pkg2_desc: "Prêt à quitter la mousse ? Travaillez le choix de la vague, le timing, le positionnement et le take-off sur des vagues propres et non déferlées.",
    pkg3_title: "Cours intermédiaire",
    pkg3_desc: "Vous surfez déjà les vagues vertes ? Peaufinez vos virages, votre génération de vitesse et l'enchâînement de manœuvres.",
    pkg4_title: "Guidage surf",
    pkg4_desc: "Guidage quotidien vers le meilleur spot selon la houle, le vent, les marées et votre niveau. Des spots sans foule.",

    activities_eyebrow: "Activités", activities_title: "Au-delà des vagues",
    activities_sub: "Découvrez les aventures les plus inoubliables du Maroc, sur terre et en montagne.",
    gallery_eyebrow: "Galerie", gallery_title: "Moments sur l'eau",
    gallery_sub: "Des images d'étudiants apprenant à surfer, conquérant les vagues et célébrant la côte marocaine.",
    act1_title: "Surfskate",
    act1_desc: "Améliorez votre équilibre, votre fluidité et vos virages sur terre. L'entraînement parfait pour progresser en surf avant de retourner à l'eau.",
    feat_act1_price: "Privé 25€ / Groupe 20€ par personne",
    feat_surfskate_provided: "Surfskate fourni",
    feat_balance_flow: "Équilibre, fluidité et virages",
    feat_great_training: "Excellent entraînement pour l'eau",
    act2_title: "Dunes de sable",
    act2_desc: "Excursion guidée aux dunes de Timlaline : sandboard, vues sur le désert et thé marocain traditionnel.",
    feat_min_3: "Minimum 3 personnes",
    feat_sandboarding: "Sandboard et vues sur le désert",
    feat_moroccan_tea: "Thé marocain traditionnel",
    act3_title: "Paradise Valley",
    act3_desc: "Une excursion guidée vers une oasis cachée dans les montagnes de l'Atlas : piscines naturelles, palmeraies et paysages de montagne.",
    feat_hidden_oasis: "Oasis cachée dans l'Atlas",
    feat_natural_pools: "Piscines naturelles et palmeraies",

    about_welcome_top: "Bienvenue chez",
    about_us_heading: "À propos de moi",
    about_us_text: "J'ai grandi dans le petit village de Tamawanza, juste au bord de l'océan, et j'ai commencé à surfer à l'âge de 10 ans. Le surf est bien plus qu'un sport pour moi, c'est mon mode de vie. En tant que coach de surf, j'aime partager mon expérience et ma passion pour l'océan avec les autres.",
    mission_heading: "Ma vision",
    mission_text: "Du surf et surfskate à la natation, la plongée et la pêche, l'océan est l'endroit où je me sens chez moi. J'adore aider chaque surfeur, du débutant au confirmé, à se sentir confiant, en sécurité et stoké dans l'eau.",
    stat_students: "Élèves coachés", stat_rating: "Note Google", stat_years: "Années d'expérience",

    process_eyebrow: "Déroulement", process_title: "Votre journée de surf, étape par étape",
    process_sub: "Apprendre à surfer, en toute simplicité, sécurité et plaisir. Aucune expérience requise.",
    p1_title: "Réservez",
    p1_text: "Envoyez-moi un message sur WhatsApp avec vos dates et votre niveau, et je vous aiderai à choisir la session qui vous convient le mieux.",
    p2_title: "Rencontre et échauffement",
    p2_text: "On se retrouve sur le sable, on s'échauffe ensemble et on fait un point sécurité rapide pour que vous soyez prêt avant de partir à l'eau.",
    p3_title: "Cours",
    p3_text: "Deux heures dans l'eau avec moi, en individuel ou en petit groupe, avec des conseils adaptés à votre niveau exact.",
    p4_title: "Déjeuner sur la plage",
    p4_text: "Pour les formules à la journée, nous partageons un déjeuner frais sur la plage. Le temps de se reposer, se ressourcer et échanger avant la prochaine session.",
    p5_title: "Surf libre",
    p5_text: "Deux heures supplémentaires pour mettre tout en pratique et profiter des vagues, avec moi à proximité dès que vous avez besoin d'aide.",
    p6_title: "Progression",
    p6_text: "On revient sur le déroulement de votre session et on définit votre prochaine étape, de la mousse aux vagues vertes jusqu'aux point breaks.",

    tst_eyebrow: "Témoignages", tst_title: "Paroles de surfeurs",
    tst_sub: "De vraies histoires de surfeurs partis à l'eau avec Youness et tombés amoureux des vagues du Maroc.",
    tst_google_review: "Avis Google",

    faq_eyebrow: "FAQ", faq_title: "Des questions ?",
    faq_sub: "Tout ce que vous devez savoir avant de prendre votre planche et de partir à l'eau.",
    faq_q1: "Ai-je besoin d'expérience en surf pour participer ?",
    faq_a1: "Pas du tout. Nos cours débutants partent de zéro. Nous couvrons tout, de la sécurité à la pagaie jusqu'à vos premières vagues. Tous les niveaux sont les bienvenus.",
    faq_q2: "Qu'est-ce qui est inclus dans le prix ?",
    faq_a2: "Chaque session comprend votre planche, votre combinaison et un coaching expert. Les sessions en groupe incluent aussi le transport vers le meilleur spot du jour.",
    faq_q3: "Des cours sont-ils disponibles pour les enfants ?",
    faq_a3: "Oui ! Nous proposons des sessions dédiées aux enfants et aux ados, avec des groupes réduits, des planches plus souples et une supervision renforcée dans des conditions douces et sûres.",
    faq_q4: "Puis-je réserver un cours privé ?",
    faq_a4: "Bien sûr. Les cours privés vous offrent un coaching individuel adapté à vos objectifs et à votre rythme. Il vous suffit de nous écrire sur WhatsApp pour convenir d'un horaire.",
    faq_q5: "Combien de temps dure une session type ?",
    faq_a5: "Une session standard dure environ 2 heures dans l'eau, plus l'échauffement et le point sécurité. Les formules à la journée incluent une pause déjeuner sur la plage.",

    cta_title: "Prêt à attraper votre première vague ?",
    cta_text: "Envoyez-moi vos dates et votre niveau sur WhatsApp, je vous aiderai à choisir la session adaptée et répondrai à toutes vos questions avant de réserver.",

    footer_about: "À propos de moi", footer_how: "Comment ça marche", footer_faq: "FAQ", footer_contact: "Contact",
  },

  es: {
    nav_packages: "Paquetes", nav_about: "Sobre nosotros", nav_activities: "Actividades", nav_reviews: "Opiniones",
    nav_book: "Reservar por WhatsApp",
    hero_cta_book: "Reserva tu sesión", hero_cta_packages: "Ver paquetes",
    hero_sub: "Instructor de surf mejor calificado en Tamraght, Taghazout & Aourir",
    hero_tagline_1: "Ya seas principiante o busques tubos,",
    hero_tagline_2: "tenemos la ola perfecta para ti.",
    hero_sr: ": Clases y coaching de surf en Taghazout, Marruecos",

    courses_eyebrow: "Cursos", courses_title: "Encuentra tu ola",
    courses_sub: "Desde tu primera ola hasta los picos menos concurridos, tengo la sesión perfecta para ti.",
    lbl_from: "Desde",
    unit_person_2h_group: "/ persona, 2h en grupo",
    unit_person_per_day: "/ persona, por día",
    unit_person_group: "/ persona, grupo",
    unit_person: "/ persona",
    feat_2h_lesson: "Clase de 2h: 40€ privada / 35€ grupal",
    feat_full_day: "Día completo: 45€ privada / 40€ grupal",
    feat_full_day_breakdown: "Día completo = clase de 2h + almuerzo en la playa + 2h de surf libre",
    feat_board_wetsuit: "Tabla y traje de neopreno incluidos",
    feat_transport: "Transporte incluido",
    feat_best_spot: "Mejor pico del día, elegido a diario",
    feat_small_groups: "Grupos pequeños, todos los niveles bienvenidos",
    feat_local_knowledge: "Conocimiento local y etiqueta del surf",
    feat_equipment_request: "Equipo disponible bajo petición",
    btn_book_now: "Reservar",

    pkg1_title: "Clase de surf para principiantes",
    pkg1_desc: "Tus primeros pasos en el surf: calentamiento, remada, el despegue y tus primeras olas, en un ambiente relajado y de apoyo.",
    pkg2_title: "Clase de surf de ola verde",
    pkg2_desc: "¿Listo para dejar la espuma? Trabaja la selección de olas, el timing, el posicionamiento y el despegue en olas limpias y sin romper.",
    pkg3_title: "Clase de nivel intermedio",
    pkg3_desc: "¿Ya coges olas verdes? Perfecciona tus giros, la generación de velocidad y el enlace de maniobras.",
    pkg4_title: "Guía de surf",
    pkg4_desc: "Guía diaria al mejor pico según el oleaje, el viento, las mareas y tu nivel. Picos sin gente.",

    activities_eyebrow: "Actividades", activities_title: "Más allá de las olas",
    activities_sub: "Descubre las aventuras más inolvidables de Marruecos, en tierra y en las montañas.",
    gallery_eyebrow: "Galería", gallery_title: "Momentos en el agua",
    gallery_sub: "Instantáneas de estudiantes aprendiendo a surfear, conquistando olas y celebrando la costa marroquí.",
    act1_title: "Surfskate",
    act1_desc: "Mejora tu equilibrio, fluidez y técnica de giro en tierra. El entrenamiento perfecto para mejorar tu surf antes de remar.",
    feat_act1_price: "Privada 25€ / Grupal 20€ por persona",
    feat_surfskate_provided: "Surfskate incluido",
    feat_balance_flow: "Equilibrio, fluidez y técnica de giro",
    feat_great_training: "Excelente entrenamiento para el agua",
    act2_title: "Dunas de arena",
    act2_desc: "Excursión guiada a las dunas de Timlaline: sandboard, vistas al desierto y té marroquí tradicional.",
    feat_min_3: "Mínimo 3 personas",
    feat_sandboarding: "Sandboard y vistas al desierto",
    feat_moroccan_tea: "Té marroquí tradicional",
    act3_title: "Paradise Valley",
    act3_desc: "Una excursión guiada a un oasis escondido en las montañas del Atlas: piscinas naturales, palmerales y paisajes de montaña.",
    feat_hidden_oasis: "Oasis escondido en el Atlas",
    feat_natural_pools: "Piscinas naturales y palmerales",

    about_welcome_top: "Bienvenido a",
    about_us_heading: "Sobre mí",
    about_us_text: "Crecí en el pequeño pueblo de Tamawanza, justo junto al océano, y empecé a surfear a los 10 años. El surf es mucho más que un deporte para mí, es mi estilo de vida. Como entrenador de surf, me apasiona compartir mi experiencia y mi amor por el océano con los demás.",
    mission_heading: "Mi visión",
    mission_text: "Desde el surf y el surfskate hasta la natación, el buceo y la pesca, el océano es donde me siento en casa. Me encanta ayudar a cada surfista, de principiante a avanzado, a sentirse seguro, protegido y feliz en el agua.",
    stat_students: "Estudiantes entrenados", stat_rating: "Calificación de Google", stat_years: "Años de experiencia",

    process_eyebrow: "Proceso", process_title: "Tu día de surf, paso a paso",
    process_sub: "Aprender a surfear de forma fácil, segura y divertida. No se necesita experiencia.",
    p1_title: "Reserva",
    p1_text: "Envíame un mensaje por WhatsApp con tus fechas y tu nivel, y te ayudaré a elegir la sesión perfecta para ti.",
    p2_title: "Encuentro y calentamiento",
    p2_text: "Nos encontramos en la arena, calentamos juntos y repasamos rápidamente la seguridad para que estés listo antes de remar.",
    p3_title: "Clase",
    p3_text: "Dos horas en el agua conmigo, individual o en grupo reducido, con comentarios adaptados exactamente a tu nivel.",
    p4_title: "Almuerzo en la playa",
    p4_text: "En los paquetes de día completo compartimos un almuerzo fresco en la playa. Tiempo para descansar, recargar energías y charlar antes de la siguiente sesión.",
    p5_title: "Surf libre",
    p5_text: "Dos horas más para poner todo en práctica y disfrutar de las olas, conmigo cerca por si necesitas una mano.",
    p6_title: "Progreso",
    p6_text: "Repasamos cómo fue tu sesión y planificamos tu próximo paso, desde la espuma hasta las olas verdes y los point breaks.",

    tst_eyebrow: "Testimonios", tst_title: "Palabras de surfistas",
    tst_sub: "Historias reales de surfistas que remaron junto a Youness y se enamoraron de las olas de Marruecos.",
    tst_google_review: "Reseña de Google",

    faq_eyebrow: "Preguntas frecuentes", faq_title: "¿Tienes preguntas?",
    faq_sub: "Todo lo que necesitas saber antes de coger tu tabla y salir al agua.",
    faq_q1: "¿Necesito experiencia en surf para participar?",
    faq_a1: "Para nada. Nuestros cursos para principiantes empiezan desde cero. Cubrimos todo, desde la seguridad y la remada hasta coger tus primeras olas. Todos los niveles son bienvenidos.",
    faq_q2: "¿Qué incluye el precio?",
    faq_a2: "Cada sesión incluye tu tabla, traje de neopreno y coaching experto. Las sesiones grupales también incluyen el transporte al mejor pico del día.",
    faq_q3: "¿Hay clases disponibles para niños?",
    faq_a3: "¡Sí! Ofrecemos sesiones dedicadas para niños y adolescentes, con grupos más pequeños, tablas más blandas y supervisión adicional en condiciones seguras y suaves.",
    faq_q4: "¿Puedo reservar una clase privada?",
    faq_a4: "Por supuesto. Las clases privadas te ofrecen coaching individual adaptado a tus objetivos y tu ritmo. Solo escríbenos por WhatsApp para acordar un horario.",
    faq_q5: "¿Cuánto dura una sesión típica?",
    faq_a5: "Una sesión estándar dura unas 2 horas en el agua, más el calentamiento y la charla de seguridad. Los paquetes de día completo incluyen una pausa para almorzar en la playa.",

    cta_title: "¿Listo para coger tu primera ola?",
    cta_text: "Cuéntame tus fechas y tu nivel por WhatsApp, te ayudaré a elegir la sesión ideal y responderé cualquier pregunta antes de reservar.",

    footer_about: "Sobre mí", footer_how: "Cómo funciona", footer_faq: "Preguntas frecuentes", footer_contact: "Contacto",
  },

  de: {
    nav_packages: "Angebote", nav_about: "Über mich", nav_activities: "Aktivitäten", nav_reviews: "Bewertungen",
    nav_book: "Über WhatsApp buchen",
    hero_cta_book: "Session buchen", hero_cta_packages: "Angebote ansehen",
    hero_sub: "Bestbewerteter Surfcoach in Tamraght, Taghazout & Aourir",
    hero_tagline_1: "Ob Anfänger oder auf der Jagd nach Barrels,",
    hero_tagline_2: "wir haben die perfekte Welle für dich.",
    hero_sr: ": Surfkurse und Coaching in Taghazout, Marokko",

    courses_eyebrow: "Kurse", courses_title: "Finde deine Welle",
    courses_sub: "Von deiner ersten Welle bis zu leeren Line-ups: Ich habe die passende Session für dich.",
    lbl_from: "Ab",
    unit_person_2h_group: "/ Person, 2 Std. Gruppe",
    unit_person_per_day: "/ Person, pro Tag",
    unit_person_group: "/ Person, Gruppe",
    unit_person: "/ Person",
    feat_2h_lesson: "2 Std. Kurs: 40€ privat / 35€ Gruppe",
    feat_full_day: "Ganzer Tag: 45€ privat / 40€ Gruppe",
    feat_full_day_breakdown: "Ganzer Tag = 2 Std. Kurs + Mittagessen am Strand + 2 Std. freies Surfen",
    feat_board_wetsuit: "Board und Neoprenanzug inklusive",
    feat_transport: "Transport inklusive",
    feat_best_spot: "Bester Spot des Tages, täglich neu gewählt",
    feat_small_groups: "Kleine Gruppen, alle Level willkommen",
    feat_local_knowledge: "Lokales Wissen und Surf-Etikette",
    feat_equipment_request: "Ausrüstung auf Anfrage verfügbar",
    btn_book_now: "Jetzt buchen",

    pkg1_title: "Surfkurs für Anfänger",
    pkg1_desc: "Deine ersten Schritte im Surfen: Aufwärmen, Paddeln, der Take-off und deine ersten Wellen, in entspannter Atmosphäre.",
    pkg2_title: "Green-Wave-Surfkurs",
    pkg2_desc: "Bereit, das Weißwasser hinter dir zu lassen? Wir arbeiten an Wellenauswahl, Timing, Positionierung und sauberen Take-offs auf ungebrochenen Wellen.",
    pkg3_title: "Fortgeschrittenen-Kurs",
    pkg3_desc: "Du surfst schon grüne Wellen? Verfeinere deine Turns, dein Tempo und das Verbinden von Manövern.",
    pkg4_title: "Surf Guiding",
    pkg4_desc: "Tägliches Guiding zum besten Spot je nach Swell, Wind, Gezeiten und deinem Level. Line-ups ohne Gedränge.",

    activities_eyebrow: "Aktivitäten", activities_title: "Mehr als nur Wellen",
    activities_sub: "Entdecke die unvergesslichsten Abenteuer Marokkos, an Land und in den Bergen.",
    gallery_eyebrow: "Galerie", gallery_title: "Momente auf dem Wasser",
    gallery_sub: "Schnappschüsse von Schülern, die surfen lernen, Wellen erobern und die marokkanische Küste feiern.",
    act1_title: "Surfskate",
    act1_desc: "Verbessere Balance, Flow und Kurventechnik an Land. Das perfekte Training für dein Surfen, bevor du ins Wasser gehst.",
    feat_act1_price: "Privat 25€ / Gruppe 20€ pro Person",
    feat_surfskate_provided: "Surfskate wird gestellt",
    feat_balance_flow: "Balance, Flow und Kurventechnik",
    feat_great_training: "Top-Training fürs Wasser",
    act2_title: "Sanddünen",
    act2_desc: "Geführter Ausflug zu den Timlaline-Sanddünen: Sandboarding, Wüstenblick und traditioneller marokkanischer Tee.",
    feat_min_3: "Mindestens 3 Personen",
    feat_sandboarding: "Sandboarding und Wüstenblick",
    feat_moroccan_tea: "Traditioneller marokkanischer Tee",
    act3_title: "Paradise Valley",
    act3_desc: "Eine geführte Tour zu einer versteckten Bergoase im Atlas: Naturpools, Palmenhaine und Bergpanorama.",
    feat_hidden_oasis: "Versteckte Oase im Atlas",
    feat_natural_pools: "Naturpools und Palmenhaine",

    about_welcome_top: "Willkommen bei",
    about_us_heading: "Über mich",
    about_us_text: "Ich bin im kleinen Dorf Tamawanza direkt am Meer aufgewachsen und habe mit 10 Jahren mit dem Surfen angefangen. Surfen ist für mich viel mehr als ein Sport, es ist mein Lebensstil. Als Surfcoach teile ich meine Erfahrung und meine Liebe zum Ozean mit Leidenschaft.",
    mission_heading: "Meine Vision",
    mission_text: "Ob Surfen, Surfskaten, Schwimmen, Tauchen oder Angeln: Im Ozean fühle ich mich zu Hause. Ich helfe jedem Surfer, vom Anfänger bis zum Fortgeschrittenen, sich im Wasser sicher, wohl und begeistert zu fühlen.",
    stat_students: "Gecoachte Schüler", stat_rating: "Google-Bewertung", stat_years: "Jahre Erfahrung",

    process_eyebrow: "Ablauf", process_title: "Dein Surftag, Schritt für Schritt",
    process_sub: "Surfen lernen, einfach, sicher und mit Spaß. Keine Vorerfahrung nötig.",
    p1_title: "Buchen",
    p1_text: "Schreib mir auf WhatsApp deine Daten und dein Level, und ich helfe dir, die passende Session zu finden.",
    p2_title: "Treffen und Aufwärmen",
    p2_text: "Wir treffen uns am Strand, wärmen uns gemeinsam auf und gehen kurz die Sicherheit durch, damit du bereit bist.",
    p3_title: "Der Kurs",
    p3_text: "Zwei Stunden mit mir im Wasser, einzeln oder in einer kleinen Gruppe, mit Feedback genau auf deinem Level.",
    p4_title: "Mittagessen am Strand",
    p4_text: "Bei Ganztagespaketen essen wir gemeinsam frisch am Strand. Zeit zum Ausruhen, Auftanken und Austauschen vor der nächsten Session.",
    p5_title: "Freies Surfen",
    p5_text: "Zwei weitere Stunden, um alles umzusetzen und die Wellen zu genießen, mit mir in der Nähe, wann immer du Hilfe brauchst.",
    p6_title: "Fortschritt",
    p6_text: "Wir schauen zurück auf deine Session und planen deinen nächsten Schritt, vom Weißwasser über grüne Wellen bis zu Point Breaks.",

    tst_eyebrow: "Erfahrungen", tst_title: "Stimmen der Surfer",
    tst_sub: "Echte Geschichten von Surfern, die mit Youness rausgepaddelt sind und sich in Marokkos Wellen verliebt haben.",
    tst_google_review: "Google-Bewertung",

    faq_eyebrow: "FAQ", faq_title: "Noch Fragen?",
    faq_sub: "Alles, was du wissen musst, bevor du dein Board schnappst und ins Wasser gehst.",
    faq_q1: "Brauche ich Surferfahrung, um mitzumachen?",
    faq_a1: "Überhaupt nicht. Unsere Anfängerkurse starten bei null. Wir decken alles ab, von Sicherheit und Paddeln bis zu deinen ersten Wellen. Alle Level sind willkommen.",
    faq_q2: "Was ist im Preis enthalten?",
    faq_a2: "Jede Session beinhaltet Board, Neoprenanzug und professionelles Coaching. Gruppensessions umfassen außerdem den Transport zum besten Spot des Tages.",
    faq_q3: "Gibt es Kurse für Kinder?",
    faq_a3: "Ja! Wir bieten spezielle Sessions für Kinder und Jugendliche mit kleineren Gruppen, weicheren Boards und zusätzlicher Betreuung bei sanften, sicheren Bedingungen.",
    faq_q4: "Kann ich einen Privatkurs buchen?",
    faq_a4: "Auf jeden Fall. Privatkurse geben dir Einzelcoaching, abgestimmt auf deine Ziele und dein Tempo. Schreib uns einfach auf WhatsApp für einen Termin.",
    faq_q5: "Wie lange dauert eine typische Session?",
    faq_a5: "Eine normale Session dauert etwa 2 Stunden im Wasser, plus Aufwärmen und Sicherheits-Briefing. Ganztagespakete beinhalten eine Mittagspause am Strand.",

    cta_title: "Bereit für deine erste Welle?",
    cta_text: "Schreib mir deine Daten und dein Level auf WhatsApp. Ich helfe dir, die passende Session zu finden, und beantworte alle Fragen vor der Buchung.",

    footer_about: "Über mich", footer_how: "So läuft es ab", footer_faq: "FAQ", footer_contact: "Kontakt",
  },
};

/* ---------- apply a language across the whole page ---------- */
function applyI18n(lang) {
  const dict = I18N[lang] || I18N.en;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const text = dict[key] ?? I18N.en[key];
    if (text != null) el.textContent = text;
  });
  document.documentElement.lang = lang;
}

/* ---------- NAV: shadow on scroll ---------- */
(function navScroll() {
  const nav = document.getElementById("nav");
  if (!nav) return;
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
})();

/* ---------- NAV: language switcher ---------- */
let restoreSavedLang = () => {};
(function langSwitcher() {
  const switcher = document.getElementById("langSwitcher");
  if (!switcher) return;
  const btn = switcher.querySelector(".lang-btn");
  const flagImg = document.getElementById("activeFlagImg");
  const codeEl = document.getElementById("activeLangCode");
  const options = switcher.querySelectorAll(".lang-option");

  const setLang = (lang) => {
    applyI18n(lang);
    options.forEach((o) => o.classList.toggle("active", o.dataset.lang === lang));
    const active = switcher.querySelector(`.lang-option[data-lang="${lang}"]`);
    if (active) {
      flagImg.src = `https://flagcdn.com/w40/${active.dataset.flag}.png`;
      codeEl.textContent = active.dataset.code;
    }
    try { localStorage.setItem("tamasurf-lang", lang); } catch (e) {}
  };

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = switcher.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });
  options.forEach((opt) => {
    opt.addEventListener("click", () => {
      setLang(opt.dataset.lang);
      switcher.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    });
  });
  document.addEventListener("click", () => {
    switcher.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  });

  // Deferred: content built by later scripts (testimonials) must exist
  // before a saved non-English language is re-applied on load.
  restoreSavedLang = () => {
    let saved = null;
    try { saved = localStorage.getItem("tamasurf-lang"); } catch (e) {}
    if (saved && saved !== "en" && I18N[saved]) setLang(saved);
  };
})();

/* ---------- NAV: mobile menu ---------- */
(function mobileMenu() {
  const burger = document.getElementById("hamburgerBtn");
  const overlay = document.getElementById("mobileMenuOverlay");
  const menu = document.getElementById("mobileMenu");
  if (!burger || !menu) return;

  const setOpen = (open) => {
    document.body.classList.toggle("menu-open", open);
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
  };

  burger.addEventListener("click", () => setOpen(!document.body.classList.contains("menu-open")));
  overlay.addEventListener("click", () => setOpen(false));
  document.getElementById("mobileMenuClose").addEventListener("click", () => setOpen(false));
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
})();

/* ---------- PACKAGES / ACTIVITIES: carousels ---------- */
(function carousels() {
  document.querySelectorAll(".pkg__carousel").forEach((root) => {
    const track = root.querySelector("[data-pkg-track]");
    const prev = root.querySelector("[data-pkg-prev]");
    const next = root.querySelector("[data-pkg-next]");
    if (!track || !prev || !next) return;

    // one card + the flex gap, so a click advances exactly one card
    const step = () => {
      const card = track.querySelector(".pkg");
      if (!card) return track.clientWidth;
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      return card.getBoundingClientRect().width + gap;
    };

    const sync = () => {
      const max = track.scrollWidth - track.clientWidth;
      prev.disabled = track.scrollLeft <= 1;
      next.disabled = track.scrollLeft >= max - 1;
    };

    prev.addEventListener("click", () => track.scrollBy({ left: -step() }));
    next.addEventListener("click", () => track.scrollBy({ left: step() }));
    track.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    sync();
  });
})();

/* ---------- TESTIMONIALS: render the review grid ---------- */
(function testimonials() {
  const grid = document.querySelector("[data-tst-grid]");
  if (!grid) return;

  // Real customer quotes from Trustpilot — stay in the language they were written in
  // (same convention as Airbnb/Booking) — only the surrounding UI translates.
  const reviews = [
    {
      img: "assets/t-1.jpg", name: "Helen", country: "Germany 🇩🇪",
      text: "Absolutely loved it! Youness is a great teacher and he helped me to progress my surfing. It even felt like you spend time with a friend instead of just an instructor. Lots of fun and good vibes!",
    },
    {
      img: "assets/t-2.jpg", name: "Mirko with wife", country: "Czech Republic 🇨🇿",
      text: "We had an amazing time with Youness. We are total beginners and it was our first time surfing, and after two hours with Youness, we were both able to ride a wave.",
    },
    {
      img: "assets/t-3.jpg", name: "Delphine with friends", country: "Belgium 🇧🇪",
      text: "We would definitely recommend Tama surf for surf courses around Tamraght / Taghazout! Youness will always teach with a lot of knowledge and a smile. It is already our 4th time lessons with him! Do not hesitate!!",
    },
    {
      img: "assets/t-4.jpg", name: "Alexiane with friends", country: "France 🇫🇷",
      text: "If you're looking for a real surf coach in Morocco, go with Youness. We improved very much in a very short time thanks to him. He is patient, precise and really pays attention to each person. Beyond the surf lessons, he takes care of everything with incredible attention to detail, even organizing a tajine on the beach after the session. It was just perfect. No touristy cliché here, just real surf, great vibes and an authentic experience. Definitely the best choice if you want to truly improve and experience the real deal 💪",
    },
    {
      img: "assets/t-5.jpg", name: "Joost with family", country: "Netherlands 🇳🇱",
      text: "Youness is truly the best surf instructor! He really focuses on helping you improve and gives really helpful feedback. I improved a lot in just a couple of sessions. At times I felt a bit anxious in the waves, but Youness guided me through it really well. He's also really kind and relaxed. And we had a lot of fun! Thanks for a great time!",
    },
    {
      img: "assets/t-6.jpg", name: "Nina", country: "Germany 🇩🇪",
      text: "If you're looking for a real surf coach in Morocco, go with Youness. We improved very much in a very short time thanks to him. He is patient, precise and really pays attention to each person. Beyond the surf lessons, he takes care of everything with incredible attention to detail, even organizing a tajine on the beach after the session. It was just perfect. No touristy cliché here, just real surf, great vibes and an authentic experience.",
    },
  ];

  const star = `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 17.27 5.18 3.13-1.37-5.9 4.58-3.97-6.03-.52L12 4.5 9.64 10.1l-6.03.52 4.58 3.97-1.37 5.9z"/></svg>`;
  const stars = star.repeat(5);

  grid.innerHTML = reviews.map((r) => `
    <article class="tcard">
      <div class="tcard__head">
        <img class="tcard__avatar" src="${r.img}" alt="" loading="lazy">
        <div class="tcard__id">
          <span class="tcard__name">${r.name}</span>
          <span class="tcard__handle">${r.country}</span>
        </div>
      </div>
      <p class="tcard__text">${r.text}</p>
      <div class="tcard__foot">
        <span class="tcard__stars">${stars}</span>
        <span class="tcard__source" data-i18n="tst_google_review">Google review</span>
      </div>
    </article>`).join("");
})();

/* ---------- FAQ: accordion, one open at a time ---------- */
(function faq() {
  const items = Array.from(document.querySelectorAll(".faq__item"));
  if (!items.length) return;

  items.forEach((item) => {
    item.querySelector(".faq__q").addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      items.forEach((other) => {
        other.classList.remove("is-open");
        other.querySelector(".faq__q").setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("is-open");
        item.querySelector(".faq__q").setAttribute("aria-expanded", "true");
      }
    });
  });
})();

/* ---------- LIGHTBOX: gallery image viewer ---------- */
(function lightbox() {
  const lightboxEl = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxPrev = document.getElementById("lightboxPrev");
  const lightboxNext = document.getElementById("lightboxNext");
  const galleryItems = document.querySelectorAll("[data-lightbox]");

  if (!lightboxEl || !galleryItems.length) return;

  let currentIndex = 0;
  const images = Array.from(galleryItems).map(item => ({
    src: item.href,
    alt: item.querySelector("img")?.alt || ""
  }));

  const openLightbox = (index) => {
    currentIndex = index;
    lightboxImg.src = images[currentIndex].src;
    lightboxImg.alt = images[currentIndex].alt;
    lightboxEl.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    lightboxEl.classList.remove("active");
    document.body.style.overflow = "";
  };

  const nextImage = () => {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
    lightboxImg.alt = images[currentIndex].alt;
  };

  const prevImage = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
    lightboxImg.alt = images[currentIndex].alt;
  };

  // Open lightbox on gallery item click
  galleryItems.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      openLightbox(index);
    });
  });

  // Close lightbox
  lightboxClose.addEventListener("click", closeLightbox);
  lightboxEl.addEventListener("click", (e) => {
    if (e.target === lightboxEl) closeLightbox();
  });

  // Navigation
  lightboxPrev.addEventListener("click", prevImage);
  lightboxNext.addEventListener("click", nextImage);

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (!lightboxEl.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "ArrowRight") nextImage();
  });
})();

/* ---------- i18n: restore a saved language now that all page content
   (including the JS-rendered testimonials) exists ---------- */
restoreSavedLang();
