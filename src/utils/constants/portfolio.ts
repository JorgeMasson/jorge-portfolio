import {
  ContactFormCopy,
  Education,
  ExperienceItem,
  Localized,
  NavItem,
  Profile,
  Project,
  StackGroup,
} from '../../models';

export const LANGUAGES = ['en', 'es'] as const;

export const profile: Profile = {
  name: 'Jorge Rodrigo Masson Reynoso',
  email: 'j_masson_reynoso@hotmail.com',
  github: 'https://github.com/JorgeMasson',
  linkedin: 'https://www.linkedin.com/in/jorge-rodrigo-mass%C3%B3n-reynoso-b374baa7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  location: 'Morelia, Michoacán, Mexico',
};

export const portfolioCopy: Localized<{
  nav: NavItem[];
  languageLabel: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  availability: string;
  metrics: { value: string; label: string }[];
  sections: {
    about: string;
    experience: string;
    projects: string;
    stack: string;
    education: string;
    contact: string;
  };
  aboutText: string[];
  contactIntro: string;
  contactForm: ContactFormCopy;
  footer: string;
}> = {
  en: {
    nav: [
      { label: 'About', target: 'about' },
      { label: 'Experience', target: 'experience' },
      { label: 'Projects', target: 'projects' },
      { label: 'Stack', target: 'stack' },
      { label: 'Contact', target: 'contact' },
    ],
    languageLabel: 'Language',
    eyebrow: 'Software Engineer / React Native Developer',
    title:
      'Building reliable mobile experiences with React Native, TypeScript, and thoughtful architecture.',
    subtitle:
      'Frontend-focused engineer with experience shipping mobile products, offline-first flows, data-heavy screens, payments, maps, multimedia, and real-time integrations.',
    primaryCta: 'View projects',
    secondaryCta: 'Contact',
    availability: 'Based in Morelia, available for remote teams',
    metrics: [
      { value: '4+', label: 'years building production apps' },
      { value: '12+', label: 'mobile and web products' },
      { value: 'B2', label: 'English proficiency' },
    ],
    sections: {
      about: 'About',
      experience: 'Experience',
      projects: 'Selected Projects',
      stack: 'Technical Stack',
      education: 'Education',
      contact: 'Contact',
    },
    aboutText: [
      'I am a software engineer focused on frontend and mobile development, especially React Native applications that need to be fast, maintainable, and useful in real-world network conditions.',
      'I have worked on learning platforms, healthcare products, logistics apps, delivery flows, service marketplaces, content apps, and administrative systems. Across those products, I have handled state management, API integration, offline-first persistence, payments, maps, notifications, multimedia, and internationalization.',
      'My work often sits where user experience meets architecture: optimizing Redux state updates, reducing unnecessary network calls, improving data-heavy screens, and building interfaces that feel stable even when connectivity, media, or synchronization become complex.',
    ],
    contactIntro:
      'Open to frontend and React Native opportunities where product quality, performance, and maintainable architecture matter.',
    contactForm: {
      emailLabel: 'Your email',
      emailPlaceholder: 'you@example.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'React Native opportunity',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell me about the role, product, or project.',
      submit: 'Send message',
    },
    footer: 'Designed and built with React Native Web.',
  },
  es: {
    nav: [
      { label: 'Sobre mí', target: 'about' },
      { label: 'Experiencia', target: 'experience' },
      { label: 'Proyectos', target: 'projects' },
      { label: 'Stack', target: 'stack' },
      { label: 'Contacto', target: 'contact' },
    ],
    languageLabel: 'Idioma',
    eyebrow: 'Ingeniero en software / React Native Developer',
    title:
      'Construyo experiencias mobile confiables con React Native, TypeScript y arquitectura bien pensada.',
    subtitle:
      'Ingeniero enfocado en frontend con experiencia creando productos mobile, flujos offline-first, pantallas con alto volumen de datos, pagos, mapas, multimedia e integraciones en tiempo real.',
    primaryCta: 'Ver proyectos',
    secondaryCta: 'Contacto',
    availability: 'Ubicado en Morelia, disponible para equipos remotos',
    metrics: [
      { value: '4+', label: 'años creando apps en producción' },
      { value: '12+', label: 'productos mobile y web' },
      { value: 'B2', label: 'nivel de inglés' },
    ],
    sections: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      projects: 'Proyectos destacados',
      stack: 'Stack técnico',
      education: 'Educación',
      contact: 'Contacto',
    },
    aboutText: [
      'Soy ingeniero en software enfocado en frontend y desarrollo mobile, especialmente en aplicaciones React Native que deben ser rápidas, mantenibles y útiles en condiciones reales de conectividad.',
      'He trabajado en plataformas de aprendizaje, productos de salud, logística, delivery, marketplaces de servicios, apps de contenido y sistemas administrativos. En esos productos he integrado manejo de estado, consumo de APIs, persistencia offline-first, pagos, mapas, notificaciones, multimedia e internacionalización.',
      'Mi trabajo suele estar en el punto donde la experiencia de usuario se cruza con arquitectura: optimización de estado en Redux, reducción de llamadas innecesarias, mejora de pantallas con alto volumen de datos y construcción de interfaces estables aun cuando la conectividad, el contenido multimedia o la sincronización se vuelven complejos.',
    ],
    contactIntro:
      'Abierto a oportunidades frontend y React Native donde importen la calidad del producto, el performance y una arquitectura mantenible.',
    contactForm: {
      emailLabel: 'Tu correo electrónico',
      emailPlaceholder: 'tu@correo.com',
      subjectLabel: 'Asunto',
      subjectPlaceholder: 'Oportunidad React Native',
      messageLabel: 'Mensaje',
      messagePlaceholder: 'Cuéntame sobre el rol, producto o proyecto.',
      submit: 'Enviar mensaje',
    },
    footer: 'Diseñado y construido con React Native Web.',
  },
};

