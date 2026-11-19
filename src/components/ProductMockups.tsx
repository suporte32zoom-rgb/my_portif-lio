import type { ProjectItem } from '../data/portfolioData';

interface MockupProps {
  projectId: ProjectItem['id'];
  domain: string;
}

export function ProductMockup({ projectId, domain }: MockupProps) {
  return (
    <div className="relative w-full overflow-hidden rounded-lg border border-white/[0.08] bg-[#070b13] select-none">
      {/* Browser Window Top Bar */}
      <div className="flex items-center justify-between border-b border-white/[0.07] bg-[#0c1220] px-3 py-2">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-slate-700" />
          <span className="h-2 w-2 rounded-full bg-slate-700" />
          <span className="h-2 w-2 rounded-full bg-slate-700" />
        </div>
        <div className="rounded bg-[#090d16] px-2.5 py-0.5 font-mono text-[10px] tracking-tight text-slate-400 border border-white/[0.06]">
          https://{domain}
        </div>
        <div className="w-8" aria-hidden="true" />
      </div>

      {/* Screen Content by Product */}
      <div className="aspect-[16/10] w-full p-3.5 sm:p-4">
        {projectId === 'dinheuro' && <DinhEuroScreen />}
        {projectId === 'nutrink' && <NutrinKScreen />}
        {projectId === 'playtelas' && <PlayTelasScreen />}
        {projectId === 'consuderme' && <ConsudermeScreen />}
        {projectId === 'estradapay' && <EstradaPayScreen />}
      </div>
    </div>
  );
}

