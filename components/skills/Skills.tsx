'use client'

import Image from 'next/image'
import { icons } from '@/utils/icons'
import SectionTitle from '@/components/global/SectionTitle'
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

function Skills() {
  return (
    <section className='pt-20'>
      <SectionTitle
        subTitle='Technologies I use'
        description={`I'm well-versed in the industry's most popular frontend technologies, including HTML5, CSS3, JavaScript, and frameworks like React and React Native.`}
      />

      {/* Techs I use */}
      <div className='grid grid-cols-3 md:grid-cols-6 lg:grid-cols-10 gap-4 pt-4'>
        {icons.map((icon, idx) => {
          const Icon = icon.icon
          const name = icon.name
          return (
            <Card
              key={idx}
              className='flex flex-col justify-center items-center w-30 h-30 border-none bg-slate-100 rounded-lg shadow-md'
            >
              <CardContent className='flex flex-col justify-center items-center gap-2 p-4'>
                <Image
                  src={Icon}
                  alt='technologies'
                  className='object-contain w-12 h-12'
                  priority
                />
                <p className='text-sm font-medium text-gray-700 text-center'>
                  {name}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
