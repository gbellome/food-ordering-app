import Image from 'next/image'
import Right from '../icons/Right'

export default function Hero() {
  return (
    <section className="hero">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Everythings <br />
          is better <br />
          with a&nbsp;
          <span className="text-primary">Pizza</span>
        </h1>
        <p className="my-6 text-sm text-gray-500">
          Pizza is the missing piece that makes every day complete, a simple
          yyet delicious joy in the life
        </p>
        <div className="flex gap-4 text-sm">
          <button className="flex items-center gap-2 px-4 py-2 text-white uppercase rounded-full bg-primary">
            Order Now
            <Right />
          </button>
          <button className="flex items-center gap-2 py-2 font-semibold text-gray-600">
            Learn More
            <Right />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={'/pizza.png'}
          alt={'Pizza'}
          fill
          className="object-contain"
        />
      </div>
    </section>
  )
}
