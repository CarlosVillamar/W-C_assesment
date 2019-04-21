import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import MediaQuery from 'react-responsive';
import Modal from 'react-modal';

const pageStyle = {
  backgroundColor:'blue',
}
const modalStyle ={
  visibility:'hidden',
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
  
}

function test(){
  alert("this works");
  modalStyle.visibility = 'visible';
  // Modal.setAppElement('#Modal');
}



const cartBtn ={
  float: 'right',
  background: 'blue',
  color:'white',
  fontFamily: '.AppleSystemUIFont',
  fontSize: '14px',
  letterSpacing: 0
}

const App = () => (
  <div>
    <h2 style={{position: 'sticky'}}>Acme Store<button style={cartBtn} onClick={test}>Your cart is empty</button>
    </h2>
    <hr/>
    <div style ={pageStyle}>
    <ProductsContainer />
    </div>
    <hr/>

    <div style ={modalStyle}>
    

    <CartContainer id="Modal"/>
  
    </div>
  </div>
)

export default App
