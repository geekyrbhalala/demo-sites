import { useEffect, useRef, useState } from 'react'

function ScrollReveal({ children, delay = 0, direction = 'up', className = '' }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const getTransform = () => {
    switch (direction) {
      case 'left': return 'translateX(-40px)'
      case 'right': return 'translateX(40px)'
      case 'down': return 'translateY(-40px)'
      case 'scale': return 'scale(0.9)'
      default: return 'translateY(40px)'
    }
  }

  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0) translateX(0) scale(1)' : getTransform(),
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  }

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  )
}

export default ScrollReveal
