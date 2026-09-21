// Official flag of the Republic of Uzbekistan (public-domain SVG from
// Wikimedia Commons) — crisp at any size, correct proportions.
export function UzFlag({ className = '' }: { className?: string }) {
  return (
    <img
      src="/images/flag-uz.svg"
      alt="Flag of Uzbekistan"
      className={className}
      width={40}
      height={20}
    />
  )
}
