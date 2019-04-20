import React from 'react'
import PropTypes from 'prop-types'

const proStyle = {
  position: 'relative',
  width: '1280',
  height: '1135',
  background: '#F5F5F5'
}

const Product = ({ price, inventory, title }) => (
  <div style={proStyle}>
    {title} - &#36;{price}{inventory ? ` x ${inventory}` : null}
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product
