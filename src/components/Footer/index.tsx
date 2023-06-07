import { FooterIcon } from './FooterIcon'
import { User2, Github, LinkedinIcon, Mail } from 'lucide-react'

export function Footer(): JSX.Element {
  return (
    <footer className="mt-24 h-32 items-center justify-center border-t-[1px] border-solid border-blue-300 bg-gray-100 dark:bg-gray-900">
      <div className="mt-4 flex w-full items-center justify-between px-14">
        <span className="flex flex-col text-base text-gray-100 esm:text-lg">
          Silas Martins 2023
          <div>Todos os direitos reservados</div>
        </span>
        <section className="grid grid-cols-2 items-center gap-4 esm:flex">
          <FooterIcon link="https://silasmartins.vercel.app" icon={<User2 />} />
          <FooterIcon link="https://github.com/silasfmartins" icon={<Github />} />
          <FooterIcon link="https://www.linkedin.com/in/silas-martins/" icon={<LinkedinIcon />} />
          <FooterIcon link="mailto:silas.martins2041@gmail.com" icon={<Mail />} />
        </section>
      </div>
    </footer>
  )
}
