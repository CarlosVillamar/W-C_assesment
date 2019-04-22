import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import Modal from 'react-modal';
import cart from './../public/assets/Group.png'
import cart2 from './../public/assets/Group2.png'
import cartModal from './cartModal'



const pageStyle = {
  // backgroundColor: 'blue',
  position: 'sticky',
  width:'auto'
}
const modalStyle = {
  visibility: 'hidden',
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }

}

function test() {
  alert("this works");
  modalStyle.visibility = 'visible';
}



const cartBtn = {
  float: 'right',
  border: '4px blue',
  fontFamily: '.AppleSystemUIFont',
  fontSize: '14px',
  padding: '10px',
  height: 'auto',
  width:'auto',
  letterSpacing: 0,
 
}

const App = () => (

  <div>
    <h2 style={{ position: 'sticky', width: 'auto' }}>Acme Store
    <cartModal style={cartBtn} onClick={test}>
        {/* <button style={cartBtn} onClick={test}> */}
        <img src={cart} alt="cart" style={{height:'20'}}
          onMouseOver={(e) => e.currentTarget.src = cart2}
          onMouseOut={(e) => e.currentTarget.src = cart} >
        </img>
      </cartModal>
      {/* </button> */}
    </h2>
    <hr />

    <div style={pageStyle}>
      {/* <Media query="(max-width: 599px)">
        {matches =>
          matches ? (
            alert('The document is less than 600px wide.')
            // <p>The document is less than 600px wide.</p>
          ) : (
              <p>The document is at least 600px wide.</p>
            )
        }
      </Media> */}
      <ProductsContainer />
    </div>
    

    <Modal style={modalStyle}>
      <CartContainer />
    </Modal>


  </div>
)

export default App
