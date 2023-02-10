import { useEffect, useMemo, useState } from 'react'

export function useModal(modalRef) {
  const [modal, setModal] = useState(null)

  const handlers = useMemo(
    () => ({
      openModal: () => modal.open(),
      closeModal: () => modal.close(),
    }),
    [modal]
  )

  useEffect(() => {
    const instance = M.Modal.init(modalRef.current)
    setModal(instance)
    return () => instance.destroy()
  }, [])

  return [handlers]
}
