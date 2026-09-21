// Flag of the Republic of Uzbekistan — accurate 2:1 SVG.
// Three equal stripes (sky-blue / white / green) with red fimbriations,
// a white crescent and twelve stars (rows of 3, 4, 5) in the upper hoist.

// A single 5-point star, radius ~14, centred on the origin.
const STAR =
  'M0,-14 L3.14,-4.33 L13.31,-4.33 L5.09,1.65 L8.23,11.32 L0,5.35 L-8.23,11.32 L-5.09,1.65 L-13.31,-4.33 L-3.14,-4.33 Z'

const STAR_POS: [number, number][] = []
;[3, 4, 5].forEach((count, row) => {
  for (let c = 0; c < count; c++) STAR_POS.push([300 + c * 62, 46 + row * 45])
})

export function UzFlag({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 1000 500" className={className} role="img" aria-label="Flag of Uzbekistan">
      <rect width="1000" height="500" fill="#ffffff" />
      <rect y="0" width="1000" height="160" fill="#0099b5" />
      <rect y="160" width="1000" height="10" fill="#ce1126" />
      <rect y="330" width="1000" height="10" fill="#ce1126" />
      <rect y="340" width="1000" height="160" fill="#1eb53a" />
      {/* Crescent */}
      <circle cx="180" cy="82" r="60" fill="#ffffff" />
      <circle cx="208" cy="74" r="58" fill="#0099b5" />
      {/* Twelve stars */}
      {STAR_POS.map(([x, y], i) => (
        <path key={i} d={STAR} transform={`translate(${x} ${y})`} fill="#ffffff" />
      ))}
    </svg>
  )
}
