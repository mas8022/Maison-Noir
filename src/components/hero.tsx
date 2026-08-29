import { Button } from "./ui/button";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pt-16 pb-10 md:pt-24">
      <div className="flex flex-col items-center text-center">
        <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
          <span className="h-px w-8 bg-border" aria-hidden />
          Specialty coffee, since 2018
          <span className="h-px w-8 bg-border" aria-hidden />
        </p>
        <h1 className="max-w-3xl text-balance font-serif text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
          Slow mornings, brewed with intention
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          A quiet corner for single-origin coffee, fresh pastries, and the kind
          of unhurried afternoons you look forward to.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button size="lg">
            <a href="#menu">Explore the menu</a>
          </Button>
          <Button  size="lg" variant="outline">
            <a href="#visit">Plan your visit</a>
          </Button>
        </div>
      </div>

      <div className="relative mt-14 overflow-hidden rounded-2xl border border-border">
        <img
          src="/cafe-hero.png"
          alt="Warm modern cafe interior with soft window light"
          className="h-[320px] w-full object-cover md:h-[520px]"
        />
      </div>

      <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-10 md:grid-cols-4">
        {[
          { value: '12', label: 'Rotating origins' },
          { value: '6am', label: 'Daily bake starts' },
          { value: '4.9', label: 'Average rating' },
          { value: '100%', label: 'Ethically sourced' },
        ].map((stat) => (
          <div key={stat.label} className="text-center md:text-left">
            <dt className="font-serif text-3xl font-semibold md:text-4xl">
              {stat.value}
            </dt>
            <dd className="mt-1 text-sm text-muted-foreground">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
