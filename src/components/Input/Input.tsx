import type { ChangeEvent } from 'react'

type InputProps = {
  label: string
  id: string
  type?: string
  value: string
  error?: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export function Input({ label, id, type = 'text', value, error, onChange }: InputProps) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} value={value} onChange={onChange} aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined} />
      {error && <span id={`${id}-error`} className="error">{error}</span>}
    </div>
  )
}