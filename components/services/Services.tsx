import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { services } from '@/utils/services'

import SectionTitle from '../global/SectionTitle'

function Services() {
  return (
    <section id='skills' className='pt-20'>
      <SectionTitle
        subTitle='Services'
        description='I provide a wide range of services to help you achieve your business goals.'
      />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4'>
        {services.map((service, idx) => (
          <Card key={idx} className='flex flex-col justify-center items-center'>
            <CardHeader>
              <service.icon size={48} className='text-blue-400' />
            </CardHeader>
            <CardContent className='text-center py-4'>
              <CardTitle className='mb-4 font-bold'>{service.title}</CardTitle>
              <CardDescription className='text-md leading-normal'>
                {service.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Services
