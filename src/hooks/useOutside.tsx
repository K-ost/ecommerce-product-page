import { useState, useEffect, useRef } from 'react'

const useOutsideClick = (initialValue: boolean) => {
  const [isActive, setIsActive] = useState<boolean>(initialValue)
  const ref = useRef<HTMLDivElement>(null)

  // handleClick
  const handleClick = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsActive(false)
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClick)
    return () => {
      document.removeEventListener("click", handleClick)
    }
  })

  return { ref, isActive, setIsActive }
}

export default useOutsideClick