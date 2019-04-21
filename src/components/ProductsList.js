import React from 'react'
import PropTypes from 'prop-types'
import BG from './../assets/BG.png'

const tempTitle = {
  color: 'white',
  // position: "absolute",
  left: "6.41%",
  right: "6.25%",
  top: "4.14%",
  bottom: "91.98%"
}
const childStyle = {
  border: 'red',
  position: "absolute",
  left: "6.25%",
  right: "6.25%",
  top:'30%',
  bottom: "40%"

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
