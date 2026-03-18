import { useState, useEffect } from "react";

// ══════════════════════════════════════════════════════════════════════
//  GEOMETRIA — com ângulos de 45° nos terminais
//  Usa polígonos preenchidos em vez de linhas para permitir cortes diagonais
// ══════════════════════════════════════════════════════════════════════

const T_Y    = 62;   // y fixo da crossbar do T
const T_X1   = 50;   // borda esquerda da crossbar
const T_STEM = 96;   // haste do T
const T_H    = 90;   // comprimento da haste

const E_HALF = 45;   // metade da altura do E
const E_TW   = 88;   // largura barras do E
const E_MW   = 88;
const E_BW   = 88;

const SW     = 7.5;  // espessura dos traços
const HW     = SW / 2; // metade da espessura

// ── Keyframes ──────────────────────────────────────────────────────────
const KF = [
  { eX: 158, tX2: 158 + 88, eMidY: T_Y + E_HALF, op: 0 },
  { eX: 458, tX2: 458,      eMidY: T_Y + E_HALF, op: 0 },
  { eX: 158, tX2: 158 + 88, eMidY: T_Y,          op: 0 },
  { eX: 220, tX2: 220,      eMidY: T_Y,           op: 1 },
];

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

export default function TELogo({ className = "" }: TELogoProps) {
  const [v, setV] = useState({ ...KF[0] });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0;

      if (progress < 0.33) {
        const p = progress / 0.33;
        setV(lerpKF(KF[0], KF[1], p));
      } else if (progress < 0.66) {
        const p = (progress - 0.33) / 0.33;
        setV(lerpKF(KF[1], KF[2], p));
      } else {
        const p = (progress - 0.66) / 0.34;
        setV(lerpKF(KF[2], KF[3], p));
      }
    };

    handleScroll();
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

  // PROPRIEDADES posicionado entre haste do T e coluna do E
  const propX = (T_STEM + eX) / 2;
  const propY = T_Y + 24;

  // ── Polígonos com cortes 45° ─────────────────────────────────────

  // T crossbar: corte 45° na esquerda (/ diagonal)
  // Top-left indentado por SW, bottom-left em T_X1
  const tCrossbar = `
    ${T_X1 + SW},${T_Y - HW}
    ${tX2},${T_Y - HW}
    ${tX2},${T_Y + HW}
    ${T_X1},${T_Y + HW}
  `;

  // T stem: corte 45° na base (\ diagonal)
  // Bottom-left desce mais, bottom-right sobe por SW
  const tStem = `
    ${T_STEM - HW},${T_Y - HW}
    ${T_STEM + HW},${T_Y - HW}
    ${T_STEM + HW},${T_Y + T_H - SW}
    ${T_STEM - HW},${T_Y + T_H}
  `;

  // E coluna (spine): corte 45° no topo-esquerdo e base-esquerdo
  const eSpine = `
    ${eX - HW + SW},${eTopY - HW}
    ${eX + HW},${eTopY - HW}
    ${eX + HW},${eBotY + HW}
    ${eX - HW},${eBotY + HW - SW}
  `;

  // E barra topo
  const eTop = `
    ${eX - HW},${eTopY - HW}
    ${eX + E_TW},${eTopY - HW}
    ${eX + E_TW - SW},${eTopY + HW}
    ${eX - HW},${eTopY + HW}
  `;

  // E barra meio
  const eMid = `
    ${eX - HW},${eMidY - HW}
    ${eX + E_MW},${eMidY - HW}
    ${eX + E_MW - SW},${eMidY + HW}
    ${eX - HW},${eMidY + HW}
  `;

  // E barra fundo
  const eBot = `
    ${eX - HW},${eBotY - HW}
    ${eX + E_BW},${eBotY - HW}
    ${eX + E_BW},${eBotY + HW}
    ${eX - HW},${eBotY + HW}
  `;

  return (
    <svg
      viewBox="0 0 560 200"
      preserveAspectRatio="xMinYMid meet"
      className={className}
      style={{ overflow: "visible" }}
    >
      <g fill="currentColor">
        {/* ── T ── */}
        <polygon points={tCrossbar} />
        <polygon points={tStem} />

        {/* ── E ── */}
        <polygon points={eSpine} />
        <polygon points={eTop} />
        <polygon points={eMid} />
        <polygon points={eBot} />
      </g>

      {/* ── PROPRIEDADES ── */}
      <text
        x={propX}
        y={propY}
        textAnchor="middle"
        fill="currentColor"
        fontSize={8}
        letterSpacing={3.5}
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
