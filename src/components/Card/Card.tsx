type CardProps = {
  icon: string
  title: string
  text: string
}

export function Card({ icon, title, text }: CardProps) {
  return <article className="feature-card"><div className="feature-icon" aria-hidden="true">{icon}</div><h3>{title}</h3><p>{text}</p></article>
}