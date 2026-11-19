import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Copy,
  ExternalLink,
  Mail,
  Maximize2,
  MessageCircle,
  X,
} from 'lucide-react';
import {
  CONTACT_INFO,
  PORTFOLIO_CONTENT,
  type Locale,
  type ProjectCategory,
  type ProjectItem,
} from './data/portfolioData';
import { ProductMockup } from './components/ProductMockups';

const LOCALES: { id: Locale; label: string }[] = [
  { id: 'pt', label: 'PT' },
  { id: 'en', label: 'EN' },
  { id: 'es', label: 'ES' },
];

export default function App() {
  const [locale, setLocale] = useState<Locale>('pt');
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [expandedProject, setExpandedProject] = useState<ProjectItem | null>(null);

  const t = PORTFOLIO_CONTENT[locale];

  useEffect(() => {
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : locale;
    document.title = t.metaTitle;
  }, [locale, t.metaTitle]);

  useEffect(() => {
    if (!expandedProject) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setExpandedProject(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [expandedProject]);

  const filteredProjects =
    activeCategory === 'all'
      ? t.showcase.projects
      : t.showcase.projects.filter((project) => project.category === activeCategory);

  const handleCopyCode = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      window.setTimeout(() => {
        setCopiedCode((prev) => (prev === code ? null : prev));
      }, 2000);
    } catch {
      setCopiedCode(code);
      window.setTimeout(() => {
        setCopiedCode((prev) => (prev === code ? null : prev));
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#090d16]/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-4 sm:gap-8 sm:px-8">
          {/* Zone 1: Single-line brand wordmark */}
          <a
            href="#topo"
            className="font-display text-sm font-bold tracking-tight text-white whitespace-nowrap shrink-0 sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
          >
            {CONTACT_INFO.fullName}
          </a>

          {/* Zone 2: Clean single-line nav links */}
          <nav
            aria-label="Navegação principal"
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-400"
          >
            <a
              href="#resumo"
              className="whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
            >
              {t.nav.summary}
            </a>
            <a
              href="#produtos"
              className="whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
            >
              {t.nav.products}
            </a>
            <a
              href="#certificacoes"
              className="whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
            >
              {t.nav.certifications}
            </a>
            <a
              href="#contato"
              className="whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
            >
              {t.nav.contact}
            </a>
          </nav>

          {/* Zone 3: Language switcher & Quick actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div
              role="group"
              aria-label="Language selector"
              className="flex items-center rounded-lg border border-white/[0.08] bg-[#111827] p-0.5"
            >
              {LOCALES.map((item) => {
                const isActive = locale === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setLocale(item.id)}
                    aria-pressed={isActive}
                    className={`min-h-[32px] px-2.5 py-1 text-xs font-semibold tracking-wide rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                      isActive
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-400 hover:text-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <a
              href={CONTACT_INFO.emailHref}
              title={CONTACT_INFO.email}
              aria-label={`${t.header.emailLabel}: ${CONTACT_INFO.email}`}
              className="inline-flex h-9 w-9 sm:w-auto items-center justify-center gap-2 rounded-lg border border-white/[0.1] bg-[#111827] sm:px-3.5 text-xs font-medium text-slate-200 transition-colors duration-150 hover:border-white/25 hover:text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <Mail className="h-3.5 w-3.5 text-blue-400 shrink-0" aria-hidden="true" />
              <span className="hidden sm:inline">{t.header.emailLabel}</span>
            </a>

            <a
              href={CONTACT_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              title={CONTACT_INFO.whatsappNumber}
              aria-label={`${t.header.whatsappLabel}: ${CONTACT_INFO.whatsappNumber}`}
              className="inline-flex h-9 w-9 sm:w-auto items-center justify-center gap-2 rounded-lg bg-emerald-500 sm:px-3.5 text-xs font-semibold text-slate-950 transition-colors duration-150 hover:bg-emerald-400 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
            >
              <MessageCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span className="hidden sm:inline">{t.header.whatsappLabel}</span>
            </a>
          </div>
        </div>
      </header>

      <main id="topo">
        {/* Hero Split Section */}
        <section className="mx-auto max-w-[1200px] px-4 pt-12 pb-12 sm:px-8 lg:pt-20 lg:pb-16">
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left Column: Executive Proposition */}
            <div className="flex flex-col justify-between lg:col-span-7">
              <div>
                <p className="text-sm font-medium text-emerald-400 tracking-wide">
                  {t.hero.roleLocation}
                </p>

                <h1
                  className="mt-4 font-display font-bold tracking-tight text-white text-balance leading-[1.1]"
                  style={{ fontSize: 'clamp(2.15rem, 4vw, 3.35rem)' }}
                >
                  {t.hero.headline}
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                  {t.hero.subheadline}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="#produtos"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors duration-150 hover:bg-emerald-400 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                >
                  {t.hero.primaryCta}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>

                <a
                  href={CONTACT_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-blue-500/40 bg-blue-600/15 px-5 py-2.5 text-sm font-semibold text-blue-200 transition-colors duration-150 hover:border-blue-400 hover:bg-blue-600/25 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <MessageCircle className="h-4 w-4 text-blue-400" aria-hidden="true" />
                  {t.hero.secondaryCta}
                </a>

                <a
                  href={CONTACT_INFO.emailHref}
                  className="inline-flex min-h-[44px] items-center px-2 text-sm font-medium text-slate-300 transition-colors duration-150 hover:text-white underline decoration-white/20 underline-offset-4 hover:decoration-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            {/* Right Column: Production Portfolio Index */}
            <div className="lg:col-span-5">
              <div className="flex h-full flex-col justify-between rounded-xl border border-white/[0.08] bg-[#111827] p-6">
                <div>
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                    <h2 className="font-display text-base font-semibold text-white">
                      {t.hero.panelHeading}
                    </h2>
                    <span className="font-mono text-xs tabular-nums text-emerald-400">
                      05 / 05
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {t.hero.panelCaption}
                  </p>
                </div>

                <ul className="mt-5 divide-y divide-white/[0.06]">
                  {t.showcase.projects.map((project) => (
                    <li key={project.id}>
                      <a
                        href={`#project-${project.id}`}
                        className="group flex items-center justify-between gap-3 py-3 text-sm transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
                      >
                        <div className="min-w-0">
                          <span className="font-display font-semibold text-slate-100 group-hover:text-emerald-400 transition-colors">
                            {project.name}
                          </span>
                          <span className="mx-2 text-slate-600" aria-hidden="true">
                            ·
                          </span>
                          <span className="text-xs text-slate-400">
                            {project.categoryLabel}
                          </span>
                        </div>
                        <span className="font-mono text-xs text-slate-400 group-hover:text-slate-200 whitespace-nowrap shrink-0 flex items-center gap-1">
                          {project.domain}
                          <ArrowUpRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-emerald-400 transition-colors" aria-hidden="true" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Full-Width 4-Column Executive KPI Strip */}
          <div className="mt-10 grid grid-cols-2 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] gap-px lg:grid-cols-4">
            {t.hero.kpis.map((kpi) => (
              <div key={kpi.label} className="bg-[#111827] px-5 py-5">
                <p className="font-display text-2xl font-bold tracking-tight tabular-nums text-white sm:text-3xl">
                  {kpi.value}
                </p>
                <p className="mt-1 text-xs leading-snug text-slate-400 sm:text-sm">
                  {kpi.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Executive Summary & Core Competencies */}
        <section
          id="resumo"
          className="border-t border-white/[0.08] py-16 lg:py-20"
        >
          <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                  {t.summary.eyebrow}
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-white text-balance sm:text-3xl">
                  {t.summary.heading}
                </h2>
              </div>

              <div className="space-y-4 lg:col-span-7">
                <p className="text-base font-medium leading-relaxed text-slate-200 sm:text-lg">
                  {t.summary.lead}
                </p>
                <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                  {t.summary.body}
                </p>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-300">
                {t.summary.competenciesHeading}
              </h3>

              <div className="mt-4 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
                {t.summary.competencies.map((comp) => (
                  <div
                    key={comp.index}
                    className="flex flex-col justify-between bg-[#111827] p-6"
                  >
                    <div>
                      <span className="font-mono text-xs font-medium tabular-nums text-emerald-400">
                        {comp.index}
                      </span>
                      <h4 className="mt-2 font-display text-base font-semibold text-white">
                        {comp.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">
                        {comp.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Published Products Showcase */}
        <section
          id="produtos"
          className="border-t border-white/[0.08] py-16 lg:py-20"
        >
          <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                  {t.showcase.eyebrow}
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-white text-balance sm:text-3xl">
                  {t.showcase.heading}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                  {t.showcase.lead}
                </p>
              </div>

              {/* Interactive Category Filter Tabs */}
              <div
                role="tablist"
                aria-label={t.showcase.eyebrow}
                className="flex flex-wrap items-center gap-1.5 rounded-lg border border-white/[0.08] bg-[#111827] p-1 self-start lg:self-end"
              >
                {t.showcase.filters.map((filter) => {
                  const isActive = activeCategory === filter.id;
                  return (
                    <button
                      key={filter.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveCategory(filter.id)}
                      className={`min-h-[38px] rounded-md px-3.5 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                        isActive
                          ? 'bg-emerald-500 text-slate-950 font-semibold'
                          : 'text-slate-300 hover:bg-white/[0.05] hover:text-white'
                      }`}
                    >
                      {filter.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Product Cards Grid */}
            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {filteredProjects.map((project, index) => {
                const isWide =
                  filteredProjects.length % 2 === 1 &&
                  index === filteredProjects.length - 1 &&
                  filteredProjects.length > 1;

                return (
                  <article
                    key={project.id}
                    id={`project-${project.id}`}
                    className={`rounded-xl border border-white/[0.08] bg-[#111827] p-6 transition-colors duration-150 hover:border-white/[0.18] ${
                      isWide
                        ? 'lg:col-span-2 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center'
                        : 'flex flex-col justify-between gap-6'
                    }`}
                  >
                    {/* Visual Mockup Preview */}
                    <div className={isWide ? 'lg:col-span-6' : ''}>
                      <div className="group relative">
                        <ProductMockup projectId={project.id} domain={project.domain} />
                        <button
                          type="button"
                          onClick={() => setExpandedProject(project)}
                          aria-label={`${t.showcase.expandPreviewLabel}: ${project.name}`}
                          className="absolute right-2.5 bottom-2.5 inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-[#090d16]/90 text-slate-300 opacity-90 transition-all duration-150 hover:border-emerald-400 hover:text-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                        >
                          <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className={`flex flex-col justify-between ${isWide ? 'lg:col-span-6' : 'flex-1'}`}>
                      <div>
                        {/* Unboxed Metadata */}
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400">
                          <span className="font-medium text-emerald-400">{project.categoryLabel}</span>
                          <span aria-hidden="true">·</span>
                          <span>{project.role}</span>
                        </div>

                        <div className="mt-2 flex items-baseline justify-between gap-4">
                          <h3 className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                            {project.name}
                          </h3>
                          <span className="font-mono text-xs text-slate-400">{project.domain}</span>
                        </div>

                        <p className="mt-2 text-sm font-medium leading-relaxed text-slate-200">
                          {project.tagline}
                        </p>

                        <div className="mt-4 border-t border-white/[0.06] pt-4">
                          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                            {t.showcase.problemLabel}
                          </p>
                          <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
                            {project.problemSolved}
                          </p>
                        </div>

                        <div className="mt-4">
                          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                            {t.showcase.deliverablesLabel}
                          </p>
                          <ul className="mt-2 grid grid-cols-1 gap-x-4 gap-y-1.5 text-xs text-slate-300 sm:grid-cols-2">
                            {project.deliverables.map((deliverable) => (
                              <li key={deliverable} className="flex items-start gap-2">
                                <span
                                  className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${
                                    project.accent === 'emerald' ? 'bg-emerald-400' : 'bg-blue-400'
                                  }`}
                                  aria-hidden="true"
                                />
                                <span>{deliverable}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-4">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex min-h-[42px] items-center justify-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 ${
                            project.accent === 'emerald'
                              ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400 focus-visible:ring-emerald-300'
                              : 'bg-blue-600 text-white hover:bg-blue-500 focus-visible:ring-blue-300'
                          }`}
                        >
                          {t.showcase.visitButton}
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>

                        <span className="font-mono text-xs text-slate-500 hidden sm:inline">
                          {project.url.replace('https://', '')}
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technical Certifications & Education */}
        <section
          id="certificacoes"
          className="border-t border-white/[0.08] py-16 lg:py-20"
        >
          <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                {t.certifications.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-white text-balance sm:text-3xl">
                {t.certifications.heading}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                {t.certifications.lead}
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-xl border border-white/[0.08] bg-[#111827] divide-y divide-white/[0.07]">
              {t.certifications.items.map((cert, idx) => {
                const isCopied = copiedCode === cert.code;
                return (
                  <div
                    key={cert.id}
                    className="flex flex-col justify-between gap-4 px-5 py-5 sm:flex-row sm:items-center sm:px-6"
                  >
                    <div className="flex items-start gap-4">
                      <span className="mt-0.5 font-mono text-xs font-medium tabular-nums text-slate-500">
                        0{idx + 1}
                      </span>
                      <div>
                        <h3 className="font-display text-sm font-semibold text-white sm:text-base">
                          {cert.title}
                        </h3>
                        <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                          <span className="font-medium text-slate-300">{cert.issuer}</span>
                          <span className="mx-2 text-slate-600" aria-hidden="true">
                            ·
                          </span>
                          <span>{cert.focus}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pl-7 sm:pl-0 shrink-0">
                      <div className="text-left sm:text-right">
                        <span className="block text-[10px] uppercase tracking-wider text-slate-500">
                          {t.certifications.codeLabel}
                        </span>
                        <span className="font-mono text-xs font-semibold tabular-nums tracking-wider text-emerald-400">
                          {cert.code}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleCopyCode(cert.code)}
                        aria-label={`${t.certifications.copyLabel} ${cert.code}`}
                        className="inline-flex min-h-[36px] items-center gap-1.5 rounded-md border border-white/[0.1] bg-[#090d16] px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors duration-150 hover:border-white/25 hover:text-white cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                      >
                        {isCopied ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                            <span className="text-emerald-400">{t.certifications.copiedLabel}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                            <span>{t.certifications.copyLabel}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Direct Contact Section & Footer */}
        <footer
          id="contato"
          className="border-t border-white/[0.08] bg-[#070a12] py-16"
        >
          <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                  {t.contact.eyebrow}
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-white text-balance sm:text-3xl">
                  {t.contact.heading}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                  {t.contact.lead}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-6">
                <a
                  href={CONTACT_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between rounded-xl border border-emerald-500/25 bg-[#111827] p-5 transition-colors duration-150 hover:border-emerald-400/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-emerald-400">
                        {t.contact.whatsappCardTitle}
                      </span>
                      <ArrowUpRight
                        className="h-4 w-4 text-slate-500 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-emerald-400"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="mt-2 font-mono text-base font-semibold tabular-nums text-white">
                      {CONTACT_INFO.whatsappNumber}
                    </p>
                  </div>
                  <span className="mt-4 text-xs font-medium text-slate-400 group-hover:text-slate-200">
                    {t.contact.whatsappAction}
                  </span>
                </a>

                <a
                  href={CONTACT_INFO.emailHref}
                  className="group flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#111827] p-5 transition-colors duration-150 hover:border-blue-400/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-blue-400">
                        {t.contact.emailCardTitle}
                      </span>
                      <ArrowUpRight
                        className="h-4 w-4 text-slate-500 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-400"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="mt-2 truncate font-mono text-sm font-semibold text-white">
                      {CONTACT_INFO.email}
                    </p>
                  </div>
                  <span className="mt-4 text-xs font-medium text-slate-400 group-hover:text-slate-200">
                    {t.contact.emailAction}
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/[0.08] pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
              <p>
                © {new Date().getFullYear()} {t.contact.copyright}
              </p>
              <p>{t.contact.locationFooter}</p>
            </div>
          </div>
        </footer>
      </main>

      {/* Lightbox Modal for Expanded UI Mockup Preview */}
      {expandedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setExpandedProject(null)}
        >
          <div
            className="w-full max-w-3xl rounded-xl border border-white/[0.12] bg-[#111827] p-5 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-4">
              <div>
                <p className="text-xs font-medium text-emerald-400">
                  {expandedProject.categoryLabel} · {expandedProject.role}
                </p>
                <h3
                  id="modal-project-title"
                  className="mt-1 font-display text-xl font-bold text-white"
                >
                  {expandedProject.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setExpandedProject(null)}
                aria-label={t.showcase.closePreviewLabel}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.1] bg-[#090d16] text-slate-300 hover:text-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-5">
              <ProductMockup projectId={expandedProject.id} domain={expandedProject.domain} />
            </div>

            <div className="mt-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <p className="text-sm text-slate-300">{expandedProject.tagline}</p>
              <a
                href={expandedProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 transition-colors hover:bg-emerald-400 whitespace-nowrap shrink-0"
              >
                {t.showcase.visitButton}
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
