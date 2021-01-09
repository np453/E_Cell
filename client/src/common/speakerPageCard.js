import React, { useEffect, useState, useRef } from 'react'
import s1 from '../assets/s1.png'
import Scrollreveal from 'scrollreveal';
import M from './modal';
import { Modal } from 'react-bootstrap'
const Speaker = props => {
    const [modal, setModal] = useState(false);
    const modalRef = useRef();
    useEffect (() => {
        Scrollreveal().reveal('.speaker_wrapper', { scale:1, viewFactor:"0.5" })
        document.addEventListener('click', handleClickOutsideModal, true);
        return () => {
            document.removeEventListener('click', handleClickOutsideModal, true);
        }
    }, [])
    const openModal = () => {
        setModal(true)
    }
    const handleClickOutsideModal = e => {

        {/*If clicked outside of modal, it will close*/}
        if (modalRef.current && !modalRef.current.contains(e.target)) {
           setModal(false)
        }
    };
    return (
        <div className="col-md-3 p-0 speaker_wrapper m-3">
            <div className="row m-0 justify-content-center">
                <img className="img img-fluid " src={s1}></img>
            </div>
            <div className="col-md-12">
                <h1 className="text-center speaker_heading">{props.name}</h1>
            </div>
            <div className="col-md-12">
                <h6 className="text-center speaker_designation">{props.designation}</h6>
            </div>
            <p className="speaker_card_content_">
                {props.body}
            </p>
            <h6 onClick={openModal} className="learn_more"><span>Read more ›</span></h6>
            <Modal
    //   {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={modal}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <i onClick={() => setModal(false)} className="fa fa-times"></i>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body ref={modalRef}>
        <div  className="row">
            <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">
                <img className="img img-fluid rounded-circle" src={s1}></img>
                <h5 className="text-center mt-4">{props.name}</h5>
                <h6 className="text-center">{props.designation}</h6>
            </div>
            <div className="col-md-7 d-flex justify-content-center align-items-center flex-column">
                <p>{props.body}
                iPad is perfect for taking notes and organising your thoughts. 
                Sketch ideas in the Notes app as naturally as you do on paper, 
                then catalogue them, share them or add them to a presentation.
                You can even search your handwritten notes. 
                The App Store is also full of great apps that let you organise, 
                annotate and take your notes to the next level.     
                </p>
            </div>
        </div>
      </Modal.Body>
    </Modal>
        </div>
    );
}

export default Speaker