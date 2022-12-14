import { useCallback } from 'react'
import { useTheme } from 'next-themes'
import { ReactElement } from 'react'

import useIsMounted from './hooks/useIsMounted'

const Toggle = (): ReactElement|null => {
  const { theme, setTheme } = useTheme()
  const isMounted = useIsMounted()

  const switchTheme = useCallback(() => {
    if (isMounted) {
      if (theme === 'light') {
        setTheme('dark')
        return
      }

      setTheme('light')
    }
  }, [theme, setTheme, isMounted])

  if (!isMounted) return null

  return (
    <a className="float-right cursor-pointer" onClick={switchTheme}>
      <img
        src={theme === 'light' ? 'https://todoappt.netlify.app/images/icon-moon.svg' : 'https://todoappt.netlify.app/images/icon-sun.svg'}
        alt="Toggle for light/dark mode theme"
      />
    </a>
  )
}

export default Toggle
