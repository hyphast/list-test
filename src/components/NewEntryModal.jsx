import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../store'

function NewEntryModal({ modalRef, closeModal }) {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const onClickOk = () => {
    if (!text) return
    dispatch(addItem(text))
    setText('')
    closeModal()
  }

  return (
    <div ref={modalRef} className="modal">
      <div className="modal-content">
        <h4>Добавить новую запись</h4>
        <input
          placeholder="Новая запись..."
          type="text"
          className="validate"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="modal-footer">
        <button
          onClick={onClickOk}
          className="waves-effect waves-green btn-flat"
        >
          Ок
        </button>
        <button className="modal-close waves-effect waves-green btn-flat">
          Отмена
        </button>
      </div>
    </div>
  )
}

export default NewEntryModal
