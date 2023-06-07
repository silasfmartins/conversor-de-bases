import Image from 'next/image'

import windows from '../../assets/windows.png'

export default function Download() {
  return (
    <div className="mt-12 px-14">
      <h1 className="text-center text-base font-bold leading-tight text-gray-950 dark:text-gray-50 esm:text-4xl">
        Faça download do Conversor de Bases
      </h1>
      <div className="flex flex-col items-center space-y-2">
        <Image
          className="w-96"
          src={windows}
          alt="Imagem do Windows 11 - Baixe o programa para Windows"
        />
        <h2 className="text-2xl font-bold leading-relaxed">
          Download para Windows
        </h2>
        <div className="flex items-center gap-4">
          <a
            href="/Conversor de Bases by Silas Martins Setup 1.0.0.exe"
            className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-white hover:bg-green-600 dark:text-black"
            download
            target="_blank"
            rel="noreferrer"
          >
            Download Instalador
          </a>
          <a
            href="/Conversor de Bases by Silas Martins Setup 1.0.0.zip"
            target="_blank"
            download
            className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-white hover:bg-green-600 dark:text-black"
            rel="noreferrer"
          >
            Download Portátil
          </a>
        </div>
        <span className="mt-4 max-w-5xl text-base text-gray-100 esm:text-lg">
          Talvez seja necessário desativar a verificação de sites e apps feita
          pelo <strong>Windows SmartScreen</strong>, pois ele desconfia da
          origem do programa. Entretanto, a mesma aplicação que você está
          utilizando no browser nesse momento é a aplicação disponível para
          download.
        </span>
      </div>
    </div>
  )
}
