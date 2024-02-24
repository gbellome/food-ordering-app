import MenuItem from '../Menu/MenuItem'
import SectionHeader from './SectionHeader'
import Constantes from '@/data/Constantes'

export default function HomeMenu() {
  const { Secciones, Menu } = Constantes
  return (
    <section className="py-12" id="Menu">
      <SectionHeader
        title={Secciones[1].title}
        subTitle={Secciones[1].subTitle}
      />
      <div className="grid grid-cols-3 gap-4">
        {Menu.map(({ nombre, descripcion, precio, imagen }, index) => (
          <MenuItem
            nombre={nombre}
            descripcion={descripcion}
            precio={precio}
            imagen={imagen}
            key={index}
          />
        ))}
      </div>
    </section>
  )
}
