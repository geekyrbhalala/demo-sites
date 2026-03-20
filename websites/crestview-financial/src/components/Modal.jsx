import { useEffect } from 'react'
import './Modal.css'

function Modal({ isOpen, onClose, title, children, type = 'success' }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className={`modal-icon modal-icon-${type}`}>
          {type === 'success' && (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2.5" fill="none" className="modal-circle" />
              <path d="M14 24L21 31L34 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="modal-check" />
            </svg>
          )}
          {type === 'error' && (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2.5" fill="none" />
              <line x1="16" y1="16" x2="32" y2="32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="32" y1="16" x2="16" y2="32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          )}
        </div>
        <h3 className="modal-title">{title}</h3>
        <div className="modal-body">{children}</div>
        <button className="btn btn-primary modal-btn" onClick={onClose}>
          Continue
        </button>
      </div>
    </div>
  )
}

export default Modal
