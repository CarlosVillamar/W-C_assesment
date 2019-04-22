import React from 'react'
import PropTypes from 'prop-types'

const proStyle = {
  background: '#FFFFFF',
  borderRadius: '8px'
}


const invStyle = {
  fontFamily: 'HelveticaNeue',
  fontSize: '13px',
  color: '#9B9B9B',
  letterSpacing: 0,
  textAlign: 'right'
}

const Product = ({ price, inventory, title, image }) => (
  <div style={proStyle}>
    {image} 
    <div style={{float:'right'}}>
    {title}{price}
    <div style={invStyle}>{inventory ? ` x ${inventory} Remaining` : null}</div>
    </div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string,
}

export default Product
