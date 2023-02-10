import { useDispatch } from 'react-redux'
import { deleteItem } from '../store'

function ConfirmModal({ modalRef, closeModal, currentItem }) {
  const dispatch = useDispatch()

  const onClickYes = () => {
    closeModal()
    if (!currentItem) return
    dispatch(deleteItem(currentItem))
  }

  return (
    <div ref={modalRef} className="modal">
      <div className="modal-content">
        <h4>Подтвердите действие</h4>
        <div className="modal-footer">
          <button
            onClick={() => onClickYes()}
            className="waves-effect waves-green btn-flat"
          >
            Да
          </button>
          <button className="modal-close waves-effect waves-green btn-flat">
            Нет
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal
