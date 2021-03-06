import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { IoIosArrowDropup } from 'react-icons/io'
import { setHashMenu } from '../actions'

const Nav = (props) => {
  const handleNavClick = (menuType) => {
    props.setHashMenu(menuType)
  }
  const [menuOpt, setMenuOpt] = useState(props.menu)
  const [showArrow, setShowArrow] = useState(false)
  useEffect(() => {
    //parallax effect on scroll window viewport
    window.addEventListener('scroll', (e) => {
      if (window.scrollY >= 300) {
        setShowArrow(true)
      } else {
        setShowArrow(false)
      }
    })
    return () => window.removeEventListener('scroll')
  }, [])
  useEffect(() => {
    switch (props.locationMenu) {
      case '/':
        setMenuOpt(0)
        break
      case '/about':
        setMenuOpt(1)
        break
      case '/portfolio/10':
        setMenuOpt(2)
        break
      case '/reel':
        setMenuOpt(3)
        break
      case '/cv':
        setMenuOpt(4)
        break
      default:
        setMenuOpt(0)
        break
    }
  }, [props.locationMenu])
  return (
    <>
      <section className={`main-arrowup ${showArrow ? 'main-arrowup--show' : ''}`}>
        <IoIosArrowDropup onClick={() => handleNavClick(0)} />
      </section>
      <ul>
        <li>
          <Link
            to="/"
            className={`link${menuOpt === 0 ? ' active' : ''}`}
            onClick={() => handleNavClick(0)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`link${menuOpt === 1 ? ' active' : ''}`}
            onClick={() => handleNavClick(1)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/portfolio/10"
            className={`link${menuOpt === 2 ? ' active' : ''}`}
            onClick={() => handleNavClick(2)}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="/reel"
            className={`link${menuOpt === 3 ? ' active' : ''}`}
            onClick={() => handleNavClick(3)}
          >
            Reel
          </Link>
        </li>
        <li>
          <Link
            to="/cv"
            className={`link${menuOpt === 4 ? ' active' : ''}`}
            onClick={() => handleNavClick(4)}
          >
            CV
          </Link>
        </li>
      </ul>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    menu: state.menu,
  }
}
const mapDispatchToProps = {
  setHashMenu,
}
export default React.memo(connect(mapStateToProps, mapDispatchToProps)(Nav))
