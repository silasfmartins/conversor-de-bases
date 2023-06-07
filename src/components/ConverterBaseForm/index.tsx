'use client'

import { FormEvent, useState } from 'react'

import { Options } from './Options'
import { Values } from './Values'
import { Label } from './Label'

export function ConverterBaseForm(): JSX.Element {
  const [number, setNumber] = useState<string>('')
  const [base, setBase] = useState<string>('')
  const [numberBin, setNumberBin] = useState<string>('')
  const [numberOct, setNumberOct] = useState<string>('')
  const [numberDec, setNumberDec] = useState<string>('')
  const [numberHex, setNumberHex] = useState<string>('')

  function handleBinToOctal() {
    const reversed = number.split('').reverse()
    let dec = 0

    for (let i = 0; i < reversed.length; i++) {
      if (reversed[i] === '1') {
        dec += 2 ** i
      }
    }

    let newNumber = dec

    const numberOct: number[] = []

    while (newNumber !== 0) {
      const rest = newNumber % 8
      newNumber = Math.floor(newNumber / 8)
      numberOct.unshift(rest)
    }
    const numberOctString = numberOct.join('')
    setNumberOct(numberOctString)
  }

  function handleBinToDec() {
    const reversed = number.split('').reverse()
    let dec = 0

    for (let i = 0; i < reversed.length; i++) {
      if (reversed[i] === '1') {
        dec += 2 ** i
      }
    }
    setNumberDec(String(dec))
  }

  function handleBinToHex() {
    const reversed = number.split('').reverse()
    let hex = 0

    for (let i = 0; i < reversed.length; i++) {
      if (reversed[i] === '1') {
        hex += 2 ** i
      }
    }

    const numberHex: string[] = []

    let newNumber = hex

    while (newNumber / 16) {
      const rest = newNumber % 16
      let restString = String(rest)
      newNumber = Math.floor(newNumber / 16)
      if (rest === 10) {
        restString = 'A'
      } else if (rest === 11) {
        restString = 'B'
      } else if (rest === 12) {
        restString = 'C'
      } else if (rest === 13) {
        restString = 'D'
      } else if (rest === 14) {
        restString = 'E'
      } else if (rest === 15) {
        restString = 'F'
      }
      numberHex.unshift(restString)
    }
    const numberHexString = String(numberHex)
    numberHexString.replace(',', '')
    setNumberHex(numberHexString)
  }

  function handleOctToBin() {
    const reversed = number.split('').reverse()
    let dec = 0

    for (let i = 0; i < reversed.length; i++) {
      dec += Number(reversed[i]) * 8 ** i
    }

    const numberBin: number[] = []

    let newNumber = Number(dec)

    while (newNumber !== 1) {
      let rest = newNumber % 2
      newNumber = Math.floor(newNumber / 2)
      if (rest > 0) {
        rest = 1
      }
      numberBin.unshift(rest)
    }
    numberBin.unshift(newNumber)
    const numberBinString = String(numberBin)
    setNumberBin(numberBinString)
  }

  function handleOctToDec() {
    const reversed = number.split('').reverse()
    let dec = 0

    for (let i = 0; i < reversed.length; i++) {
      dec += Number(reversed[i]) * 8 ** i
    }
    setNumberDec(String(dec))
  }

  function handleOctToHex() {
    const reversed = number.split('').reverse()
    let hex = 0

    for (let i = 0; i < reversed.length; i++) {
      hex += Number(reversed[i]) * 8 ** i
    }

    const numberHex: string[] = []

    let newNumber = hex

    while (newNumber / 16) {
      const rest = newNumber % 16
      let restString = String(rest)
      newNumber = Math.floor(newNumber / 16)
      if (rest === 10) {
        restString = 'A'
      } else if (rest === 11) {
        restString = 'B'
      } else if (rest === 12) {
        restString = 'C'
      } else if (rest === 13) {
        restString = 'D'
      } else if (rest === 14) {
        restString = 'E'
      } else if (rest === 15) {
        restString = 'F'
      }
      numberHex.unshift(restString)
    }
    const numberHexString = String(numberHex)
    numberHexString.replace(',', '')
    setNumberHex(numberHexString)
  }

  function handleDecToBin(newNumber: number) {
    const numberBin: number[] = []

    while (newNumber !== 1) {
      let rest = newNumber % 2
      newNumber = Math.floor(newNumber / 2)
      if (rest > 0) {
        rest = 1
      }
      numberBin.unshift(rest)
    }
    numberBin.unshift(newNumber)
    const numberBinString = String(numberBin)
    setNumberBin(numberBinString)
  }

  function handleDecToOctal(newNumber: number) {
    const numberOct: number[] = []

    while (newNumber !== 0) {
      const rest = newNumber % 8
      newNumber = Math.floor(newNumber / 8)
      numberOct.unshift(rest)
    }
    const numberOctString = numberOct.join('')
    setNumberOct(numberOctString)
  }

  function handleHexToBin() {
    const reversed = number.split('').reverse()
    let dec = 0

    const numberDec: string[] = []

    for (let i = 0; i < reversed.length; i++) {
      if (reversed[i] === 'A' || reversed[i] === 'a') {
        reversed[i] = String(10)
      } else if (reversed[i] === 'B' || reversed[i] === 'b') {
        reversed[i] = String(11)
      } else if (reversed[i] === 'C' || reversed[i] === 'c') {
        reversed[i] = String(12)
      } else if (reversed[i] === 'D' || reversed[i] === 'd') {
        reversed[i] = String(13)
      } else if (reversed[i] === 'E' || reversed[i] === 'e') {
        reversed[i] = String(14)
      } else if (reversed[i] === 'F' || reversed[i] === 'f') {
        reversed[i] = String(15)
      }
      numberDec.push(reversed[i])
      dec += Number(numberDec[i]) * 16 ** i
    }
    const numberBin: number[] = []

    let newNumber = dec

    while (newNumber !== 1) {
      let rest = newNumber % 2
      newNumber = Math.floor(newNumber / 2)
      if (rest > 0) {
        rest = 1
      }
      numberBin.unshift(rest)
    }
    numberBin.unshift(newNumber)
    const numberBinString = String(numberBin)
    setNumberBin(numberBinString)
  }

  function handleHexToOctal() {
    const reversed = number.split('').reverse()
    let dec = 0

    const numberDec: string[] = []

    for (let i = 0; i < reversed.length; i++) {
      if (reversed[i] === 'A' || reversed[i] === 'a') {
        reversed[i] = String(10)
      } else if (reversed[i] === 'B' || reversed[i] === 'b') {
        reversed[i] = String(11)
      } else if (reversed[i] === 'C' || reversed[i] === 'c') {
        reversed[i] = String(12)
      } else if (reversed[i] === 'D' || reversed[i] === 'd') {
        reversed[i] = String(13)
      } else if (reversed[i] === 'E' || reversed[i] === 'e') {
        reversed[i] = String(14)
      } else if (reversed[i] === 'F' || reversed[i] === 'f') {
        reversed[i] = String(15)
      }
      numberDec.push(reversed[i])
      dec += Number(numberDec[i]) * 16 ** i
    }
    const numberOct: number[] = []

    let newNumber = dec

    while (newNumber !== 0) {
      const rest = newNumber % 8
      newNumber = Math.floor(newNumber / 8)
      numberOct.unshift(rest)
    }
    const numberOctString = numberOct.join('')
    setNumberOct(numberOctString)
  }

  function handleHexToDec() {
    const reversed = number.split('').reverse()
    let dec = 0

    const numberDec: string[] = []

    for (let i = 0; i < reversed.length; i++) {
      if (reversed[i] === 'A' || reversed[i] === 'a') {
        reversed[i] = String(10)
      } else if (reversed[i] === 'B' || reversed[i] === 'b') {
        reversed[i] = String(11)
      } else if (reversed[i] === 'C' || reversed[i] === 'c') {
        reversed[i] = String(12)
      } else if (reversed[i] === 'D' || reversed[i] === 'd') {
        reversed[i] = String(13)
      } else if (reversed[i] === 'E' || reversed[i] === 'e') {
        reversed[i] = String(14)
      } else if (reversed[i] === 'F' || reversed[i] === 'f') {
        reversed[i] = String(15)
      }
      numberDec.push(reversed[i])
      dec += Number(numberDec[i]) * 16 ** i
    }
    setNumberDec(String(dec))
  }

  function handleDecToHex(newNumber: number) {
    const numberHex: string[] = []

    while (newNumber / 16) {
      const rest = newNumber % 16
      let restString = String(rest)
      newNumber = Math.floor(newNumber / 16)
      if (rest === 10) {
        restString = 'A'
      } else if (rest === 11) {
        restString = 'B'
      } else if (rest === 12) {
        restString = 'C'
      } else if (rest === 13) {
        restString = 'D'
      } else if (rest === 14) {
        restString = 'E'
      } else if (rest === 15) {
        restString = 'F'
      }
      numberHex.unshift(restString)
    }
    const numberHexString = String(numberHex)
    numberHexString.replace(',', '')
    setNumberHex(numberHexString)
  }

  function handleConverterBase(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!number || !base) {
      return
    }

    const newNumber = Number(number)

    if (base === 'bin') {
      setNumberBin(number)
      handleBinToOctal()
      handleBinToDec()
      handleBinToHex()
    } else if (base === 'oct') {
      handleOctToBin()
      setNumberOct(number)
      handleOctToDec()
      handleOctToHex()
    } else if (base === 'dec') {
      handleDecToBin(newNumber)
      handleDecToOctal(newNumber)
      setNumberDec(number)
      handleDecToHex(newNumber)
    } else {
      handleHexToBin()
      handleHexToOctal()
      handleHexToDec()
      setNumberHex(number)
    }
  }

  return (
    <form
      onSubmit={handleConverterBase}
      className="flex flex-col items-start gap-2 space-y-4 px-14 py-8"
    >
      <Label id="number" title="Digite um número:" />
      <input
        className="w-full rounded bg-transparent p-2 text-lg leading-relaxed text-gray-900 dark:text-gray-100"
        type="text"
        name="number"
        id="number"
        onChange={(value) => setNumber(value.target.value)}
      />
      <Label id="base" title="Digite a base do número:" />
      <select
        onChange={(value) => setBase(value.target.value)}
        value={base}
        name="base"
        id="base"
        className="w-full rounded bg-transparent p-2 text-lg leading-relaxed text-gray-900 dark:text-gray-100"
      >
        <option
          value=""
          disabled
          selected
          className="rounded bg-gray-900 text-gray-900 dark:text-gray-100"
        >
          Selecione uma opção
        </option>
        <Options base="bin" title="Binário - Base 2" />
        <Options base="oct" title="Octal - Base 8" />
        <Options base="dec" title="Decimal - Base 10" />
        <Options base="hex" title="Hexadecimal - Base 16" />
      </select>
      <button
        type="submit"
        className="font-alt inline-block rounded-full bg-green-500 px-5 py-3 text-sm uppercase leading-none text-white hover:bg-green-600 dark:text-black"
      >
        Converter
      </button>
      {!numberBin ? null : (
        <div className="mt-4 flex w-full flex-col space-y-4 rounded-lg bg-gray-600 p-8">
          <Values title="Número em Binário" value={String(numberBin)} />
          <Values title="Número em Octal" value={String(numberOct)} />
          <Values title="Número em Decimal" value={String(numberDec)} />
          <Values title="Número em Hexadecimal" value={String(numberHex)} />
        </div>
      )}
    </form>
  )
}
