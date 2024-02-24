import SectionHeader from './SectionHeader'
import Constantes from '@/data/Constantes'

export default function Contact() {
  const { Secciones } = Constantes
  return (
    <section className="my-8 text-center" id="Contact">
      <SectionHeader
        title={Secciones[3].title}
        subTitle={Secciones[3].subTitle}
      />
      <div className="mt-8">
        <a
          href="tel:+5491159880828"
          className="text-4xl text-gray-500 underline"
        >
          +54 9 11 5988 0828
        </a>
      </div>
    </section>
  )
}
