import { useState, useEffect } from "react";

// ══════════════════════════════════════════════════════════════════════
//  GEOMETRIA — derivada diretamente das imagens de referência
//
//  4 linhas de construção verticais:
//    L1 = T_X1   = borda esquerda do T
//    L2 = T_STEM = haste do T
//    L3 = eX     = coluna traseira do E  (muda por estágio)
//    L4 = eX + E_TW = borda direita do E (muda por estágio)
//
//  Regra-chave:
//    Estados compactos  →  tX2 = eX + E_TW  (crossbar cobre T+E inteiro)
//    Estado stretch     →  tX2 = eX          (spine merge: linha única)
//    Estado final       →  tX2 = eX          (crossbar conecta à coluna do E)
//
//  Eixo vertical:
//    Estados 1,2 → eMidY = T_Y + E_HALF  (E com topo alinhado à crossbar)
//    Estados 3,4 → eMidY = T_Y           (E sobe: traço médio = crossbar)
// ══════════════════════════════════════════════════════════════════════

const T_Y    = 62;   // y fixo da crossbar do T (nunca muda)
const T_X1   = 50;   // borda esquerda da crossbar
const T_STEM = 96;   // haste do T — L2 na grade de construção
const T_H    = 90;   // comprimento da haste

const E_HALF = 45;   // metade da altura do E  (altura total = 90)
const E_TW   = 88;   // largura barra topo do E
const E_MW   = 88;   // largura barra meio do E  (mesmo tamanho que top/bot)
const E_BW   = 88;   // largura barra fundo do E

const SW     = 7.5;  // strokeWidth

// ── Keyframes ──────────────────────────────────────────────────────────
//  eX     = x da coluna traseira do E
//  tX2    = x2 da crossbar do T
//  eMidY  = y do traço do meio do E
//  op     = opacidade "PROPRIEDADES"
const KF = [
  // ① compacto — crossbar do T cobre a largura total do E (tX2 = eX + E_TW)
  { eX: 158, tX2: 158 + 88, eMidY: T_Y + E_HALF, op: 0 },

  // ② stretch — T crossbar estica até encontrar o E que está na direita
  //    tX2 = eX → spine merge → linha única de T_X1 a eX+E_TW
  { eX: 458, tX2: 458,      eMidY: T_Y + E_HALF, op: 0 },

  // ③ retração + E sobe — letras compactas, traço médio = crossbar
  //    tX2 = eX + E_TW → crossbar cobre todo o E de novo
  { eX: 158, tX2: 158 + 88, eMidY: T_Y,          op: 0 },

  // ④ final — E afasta, crossbar conecta até a coluna do E
  //    tX2 = eX → PROPRIEDADES fica no vão entre haste e coluna
  { eX: 220, tX2: 220,      eMidY: T_Y,           op: 1 },
];

// ── Helpers ────────────────────────────────────────────────────────────
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const lerpKF = (f: typeof KF[0], to: typeof KF[0], p: number) => ({
  eX:    lerp(f.eX,    to.eX,    p),
  tX2:   lerp(f.tX2,   to.tX2,   p),
  eMidY: lerp(f.eMidY, to.eMidY, p),
  op:    lerp(f.op,    to.op,    p),
});

interface TELogoProps {
  className?: string;
}

// ── Componente ─────────────────────────────────────────────────────────
export default function TELogo({ className = "" }: TELogoProps) {
  const [v, setV] = useState({ ...KF[0] });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Calcula a altura total rolável da página
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      
      // Normaliza o scroll entre 0 e 1 (0 = topo, 1 = final)
      const progress = maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0;
      
      // Divide em 3 fases ao longo de todo o scroll
      if (progress < 0.33) {
        // Fase 0 → 1: stretch
        const p = progress / 0.33;
        setV(lerpKF(KF[0], KF[1], p));
      } else if (progress < 0.66) {
        // Fase 1 → 2: retração + E sobe
        const p = (progress - 0.33) / 0.33;
        setV(lerpKF(KF[1], KF[2], p));
      } else {
        // Fase 2 → 3: E afasta + texto aparece
        const p = (progress - 0.66) / 0.34;
        setV(lerpKF(KF[2], KF[3], p));
      }
    };

    handleScroll(); // Inicializa
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const { eX, tX2, eMidY, op } = v;
  const eTopY = eMidY - E_HALF;
  const eBotY = eMidY + E_HALF;

  // PROPRIEDADES: centrado entre haste do T e coluna do E, logo abaixo da crossbar
  const propX = (T_STEM + eX) / 2;
  const propY = T_Y + 28;

  return (
    <svg
      viewBox="0 0 560 200"
      preserveAspectRatio="xMinYMid meet"
      className={className}
      style={{ overflow: "visible" }}
    >
      <g fill="none" stroke="currentColor" strokeWidth={SW} strokeLinecap="square">

        {/* ── T ─────────────────────────────────────────────── */}
        {/* crossbar — x1 fixo, x2 anima */}
        <line x1={T_X1}   y1={T_Y}   x2={tX2}      y2={T_Y}   />
        {/* haste — estática */}
        <line x1={T_STEM} y1={T_Y}   x2={T_STEM}   y2={T_Y + T_H} />

        {/* ── E ─────────────────────────────────────────────── */}
        {/* coluna traseira */}
        <line x1={eX}     y1={eTopY} x2={eX}        y2={eBotY} />
        {/* barra do topo — mesmo Y da crossbar quando eMidY=T_Y+E_HALF */}
        <line x1={eX}     y1={eTopY} x2={eX + E_TW} y2={eTopY} />
        {/* barra do meio — coincide com T_Y nos estados 3 e 4 */}
        <line x1={eX}     y1={eMidY} x2={eX + E_MW} y2={eMidY} />
        {/* barra do fundo */}
        <line x1={eX}     y1={eBotY} x2={eX + E_BW} y2={eBotY} />

      </g>

      {/* ── PROPRIEDADES ─────────────────────────────────────── */}
      <text
        x={propX}
        y={propY}
        textAnchor="middle"
        fill="currentColor"
        fontSize={8.5}
        letterSpacing={3.8}
        fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
        fontWeight={300}
        opacity={op}
        style={{ userSelect: "none" }}
      >
        PROPRIEDADES
      </text>
    </svg>
  );
}
