// Flag of the Republic of Uzbekistan, drawn as SVG so it stays crisp at any size.
// Three stripes (sky-blue / white / green) with red fimbriations, a crescent and
// twelve stars (rows of 3, 4, 5) in the upper hoist.
export function UzFlag({ className = '' }: { className?: string }) {
  const stars: [number, number][] = []
  const rows = [3, 4, 5]
  rows.forEach((count, r) => {
    for (let c = 0; c < count; c++) {
      stars.push([92 + c * 26, 22 + r * 20])
    }
  })

  return (
    <svg viewBox="0 0 500 250" className={className} role="img" aria-label="Flag of Uzbekistan">
      <rect width="500" height="250" fill="#ffffff" />
      <rect y="0" width="500" height="80" fill="#0099b5" />
      <rect y="80" width="500" height="5" fill="#ce1126" />
      <rect y="165" width="500" height="5" fill="#ce1126" />
      <rect y="170" width="500" height="80" fill="#1eb53a" />
      {/* Crescent */}
      <circle cx="62" cy="42" r="24" fill="#ffffff" />
      <circle cx="74" cy="42" r="24" fill="#0099b5" />
      {/* Stars */}
      <defs>
        <polygon
          id="uz-star"
          points="0,-8 1.8,-2.5 7.6,-2.5 2.9,1 4.7,6.5 0,3.2 -4.7,6.5 -2.9,1 -7.6,-2.5 -1.8,-2.5"
          fill="#ffffff"
        />
      </defs>
      {stars.map(([x, y], i) => (
        <use key={i} href="#uz-star" x={x} y={y} />
      ))}
    </svg>
  )
}
