import { useEffect } from 'react'
import './Modal.css'

export default function Modal({ isOpen, onClose, title, message }) {
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
        <div className="modal-checkmark">
          <svg viewBox="0 0 52 52">
            <circle className="modal-checkmark-circle" cx="26" cy="26" r="25" fill="none" />
            <path className="modal-checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
          </svg>
        </div>
        <h3 className="modal-title">{title || 'Success!'}</h3>
        <p className="modal-message">{message || 'Your submission has been received.'}</p>
        <button className="btn btn-primary modal-btn" onClick={onClose}>Continue</button>
      </div>
    </div>
  )
}
