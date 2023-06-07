interface LabelProps {
  id: string
  title: string
}

export function Label({ id, title }: LabelProps) {
  return (
    <label
      htmlFor={id}
      className="text-center text-base font-bold leading-tight text-gray-950 dark:text-gray-50 esm:text-2xl"
    >
      {title}{' '}
    </label>
  )
}
