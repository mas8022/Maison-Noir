import { gallery } from '@/lib/cafe-data'

export function GallerySection() {
  return (
    <section id="gallery" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mb-12 text-center">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
          The space
        </p>
        <h2 className="text-balance font-serif text-4xl font-semibold tracking-tight md:text-5xl">
          A room worth staying in
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {gallery.map((item, i) => (
          <div
            key={item.src}
            className={`overflow-hidden rounded-xl border border-border ${
              i === 0 ? 'col-span-2 row-span-2' : ''
            }`}
          >
            <img
              src={item.src || '/placeholder.svg'}
              alt={item.alt}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
