import EcommerceStore from '@/public/projects/ecommerce-store.png'
import HomeBudget from '@/public/projects/home-budget.png'
import LaundryApp from '@/public/projects/laundry-app.png'
import PerfumeStore from '@/public/projects/perfume-store.png'

export const projects = [
  {
    id: 1,
    title: 'Ecommerce Store',
    description:
      'A full-stack ecommerce store built with Next.js, TypeScript, and Tailwind CSS.',
    image: EcommerceStore,
    github: '',
    link: 'https://mhnoor-comfy-store.netlify.app',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: 'Home Budget',
    description:
      'A budgeting app built with React, TypeScript, and Tailwind CSS.',
    image: HomeBudget,
    github: '',
    link: 'https://mhnoor-home-budget-app.netlify.app/',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 3,
    title: 'Laundry App',
    description:
      'A laundry app built with React Native, TypeScript, and Tailwind CSS.',
    image: LaundryApp,
    github: '',
    link: '',
    tags: ['React Native', 'Expo', 'TypeScript', 'Tailwind CSS', 'Supabase'],
  },
  {
    id: 4,
    title: 'Perfume Store',
    description: 'A perfume store built with Shopify.',
    image: PerfumeStore,
    github: '',
    link: 'https://globalscentstore.com/',
    tags: ['Shopify'],
  },
]
