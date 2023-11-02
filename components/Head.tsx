import Image from 'next/image'

const Head = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="main-map" />
      <div className="relative z-20 flex flex-1 flex-col xl:w-[70%]">
        <h1 className="bold-52 lg:bold-88">Influencers tool will review your product</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.        </p>
      </div>

      <div className="relative flex flex-1 items-start">
      <Image 
          src="/Banner.png"
          alt="banner"
          width={1200}
          height={800}
          className="flex lg:w-[1200px]"
        />
      </div>
    </section>
  )
}

export default Head