import { useState, forwardRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'

const SortButton = ({ handleSort }) => {
  const [order, setOrder] = useState('asc')

  SortButton.propTypes = {
    handleSort: PropTypes.func.isRequired,
  }

  const toggleOrder = () => {
    const newOrder = order === 'asc' ? 'desc' : 'asc'
    setOrder(newOrder)
    handleSort(newOrder)
  }

  return <button onClick={toggleOrder}> Sort Blogs by like:{order}</button>
}

export default SortButton
