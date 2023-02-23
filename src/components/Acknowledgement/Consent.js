import React from 'react';

const Consent = ({closeModal}) => {
  return (
    <div className='modalBackground'> 
        <div className='modalContainer'>
            <button onClick={() => closeModal(false)}> X </button>
            <div className='title'>
                <h1>Acknowledgement</h1>
            </div>
            <div className='body'>
                <p>
                    By wishing to proceed, 
                    I acknowledge that 
                    I have read, understand, 
                    and agree to sharing my personal 
                    information on the Maryvale Alumnae Network.
                </p>
            </div>
            <div className='footer'></div>
                <button onClick={() => closeModal(false)}>Cancel</button>
                <button>Proceed</button>
        </div>
    </div>
  );
}

export default Consent;