export const education: Localized<Education> = {
  en: {
    degree: 'B.S. in Software Engineering',
    institution: 'Instituto Tecnológico de Sonora',
    graduation: 'Graduation year: 2023',
    professionalId: 'Professional ID: 14239145',
  },
  es: {
    degree: 'Ingeniería en Software',
    institution: 'Instituto Tecnológico de Sonora',
    graduation: 'Año de graduación: 2023',
    professionalId: 'Cédula profesional: 14239145',
  },
};

export const experience: Localized<ExperienceItem[]> = {
  en: [
    {
      company: 'Link Thinks',
      role: 'React Native Developer',
      period: 'Mar 2024 - Present',
      summary:
        'Developing and maintaining mobile applications with a focus on performance, scalability, and maintainable architecture.',
      highlights: [
        'Optimized Redux state updates and memoized components to reduce unnecessary re-renders.',
        'Improved data-heavy screen responsiveness with Axios, RTK Query caching, and efficient fetching strategies.',
        'Implemented offline-first data handling with SQLite and improved multimedia loading for video, audio, and PDF content.',
      ],
    },
    {
      company: 'Strappberry LLC',
      role: 'React Native Developer',
      period: 'Mar 2023 - Mar 2024',
      summary:
        'Contributed to mobile application development, performance improvements, API optimization, and state management.',
      highlights: [
        'Built and maintained apps across logistics, content, pharmacy delivery, and service marketplace products.',
        'Integrated notifications, maps, payments, authentication, local persistence, and real-time services.',
      ],
    },
    {
      company: 'Sahuaro Labs LLC',
      role: 'Web Developer',
      period: 'Oct 2021 - Feb 2023',
      summary:
        'Maintained web applications and created new frontend functionality using React.js and Next.js.',
      highlights: [
        'Worked on healthcare and administrative platforms with TypeScript, Redux, testing tools, and component libraries.',
        'Collaborated on cross-platform products spanning web and mobile user experiences.',
      ],
    },
  ],
  es: [
    {
      company: 'Link Thinks',
      role: 'React Native Developer',
      period: 'Mar 2024 - Presente',
      summary:
        'Desarrollo y mantenimiento de aplicaciones mobile con foco en performance, escalabilidad y arquitectura mantenible.',
      highlights: [
        'Optimicé actualizaciones de estado en Redux y componentes memoizados para reducir renders innecesarios.',
        'Mejoré la respuesta de pantallas con alto volumen de datos usando Axios, caché con RTK Query y estrategias eficientes de fetching.',
        'Implementé manejo offline-first con SQLite y optimicé la carga de contenido multimedia como video, audio y PDF.',
      ],
    },
    {
      company: 'Strappberry LLC',
      role: 'React Native Developer',
      period: 'Mar 2023 - Mar 2024',
      summary:
        'Contribuí al desarrollo mobile, mejoras de performance, optimización de APIs y manejo de estado.',
      highlights: [
        'Construcción y mantenimiento de apps para logística, contenido, delivery farmacéutico y marketplaces de servicios.',
        'Integración de notificaciones, mapas, pagos, autenticación, persistencia local y servicios en tiempo real.',
      ],
    },
    {
      company: 'Sahuaro Labs LLC',
      role: 'Web Developer',
      period: 'Oct 2021 - Feb 2023',
      summary:
        'Mantenimiento de aplicaciones web y desarrollo de nuevas funcionalidades frontend usando React.js y Next.js.',
      highlights: [
        'Trabajo en plataformas administrativas y de salud con TypeScript, Redux, herramientas de testing y librerías de componentes.',
        'Colaboración en productos cross-platform con experiencias web y mobile.',
      ],
    },
  ],
};

