'use client'

import { useState } from 'react'
import { AboutSection } from '@/components/about-section'
import { GallerySection } from '@/components/gallery-section'
import { Hero } from '@/components/hero'
import { MenuSection } from '@/components/menu-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { TestimonialsSection } from '@/components/testimonials-section'
import { ThemeSwitcher, type ThemeId } from '@/components/theme-switcher'
import { VisitSection } from '@/components/visit-section'

export default function Page() {
  const [theme, setTheme] = useState<ThemeId>('cream')

  return (
    <div data-theme={theme} className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <MenuSection />
        <GallerySection />
        <AboutSection />
        <TestimonialsSection />
        <VisitSection />
      </main>
      <SiteFooter />
      <ThemeSwitcher theme={theme} onChange={setTheme} />
    </div>
  )
}
