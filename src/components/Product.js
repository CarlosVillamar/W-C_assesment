import React from 'react'
import PropTypes from 'prop-types'

const proStyle = {
  background: '#FFFFFF',
  borderRadius: '8px'
}

const imgStyle = {
  background: '#FFFFFF',
  borderRadius: '8px 0 0 8px',
  height: 'auto',
  width: '75%',
  float:'left'
}
const invStyle = {
  fontFamily: 'HelveticaNeue',
  fontSize: '13px',
  color: '#9B9B9B',
  letterSpacing: 0,
  textAlign: 'right'
}
const titleStyle = {
  fontFamily: '.SFNSDisplay',
  textAlign: 'left',
  fontSize: '38px',
  color: '#292929',
  letterSpacing: '-0.41px'
}
const priceStyle = {
  fontFamily: '.SFNSDisplay',
  fontFize: '21px',
  color: '#292929',
  letterSpacing: '-0.27px',
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
