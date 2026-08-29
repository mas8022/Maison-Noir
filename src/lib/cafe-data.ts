export type MenuItem = {
  name: string
  description: string
  price: string
  image?: string
  tag?: string
}

export type MenuCategory = {
  id: string
  title: string
  items: MenuItem[]
}

export const menu: MenuCategory[] = [
  {
    id: 'coffee',
    title: 'Coffee',
    items: [
      {
        name: 'Cappuccino',
        description: 'Double espresso, steamed milk, velvet microfoam.',
        price: '$4.50',
        image: '/menu-latte.png',
        tag: 'Signature',
      },
      {
        name: 'Filter Pour-Over',
        description: 'Rotating single-origin, brewed to order.',
        price: '$5.00',
        image: '/menu-pourover.png',
      },
      {
        name: 'Flat White',
        description: 'Ristretto shots with silky steamed milk.',
        price: '$4.25',
      },
      {
        name: 'Cold Brew',
        description: 'Steeped 18 hours, smooth and low-acid.',
        price: '$4.75',
      },
    ],
  },
  {
    id: 'bakery',
    title: 'Bakery',
    items: [
      {
        name: 'Butter Croissant',
        description: 'Baked in-house every morning. Golden and flaky.',
        price: '$3.75',
        image: '/menu-pastry.png',
        tag: 'Fresh daily',
      },
      {
        name: 'Banana Bread',
        description: 'Toasted, with a touch of sea salt butter.',
        price: '$4.00',
      },
      {
        name: 'Almond Danish',
        description: 'Frangipane, toasted almonds, powdered sugar.',
        price: '$4.50',
      },
      {
        name: 'Seasonal Cookie',
        description: 'Ask us what came out of the oven today.',
        price: '$3.25',
      },
    ],
  },
]

export const gallery = [
  { src: '/gallery-1.png', alt: 'Barista pulling an espresso shot' },
  { src: '/gallery-2.png', alt: 'Cozy reading corner by the window' },
  { src: '/gallery-3.png', alt: 'Freshly roasted coffee beans' },
  { src: '/cafe-hero.png', alt: 'The cafe interior at golden hour' },
]

export const testimonials = [
  {
    quote:
      'The best flat white in the city, hands down. The space makes you want to stay all afternoon.',
    name: 'Sofia Marín',
    role: 'Regular since 2021',
  },
  {
    quote:
      'A calm, beautiful room and coffee made with real care. My go-to for slow mornings.',
    name: 'James Whitfield',
    role: 'Neighborhood local',
  },
  {
    quote:
      'Every detail is considered, from the cup to the light. It feels like a small escape.',
    name: 'Amara Okoye',
    role: 'Food writer',
  },
]

export const hours = [
  { day: 'Monday – Friday', time: '7:00 — 19:00' },
  { day: 'Saturday', time: '8:00 — 20:00' },
  { day: 'Sunday', time: '8:00 — 17:00' },
]

export const contact = {
  address: '124 Alder Lane, Old Town District',
  phone: '+1 (555) 018-2245',
  email: 'hello@maisonnoir.coffee',
}
