import { useState } from 'react'

type AccordionProps = { question: string; answer: string }

export function Accordion({ question, answer }: AccordionProps) {
  const [open, setOpen] = useState(false)
  const id = question.replace(/\W/g, '-').toLowerCase()

  return (
    <div className="accordion">
      <button className="accordion-trigger" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls={id}>
        <span>{question}</span><span aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      {open && <div id={id} className="accordion-content"><p>{answer}</p></div>}
    </div>
  )
}