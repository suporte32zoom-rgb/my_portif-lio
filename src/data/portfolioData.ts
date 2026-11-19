export type Locale = 'pt' | 'en' | 'es';

export type ProjectCategory = 'all' | 'finance' | 'health' | 'media';

export interface CompetencyItem {
  index: string;
  title: string;
  detail: string;
}

export interface ProjectItem {
  id: 'dinheuro' | 'nutrink' | 'playtelas' | 'consuderme' | 'estradapay';
  name: string;
  url: string;
  domain: string;
  category: Exclude<ProjectCategory, 'all'>;
  categoryLabel: string;
  role: string;
  tagline: string;
  problemSolved: string;
  deliverables: string[];
  accent: 'emerald' | 'blue';
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  code: string;
  focus: string;
}

export interface LocaleContent {
  metaTitle: string;
  nav: {
    summary: string;
    products: string;
    certifications: string;
    contact: string;
  };
  header: {
    emailLabel: string;
    whatsappLabel: string;
  };
  hero: {
    roleLocation: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    panelHeading: string;
    panelCaption: string;
    kpis: {
      value: string;
      label: string;
    }[];
  };
  summary: {
    eyebrow: string;
    heading: string;
    lead: string;
    body: string;
    competenciesHeading: string;
    competencies: CompetencyItem[];
  };
  showcase: {
    eyebrow: string;
    heading: string;
    lead: string;
    filters: {
      id: ProjectCategory;
      label: string;
    }[];
    problemLabel: string;
    deliverablesLabel: string;
    visitButton: string;
    expandPreviewLabel: string;
    closePreviewLabel: string;
    projects: ProjectItem[];
  };
  certifications: {
    eyebrow: string;
    heading: string;
    lead: string;
    codeLabel: string;
    copyLabel: string;
    copiedLabel: string;
    items: CertificationItem[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    lead: string;
    emailCardTitle: string;
    emailAction: string;
    whatsappCardTitle: string;
    whatsappAction: string;
    copyright: string;
    locationFooter: string;
  };
}

export const CONTACT_INFO = {
  fullName: 'Tarciano Martim de Sousa',
  email: 'tarcianosousa484@gmail.com',
  whatsappNumber: '+55 11 96338-7266',
  whatsappHref: 'https://wa.me/5511963387266',
  emailHref: 'mailto:tarcianosousa484@gmail.com',
};

export const PORTFOLIO_CONTENT: Record<Locale, LocaleContent> = {
  pt: {
    metaTitle: 'Tarciano Martim de Sousa — AI Product Builder & Full-Stack Web Developer',
    nav: {
      summary: 'Resumo',
      products: 'Produtos',
      certifications: 'Certificações',
      contact: 'Contato',
    },
    header: {
      emailLabel: 'E-mail',
      whatsappLabel: 'WhatsApp',
    },
    hero: {
      roleLocation: 'AI Product Builder & Full-Stack Web Developer · São Paulo, SP, Brasil',
      headline: 'Produtos digitais completos, da concepção estratégica ao lançamento comercial.',
      subheadline:
        'Rapid Prototyper e Desenvolvedor Web Full-Stack especializado em arquiteturas PWA, plataformas SaaS, dashboards analíticos, automação de dados e inteligência aplicada a negócios.',
      primaryCta: 'Explorar Produtos Publicados',
      secondaryCta: 'Conversar no WhatsApp',
      panelHeading: 'Portfólio em Produção',
      panelCaption: 'Ecossistema ativo de aplicações próprias publicadas para usuários reais nos mercados financeiro, clínico, mobilidade e entretenimento.',
      kpis: [
        { value: '5', label: 'Produtos SaaS & PWA em produção' },
        { value: '4', label: 'Verticais de mercado atendidas' },
        { value: '5', label: 'Certificações técnicas em IA & Dados' },
        { value: '100%', label: 'Execução autônoma ponta a ponta' },
      ],
    },
    summary: {
      eyebrow: 'Resumo Executivo',
      heading: 'Engenharia de produto orientada a entrega real e validação comercial.',
      lead: 'Atuação integral no ciclo de vida de software: descoberta de mercado, arquitetura técnica, interface de alta conversão, automação de dados e publicação.',
      body: 'Combino desenvolvimento Full-Stack moderno, engenharia de prompt avançada e fluxos automatizados de análise para transformar problemas operacionais complexos em aplicações web rápidas, responsivas e escaláveis.',
      competenciesHeading: 'Competências Centrais',
      competencies: [
        {
          index: '01',
          title: 'Arquitetura PWA',
          detail: 'Aplicações web instaláveis, carregamento instantâneo, experiência mobile-first e resiliência offline.',
        },
        {
          index: '02',
          title: 'Desenvolvimento Full-Stack',
          detail: 'Construção ponta a ponta de interfaces reativas, regras de negócio, APIs e modelagem de dados.',
        },
        {
          index: '03',
          title: 'Engenharia de Prompt',
          detail: 'Desenho de copilotos clínicos, agentes de tratamento de dados e fluxos estruturados de decisão.',
        },
        {
          index: '04',
          title: 'Automação & AI Reports',
          detail: 'Pipelines analíticos automatizados, relatórios executivos e painéis de indicadores orientados a IA.',
        },
        {
          index: '05',
          title: 'SEO Técnico & Analytics',
          detail: 'Estrutura semântica, performance Core Web Vitals, indexação orgânica e telemetria de funil.',
        },
        {
          index: '06',
          title: 'UX/UI focado em Conversão',
          detail: 'Hierarquia visual clara, redução de atrito no onboarding e fluxos otimizados para retenção.',
        },
      ],
    },
    showcase: {
      eyebrow: 'Vitrine de Produtos Publicados',
      heading: 'Sistemas em operação desenvolvidos de ponta a ponta.',
      lead: 'Cada aplicação abaixo resolve um gargalo operacional específico, combinando interface própria, regras de domínio e disponibilidade contínua.',
      filters: [
        { id: 'all', label: 'Todos' },
        { id: 'finance', label: 'Finanças & Pagamentos' },
        { id: 'health', label: 'Saúde & Clínicas' },
        { id: 'media', label: 'Entretenimento & Mídia' },
      ],
      problemLabel: 'Problema Resolvido',
      deliverablesLabel: 'Entregáveis Técnicos',
      visitButton: 'Acessar Projeto Online',
      expandPreviewLabel: 'Ampliar prévia de interface',
      closePreviewLabel: 'Fechar prévia',
      projects: [
        {
          id: 'dinheuro',
          name: 'DinhEuro',
          url: 'https://dinheuro.com',
          domain: 'dinheuro.com',
          category: 'finance',
          categoryLabel: 'Finanças & Pagamentos',
          role: 'Fundador & Desenvolvedor Full-Stack',
          tagline: 'Plataforma global de inteligência financeira e simulação cambial em tempo real.',
          problemSolved:
            'Centraliza cotações de moedas, ações e criptoativos em um painel único, eliminando a fragmentação entre conversores simples e calculadoras financeiras complexas para decisões cambiais e macroeconômicas.',
          deliverables: [
            'Simulador cambial em tempo real',
            'Painel macroeconômico e cotações',
            'Calculadoras financeiras técnicas',
            'SEO técnico multilíngue',
          ],
          accent: 'emerald',
        },
        {
          id: 'nutrink',
          name: 'NutrinK',
          url: 'https://nutrink.com.br',
          domain: 'nutrink.com.br',
          category: 'health',
          categoryLabel: 'Saúde & Clínicas',
          role: 'Fundador & Desenvolvedor Full-Stack',
          tagline: 'Sistema web (PWA) de gestão clínica para nutricionistas e nutrólogos com copiloto NútrIA.',
          problemSolved:
            'Substitui planilhas dispersas e softwares legados lentos por um prontuário unificado que automatiza cálculos antropométricos, organiza a agenda clínica e acelera condutas com apoio da assistente NútrIA.',
          deliverables: [
            'Arquitetura PWA instalável',
            'Calculadoras antropométricas',
            'Prontuário & agenda integrada',
            'Copiloto clínico NútrIA',
          ],
          accent: 'emerald',
        },
        {
          id: 'playtelas',
          name: 'PlayTelas',
          url: 'https://playtelas.com',
          domain: 'playtelas.com',
          category: 'media',
          categoryLabel: 'Entretenimento & Mídia',
          role: 'Fundador & Desenvolvedor Full-Stack',
          tagline: 'Agregador web (PWA) de streaming, catálogo VOD e canais ao vivo de alto desempenho.',
          problemSolved:
            'Entrega navegação instantânea e baixa latência na descoberta de canais ao vivo e catálogos sob demanda diretamente no navegador, com interface responsiva otimizada para múltiplos tamanhos de tela.',
          deliverables: [
            'Interface PWA de alto desempenho',
            'Grade dinâmica de canais ao vivo',
            'Catálogo VOD segmentado',
            'Player e navegação fluida',
          ],
          accent: 'blue',
        },
        {
          id: 'consuderme',
          name: 'Consuderme',
          url: 'https://consuderme.com.br',
          domain: 'consuderme.com.br',
          category: 'health',
          categoryLabel: 'Saúde & Clínicas',
          role: 'Fundador & Desenvolvedor Full-Stack',
          tagline: 'Plataforma de gestão especializada para clínicas dermatológicas com assistente Dermia.',
          problemSolved:
            'Estrutura o fluxo de consulta dermatológica com anamnese direcionada, apoio diagnóstico, prescrição ágil de fórmulas magistrais e síntese clínica automatizada via Dermia.',
          deliverables: [
            'Anamnese dermatológica estruturada',
            'Gestor de fórmulas magistrais',
            'Apoio diagnóstico com IA (Dermia)',
            'Fluxo clínico seguro e responsivo',
          ],
          accent: 'blue',
        },
        {
          id: 'estradapay',
          name: 'Estrada Pay',
          url: 'https://estradapay.com.br',
          domain: 'estradapay.com.br',
          category: 'finance',
          categoryLabel: 'Finanças & Pagamentos',
          role: 'Fundador & Desenvolvedor Full-Stack',
          tagline: 'Aplicação web (PWA) para consulta e pagamento ágil de pedágios eletrônicos Free Flow via Pix.',
          problemSolved:
            'Elimina a fricção e o risco de multas por evasão em pórticos Free Flow ao permitir que motoristas consultem passagens pela placa e liquidem tarifas em segundos via Pix, sem instalação obrigatória de aplicativo.',
          deliverables: [
            'Consulta ágil por placa Free Flow',
            'Checkout instantâneo via Pix',
            'Arquitetura PWA mobile-first',
            'UX de conversão em poucos passos',
          ],
          accent: 'emerald',
        },
      ],
    },
    certifications: {
      eyebrow: 'Certificações Técnicas & Formação',
      heading: 'Credenciais verificáveis em IA aplicada, automação e análise de dados.',
      lead: 'Especialização prática na construção de agentes de tratamento de dados, relatórios executivos automatizados e painéis analíticos.',
      codeLabel: 'Código',
      copyLabel: 'Copiar código',
      copiedLabel: 'Copiado',
      items: [
        {
          id: 'cert-1',
          title: 'Aceleração: AI Reports com Excel, GPT Agents e Claude Code',
          issuer: 'Santander & DIO',
          code: 'KIAQ31V2',
          focus: 'Automação executiva de relatórios e fluxos assistidos por agentes',
        },
        {
          id: 'cert-2',
          title: 'Módulo: AI Reports com Excel, GPT Agents e Claude Code',
          issuer: 'DIO',
          code: 'OBH5IXCN',
          focus: 'Arquitetura de relatórios analíticos com geração estruturada',
        },
        {
          id: 'cert-3',
          title: 'Projeto Prático: Criando uma Dashboard da Porsche com Agentes de IA',
          issuer: 'DIO',
          code: 'P98WQUII',
          focus: 'Modelagem visual de KPIs executivos e storytelling com dados',
        },
        {
          id: 'cert-4',
          title: 'Criando Agentes de Tratamento de Dados',
          issuer: 'DIO',
          code: 'XPNKRCZD',
          focus: 'Normalização, limpeza e estruturação automatizada de bases',
        },
        {
          id: 'cert-5',
          title: 'Introdução a AI Reports',
          issuer: 'DIO',
          code: '7VJ8BOAJ',
          focus: 'Fundamentos de inteligência analítica aplicada a negócios',
        },
      ],
    },
    contact: {
      eyebrow: 'Contato Direto',
      heading: 'Disponível para projetos estratégicos, liderança técnica e produtos digitais.',
      lead: 'Para recrutadores, parceiros ou contratação de desenvolvimento sob medida em São Paulo ou remoto, utilize os canais diretos abaixo.',
      emailCardTitle: 'E-mail Corporativo',
      emailAction: 'Enviar mensagem por e-mail',
      whatsappCardTitle: 'Atendimento Direto via WhatsApp',
      whatsappAction: 'Iniciar conversa no WhatsApp',
      copyright: 'Tarciano Martim de Sousa. Todos os direitos reservados.',
      locationFooter: 'São Paulo, SP, Brasil',
    },
  },
  en: {
    metaTitle: 'Tarciano Martim de Sousa — AI Product Builder & Full-Stack Web Developer',
    nav: {
      summary: 'Overview',
      products: 'Products',
      certifications: 'Certifications',
      contact: 'Contact',
    },
    header: {
      emailLabel: 'Email',
      whatsappLabel: 'WhatsApp',
    },
    hero: {
      roleLocation: 'AI Product Builder & Full-Stack Web Developer · São Paulo, SP, Brazil',
      headline: 'End-to-end digital products, from strategic conception to commercial launch.',
      subheadline:
        'Rapid Prototyper and Full-Stack Web Developer specializing in PWA architectures, SaaS platforms, analytical dashboards, data automation, and applied business intelligence.',
      primaryCta: 'Explore Live Products',
      secondaryCta: 'Message on WhatsApp',
      panelHeading: 'Products in Production',
      panelCaption: 'Active ecosystem of proprietary web applications serving users across finance, clinical healthcare, mobility, and streaming media.',
      kpis: [
        { value: '5', label: 'Live SaaS & PWA products' },
        { value: '4', label: 'Industry verticals served' },
        { value: '5', label: 'AI & Data technical credentials' },
        { value: '100%', label: 'Autonomous end-to-end delivery' },
      ],
    },
    summary: {
      eyebrow: 'Executive Summary',
      heading: 'Product engineering focused on real delivery and commercial readiness.',
      lead: 'Full ownership across the software lifecycle: market discovery, technical architecture, conversion-oriented UI, data automation, and launch.',
      body: 'I combine modern Full-Stack engineering, advanced prompt design, and automated analytical workflows to turn complex operational bottlenecks into fast, responsive, scalable web applications.',
      competenciesHeading: 'Core Competencies',
      competencies: [
        {
          index: '01',
          title: 'PWA Architecture',
          detail: 'Installable web apps, instant loading, mobile-first ergonomics, and offline resilience.',
        },
        {
          index: '02',
          title: 'Full-Stack Development',
          detail: 'End-to-end delivery of reactive interfaces, business logic, APIs, and data models.',
        },
        {
          index: '03',
          title: 'Prompt Engineering',
          detail: 'Design of clinical copilots, data-processing agents, and structured decision workflows.',
        },
        {
          index: '04',
          title: 'Automation & AI Reports',
          detail: 'Automated analytical pipelines, executive reporting, and AI-assisted KPI dashboards.',
        },
        {
          index: '05',
          title: 'Technical SEO & Analytics',
          detail: 'Semantic structure, Core Web Vitals optimization, organic indexing, and funnel telemetry.',
        },
        {
          index: '06',
          title: 'Conversion-Focused UX/UI',
          detail: 'Clear visual hierarchy, low-friction onboarding, and retention-driven product flows.',
        },
      ],
    },
    showcase: {
      eyebrow: 'Published Product Showcase',
      heading: 'Production systems built and shipped end to end.',
      lead: 'Each application solves a concrete operational problem, uniting domain-specific interface design, business rules, and continuous availability.',
      filters: [
        { id: 'all', label: 'All' },
        { id: 'finance', label: 'Finance & Payments' },
        { id: 'health', label: 'Health & Clinics' },
        { id: 'media', label: 'Entertainment & Media' },
      ],
      problemLabel: 'Problem Solved',
      deliverablesLabel: 'Technical Deliverables',
      visitButton: 'Open Live Project',
      expandPreviewLabel: 'Expand interface preview',
      closePreviewLabel: 'Close preview',
      projects: [
        {
          id: 'dinheuro',
          name: 'DinhEuro',
          url: 'https://dinheuro.com',
          domain: 'dinheuro.com',
          category: 'finance',
          categoryLabel: 'Finance & Payments',
          role: 'Founder & Full-Stack Developer',
          tagline: 'Global financial intelligence and real-time FX simulation platform.',
          problemSolved:
            'Unifies currency, equity, and crypto quotes inside a single workspace, replacing fragmented converters and complex spreadsheets for FX and macroeconomic decisions.',
          deliverables: [
            'Real-time FX simulation engine',
            'Macroeconomic & market quotes panel',
            'Technical financial calculators',
            'Multilingual technical SEO',
          ],
          accent: 'emerald',
        },
        {
          id: 'nutrink',
          name: 'NutrinK',
          url: 'https://nutrink.com.br',
          domain: 'nutrink.com.br',
          category: 'health',
          categoryLabel: 'Health & Clinics',
          role: 'Founder & Full-Stack Developer',
          tagline: 'Clinical management PWA for nutritionists and nutrologists featuring the NútrIA copilot.',
          problemSolved:
            'Replaces scattered spreadsheets and slow legacy tools with a unified patient record system that automates anthropometric math, scheduling, and clinical support via NútrIA.',
          deliverables: [
            'Installable PWA architecture',
            'Anthropometric calculators',
            'Integrated EHR & scheduling',
            'NútrIA clinical AI copilot',
          ],
          accent: 'emerald',
        },
        {
          id: 'playtelas',
          name: 'PlayTelas',
          url: 'https://playtelas.com',
          domain: 'playtelas.com',
          category: 'media',
          categoryLabel: 'Entertainment & Media',
          role: 'Founder & Full-Stack Developer',
          tagline: 'High-performance streaming aggregator PWA with VOD catalog and live channels.',
          problemSolved:
            'Delivers instant navigation and low-latency discovery across live channels and on-demand catalogs directly in the browser, responsive across desktop and mobile viewports.',
          deliverables: [
            'High-performance PWA frontend',
            'Dynamic live channel guide',
            'Categorized VOD catalog',
            'Fluid media player workflow',
          ],
          accent: 'blue',
        },
        {
          id: 'consuderme',
          name: 'Consuderme',
          url: 'https://consuderme.com.br',
          domain: 'consuderme.com.br',
          category: 'health',
          categoryLabel: 'Health & Clinics',
          role: 'Founder & Full-Stack Developer',
          tagline: 'Specialized clinical management platform for dermatology practices with Dermia assistant.',
          problemSolved:
            'Structures dermatology consultations with guided anamnesis, diagnostic support, compounded formula prescribing, and automated clinical synthesis powered by Dermia.',
          deliverables: [
            'Structured dermatology anamnesis',
            'Compounded formula builder',
            'Dermia diagnostic AI support',
            'Responsive clinical workspace',
          ],
          accent: 'blue',
        },
        {
          id: 'estradapay',
          name: 'Estrada Pay',
          url: 'https://estradapay.com.br',
          domain: 'estradapay.com.br',
          category: 'finance',
          categoryLabel: 'Finance & Payments',
          role: 'Founder & Full-Stack Developer',
          tagline: 'Web application (PWA) for rapid Free Flow electronic toll lookup and Pix settlement.',
          problemSolved:
            'Removes friction and fine risks on Free Flow highway gantries by enabling drivers to look up passages by license plate and settle tolls in seconds via Pix with zero app-store install.',
          deliverables: [
            'License-plate Free Flow lookup',
            'Instant Pix checkout flow',
            'Mobile-first PWA architecture',
            'Low-friction conversion UX',
          ],
          accent: 'emerald',
        },
      ],
    },
    certifications: {
      eyebrow: 'Technical Certifications & Training',
      heading: 'Verifiable credentials in applied AI, automation, and data reporting.',
      lead: 'Hands-on specialization in building data-processing agents, automated executive reports, and analytical KPI dashboards.',
      codeLabel: 'Code',
      copyLabel: 'Copy code',
      copiedLabel: 'Copied',
      items: [
        {
          id: 'cert-1',
          title: 'Acceleration: AI Reports with Excel, GPT Agents & Claude Code',
          issuer: 'Santander & DIO',
          code: 'KIAQ31V2',
          focus: 'Executive report automation and agent-assisted analytical pipelines',
        },
        {
          id: 'cert-2',
          title: 'Module: AI Reports with Excel, GPT Agents & Claude Code',
          issuer: 'DIO',
          code: 'OBH5IXCN',
          focus: 'Structured generation architecture for analytical reporting',
        },
        {
          id: 'cert-3',
          title: 'Applied Project: Building a Porsche Dashboard with AI Agents',
          issuer: 'DIO',
          code: 'P98WQUII',
          focus: 'Executive KPI modeling and data-driven visual storytelling',
        },
        {
          id: 'cert-4',
          title: 'Building Data Processing Agents',
          issuer: 'DIO',
          code: 'XPNKRCZD',
          focus: 'Automated dataset cleaning, normalization, and structuring',
        },
        {
          id: 'cert-5',
          title: 'Introduction to AI Reports',
          issuer: 'DIO',
          code: '7VJ8BOAJ',
          focus: 'Foundations of applied analytical intelligence for business',
        },
      ],
    },
    contact: {
      eyebrow: 'Direct Contact',
      heading: 'Available for strategic product roles, technical leadership, and custom builds.',
      lead: 'For executive recruiters, partners, or bespoke digital product inquiries in São Paulo or remote, reach out directly below.',
      emailCardTitle: 'Direct Email',
      emailAction: 'Send an email message',
      whatsappCardTitle: 'Direct WhatsApp',
      whatsappAction: 'Start WhatsApp chat',
      copyright: 'Tarciano Martim de Sousa. All rights reserved.',
      locationFooter: 'São Paulo, SP, Brazil',
    },
  },
  es: {
    metaTitle: 'Tarciano Martim de Sousa — AI Product Builder & Full-Stack Web Developer',
    nav: {
      summary: 'Resumen',
      products: 'Productos',
      certifications: 'Certificaciones',
      contact: 'Contacto',
    },
    header: {
      emailLabel: 'Correo',
      whatsappLabel: 'WhatsApp',
    },
    hero: {
      roleLocation: 'AI Product Builder & Full-Stack Web Developer · São Paulo, SP, Brasil',
      headline: 'Productos digitales completos, desde la concepción estratégica hasta el lanzamiento comercial.',
      subheadline:
        'Rapid Prototyper y Desarrollador Web Full-Stack especializado en arquitecturas PWA, plataformas SaaS, paneles analíticos, automatización de datos e inteligencia aplicada al negocio.',
      primaryCta: 'Explorar Productos Publicados',
      secondaryCta: 'Hablar por WhatsApp',
      panelHeading: 'Portafolio en Producción',
      panelCaption: 'Ecosistema activo de aplicaciones propias en operación para usuarios reales en finanzas, salud clínica, movilidad y entretenimiento.',
      kpis: [
        { value: '5', label: 'Productos SaaS y PWA activos' },
        { value: '4', label: 'Verticales de mercado atendidas' },
        { value: '5', label: 'Certificaciones técnicas en IA y Datos' },
        { value: '100%', label: 'Ejecución autónoma de extremo a extremo' },
      ],
    },
    summary: {
      eyebrow: 'Resumen Ejecutivo',
      heading: 'Ingeniería de producto orientada a la entrega real y validación comercial.',
      lead: 'Participación integral en el ciclo de vida del software: descubrimiento de mercado, arquitectura técnica, interfaz de alta conversión, automatización y lanzamiento.',
      body: 'Combino desarrollo Full-Stack moderno, ingeniería de prompts avanzada y flujos automatizados de análisis para transformar problemas operativos complejos en aplicaciones web rápidas, responsivas y escalables.',
      competenciesHeading: 'Competencias Clave',
      competencies: [
        {
          index: '01',
          title: 'Arquitectura PWA',
          detail: 'Aplicaciones web instalables, carga instantánea, enfoque mobile-first y resiliencia offline.',
        },
        {
          index: '02',
          title: 'Desarrollo Full-Stack',
          detail: 'Construcción integral de interfaces reactivas, lógica de negocio, APIs y modelado de datos.',
        },
        {
          index: '03',
          title: 'Ingeniería de Prompts',
          detail: 'Diseño de copilotos clínicos, agentes de procesamiento de datos y flujos estructurados de decisión.',
        },
        {
          index: '04',
          title: 'Automatización y AI Reports',
          detail: 'Pipelines analíticos automatizados, reportes ejecutivos y tableros de indicadores con IA.',
        },
        {
          index: '05',
          title: 'SEO Técnico y Analytics',
          detail: 'Estructura semántica, rendimiento Core Web Vitals, indexación orgánica y analítica de embudo.',
        },
        {
          index: '06',
          title: 'UX/UI Enfocado en Conversión',
          detail: 'Jerarquía visual clara, reducción de fricción en el onboarding y flujos orientados a retención.',
        },
      ],
    },
    showcase: {
      eyebrow: 'Vitrina de Productos Publicados',
      heading: 'Sistemas en operación desarrollados de extremo a extremo.',
      lead: 'Cada aplicación resuelve un cuello de botella operativo concreto, integrando diseño de interfaz propio, reglas de dominio y disponibilidad continua.',
      filters: [
        { id: 'all', label: 'Todos' },
        { id: 'finance', label: 'Finanzas y Pagos' },
        { id: 'health', label: 'Salud y Clínicas' },
        { id: 'media', label: 'Entretenimiento y Medios' },
      ],
      problemLabel: 'Problema Resuelto',
      deliverablesLabel: 'Entregables Técnicos',
      visitButton: 'Acceder al Proyecto Online',
      expandPreviewLabel: 'Ampliar vista previa',
      closePreviewLabel: 'Cerrar vista previa',
      projects: [
        {
          id: 'dinheuro',
          name: 'DinhEuro',
          url: 'https://dinheuro.com',
          domain: 'dinheuro.com',
          category: 'finance',
          categoryLabel: 'Finanzas y Pagos',
          role: 'Fundador y Desarrollador Full-Stack',
          tagline: 'Plataforma global de inteligencia financiera y simulación cambiaria en tiempo real.',
          problemSolved:
            'Centraliza cotizaciones de divisas, acciones y criptoactivos en un único panel, eliminando la fragmentación entre conversores básicos y calculadoras financieras complejas.',
          deliverables: [
            'Simulador cambiario en tiempo real',
            'Panel macroeconómico y cotizaciones',
            'Calculadoras financieras técnicas',
            'SEO técnico multilingüe',
          ],
          accent: 'emerald',
        },
        {
          id: 'nutrink',
          name: 'NutrinK',
          url: 'https://nutrink.com.br',
          domain: 'nutrink.com.br',
          category: 'health',
          categoryLabel: 'Salud y Clínicas',
          role: 'Fundador y Desarrollador Full-Stack',
          tagline: 'Sistema web (PWA) de gestión clínica para nutricionistas y nutrólogos con copiloto NútrIA.',
          problemSolved:
            'Sustituye hojas de cálculo dispersas y sistemas lentos por una historia clínica unificada que automatiza cálculos antropométricos, agenda integrada y soporte clínico con NútrIA.',
          deliverables: [
            'Arquitectura PWA instalable',
            'Calculadoras antropométricas',
            'Historia clínica y agenda integrada',
            'Copiloto clínico NútrIA',
          ],
          accent: 'emerald',
        },
        {
          id: 'playtelas',
          name: 'PlayTelas',
          url: 'https://playtelas.com',
          domain: 'playtelas.com',
          category: 'media',
          categoryLabel: 'Entretenimiento y Medios',
          role: 'Fundador y Desarrollador Full-Stack',
          tagline: 'Agregador web (PWA) de streaming, catálogo VOD y canales en vivo de alto rendimiento.',
          problemSolved:
            'Ofrece navegación instantánea y baja latencia para descubrir canales en vivo y catálogos bajo demanda directamente desde el navegador, con diseño responsivo para cualquier pantalla.',
          deliverables: [
            'Interfaz PWA de alto rendimiento',
            'Guía dinámica de canales en vivo',
            'Catálogo VOD segmentado',
            'Reproductor y navegación fluida',
          ],
          accent: 'blue',
        },
        {
          id: 'consuderme',
          name: 'Consuderme',
          url: 'https://consuderme.com.br',
          domain: 'consuderme.com.br',
          category: 'health',
          categoryLabel: 'Salud y Clínicas',
          role: 'Fundador y Desarrollador Full-Stack',
          tagline: 'Plataforma de gestión especializada para clínicas dermatológicas con asistente Dermia.',
          problemSolved:
            'Estructura la consulta dermatológica mediante anamnesis guiada, apoyo diagnóstico, prescripción ágil de fórmulas magistrales y síntesis clínica asistida por Dermia.',
          deliverables: [
            'Anamnesis dermatológica estructurada',
            'Gestor de fórmulas magistrales',
            'Apoyo diagnóstico con IA (Dermia)',
            'Flujo clínico seguro y responsivo',
          ],
          accent: 'blue',
        },
        {
          id: 'estradapay',
          name: 'Estrada Pay',
          url: 'https://estradapay.com.br',
          domain: 'estradapay.com.br',
          category: 'finance',
          categoryLabel: 'Finanzas y Pagos',
          role: 'Fundador y Desarrollador Full-Stack',
          tagline: 'Aplicación web (PWA) para consulta y pago ágil de peajes electrónicos Free Flow vía Pix.',
          problemSolved:
            'Elimina fricciones y riesgos de multas en pórticos Free Flow permitiendo consultar tránsitos por matrícula y pagar tarifas en segundos con Pix, sin descargas obligatorias.',
          deliverables: [
            'Consulta ágil por matrícula Free Flow',
            'Checkout instantáneo vía Pix',
            'Arquitectura PWA mobile-first',
            'UX de conversión en pocos pasos',
          ],
          accent: 'emerald',
        },
      ],
    },
    certifications: {
      eyebrow: 'Certificaciones Técnicas y Formación',
      heading: 'Credenciales verificables en IA aplicada, automatización y análisis de datos.',
      lead: 'Especialización práctica en la creación de agentes de tratamiento de datos, reportes ejecutivos automatizados y tableros analíticos.',
      codeLabel: 'Código',
      copyLabel: 'Copiar código',
      copiedLabel: 'Copiado',
      items: [
        {
          id: 'cert-1',
          title: 'Aceleración: AI Reports con Excel, GPT Agents y Claude Code',
          issuer: 'Santander & DIO',
          code: 'KIAQ31V2',
          focus: 'Automatización ejecutiva de reportes y flujos asistidos por agentes',
        },
        {
          id: 'cert-2',
          title: 'Módulo: AI Reports con Excel, GPT Agents y Claude Code',
          issuer: 'DIO',
          code: 'OBH5IXCN',
          focus: 'Arquitectura de reportes analíticos con generación estructurada',
        },
        {
          id: 'cert-3',
          title: 'Proyecto Práctico: Creando un Dashboard de Porsche con Agentes de IA',
          issuer: 'DIO',
          code: 'P98WQUII',
          focus: 'Modelado visual de KPIs ejecutivos y narrativa con datos',
        },
        {
          id: 'cert-4',
          title: 'Creando Agentes de Tratamiento de Datos',
          issuer: 'DIO',
          code: 'XPNKRCZD',
          focus: 'Limpieza, normalización y estructuración automatizada de bases',
        },
        {
          id: 'cert-5',
          title: 'Introducción a AI Reports',
          issuer: 'DIO',
          code: '7VJ8BOAJ',
          focus: 'Fundamentos de inteligencia analítica aplicada al negocio',
        },
      ],
    },
    contact: {
      eyebrow: 'Contacto Directo',
      heading: 'Disponible para proyectos estratégicos, liderazgo técnico y productos digitales.',
      lead: 'Para reclutadores, socios o desarrollo de productos a medida en São Paulo o en remoto, utiliza los canales directos a continuación.',
      emailCardTitle: 'Correo Directo',
      emailAction: 'Enviar mensaje por correo',
      whatsappCardTitle: 'Atención Directa por WhatsApp',
      whatsappAction: 'Iniciar chat en WhatsApp',
      copyright: 'Tarciano Martim de Sousa. Todos los derechos reservados.',
      locationFooter: 'São Paulo, SP, Brasil',
    },
  },
};
