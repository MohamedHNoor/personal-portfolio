import Image from 'next/image'
import Me from '@/public/me.png'

export function Hero() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 '>
      {/* Text Section */}
      <div className='col-span-1 lg:col-span-2 h-full min-h-[500px] lg:min-h-[300px] rounded-2xl p-8 bg-muted place-content-center'>
        <h1 className='text-5xl lg:text-6xl font-extrabold mb-6 leading-tight'>
          Welcome to my Software <br /> Development Portfolio!
        </h1>
        <p className='text-2xl lg:text-3xl font-light mb-8 text-muted-foreground leading-relaxed'>
          I&apos;m Mohamed Noor, a passionate software developer based in
          Wellington New Zealand 🇳🇿.
          <br /> Here, you&apos;ll get a glimpse of my journey in the world of
          software development, where creativity meets functionality.
        </p>

        <a href='#_' className='relative inline-block text-lg group'>
          <span className='relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white'>
            <span className='absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50'></span>
            <span className='absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease'></span>
            <span className='relative'>Get in Touch</span>
          </span>
          <span
            className='absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0'
            data-rounded='rounded-lg'
          ></span>
        </a>
      </div>

      {/* Image Section */}
      <Image
        src={Me}
        alt='Mohamed Noor'
        className='col-span-1 h-[500px] object-cover rounded-2xl bg-muted shadow-lg'
        priority
      />
    </div>
  )
}
