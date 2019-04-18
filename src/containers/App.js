import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'

const pageStyle = {
  backgroundColor:'blue',
  color: 'white'
}
const modalStyle ={
  display: 'none'
}

const App = () => (
  <div>
    <h2>Acme Store</h2>
    <hr/>
    <div style ={pageStyle}>
    <ProductsContainer style={pageStyle} />
    </div>
    <hr/>

    <div style ={modalStyle}>
    <CartContainer />
    </div>
  </div>
)

export default App
