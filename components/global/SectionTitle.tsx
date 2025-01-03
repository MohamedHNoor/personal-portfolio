function SectionTitle({
  title,
  subTitle,
  description,
}: {
  title?: string
  subTitle?: string
  description?: string
}) {
  return (
    <div className='flex flex-col items-center justify-center max-w-3xl mx-auto text-center '>
      <p className='text-md font-semibold tracking-wider capitalize'>{title}</p>
      <h2 className='text-4xl lg:text-5xl font-extrabold tracking-wider'>
        {subTitle}
      </h2>
      <p className='my-4 text-gray-500  text-xl lg:text-2xl w-full'>
        {description}
      </p>
      {/* <Separator className='mb-10' /> */}
    </div>
  )
}
export default SectionTitle
