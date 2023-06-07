interface ValuesProps {
  title: string
  value: string
}

export function Values({ title, value }: ValuesProps): JSX.Element {
  return (
    <div className="flex items-center gap-2">
      <p className="text-2xl font-bold leading-relaxed">
        {title}: <span className="text-xl font-normal">{value}</span>
      </p>
    </div>
  )
}
