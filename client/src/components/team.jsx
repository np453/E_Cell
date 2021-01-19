import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/naavbar';
import TeamCard from '../common/teamPageCard';
import { base } from '../base'
class Team extends Component {
    
    state = {
        team : [],
        displayScrollToTopArrow:false,
        loadingTeam:true
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
        const { data: team } = await axios.get('/api/team/')
        this.setState({ team, loadingTeam:false })
        console.log(team)
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.handleScroll);
    }

    headingRef = React.createRef();
    executeTopScroll = () => this.headingRef.current.scrollIntoView()

    render() {
        const team = this.state.team === undefined ? null : this.state.team
        const el = this.state.loadingTeam === true ? 
        <div style={{ height:"100vh", background:"black", }} className="container-fluid p-0 d-flex justify-content-center align-items-center">
            <h3 style={{ color:"#f6f6f6" }}>Loading...</h3>
        </div> :
        <div>
        { this.state.displayScrollToTopArrow && 
            <i onClick={this.executeTopScroll} className="fa fa-arrow-up position-fixed "></i>
        }
        <div className="team_page_banner">
            <h1 ref={this.headingRef}>Team Members</h1>
            <h3>E-cell MNNIT Allahabad</h3>
            <img src="" alt=""/>
        </div>
        <div className="container">
        <div className="row d-flex justify-content-center m-0">
            {team.map(m =>
                <div className="col-xm-3 p-0">
                    <TeamCard 
                    name={m.name} 
                    email={m.email} 
                    team={m.team} 
                    designation={m.designation} 
                    facebook={m.facebook} 
                    linkedin={m.linkedin} 
                    image={ base + 'media/' + m.route + '/' + m.filename }/>
                </div>    
            )}
        </div>
    </div>
    </div>
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
                {el}
            </div>
        );
    }
}

export default Team;