export const projects: Localized<Project[]> = {
  en: [
    {
      name: 'Círculo Dorado',
      type: 'Mobile Learning Platform',
      role: 'Lead Mobile Developer',
      description:
        'Course platform where users browse, purchase, and consume video, PDF, and audio content, with store features and an AI chat interface with voice input.',
      impact:
        'Led offline-first architecture with SQLite for reliable access in low-connectivity scenarios.',
      stack: ['React Native', 'TypeScript', 'RTK Query', 'SQLite', 'i18next', 'Speech Recognition'],
    },
    {
      name: 'Cowlink',
      type: 'Livestock Management App',
      role: 'React Native Developer',
      description:
        'Inventory and management app for cattle-related data, designed to support real-time updates and limited-connectivity environments.',
      impact:
        'Improved field reliability through local persistence and structured mobile workflows.',
      stack: ['React Native', 'TypeScript', 'Redux Toolkit', 'Axios', 'SQLite', 'Firebase Messaging'],
    },
    {
      name: 'KongGruas',
      type: 'On-Demand Towing App',
      role: 'React Native Developer',
      description:
        'Ride-hailing style mobile application for requesting tow trucks, assigning service locations, managing requests, and supporting payment flows.',
      impact:
        'Connected geolocation, service request flows, notifications, and payment integrations in a field-service mobile product.',
      stack: ['React Native', 'TypeScript', 'Redux Toolkit', 'Stripe', 'Mapbox', 'Firebase'],
    },
    {
      name: 'PillUp',
      type: 'Pharmacy Delivery App',
      role: 'React Native Developer',
      description:
        'On-demand pharmacy delivery application inspired by delivery platforms, with product browsing, location flows, notifications, and order management.',
      impact:
        'Helped shape a delivery experience for pharmaceutical products with maps, persistence, and localized UI.',
      stack: ['React Native', 'TypeScript', 'Redux Toolkit', 'Mapbox', 'i18next', 'Firebase Messaging'],
    },
    {
      name: 'Narvalla',
      type: 'Healthcare Services App',
      role: 'React Native Developer',
      description:
        'Mobile platform connecting patients with professional nursing services, including requests, service management, payments, and location features.',
      impact:
        'Connected service booking, geolocation, and payment flows in a single mobile experience.',
      stack: ['React Native', 'TypeScript', 'Redux Persist', 'Stripe', 'Google Maps', 'WebView'],
    },
    {
      name: 'Frik-in',
      type: 'Published Content App',
      role: 'React Native Developer',
      description:
        'Published content-driven mobile application focused on anime, manga, comics, video games, movies, news, articles, and events.',
      impact:
        'Integrated real-time content updates, authentication, notifications, and Firestore listeners for a published mobile product.',
      stack: ['React Native', 'TypeScript', 'Redux Toolkit', 'Firebase Firestore', 'Firebase Messaging', 'Google Sign-In'],
    },
    {
      name: 'Kaliber',
      type: 'Healthcare Admin Platform',
      role: 'Frontend Web Developer',
      description:
        'Administrative web platform for hospital database workflows, focused on security, scalability, and data consistency.',
      impact:
        'Built frontend flows for structured healthcare information management.',
      stack: ['React.js', 'Next.js', 'TypeScript', 'Redux', 'Axios', 'Jest'],
    },
  ],
  es: [
    {
      name: 'Círculo Dorado',
      type: 'Plataforma mobile de aprendizaje',
      role: 'Lead Mobile Developer',
      description:
        'Plataforma de cursos donde los usuarios exploran, compran y consumen contenido en video, PDF y audio, con tienda integrada y chat con IA mediante entrada de voz.',
      impact:
        'Lideré la arquitectura offline-first con SQLite para acceso confiable en escenarios de baja conectividad.',
      stack: ['React Native', 'TypeScript', 'RTK Query', 'SQLite', 'i18next', 'Speech Recognition'],
    },
    {
      name: 'Cowlink',
      type: 'App de gestión ganadera',
      role: 'React Native Developer',
      description:
        'App de inventario y gestión de datos ganaderos, diseñada para actualizaciones en tiempo real y entornos con conectividad limitada.',
      impact:
        'Mejoré la confiabilidad en campo con persistencia local y flujos mobile estructurados.',
      stack: ['React Native', 'TypeScript', 'Redux Toolkit', 'Axios', 'SQLite', 'Firebase Messaging'],
    },
    {
      name: 'KongGruas',
      type: 'App de grúas bajo demanda',
      role: 'React Native Developer',
      description:
        'Aplicación mobile estilo ride-hailing para solicitar grúas, asignar ubicaciones de servicio, gestionar solicitudes y soportar flujos de pago.',
      impact:
        'Conecté geolocalización, solicitudes de servicio, notificaciones e integraciones de pago en un producto mobile para operación en campo.',
      stack: ['React Native', 'TypeScript', 'Redux Toolkit', 'Stripe', 'Mapbox', 'Firebase'],
    },
    {
      name: 'PillUp',
      type: 'App de delivery farmacéutico',
      role: 'React Native Developer',
      description:
        'Aplicación de entrega de productos farmacéuticos bajo demanda, con catálogo, flujos de ubicación, notificaciones y gestión de órdenes.',
      impact:
        'Contribuí a una experiencia de delivery para productos farmacéuticos con mapas, persistencia local e interfaz localizada.',
      stack: ['React Native', 'TypeScript', 'Redux Toolkit', 'Mapbox', 'i18next', 'Firebase Messaging'],
    },
    {
      name: 'Narvalla',
      type: 'App de servicios de salud',
      role: 'React Native Developer',
      description:
        'Plataforma mobile que conecta pacientes con servicios profesionales de enfermería, incluyendo solicitudes, gestión de servicios, pagos y ubicación.',
      impact:
        'Integré flujos de reserva, geolocalización y pagos en una experiencia mobile unificada.',
      stack: ['React Native', 'TypeScript', 'Redux Persist', 'Stripe', 'Google Maps', 'WebView'],
    },
    {
      name: 'Frik-in',
      type: 'App de contenido publicada',
      role: 'React Native Developer',
      description:
        'Aplicación mobile publicada enfocada en anime, manga, cómics, videojuegos, películas, noticias, artículos y eventos.',
      impact:
        'Integré actualizaciones de contenido en tiempo real, autenticación, notificaciones y listeners de Firestore para un producto publicado.',
      stack: ['React Native', 'TypeScript', 'Redux Toolkit', 'Firebase Firestore', 'Firebase Messaging', 'Google Sign-In'],
    },
    {
      name: 'Kaliber',
      type: 'Plataforma administrativa de salud',
      role: 'Frontend Web Developer',
      description:
        'Plataforma web administrativa para flujos de base de datos hospitalaria, enfocada en seguridad, escalabilidad y consistencia de datos.',
      impact:
        'Construcción de flujos frontend para gestión estructurada de información de salud.',
      stack: ['React.js', 'Next.js', 'TypeScript', 'Redux', 'Axios', 'Jest'],
    },
  ],
};

