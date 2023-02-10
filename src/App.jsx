import { useRef, useState } from 'react'
import ConfirmModal from './components/ConfirmModal'
import NewEntryModal from './components/NewEntryModal'
import List from './components/List'
import { useModal } from './hooks/useModal'
import './App.css'

function App() {
  const modalRef = useRef(null)
  const confirmModalRef = useRef(null)
  const [handlers] = useModal(modalRef)
  const [confirmHandlers] = useModal(confirmModalRef)

  const [currentItem, setCurrentItem] = useState(null)

  const { openModal, closeModal } = handlers
  const { openModal: openConfirmModal, closeModal: closeConfirmModal } =
    confirmHandlers

  const onAddClick = () => {
    openModal()
  }

  const onDeleteClick = () => {
    openConfirmModal()
  }

  return (
    <div className="container mt-2">
      <div className="row">
        <button
          onClick={onAddClick}
          className="col s4 offset-s1 btn waves-effect waves-light"
        >
          Add
        </button>
        <button
          onClick={onDeleteClick}
          className="col s4 offset-s2 waves-effect waves-light btn"
        >
          Delete
        </button>
      </div>
      <List currentItem={currentItem} setCurrentItem={setCurrentItem} />
      <NewEntryModal modalRef={modalRef} closeModal={closeModal} />
      <ConfirmModal
        modalRef={confirmModalRef}
        closeModal={closeConfirmModal}
        currentItem={currentItem}
      />
    </div>
  )
}

export default App
