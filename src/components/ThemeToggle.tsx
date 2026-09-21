import { useTheme } from '../theme/ThemeContext'
import { Icon } from './Icon'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  return (
    <button
      onClick={toggle}
      className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-surface-2 text-accenttext transition hover:bg-surface"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
    >
      <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
    </button>
  )
}