export const stackGroups: Localized<StackGroup[]> = {
  en: [
    {
      title: 'Mobile Architecture',
      description: 'Production mobile apps with offline-first flows, multimedia, notifications, maps, and payments.',
      featured: ['React Native', 'TypeScript', 'SQLite', 'RTK Query'],
      items: ['React Native', 'React Native Web', 'SQLite', 'Firebase Messaging', 'Mapbox', 'Google Maps'],
    },
    {
      title: 'Frontend Product UI',
      description: 'Interfaces built for clarity, responsiveness, maintainability, and real product workflows.',
      featured: ['React.js', 'Next.js', 'Responsive UI'],
      items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Chakra UI', 'Responsive UI'],
    },
    {
      title: 'State & Data',
      description: 'Predictable data flows for complex screens, cache strategy, API integration, and local persistence.',
      featured: ['Redux Toolkit', 'RTK Query', 'Axios'],
      items: ['Redux Toolkit', 'RTK Query', 'Redux Persist', 'Context API', 'Axios', 'REST APIs'],
    },
    {
      title: 'Product Integrations',
      description: 'Payment, messaging, internationalization, and real-time features integrated into mobile products.',
      featured: ['Stripe', 'Firebase', 'i18next'],
      items: ['Stripe', 'OpenPay', 'PayPal', 'OneSignal', 'Pusher', 'i18next'],
    },
  ],
  es: [
    {
      title: 'Arquitectura mobile',
      description: 'Apps mobile de producción con flujos offline-first, multimedia, notificaciones, mapas y pagos.',
      featured: ['React Native', 'TypeScript', 'SQLite', 'RTK Query'],
      items: ['React Native', 'React Native Web', 'SQLite', 'Firebase Messaging', 'Mapbox', 'Google Maps'],
    },
    {
      title: 'Frontend y producto',
      description: 'Interfaces claras, responsivas y mantenibles para flujos reales de producto.',
      featured: ['React.js', 'Next.js', 'Responsive UI'],
      items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Chakra UI', 'Responsive UI'],
    },
    {
      title: 'Estado y datos',
      description: 'Flujos de datos predecibles para pantallas complejas, caché, APIs y persistencia local.',
      featured: ['Redux Toolkit', 'RTK Query', 'Axios'],
      items: ['Redux Toolkit', 'RTK Query', 'Redux Persist', 'Context API', 'Axios', 'REST APIs'],
    },
    {
      title: 'Integraciones de producto',
      description: 'Pagos, mensajería, internacionalización y funciones en tiempo real integradas en productos mobile.',
      featured: ['Stripe', 'Firebase', 'i18next'],
      items: ['Stripe', 'OpenPay', 'PayPal', 'OneSignal', 'Pusher', 'i18next'],
    },
  ],
};
