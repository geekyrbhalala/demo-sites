import './Modal.css'

function Modal({ isOpen, onClose, title, message, children }) {
  if (!isOpen) return null

  return (
    <div className="toast-overlay" onClick={onClose}>
      <div className="toast-modal" onClick={e => e.stopPropagation()}>
        <div className="toast-icon">
          <svg viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3>{title || 'Success!'}</h3>
        <p>{message || 'Your action was completed successfully.'}</p>
        {children}
        <button onClick={onClose}>Continue</button>
      </div>
    </div>
  )
}

export default Modal
