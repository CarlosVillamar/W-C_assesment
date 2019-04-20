import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const buttonStyle = {
  position: 'absolute',
  left: '45.94%',
  right: '43.2%',
  top: '31.98%',
  bottom: '64.41%'
}

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div style={{ marginBottom: 20 }}>
    <Product
      title={product.title}
      price={product.price}
      inventory={product.inventory} />
    <button 
      onClick={onAddToCartClicked}
      style ={buttonStyle}
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
