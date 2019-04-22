import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const buttonStyle = {
  background: '#5E97D1',
  color: '#FFFFFF',
  borderRadius: '100px',
  fontFamily: '.AppleSystemUIFont',
  fontSize: '14px',
  letterSpacing: '-0.15px',
  float: 'right',
  padding: '20px',
  position: 'sticky',
  button: {
    ':hover': {
      backgroundColor:'red'
    }
  }
}

const buttonStyleHovered = {
  background: 'blue',
  color: '#FFFFFF',
  borderRadius: '100px',
  fontFamily: '.AppleSystemUIFont',
  fontSize: '14px',
  letterSpacing: '-0.15px',
  float: 'right'
}

const imgStyle = {
  background: '#FFFFFF',
  borderRadius: '8px 0 0 8px',
  height: '70%',
  width: 'auto',
  float: 'center'
}
const titleStyle = {
  fontFamily: '.SFNSDisplay',
  textAlign: 'left',
  fontSize: '38px',
  color: '#292929',
  letterSpacing: '-0.41px',
  float: 'left'
}
const priceStyle = {
  fontFamily: '.SFNSDisplay',
  fontFize: '21px',
  color: '#292929',
  letterSpacing: '-0.27px',
  textAlign: 'right'
}


const ProductItem = ({ product, onAddToCartClicked}) => (
  <div style={{
    marginTop: 80,
    marginBottom: 50, background: '#FFFFFF',
    borderRadius: '8px', height: 'auto'
  }}>
    <Product
      image={<img src={product.image} alt="product" style={imgStyle}></img>}
      title={<div style={titleStyle}>{product.title}</div>}
      price={<div style={priceStyle}>{product.price}</div>}
      inventory={product.inventory} />
    <button
      onClick={onAddToCartClicked}
      style={buttonStyle}
      // onMouseOver={(e)=>e.currentTarget.style = buttonStyleHovered}
      // onMouseOut={(e)=>e.currentTarget.style = buttonStyle}
      disabled={product.inventory > 0 ? '' : 'disabled'}>
      {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
    </button>

  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
