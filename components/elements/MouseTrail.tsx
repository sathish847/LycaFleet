'use client'

import { useEffect, useState } from 'react'

interface CursorPosition {
  x: number
  y: number
}

export default function MouseTrail() {
  const [cursorPos, setCursorPos] = useState<CursorPosition>({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    // Check for interactive elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const interactiveElements = ['a', 'button', 'input', 'select', 'textarea', '[role="button"]', '[onclick]']
      const isInteractive = interactiveElements.some(selector =>
        target.matches(selector) || target.closest(selector)
      )
      setIsHovering(isInteractive)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseover', handleElementHover)
    document.addEventListener('mouseout', handleElementHover)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseover', handleElementHover)
      document.removeEventListener('mouseout', handleElementHover)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="cursor-dot"
        style={{
          left: cursorPos.x - 4,
          top: cursorPos.y - 4,
          transform: isHovering ? 'scale(1.5)' : 'scale(1)',
        }}
      />

      {/* Outer ring */}
      <div
        className="cursor-ring"
        style={{
          left: cursorPos.x - 20,
          top: cursorPos.y - 20,
          transform: isHovering ? 'scale(1.2)' : 'scale(1)',
        }}
      />

      <style jsx>{`
        .cursor-dot {
          position: fixed;
          width: 8px;
          height: 8px;
          background: linear-gradient(135deg, #248421 0%, #1a5a1a 100%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transition: transform 0.15s ease-out;
          box-shadow:
            0 0 10px rgba(12, 243, 27, 0.85),
            0 0 20px rgba(40, 228, 33, 0.98),
            0 0 30px rgba(43, 232, 36, 0.99),
            inset 0 0 4px rgba(12, 243, 27, 0.85);
        }

        .cursor-ring {
          position: fixed;
          width: 40px;
          height: 40px;
          border: 2px solid rgba(10, 255, 2, 1);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          transition: all 0.3s ease-out;
          animation: ring-pulse 2s ease-in-out infinite;
        }

        .cursor-ring::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border: 1px solid rgba(26, 90, 26, 0.4);
          border-radius: 50%;
          animation: ring-rotate 3s linear infinite;
        }

        @keyframes ring-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.3;
          }
        }

        @keyframes ring-rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Hide default cursor on the page */
        * {
          cursor: none !important;
        }

        /* Show default cursor on interactive elements */
        a, button, input, select, textarea, [role="button"], [onclick] {
          cursor: none !important;
        }
      `}</style>
    </>
  )
}
