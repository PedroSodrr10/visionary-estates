import { useEffect, useState } from "react";

interface TELogoProps {
  className?: string;
}

interface LogoFrame {
  eOffsetX: number;
  eOffsetY: number;
  wordOpacity: number;
}

const UNIT = 12;
const ORIGIN_X = 40;
const ORIGIN_Y = 30;

const FRAMES: LogoFrame[] = [
  { eOffsetX: 96, eOffsetY: 0, wordOpacity: 0 },
  { eOffsetX: 124, eOffsetY: 0, wordOpacity: 0 },
  { eOffsetX: 96, eOffsetY: -4 * UNIT, wordOpacity: 0 },
  { eOffsetX: 0, eOffsetY: 0, wordOpacity: 1 },
];

const lerp = (from: number, to: number, t: number) => from + (to - from) * t;

const interpolateFrame = (from: LogoFrame, to: LogoFrame, t: number): LogoFrame => ({
  eOffsetX: lerp(from.eOffsetX, to.eOffsetX, t),
  eOffsetY: lerp(from.eOffsetY, to.eOffsetY, t),
  wordOpacity: lerp(from.wordOpacity, to.wordOpacity, t),
});

const gx = (u: number) => ORIGIN_X + u * UNIT;
const gy = (u: number) => ORIGIN_Y + u * UNIT;
const rectPath = (x1: number, y1: number, x2: number, y2: number) =>
  `M ${gx(x1)} ${gy(y1)} H ${gx(x2)} V ${gy(y2)} H ${gx(x1)} Z`;
const trianglePath = (a: [number, number], b: [number, number], c: [number, number]) =>
  `M ${gx(a[0])} ${gy(a[1])} L ${gx(b[0])} ${gy(b[1])} L ${gx(c[0])} ${gy(c[1])} Z`;

export default function TELogo({ className = "" }: TELogoProps) {
  const [frame, setFrame] = useState<LogoFrame>(FRAMES[0]);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;

      if (progress < 0.33) {
        setFrame(interpolateFrame(FRAMES[0], FRAMES[1], progress / 0.33));
        return;
      }

      if (progress < 0.66) {
        setFrame(interpolateFrame(FRAMES[1], FRAMES[2], (progress - 0.33) / 0.33));
        return;
      }

      setFrame(interpolateFrame(FRAMES[2], FRAMES[3], (progress - 0.66) / 0.34));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const topBarStart = gx(0);
  const topBarEnd = gx(25) + frame.eOffsetX;

  const topBarPath = [
    `M ${topBarStart} ${gy(0)} H ${topBarEnd} V ${gy(1)} H ${topBarStart} Z`,
    // Top-half cut in the horizontal bar (cell adjacent to stem junction).
    trianglePath([9, 0], [9, 1], [10, 0]),
  ].join(" ");

  const tPath = [
    rectPath(8, 1, 9, 9),
    // Cut in the stem top square.
    trianglePath([8, 1], [8, 2], [9, 1]),
  ].join(" ");

  const ePath = [
    rectPath(16, 1, 17, 9),
    rectPath(17, 4, 25, 5),
    rectPath(17, 8, 25, 9),
    // Cut in the first square of the bottom bar.
    trianglePath([17, 8], [17, 9], [18, 9]),
  ].join(" ");

  const tRightX = gx(9);
  const eLeftX = gx(16) + frame.eOffsetX;
  const propX = (tRightX + eLeftX) / 2;
  const propY = gy(2.6);

  return (
    <svg
      viewBox="0 0 520 180"
      preserveAspectRatio="xMinYMid meet"
      className={className}
      style={{ overflow: "visible" }}
    >
      <g fill="currentColor">
        <path d={topBarPath} fillRule="evenodd" />
        <path d={tPath} fillRule="evenodd" />

        <g transform={`translate(${frame.eOffsetX} ${frame.eOffsetY})`}>
          <path d={ePath} fillRule="evenodd" />
        </g>
      </g>

      <text
        x={propX}
        y={propY}
        textAnchor="middle"
        fill="currentColor"
        fontSize={8}
        letterSpacing={3.5}
        fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
        fontWeight={300}
        opacity={frame.wordOpacity}
        style={{ userSelect: "none" }}
      >
        PROPRIEDADES
      </text>
    </svg>
  );
}
