import { menu } from '@/lib/cafe-data'

export function MenuSection() {
  return (
    <section id="menu" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-14 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              The menu
            </p>
            <h2 className="max-w-xl text-balance font-serif text-4xl font-semibold tracking-tight md:text-5xl">
              Made fresh, served with care
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            A short, seasonal list. We change origins often, so ask your barista
            what&apos;s brewing today.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {menu.map((category) => (
            <div key={category.id}>
              <h3 className="mb-6 flex items-center gap-3 font-serif text-2xl font-semibold">
                {category.title}
                <span className="h-px flex-1 bg-border" aria-hidden />
              </h3>
              <ul className="flex flex-col gap-6">
                {category.items.map((item) => (
                  <li key={item.name} className="flex items-start gap-4">
                    {item.image ? (
                      <img
                        src={item.image || '/placeholder.svg'}
                        alt={item.name}
                        className="size-16 flex-shrink-0 rounded-lg border border-border object-cover"
                      />
                    ) : (
                      <span
                        className="mt-2 size-2 flex-shrink-0 rounded-full bg-accent"
                        aria-hidden
                      />
                    )}
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between gap-3">
                        <p className="flex items-center gap-2 font-medium">
                          {item.name}
                          {item.tag && (
                            <span className="rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-accent-foreground">
                              {item.tag}
                            </span>
                          )}
                        </p>
                        <span className="font-serif text-lg font-semibold text-primary">
                          {item.price}
                        </span>
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
