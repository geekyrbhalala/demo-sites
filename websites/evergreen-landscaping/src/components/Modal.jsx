import { useEffect } from 'react'
import './Modal.css'

function Modal({ isOpen, onClose, title, message }) {
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
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="modal-icon">
          <svg viewBox="0 0 52 52" className="modal-checkmark">
            <circle cx="26" cy="26" r="25" fill="none" className="checkmark-circle" />
            <path fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" className="checkmark-check" />
          </svg>
        </div>
        <h3 className="modal-title">{title || 'Success!'}</h3>
        <p className="modal-message">{message || 'Your submission has been received. We\'ll be in touch shortly.'}</p>
        <button className="btn btn-primary modal-btn" onClick={onClose}>
          Continue
        </button>
      </div>
    </div>
  )
}

export default Modal
