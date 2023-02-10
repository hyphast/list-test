import React from 'react'
import { useSelector } from 'react-redux'

function List({ currentItem, setCurrentItem }) {
  const list = useSelector((state) => state.list)

  const onItemClick = (id) => {
    setCurrentItem(id)
  }

  return (
    <>
      <ul className="collection">
        {list.map((item, i) => (
          <li
            key={item.id}
            onClick={() => onItemClick(item.id)}
            className={`collection-item cursor-pointer ${
              currentItem === item.id && 'red lighten-4'
            }`}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </>
  )
}

export default List
