import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import logo from './../assets/chronograph.png'
import StyleSheet from 'react-style'


const buttonStyle = {
  background: '#5E97D1',
  color: '#FFFFFF',
  borderRadius: '100px',
  fontFamily: '.AppleSystemUIFont',
  fontSize: '14px',
  letterSpacing: '-0.15px',
  float: 'right',
  button: {
    padding: '1em',
    ':hover': {
      border: '1px solid black'
    }
  }
}

const imgStyle = {
  background: '#FFFFFF',
  borderRadius: '8px 0 0 8px',
  height: 'auto',
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




const ProductItem = ({ product, onAddToCartClicked }) => (
  <div style={{
    marginBottom: 100, background: '#FFFFFF',
    borderRadius: '8px', height: 'auto',
  }}>
    <Product
      image={<img src={logo} alt="product" style={imgStyle}></img>}
      title={<div style={titleStyle}>{product.title}</div>}
      price={<div style={priceStyle}>{product.price}</div>}
      inventory={product.inventory} />
    <button
      onClick={onAddToCartClicked}
      style={buttonStyle}
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
