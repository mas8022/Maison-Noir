import { Star } from 'lucide-react'
import { testimonials } from '@/lib/cafe-data'

export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mb-12 text-center">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
          Kind words
        </p>
        <h2 className="text-balance font-serif text-4xl font-semibold tracking-tight md:text-5xl">
          Loved by the regulars
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col rounded-2xl border border-border bg-card p-6"
          >
            <div className="mb-4 flex gap-1 text-primary" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>
            <blockquote className="flex-1 text-pretty leading-relaxed text-card-foreground">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 border-t border-border pt-4">
              <p className="font-medium">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
