import React from 'react';

const circleSize = 100;
const strokeWidth = 10;
const radius = (circleSize - strokeWidth) / 2;
const circumference = 2 * Math.PI * radius;

const LanguagesCircle = ({ languages }) => {
  if (!languages || !Array.isArray(languages)) {
    return null; // o un mensaje de error amigable
  }
  return (
    <div style={{ display: 'flex', gap: 40 }}>
      {languages.map(lang => {
        const offset = circumference * (1 - lang.percent / 100);
        return (
          <div key={lang.name} style={{ textAlign: 'center' }}>
            <svg width={circleSize} height={circleSize}>
              <circle
                cx={circleSize / 2}
                cy={circleSize / 2}
                r={radius}
                stroke="#3f51b5"
                strokeWidth={strokeWidth}
                fill="none"
                style={{ opacity: 0.2 }}
              />
              <circle
                cx={circleSize / 2}
                cy={circleSize / 2}
                r={radius}
                stroke="#3f51b5"
                strokeWidth={strokeWidth}
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                style={{ transition: 'stroke-dashoffset 0.5s' }}
              />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dy="0.3em"
                fontSize="18"
                fontWeight="bold"
                fill="#222"
              >
                {lang.percent}%
              </text>
            </svg>
            <div style={{ marginTop: 8, fontWeight: 'bold' }}>{lang.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default LanguagesCircle;