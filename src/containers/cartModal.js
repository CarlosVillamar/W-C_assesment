import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Modal from 'react-modal';
import CartContainer from './CartContainer'
import { connect } from 'react-redux'
import { checkout } from '../actions'
import { getTotal, getCartProducts } from '../reducers'
import Cart from '../components/Cart'

const backdropStyle = {
  position: 'fixed',
  zIndex: 1040,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#000',
  opacity: 0.5
};

const modalStyle = {
  // we use some psuedo random coords so nested modals
  // don't sit right on top of each other.
  
 
    position: 'fixed',
    width: 400,
    zIndex: 1040,
    top: '50%',
    left: '50%',
    border: '1px solid #e5e5e5',
    backgroundColor: 'white',
    boxShadow: '0 5px 15px rgba(0,0,0,.5)',
    padding: 20
  
};
Modal.setAppElement('#root')

class cartModal extends React.Component{
    constructor(...args){
        super(...args);
        this.state = {showModal:false};
        
        this.close=()=>{
            this.setState({showModal:false})
        };

        this.open=()=>{
            this.setState({showModal:true});
        }
    }//end of constructor

    renderBackdrop(props){
        return<div {...props} style={backdropStyle} />
    }
    render() {
        return (
          <div className="modal-example">z
            <button onClick={this.open}>Open Modal</button>
            <p>Click to get the full Modal experience!</p>
    
            <Modal
              onHide={this.close}
              style={modalStyle}
              aria-labelledby="modal-label"
              show={this.state.showModal}
              renderBackdrop={this.renderBackdrop}
            >
              <div>
                <CartContainer />
              </div>
            </Modal>
          </div>
        );
      }
}
// const props ={ }
// ReactDOM.render(<cartModal {...props} />,document.getElementById('root'))
export default cartModal;

