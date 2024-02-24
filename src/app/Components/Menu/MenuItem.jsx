import Image from 'next/image'

export default function MenuItems({ nombre, descripcion, precio, imagen }) {
  return (
    <div className="p-4 text-center transition-all bg-gray-200 rounded-lg cursor-pointer hover:bg-white hover:shadow-2xl hover:shadow-black/25">
      <div className="relative h-60">
        <Image src={imagen} alt={nombre} fill className="object-contain" />
      </div>
      <h4 className="my-2 font-semibold">{nombre}</h4>
      <p className="text-sm text-gray-500">{descripcion}</p>
      <button className="px-8 mt-6 text-white rounded-full bg-primary py 2">
        Add to cart ${precio}
      </button>
    </div>
  )
}
