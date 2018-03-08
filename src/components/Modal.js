import React from 'react';

import '../css/modal.css';

const Modal = ({show, details, close}) => {

    if(!show) {
      return null
    }

    function handleClose(e) {
      if(e.currentTarget === e.target) {
        return close()
      }
    }

    return(
      <div className="modal" onClick={handleClose}>
        <div className="modal-content">
          <h1>I AM A MODAL</h1>
          <span onClick={handleClose}>CLOSE ME</span>
        </div>
      </div>
    )
}

export default Modal;
