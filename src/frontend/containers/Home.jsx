/* eslint-disable prettier/prettier */
/* eslint-disable operator-linebreak */
/* eslint-disable no-return-assign */
import React, { useEffect, useState } from 'react'
import { Redirect, useLocation, useParams } from 'react-router'
import { connect } from 'react-redux'

import loadable from '@loadable/component';
import useMenuObserver from '../components/hooks/useMenuObserver'

const Header = loadable(
  ()=>import('../components/Header'), {
    fallback: <h3>Un momento</h3>
  }
)
const Nav = loadable(
  ()=>import('../components/Nav'), {
    fallback: <h3>Menú...</h3>
  }
)
const About = loadable(
  ()=>import('../components/About'), {
    fallback: <h3>About..</h3>
  }
)
const Profilesvg = loadable(
  ()=>import('../components/Profilesvg'), {
    fallback: <h3>Perfil...</h3>
  }
)
const Portfolio = loadable(
  ()=>import('../components/Portfolio'), {
    fallback: <h3>Un momento</h3>
  }
)
const Reel = loadable(
  ()=>import('../components/Reel'), {
    fallback: <h3>Un momento</h3>
  }
)
const Curriculum = loadable(
  ()=>import('../components/Curriculum'), {
    fallback: <h3>Un momento</h3>
  }
)

const Home = ({
  menu,
  modal,
  portfolioMenu,
  //staticContext = {},
}) => {

  const { portfolio } = useParams()

//este estado solo se activa despues de abrir el modal para que al entrar por
//la ruta no se detenga en menus anteriores entorpeciendo el modal
//ya que <Redirect> no esta cambiando la ruta y envie siempre la misma en el segudo paramentro
  const [portfolioParamAfterOpenModalbyUrl, setPortfolioParamAfterOpenModalbyUrl] = useState(false)
  const locationMenu = useLocation()
  const [menuScrollObserved, elementRef] = useMenuObserver({ portfolio, portfolioParamAfterOpenModalbyUrl })

  useEffect(() => {
    //cuando  el estado de menu cambie desde la url
    //o desde el Nav hara un scroll smoth
    if (modal === false && menu >= 0) {
      elementRef.current[menu].scrollIntoView({ behavior: 'smooth' })
    }
    if (modal === true) {
      setPortfolioParamAfterOpenModalbyUrl(true)
    }
  }, [menu, modal])

useEffect(()=>{
  //parallax effect on scroll window viewport
  window.addEventListener('scroll', (e)=>{
    if (window.scrollY <= 500) {
      elementRef.current[0].style.backgroundPosition = `0 ${-6.6 + window.scrollY / 30}vw`
    }
  })
  return () => window.removeEventListener('scroll')
}, [])

  return (
    <>

      {locationMenu.pathname !== `/portfolio/${portfolioMenu}0` &&
        menuScrollObserved === true &&
        modal === false && <Redirect to={`/portfolio/${portfolioMenu}0`} />}

      <header
        className="main-header"
        ref={(el) => {
          elementRef.current[0] = el
        }}
      >
        <Header />
      </header>
      <Profilesvg />
      <nav className="main-nav">
        <Nav locationMenu={locationMenu.pathname} />
      </nav>
      <section
        className="main-about"
        ref={(el) => {
          elementRef.current[1] = el
        }}
      >
        <About />
      </section>
      <section
        className="main-portfolio"
        ref={(el) => {
          elementRef.current[2] = el
        }}
      >
        <Portfolio portfolio={portfolio} />
      </section>
      <section
        className="main-reel"
        ref={(el) => {
          elementRef.current[3] = el
        }}
      >
      <Reel />
      </section>
      <section
        className="main-cv"
        ref={(el) => {
          elementRef.current[4] = el
        }}
      >
        <Curriculum />
      </section>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    menu: state.menu,
    modal: state.modal,
    portfolioMenu: state.portfolioMenu,
  }
}

export default connect(mapStateToProps, null)(Home)
