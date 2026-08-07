import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'

type ModalProps = { isOpen: boolean; onClose: () => void; title: string; children: ReactNode }

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const closeButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return
    closeButton.current?.focus()
    const handleKey = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onMouseDown={(e) => e.stopPropagation()}>
        <button ref={closeButton} className="modal-close" onClick={onClose} aria-label="Pencereyi kapat">×</button>
        <h2 id="modal-title">{title}</h2>
        {children}
      </div>
    </div>
  )
}