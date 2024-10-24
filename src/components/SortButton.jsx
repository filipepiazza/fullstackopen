import { useState, forwardRef, useImperativeHandle } from 'react'

const SortButton = ({ handleSort }) => {
  const [order, setOrder] = useState('asc')

  const toggleOrder = () => {
    const newOrder = order === 'asc' ? 'desc' : 'asc'
    setOrder(newOrder)
    handleSort(newOrder)
  }

      return (

      <button onClick={toggleOrder}> Sort Blogs by likes:{order}</button>
      
  )
}
  
  export default SortButton