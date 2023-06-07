import { ReactNode } from 'react'

interface FooterIconProps {
  link: string
  icon: ReactNode
}

export function FooterIcon({ link, icon }: FooterIconProps): JSX.Element {
  return (
    <a
      className="text-black-900 h-8 w-8 cursor-pointer transition-colors duration-500 hover:text-green-500 dark:text-gray-100"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      {icon}
    </a>
  )
}
