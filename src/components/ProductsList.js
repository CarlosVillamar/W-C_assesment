import React from 'react'
import PropTypes from 'prop-types'

const pageStyle = {
  height: '200',
  backgroundcolor:'blue'
}

const ProductsList = ({ title, children }) => (
  <div style={pageStyle}>
    <h3>{title}</h3>
    <div>{children}</div>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList
