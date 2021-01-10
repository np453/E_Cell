import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/naavbar';
import TeamCard from '../common/teamPageCard';

class Team extends Component {
    
    state = {
        team : [],
        displayScrollToTopArrow:false,
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
          navLinkName:"Rennisance",
          link:"/team"
        },
        {
            navLinkName:"Sponsors",
            link:"/sponsor"
          },
      ]
      sideBarItems = [
        {
          item:"sadsad"
        },
        {
          item:"ddsadfdsf"
        },
        {
          item:"ddsadfdsf"
        }
      ]

    handleScroll = () => {
        if(window.pageYOffset > 200){
            this.setState({ displayScrollToTopArrow:true });
        }
        if(window.pageYOffset < 200){
            this.setState({ displayScrollToTopArrow:false });
        }
    } 
    componentDidMount = async() => {
        const { data: team } = await axios.get('/team/')
        this.setState({ team })
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.handleScroll);
    }

    headingRef = React.createRef();
    executeTopScroll = () => this.headingRef.current.scrollIntoView()

    render() {
        const team = this.state.team === undefined ? null : this.state.team
        return (
            <div className="container-fluid team_page_container">
                <Navbar 
                sidebarBackground="#333" 
                sideBarItems={this.sideBarItems} 
                navLinks={this.navLinks} 
                brand="E-Cell MNNIT Allahabad"
                navbarColor="#000" 
                navbarBrandColor="#fff"
                linkColor="#fff"
                linkOpacity="0.9"
                // navBrandLogo={LandingPageLogo}
                />
                { this.state.displayScrollToTopArrow && 
                    <i onClick={this.executeTopScroll} className="fa fa-arrow-up position-fixed "></i>
                }
                <div className="team_page_banner">
                    <h1 ref={this.headingRef}>Team Members</h1>
                    <h3>E-cell MNNIT Allahabad</h3>
                    <img src="" alt=""/>
                </div>
                <div className="container">
                <div className="row d-flex justify-content-center">
                    {team.map(m =>
                        <div className="col-xm-3 p-0">
                            <TeamCard />
                        </div>    
                    )}
                </div>
            </div>
            </div>
        );
    }
}

export default Team;