function DinhEuroScreen() {
  return (
    <div className="flex h-full flex-col justify-between gap-2.5 text-left">
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded bg-emerald-500/15 font-mono text-[10px] font-semibold text-emerald-400">
            D$
          </div>
          <span className="font-display text-xs font-semibold tracking-tight text-slate-100">
            DinhEuro Terminal
          </span>
        </div>
        <div className="flex items-center gap-3 font-mono text-[10px] tabular-nums text-slate-400">
          <span>
            USD/BRL <strong className="text-emerald-400">5.74</strong>
          </span>
          <span>
            EUR/BRL <strong className="text-slate-200">6.12</strong>
          </span>
          <span className="hidden sm:inline">
            SELIC <strong className="text-blue-400">11.25%</strong>
          </span>
        </div>
      </div>

      <div className="grid flex-1 grid-cols-12 gap-2.5">
        {/* Main Chart */}
        <div className="col-span-7 flex flex-col justify-between rounded border border-white/[0.06] bg-[#0b101b] p-2.5">
          <div className="flex items-baseline justify-between">
            <div>
              <p className="text-[9px] uppercase tracking-wider text-slate-500">FX Spot · USD / BRL</p>
              <p className="font-mono text-sm font-semibold tabular-nums text-white">R$ 5,7420</p>
            </div>
            <span className="font-mono text-[10px] tabular-nums text-emerald-400">+0.42%</span>
          </div>
          <svg viewBox="0 0 220 72" className="h-16 w-full overflow-visible" aria-hidden="true">
            <defs>
              <linearGradient id="dinheuroArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 54 L26 48 L52 52 L78 36 L104 41 L130 27 L156 31 L182 18 L220 12 L220 72 L0 72 Z"
              fill="url(#dinheuroArea)"
            />
            <path
              d="M0 54 L26 48 L52 52 L78 36 L104 41 L130 27 L156 31 L182 18 L220 12"
              fill="none"
              stroke="#10b981"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="220" cy="12" r="2.5" fill="#10b981" />
          </svg>
          <div className="flex justify-between font-mono text-[9px] tabular-nums text-slate-500">
            <span>09:00</span>
            <span>12:00</span>
            <span>15:00</span>
            <span>18:00</span>
          </div>
        </div>

        {/* FX Converter */}
        <div className="col-span-5 flex flex-col justify-between rounded border border-white/[0.06] bg-[#0b101b] p-2.5">
          <p className="text-[9px] font-medium uppercase tracking-wider text-slate-400">Simulador Cambial</p>
          <div className="space-y-1.5">
            <div className="rounded border border-white/[0.06] bg-[#090d16] px-2 py-1">
              <span className="block text-[8px] text-slate-500">USD · Enviar</span>
              <span className="font-mono text-xs font-medium tabular-nums text-slate-100">1,000.00</span>
            </div>
            <div className="rounded border border-emerald-500/30 bg-emerald-500/[0.06] px-2 py-1">
              <span className="block text-[8px] text-emerald-400">BRL · Receber</span>
              <span className="font-mono text-xs font-semibold tabular-nums text-emerald-300">5,742.00</span>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-white/[0.06] pt-1.5 font-mono text-[9px] tabular-nums text-slate-400">
            <span>BTC</span>
            <span className="text-emerald-400">$91,420</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function NutrinKScreen() {
  return (
    <div className="grid h-full grid-cols-12 gap-2.5 text-left">
      {/* Compact Sidebar */}
      <div className="col-span-3 flex flex-col justify-between rounded border border-white/[0.06] bg-[#0b101b] p-2">
        <div className="space-y-2">
          <div className="flex items-center gap-1.5">
            <div className="h-4 w-4 rounded bg-emerald-500/20 text-center font-mono text-[9px] font-bold leading-4 text-emerald-400">
              N
            </div>
            <span className="font-display text-[11px] font-semibold text-slate-100">NutrinK</span>
          </div>
          <div className="space-y-1 pt-1 text-[9px] text-slate-400">
            <div className="rounded bg-emerald-500/15 px-1.5 py-1 font-medium text-emerald-300">Prontuário</div>
            <div className="px-1.5 py-0.5">Antropometria</div>
            <div className="px-1.5 py-0.5">Plano Alimentar</div>
            <div className="px-1.5 py-0.5">Agenda</div>
          </div>
        </div>
        <div className="rounded border border-blue-500/25 bg-blue-500/10 p-1.5">
          <p className="text-[8px] font-semibold text-blue-300">NútrIA Copiloto</p>
          <p className="mt-0.5 text-[8px] leading-tight text-slate-400">TMB calculada: 1.640 kcal</p>
        </div>
      </div>

      {/* Main Clinical Workspace */}
      <div className="col-span-9 flex flex-col justify-between gap-2">
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded border border-white/[0.06] bg-[#0b101b] p-2">
            <span className="block text-[8px] text-slate-500">Massa Magra</span>
            <span className="font-mono text-xs font-semibold tabular-nums text-emerald-400">76.4%</span>
          </div>
          <div className="rounded border border-white/[0.06] bg-[#0b101b] p-2">
            <span className="block text-[8px] text-slate-500">Gordura Corp.</span>
            <span className="font-mono text-xs font-semibold tabular-nums text-slate-100">18.2%</span>
          </div>
          <div className="rounded border border-white/[0.06] bg-[#0b101b] p-2">
            <span className="block text-[8px] text-slate-500">Meta Diária</span>
            <span className="font-mono text-xs font-semibold tabular-nums text-blue-400">2.150 kcal</span>
          </div>
        </div>

        {/* Anthropometry Evolution SVG */}
        <div className="flex flex-1 flex-col justify-between rounded border border-white/[0.06] bg-[#0b101b] p-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-medium text-slate-300">Evolução Antropométrica · 12 Semanas</span>
            <span className="font-mono text-[9px] tabular-nums text-emerald-400">-4.8 kg GC</span>
          </div>
          <svg viewBox="0 0 240 60" className="h-14 w-full" aria-hidden="true">
            <line x1="0" y1="15" x2="240" y2="15" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
            <line x1="0" y1="35" x2="240" y2="35" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
            <path
              d="M6 46 C48 42, 82 32, 120 26 C158 20, 196 14, 234 10"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M6 16 C48 20, 82 28, 120 34 C158 40, 196 44, 234 48"
              fill="none"
              stroke="#2563eb"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              strokeLinecap="round"
            />
          </svg>
          <div className="flex items-center justify-between text-[8px] text-slate-500">
            <span>Consulta 14:30 · Paciente M. Oliveira</span>
            <span className="text-emerald-400">PWA Ativo</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlayTelasScreen() {
  return (
    <div className="flex h-full flex-col justify-between gap-2.5 text-left">
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded bg-blue-600/25 text-blue-400">
            <svg viewBox="0 0 16 16" className="h-3 w-3 fill-current" aria-hidden="true">
              <path d="M4 3.2v9.6l8.5-4.8L4 3.2z" />
            </svg>
          </div>
          <span className="font-display text-xs font-semibold text-white">PlayTelas</span>
        </div>
        <div className="flex items-center gap-3 text-[9px] text-slate-400">
          <span className="text-white font-medium">Ao Vivo</span>
          <span>Catálogo VOD</span>
          <span>Esportes</span>
        </div>
      </div>

      {/* Featured Stream Banner */}
      <div className="relative flex flex-1 flex-col justify-end overflow-hidden rounded border border-white/[0.08] bg-gradient-to-br from-blue-950/70 via-[#0f172a] to-emerald-950/30 p-3">
        <div className="flex items-end justify-between gap-2">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-wider text-blue-400">Transmissão 1080p · Baixa Latência</p>
            <p className="font-display text-sm font-semibold text-white">Canal Principal · Cinema & Séries</p>
          </div>
          <div className="rounded bg-blue-600 px-2.5 py-1 text-[9px] font-semibold text-white">
            Assistir Agora
          </div>
        </div>
      </div>

      {/* Channel & VOD Strip */}
      <div className="grid grid-cols-4 gap-2">
        {[
          { ch: 'CH 01', name: 'Notícias 24h', bar: 'w-4/5 bg-blue-500' },
          { ch: 'CH 02', name: 'Esportes HD', bar: 'w-3/5 bg-emerald-500' },
          { ch: 'VOD', name: 'Documentários', bar: 'w-2/3 bg-blue-400' },
          { ch: 'VOD', name: 'Lançamentos', bar: 'w-1/2 bg-slate-500' },
        ].map((slot) => (
          <div key={slot.name} className="rounded border border-white/[0.06] bg-[#0b101b] p-1.5">
            <span className="block font-mono text-[8px] text-slate-500">{slot.ch}</span>
            <span className="block truncate text-[9px] font-medium text-slate-200">{slot.name}</span>
            <div className="mt-1 h-0.5 w-full rounded bg-slate-800">
              <div className={`h-0.5 rounded ${slot.bar}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConsudermeScreen() {
  return (
    <div className="grid h-full grid-cols-12 gap-2.5 text-left">
      {/* Left: Anamnesis & Dermia */}
      <div className="col-span-7 flex flex-col justify-between rounded border border-white/[0.06] bg-[#0b101b] p-2.5">
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-1.5">
          <span className="font-display text-[11px] font-semibold text-white">Consuderme · Prontuário</span>
          <span className="font-mono text-[9px] text-blue-400">Fototipo III</span>
        </div>
        <div className="space-y-1.5 py-1">
          <div className="flex items-center justify-between rounded bg-[#090d16] px-2 py-1 text-[9px]">
            <span className="text-slate-400">Anamnese Estruturada</span>
            <span className="font-mono text-emerald-400">Completa</span>
          </div>
          <div className="flex items-center justify-between rounded bg-[#090d16] px-2 py-1 text-[9px]">
            <span className="text-slate-400">Mapeamento de Lesões</span>
            <span className="font-mono text-slate-200">Região Facial</span>
          </div>
        </div>
        <div className="rounded border border-blue-500/25 bg-blue-500/[0.08] p-2">
          <p className="text-[9px] font-semibold text-blue-300">Dermia · Apoio Diagnóstico</p>
          <p className="mt-0.5 text-[8px] leading-snug text-slate-300">
            Sugestão de protocolo tópico noturno + fotoproteção FPS 60 com revisão em 30 dias.
          </p>
        </div>
      </div>

      {/* Right: Compounded Formula */}
      <div className="col-span-5 flex flex-col justify-between rounded border border-white/[0.06] bg-[#0b101b] p-2.5">
        <div>
          <p className="text-[9px] font-medium uppercase tracking-wider text-slate-400">Fórmula Magistral</p>
          <div className="mt-2 space-y-1.5 font-mono text-[9px] tabular-nums">
            <div className="flex justify-between border-b border-white/[0.05] pb-1 text-slate-200">
              <span>Niacinamida</span>
              <span className="text-blue-400">4.0%</span>
            </div>
            <div className="flex justify-between border-b border-white/[0.05] pb-1 text-slate-200">
              <span>Ácido Azelaico</span>
              <span className="text-blue-400">15.0%</span>
            </div>
            <div className="flex justify-between border-b border-white/[0.05] pb-1 text-slate-200">
              <span>Alfa-Bisabolol</span>
              <span className="text-blue-400">1.0%</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Veículo Sérum qsp</span>
              <span>30g</span>
            </div>
          </div>
        </div>
        <div className="rounded bg-blue-600/20 py-1 text-center text-[9px] font-medium text-blue-300 border border-blue-500/30">
          Emitir Receituário
        </div>
      </div>
    </div>
  );
}

function EstradaPayScreen() {
  return (
    <div className="grid h-full grid-cols-12 gap-2.5 text-left">
      {/* Plate Lookup */}
      <div className="col-span-7 flex flex-col justify-between rounded border border-white/[0.06] bg-[#0b101b] p-2.5">
        <div className="flex items-center justify-between">
          <span className="font-display text-[11px] font-semibold text-white">Estrada Pay · Free Flow</span>
          <span className="font-mono text-[9px] text-emerald-400">SP-330 / BR-101</span>
        </div>

        <div className="rounded border border-white/[0.08] bg-[#090d16] p-2">
          <span className="block text-[8px] uppercase tracking-wider text-slate-500">Placa Consultada</span>
          <div className="mt-1 flex items-center justify-between">
            <span className="font-mono text-sm font-bold tracking-widest text-white">BRA2E19</span>
            <span className="font-mono text-[9px] text-emerald-400">2 passagens</span>
          </div>
        </div>

        <div className="space-y-1 font-mono text-[9px] tabular-nums">
          <div className="flex items-center justify-between text-slate-300">
            <span>Pórtico Km 42 · 10:14</span>
            <span>R$ 12,40</span>
          </div>
          <div className="flex items-center justify-between text-slate-300">
            <span>Pórtico Km 88 · 11:02</span>
            <span>R$ 14,80</span>
          </div>
        </div>
      </div>

      {/* Instant Pix Settlement */}
      <div className="col-span-5 flex flex-col items-center justify-between rounded border border-emerald-500/25 bg-emerald-500/[0.05] p-2.5 text-center">
        <div className="w-full">
          <p className="text-[9px] font-medium text-emerald-300">Pagamento via Pix</p>
          <p className="font-mono text-sm font-bold tabular-nums text-white">R$ 27,20</p>
        </div>

        {/* Clean SVG QR Representation */}
        <svg viewBox="0 0 48 48" className="h-14 w-14 rounded bg-white p-1" aria-hidden="true">
          <rect x="3" y="3" width="14" height="14" fill="#090d16" />
          <rect x="6" y="6" width="8" height="8" fill="#ffffff" />
          <rect x="8" y="8" width="4" height="4" fill="#090d16" />
          <rect x="31" y="3" width="14" height="14" fill="#090d16" />
          <rect x="34" y="6" width="8" height="8" fill="#ffffff" />
          <rect x="36" y="8" width="4" height="4" fill="#090d16" />
          <rect x="3" y="31" width="14" height="14" fill="#090d16" />
          <rect x="6" y="34" width="8" height="8" fill="#ffffff" />
          <rect x="8" y="36" width="4" height="4" fill="#090d16" />
          <rect x="21" y="5" width="5" height="5" fill="#090d16" />
          <rect x="21" y="15" width="6" height="6" fill="#090d16" />
          <rect x="5" y="21" width="6" height="6" fill="#090d16" />
          <rect x="16" y="24" width="8" height="5" fill="#090d16" />
          <rect x="28" y="21" width="6" height="6" fill="#090d16" />
          <rect x="38" y="22" width="6" height="5" fill="#090d16" />
          <rect x="22" y="33" width="6" height="6" fill="#090d16" />
          <rect x="32" y="31" width="6" height="6" fill="#090d16" />
          <rect x="39" y="38" width="6" height="6" fill="#090d16" />
        </svg>

        <div className="w-full rounded bg-emerald-500 py-1 text-[9px] font-semibold text-slate-950">
          Liquidar Tarifa
        </div>
      </div>
    </div>
  );
}
