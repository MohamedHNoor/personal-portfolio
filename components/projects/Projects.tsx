import React from 'react'
import Image from 'next/image'
import { projects } from '@/utils/projects'
import SectionTitle from '@/components/global/SectionTitle'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'

function Projects() {
  return (
    <section className='pt-20'>
      <SectionTitle
        subTitle='Projects'
        description='Check out what projects I have created'
      />
      <div className='py-12 grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 grid-cols-1 '>
        {projects.map((item) => (
          <a
            href={item.link}
            key={item.id}
            className='group block border-b-2 border-muted mt-6 p-6 rounded-2xl hover:border-blue-400 transition-colors duration-300'
            target='_blank'
          >
            <div className='aspect-w-16 aspect-h-12 overflow-hidden rounded-2xl relative'>
              <Image
                src={item.image}
                alt='Image Description'
                fill
                className='object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-2xl object-top'
              />
            </div>
            <div className='mt-4'>
              <h2 className='font-medium text-lg hover:underline'>
                {item.title}
              </h2>
              <p className='mt-1 text-muted-foreground line-clamp-3'>
                {item.description}
              </p>
              <div className='mt-3 flex flex-wrap gap-2'>
                {item.tags.map((tagItem, index) => (
                  <span
                    className='inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-primary ring-2 ring-inset ring-primary/20'
                    key={index}
                  >
                    {tagItem}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects
