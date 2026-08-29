export function AboutSection() {
  return (
    <section id="about" className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div className="order-2 md:order-1">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Our story
          </p>
          <h2 className="text-balance font-serif text-4xl font-semibold tracking-tight md:text-5xl">
            Coffee is the reason we opened the door
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            Maison Noir began as a tiny roastery with one clear idea: treat
            every cup like it matters. We source directly from small farms,
            roast in small batches, and pour with patience.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Today we&apos;re a neighborhood table — a place for first coffees,
            long conversations, and quiet solo afternoons alike.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-8">
            <div>
              <p className="font-serif text-2xl font-semibold">Small-batch</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Roasted weekly, never sitting on shelves.
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl font-semibold">Direct trade</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Fair partnerships with growers we know.
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 overflow-hidden rounded-2xl border border-border md:order-2">
          <img
            src="/cafe-about.png"
            alt="A barista smiling behind the cafe counter"
            className="h-[360px] w-full object-cover md:h-[480px]"
          />
        </div>
      </div>
    </section>
  )
}
