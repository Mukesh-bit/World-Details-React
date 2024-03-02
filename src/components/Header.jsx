import React, { useContext} from 'react'
import { ThemeContext } from '../../Context/ThemeContext'

const Header = () => {


  const [isDark, setIsDark] = useContext(ThemeContext)

  return (
    <>
    <header className={`header-container ${isDark ? 'dark' : ''}`} >
      <div className="header-content">
        <h2 className="title">
          <a href="/">World Details</a>
        </h2>
        <p className="theme-changer" onClick={() => {
         setIsDark(!isDark)
          localStorage.setItem('isDarkMode', !isDark)
        }
          
         }>
          <i className={`fa-solid fa-${isDark ? 'sun' : 'moon'}`} />
          &nbsp;&nbsp;{isDark ? 'Light' : 'Dark'} Mode
        </p>
      </div>
    </header>
    </>
  )
}

export default Header