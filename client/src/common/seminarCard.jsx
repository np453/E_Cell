import React, { useEffect } from 'react'

import Scrollreveal from 'scrollreveal';

const SeminarCard = props => {
    useEffect (() => {
        Scrollreveal().reveal('.speaker_wrapper', { scale:1, viewFactor:"0.5" })

    }, [])

    return (
        <div className="row d-flex seminar_card justify-content-center ">
            <div className="col-md-3 d-flex seminar_card_img p-0 justify-content-center align-items-center flex-column">
                <img className="img img-fluid" src={props.image} alt=""/>
            </div>
            <div className="col-md-6 d-flex seminar_card_content flex-column">
                <h3 className="mt-4">{props.title}</h3> 
                <p className="m-2">
                    {props.content}
                </p>
            </div>
        </div>
    );
}

export default SeminarCard ;