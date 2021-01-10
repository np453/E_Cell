import React, { useState, useEffect, useRef } from 'react'
import s1 from '../assets/s1.png'
import { Modal } from 'react-bootstrap'
import Scrollreveal from 'scrollreveal';

const TeamCard = props => {
    const [modal, setModal] = useState(false);
    const modalRef = useRef();
    useEffect (() => {
        Scrollreveal().reveal('.team_page_card', { scale:1, viewFactor:"0.5" })
        document.addEventListener('click', handleClickOutsideModal, true);
        return () => {
            document.removeEventListener('click', handleClickOutsideModal, true);
        }
    }, [])
    const openModal = () => {
        setModal(true)
    }
    const closeModal = () => {
        setModal(false)
    }
    const handleClickOutsideModal = e => {

        {/*If clicked outside of modal, it will close*/}
        if (modalRef.current && !modalRef.current.contains(e.target)) {
           setModal(false)
        }
    };
    return (
        <div className="team_page_card m-3">
            <img src={s1} className="img img-fluid d-flex align-items-center text-center mx-auto"/>
            <h3 className="text-center">Sushil Kumar</h3>
            <div className="row d-flex justify-content-center">
                <span className="">Student Relations and Outreach</span>
            </div>
            <h4 className="text-center"><a href={"mailto"}>shushilkumar@gmail.com</a></h4>
            <div className="text-center">
                <span><i className="fa p-2 fa-facebook-square"></i></span>
                <span><i className="fa p-2 fa-linkedin"></i></span>
            </div>
            <Modal
    //   {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={modal}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <i onClick={closeModal} className="fa fa-times"></i>
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

export default TeamCard