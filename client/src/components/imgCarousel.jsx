import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap'
import axios from 'axios'
import { base } from '../base'

// Carousel section
class ImgCarousel extends Component {
    state = {
        carousel : [],
        loadingCarousel : true
    }

    componentDidMount = async() => {
        const { data : carousel } = await axios.get('/api/carousel')
        this.setState({ carousel, loadingCarousel : false })
    }
    
  render() {
      const carousel = this.state.carousel === undefined ? null : this.state.carousel
    return (
      <div className="container-fluid p-3">
          <div className="img_carousel_main_heading_wrapper">
            <h1 className="img_carousel_main_heading text-center">Words of</h1>
            <h1 className="img_carousel_main_heading text-center">inspiration from our alumni</h1>
          </div>
          <div className=" vh-100 carousel_container" >
        <Carousel interval={4000}>
            {carousel.map(m => 
            <Carousel.Item>
            <div className="carousel_item_wrapper">
                <div className="container">
                    <div className="row img_wrapper">
                        <img className="person_img img img-fluid" src={base + 'media/' + m.route + '/' + m.filename} alt="First slide" />
                    </div>
                <div className="content_wrapper carousel_each_item_container">
                <div className="blockquote">
                    <svg className="blockquote_ img img-fluid" xmlns="http://www.w3.org/2000/svg">
                        <path d="M51.5765 57.3091H31.5186C29.1306 57.3091 27.1005 56.4736 25.4289 54.802C23.7581 53.1303 22.9217 51.1008 22.9217 48.7122V45.8481C22.9217 39.52 25.1607 34.118 29.6384 29.6403C34.1158 25.1642 39.5187 22.9252 45.8462 22.9252H51.5765C53.1284 22.9252 54.471 22.3578 55.6058 21.224C56.7398 20.0896 57.3069 18.747 57.3069 17.1948V5.73226C57.3069 4.18042 56.7395 2.83651 55.6058 1.70211C54.4713 0.569276 53.1287 0.000976562 51.5765 0.000976562H45.8462C39.6373 0.000976562 33.7137 1.21096 28.0718 3.62749C22.4305 6.04558 17.5511 9.31424 13.4315 13.4338C9.31232 17.5514 6.0446 22.4312 3.62682 28.0731C1.20905 33.7144 0 39.6395 0 45.8478V108.885C0 113.663 1.67071 117.72 5.0137 121.064C8.357 124.407 12.4173 126.078 17.1926 126.078H51.5787C56.3538 126.078 60.4128 124.407 63.7564 121.064C67.0987 117.72 68.7704 113.663 68.7704 108.885V74.5017C68.7704 69.7245 67.0987 65.6674 63.7542 62.3228C60.4121 58.9808 56.3516 57.3091 51.5765 57.3091Z" fill="#4FA1D2" fill-opacity="0.4"/>
                        <path d="M143.99 62.3218C140.648 58.9798 136.589 57.3081 131.812 57.3081H111.755C109.368 57.3081 107.336 56.4726 105.667 54.801C103.995 53.1293 103.16 51.0998 103.16 48.7112V45.8471C103.16 39.519 105.399 34.117 109.875 29.6393C114.35 25.1632 119.753 22.9242 126.084 22.9242H131.813C133.365 22.9242 134.709 22.3568 135.842 21.2231C136.975 20.0887 137.545 18.746 137.545 17.1939V5.73128C137.545 4.17944 136.976 2.83553 135.842 1.70113C134.709 0.5683 133.365 0 131.813 0H126.084C119.871 0 113.949 1.20999 108.306 3.62651C102.665 6.0446 97.7873 9.31326 93.6678 13.4328C89.5483 17.5505 86.279 22.4302 83.8621 28.0721C81.445 33.7134 80.2344 39.6385 80.2344 45.8468V108.884C80.2344 113.662 81.9067 117.719 85.2487 121.063C88.5911 124.406 92.6504 126.077 97.4263 126.077H131.811C136.587 126.077 140.646 124.406 143.988 121.063C147.332 117.719 149.001 113.662 149.001 108.884V74.5007C149.002 69.7232 147.332 65.6664 143.99 62.3218Z" fill="#4FA1D2" fill-opacity="0.4"/>
                    </svg>
                </div>
                    <div className="item_content">
                    <p className="text-center">
                        {m.description}
                    </p>
                    <div className="citation">
                        <cite><span style={{fontFamily:"Fira Code"}}>&mdash; </span>{m.cite}</cite>
                    </div>
                    </div>
                </div>         
                </div>
            </div>
        </Carousel.Item>
            )}
        </Carousel>
      </div>
      </div>
    );
  }
}

export default ImgCarousel;