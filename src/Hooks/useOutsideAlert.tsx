import React, { useRef, useEffect } from 'react'

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(reference: any, classReference: string) {
  useEffect(() => {
    /**
     * Execute if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (reference.current && !reference.current.contains(event.target)) {
        const navbar = document.querySelector('.' + classReference)
        navbar?.classList.remove(classReference)
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [reference, classReference])
}

/**
 * Component that executes the remover if you click outside of it
 */

export default function OutsideAlerter({ children, classReference }) {
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef, classReference)

  return <div ref={wrapperRef}>{children}</div>
}
