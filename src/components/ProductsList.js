import React from 'react'
import PropTypes from 'prop-types'

const tempTitle = {
  color: 'Black',
  left: "6.41%",
  right: "6.25%",
  top: "4.14%",
  bottom: "91.98%"
}
const childStyle = {
  border: 'red',
  position: "absolute",
  left: "7.25%",
  right: "7.25%",
  top:'30%',
  bottom: "40%",
  width:'80%',
  height:'auto'

}
const ProductsList = ({ title, children }) => (
  <div>
    <h3 style={tempTitle} >{title}</h3>
    <div style={childStyle}>{children}</div>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList
