'use client'

import { Check, Palette } from 'lucide-react'
import { useState } from 'react'

export type ThemeId = 'cream' | 'noir' | 'sage'

export const themes: { id: ThemeId; label: string; swatch: string }[] = [
  { id: 'cream', label: 'Cream', swatch: 'oklch(0.72 0.09 65)' },
  { id: 'noir', label: 'Noir', swatch: 'oklch(0.8 0.1 85)' },
  { id: 'sage', label: 'Sage', swatch: 'oklch(0.48 0.06 155)' },
]

export function ThemeSwitcher({
  theme,
  onChange,
}: {
  theme: ThemeId
  onChange: (theme: ThemeId) => void
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex flex-col gap-1 rounded-xl border border-border bg-popover p-2 shadow-lg">
          <p className="px-2 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Theme
          </p>
          {themes.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => onChange(t.id)}
              className="flex items-center justify-between gap-4 rounded-lg px-2 py-2 text-left text-sm text-popover-foreground transition-colors hover:bg-secondary"
            >
              <span className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="size-4 rounded-full border border-border"
                  style={{ backgroundColor: t.swatch }}
                />
                {t.label}
              </span>
              {theme === t.id && (
                <Check className="size-4 text-primary" aria-hidden />
              )}
            </button>
          ))}
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Change theme"
        aria-expanded={open}
        className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95"
      >
        <Palette className="size-5" aria-hidden />
      </button>
    </div>
  )
}
