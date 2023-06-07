import Link from 'next/link'

export function Header() {
  return (
    <header className="flex items-center justify-between gap-5 px-14">
      <Link
        className="flex flex-col text-base font-bold leading-tight text-gray-950 dark:text-gray-50 esm:text-4xl"
        href="/"
      >
        Conversor de Bases
        <span className="text-sm esm:text-base">by Silas Martins</span>
      </Link>
      <Link
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-white transition-colors hover:bg-green-600 dark:text-black"
        href="/download"
      >
        Download
      </Link>
    </header>
  )
}
