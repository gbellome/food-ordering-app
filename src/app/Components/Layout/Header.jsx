'use client'

import Constantes from '@/data/Constantes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const { NombreEmpresa, Secciones } = Constantes
  const location = usePathname()

  const Pages = () => {
    return (
      <nav className="flex items-center gap-8 font-semibold text-gray-500">
        {Secciones.map(({ title }, index) => (
          <Link href={'#' + title} key={index}>
            {title}
          </Link>
        ))}
      </nav>
    )
  }

  const Auth = () => {
    return (
      <nav className="flex items-center gap-4 font-semibold text-gray-500">
        <Link href={'/Login'}>Login</Link>
        <Link
          href={'/Register'}
          className="px-8 py-2 text-white rounded-full bg-primary"
        >
          Register
        </Link>
      </nav>
    )
  }

  return (
    <header className="flex items-center justify-between">
      <Link className="text-2xl font-semibold text-primary" href={''}>
        {NombreEmpresa}
      </Link>
      {!['/Register', '/Login'].includes(location) && (
        <>
          <Pages /> <Auth />
        </>
      )}
    </header>
  )
}
