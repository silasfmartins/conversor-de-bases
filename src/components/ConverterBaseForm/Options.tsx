interface OptionsProps {
  base: string
  title: string
}

export function Options({ base, title }: OptionsProps) {
  return (
    <option
      value={base}
      className="rounded bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      {title}
    </option>
  )
}
