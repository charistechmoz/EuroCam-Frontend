import React from "react";

/**
 * Círculo de 12 estrelas, inspirado no emblema da União Europeia.
 * Uso: <EUStars size={80} opacity={0.15} color="#e8cc2d" />
 */
const EUStars = ({ size = 80, opacity = 1, color = "#e8cc2d", className = "" }) => {
  const starCount = 12;
  const radius = 38;
  const center = 50;

  const starPath =
    "M12 2l2.39 6.94H21l-5.6 4.06 2.14 6.94L12 15.94 6.46 20 8.6 13.06 3 9h6.61L12 2z";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
    >
      {Array.from({ length: starCount }).map((_, i) => {
        const angle = (i / starCount) * 2 * Math.PI - Math.PI / 2;
        const x = center + radius * Math.cos(angle);
        const y = center + radius * Math.sin(angle);
        return (
          <g key={i} transform={`translate(${x - 6}, ${y - 6}) scale(0.5)`}>
            <path d={starPath} fill={color} />
          </g>
        );
      })}
    </svg>
  );
};

export default EUStars;