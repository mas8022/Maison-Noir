'use client'

import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { contact, hours } from '@/lib/cafe-data'

export function VisitSection() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="visit" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Visit us
          </p>
          <h2 className="text-balance font-serif text-4xl font-semibold tracking-tight md:text-5xl">
            Find your seat
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="mb-4 flex items-center gap-2 font-serif text-xl font-semibold">
                <Clock className="size-5 text-primary" aria-hidden />
                Opening hours
              </h3>
              <ul className="flex flex-col gap-3">
                {hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between border-b border-border pb-3 text-sm"
                  >
                    <span className="text-muted-foreground">{h.day}</span>
                    <span className="font-medium">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 text-sm">
              <p className="flex items-center gap-3">
                <MapPin className="size-5 flex-shrink-0 text-primary" aria-hidden />
                {contact.address}
              </p>
              <a
                href={`tel:${contact.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 transition-colors hover:text-primary"
              >
                <Phone className="size-5 flex-shrink-0 text-primary" aria-hidden />
                {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 transition-colors hover:text-primary"
              >
                <Mail className="size-5 flex-shrink-0 text-primary" aria-hidden />
                {contact.email}
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h3 className="mb-1 font-serif text-xl font-semibold">
              Reserve a table
            </h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Tell us when you&apos;d like to drop by and we&apos;ll hold a spot.
            </p>

            {submitted ? (
              <div className="rounded-xl border border-border bg-secondary/60 p-6 text-center">
                <p className="font-medium">Thanks — request received!</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  We&apos;ll confirm your table by email shortly.
                </p>
              </div>
            ) : (
              <form
                className="flex flex-col gap-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
              >
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="date" className="text-sm font-medium">
                      Date
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      required
                      className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="guests" className="text-sm font-medium">
                      Guests
                    </label>
                    <input
                      id="guests"
                      name="guests"
                      type="number"
                      min={1}
                      max={12}
                      defaultValue={2}
                      required
                      className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="you@example.com"
                  />
                </div>
                <Button type="submit" size="lg" className="mt-2">
                  Request reservation
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
