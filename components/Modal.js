
import HomePage from '@/pages';
import ReactDOM, { createPortal } from 'react-dom';

const Modal = ({ children, isOpen }) => {
  if (!isOpen) return null;

    //add code here
    return ReactDOM.createPortal(
      <div className='modal'>
        <div style={{ backgroundColor: 'white', padding: '2rem', position: 'relative' }} onClick={(e) => e.stopPropagation()} >
          {children}
        </div>
      </div>,
      document.body
    )
};


export default Modal;
