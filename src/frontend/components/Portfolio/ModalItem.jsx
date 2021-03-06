import React from 'react'
import { connect } from 'react-redux'
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { useHistory } from 'react-router-dom'
import ItemImage from './ItemImage'
import { setModalOpen } from '../../actions'

const ModalItem = ({ portfolioItem, categoria, title, imgItems, setModalOpen }) => {
  const history = useHistory()

  //const portfolioCategory = portfolio == null ? 1 : Number(portfolio.charAt(0))
  const portFolioItems = imgItems.filter(
    (item) => item.idPortfolioList === portfolioItem
  )
  const handleModalItem = () => {
    document.body.style.overflow = 'visible'
    history.push(`/portfolio/${categoria}0`)
    setModalOpen(false)
  }
  return (
    <>
      <h2 className="modal__icon" onClick={handleModalItem}>
        <AiOutlineCloseSquare />
      </h2>
      <h1 className="modal__title">{title.toUpperCase()}</h1>
      {portFolioItems.map((item) => {
        return <ItemImage src={item.src} alt={item.alt} id={item.id} key={item.id} />
      })}
      <button type="button" className="modal__btn--cerrar" onClick={handleModalItem}>
        CERRAR
      </button>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    modal: state.modal,
    imgItems: state.img_items,
  }
}
const mapDispatchToProps = { setModalOpen }
export default connect(mapStateToProps, mapDispatchToProps)(ModalItem)
