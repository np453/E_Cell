import React, { Component } from 'react';
import axios from 'axios';
import { base } from '../base';
import Navbar from '../components/naavbar';

class GalleryHome extends Component {

    state = {
        gallery : [],
        loadingGallery : true,
        opacity:"0"
    }
    navLinks = [
        {
          navLinkName:"Home",
          link:"/"
        },
        {
          navLinkName:"Speakers",
          link:"/speaker"
        },
        {
          navLinkName:"Team",
          link:"/team"
        },
      ]

    ref = React.createRef();
    executeTopScroll = () => this.ref.current.scrollIntoView()
    componentDidMount= async() => {
        const { data : gallery } = await axios.get('/api/gallery/')
        this.setState({ gallery, loadingGallery : false })
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll',this.handleScroll);
    }

    handleScroll = (event)=>{
        if(window.pageYOffset > 223){
            this.setState({opacity:"1"});
        }
        if(window.pageYOffset < 223){
            this.setState({opacity:"0"});
        }
    } 
    
    render() {
        const gallery = this.state.gallery === undefined ? null : this.state.gallery
        const el = this.state.loadingGallery === true ? 
        <div style={{ color:"white", height:"100vh", background:"black"}} className="d-flex justify-content-center align-items-center"><h3 className="text-center">Loading...</h3></div>
        :
        <div className="gallery_main_page container-fluid p-0">
        <Navbar 
        sidebarBackground="#333" 
        sideBarItems={[]} 
        navLinks={this.navLinks} 
        brand="Gallery"
        navbarColor="transparent" 
        navbarBrandColor="#fff"
        linkColor="#c4c4c4"
        linkOpacity="1"
        position="fixed"
        // navBrandLogo={LandingPageLogo}
        />
        <div className="container">
        <h1 className="text-center gallery_page_main_heading" ref={this.ref}>Glimpse</h1>
        <i style={{ opacity:`${this.state.opacity}` }} onClick={this.executeTopScroll} className="fa to_gallery_top fa-arrow-up"></i>
        <div className="row m-0">
            {gallery.slice(0).reverse().map(m =>
            <div className="col-md-4 gallery_img_wrapper p-0">
                <div className="img_wrapper p-2">
                <img src={base + 'media/' + m.route + '/' + m.filename} className=" img img-fluid" alt=""/>
                <div className="img-overlapp"></div>
                </div>
            </div>
        )}
        </div> 
        </div>
    </div>   
        return (
            el
        );
    }
}

export default GalleryHome;