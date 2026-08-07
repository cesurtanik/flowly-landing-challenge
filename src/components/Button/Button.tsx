type ButtonProps = {
  text: string
  variant?: 'primary' | 'secondary'
  type?: 'button' | 'submit'
  onClick?: () => void
}

export function Button({ text, variant = 'primary', type = 'button', onClick }: ButtonProps) {
  return <button className={`button button--${variant}`} type={type} onClick={onClick}>{text}</button>
}