import Constantes from '@/data/Constantes'
import SectionHeader from './SectionHeader'

export default function About() {
  const { Secciones, SobreNosotros } = Constantes
  const isArraySobreNosotros = Array.isArray(SobreNosotros)

  return (
    <section className="py-12 text-center" id="About">
      <SectionHeader
        title={Secciones[2].title}
        subTitle={Secciones[2].subTitle}
      />
      <div className="flex flex-col max-w-2xl gap-4 mx-auto text-gray-500">
        {isArraySobreNosotros ? (
          SobreNosotros.map((content, index) => <p key={index}>{content}</p>)
        ) : (
          <p>{SobreNosotros}</p>
        )}
      </div>
    </section>
  )
}
