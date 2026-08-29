import { Coffee } from 'lucide-react'
import { contact } from '@/lib/cafe-data'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-xl font-semibold">Maison Noir</p>
          <p className="mt-1 text-sm text-muted-foreground">{contact.address}</p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="#top"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to top
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
            className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:bg-secondary"
          >
            <Coffee className="size-4" aria-hidden />
            @maisonnoir
          </a>
        </div>
      </div>
      <div className="border-t border-border/60">
        <p className="mx-auto max-w-6xl px-6 py-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Maison Noir. A sample cafe landing page.
        </p>
      </div>
    </footer>
  )
}
