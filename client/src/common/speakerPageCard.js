import React from 'react'
import s1 from '../assets/s1.png'
const Speaker = props => {
    return (
        <div style={{backgroundColor:props.cardColor, border:"3px solid"+props.borderColor, opacity:"0.85"}} className="col-md-3 speaker_wrapper m-3">
            <div className="row m-0 justify-content-center">
                <img className="m-3 img img-fluid speaker_img" src={s1}></img>
            </div>
            <div className="col-md-12">
                <h1 className="text-center speaker_heading">{props.name}</h1>
            </div>
            <div className="col-md-12">
                <h6 className="text-center speaker_designation">{props.designation}</h6>
            </div>
            <hr/>
            <p className="speaker_card_content_">
                {props.body}
            </p>
        </div>
    );
}

export default Speaker