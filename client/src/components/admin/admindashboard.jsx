import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    state={
        redirect:true,
        data : {
            team:"",
            name:"",
            speakerName:"",
            workTitle:"",
            workDescription:"",
            speakerDescription:"",
            email:"",
            designation:"",
            facebook:"",
            linkedin:"",
            file: null,
            sponsorName:""
          }
    }
    handleRadio = ({currentTarget:input}) => {
        const data = {...this.state.data};
        data[input.name] = input.value;
        if(input.name === 'file')data[input.name] = input.files[0]
        this.setState({ data });
    };
    onClickHandler = () => {
        const data = new FormData() 
          data.append('file', this.state.data.file)
          const config = {
              headers: {
                  'content-type': 'multipart/form-data'
              }
          };
        axios.post("http://localhost:1212/front", data, config)
          .then(res => { // then print response status
            console.log('upload success')
          })
          .catch(err => { // then print response status
              console.log('upload fail')
          })
    }
    onClickHandlerTeam = () => {
        const data = new FormData() 
          data.append('team', this.state.data.team)
          data.append('name', this.state.data.name)
          data.append('email', this.state.data.email)
          data.append('designation', this.state.data.designation)
          data.append('facebook', this.state.data.facebook)
          data.append('linkedin', this.state.data.linkedin)
          data.append('file', this.state.data.file)
          const config = {
              headers: {
                  'content-type': 'multipart/form-data'
              }
          };
        axios.post("http://localhost:1212/team", data, config)
          .then(res => { // then print response status
            console.log('upload success')
          })
          .catch(err => { // then print response status
              console.log('upload fail')
          })
        }
        onClickHandlerSpeaker = () => {
            const data = new FormData() 
              
              data.append('name', this.state.data.spaekerName)
              data.append('description', this.state.data.description)
              data.append('file', this.state.data.file)
              const config = {
                  headers: {
                      'content-type': 'multipart/form-data'
                  }
              };
            axios.post("http://localhost:1212/speaker", data, config)
              .then(res => { // then print response status
                console.log('upload success')
              })
              .catch(err => { // then print response status
                  console.log('upload fail')
              })
            }
            onClickHandlerSponsor = () => {
                const data = new FormData() 
                  
                  data.append('name', this.state.data.sponsorName)
                  data.append('file', this.state.data.file)
                  const config = {
                      headers: {
                          'content-type': 'multipart/form-data'
                      }
                  };
                axios.post("http://localhost:1212/sponsor", data, config)
                  .then(res => { // then print response status
                    console.log('upload success')
                  })
                  .catch(err => { // then print response status
                      console.log('upload fail')
                  })
                }
                onClickHandlerWorks = () => {
                    const data = new FormData() 
                      
                      data.append('title', this.state.data.workTitle)
                      data.append('description', this.state.data.workDescription)
                      data.append('file', this.state.data.file)
                      const config = {
                          headers: {
                              'content-type': 'multipart/form-data'
                          }
                      };
                    axios.post("http://localhost:1212/works", data, config)
                      .then(res => { // then print response status
                        console.log('upload success')
                      })
                      .catch(err => { // then print response status
                          console.log('upload fail')
                      })
                    }
    render() {
        if(!Cookies.get('admintoken')) {
            this.setState({redirect:false})
            return <Redirect to="/admin_login"/>
        }
        
        return (
            <div className="admin_dashboard container-fluid p-0 bg-white">
            <div className="container">
            <div className="row">
                <div className="col-md-2 api_list">
                    <h3>API</h3>
                    <div className="d-flex flex-column">
                <Link to="/admin_image"><span className="dashboard_Link">Gallery</span></Link>
                <Link to="/admin_team"><span className="dashboard_Link">Team API</span></Link>
                <Link to="/admin_speaker"><span className="dashboard_Link">Speaker API</span></Link>
                <Link to="/admin_works"><span className="dashboard_Link">Works API</span></Link>
                <Link to="/admin_sponsor"><span className="dashboard_Link">Sponsors API</span></Link>
            </div>
                </div>
                <div className="col-md-10">
                    <div className="row">
                        <div className="col m-2 border rounded p-3">
                            {/* Front Image Upload form*/}
                            <h3 className="text-center">Front Image upload</h3>
                            <div className="container">
                                <div className="row">
                                <div className="offset-md-3 col-md-6">
                                    <div className="form-group files">
                                    <input name="file" type="file" className="form-control" onChange={this.handleRadio}/>
                                    </div>  
                                    <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
                                </div>
                                </div>
                            </div>
                        </div>
                        {/* image upload section ends */}


                        <div className="col border rounded m-2 p-3">
                            {/*Team upload form*/}
                            <h3 className="text-center">Teams api form</h3>
                            <div className="container">
                                <div className="row m-3">
                                <div className="">
                                    <form className="form-group form-inline files d-flex flex-column">
                                        <div className="form-group">
                                        <label style={{width:"95px"}} className="p-2" for="name">Name</label>
                                        <input type="text" name="name" onChange={this.handleRadio}/>
                                        </div>
                                        <div className="form-group">
                                        <label style={{width:"95px"}} className="p-2" for="email">E-Mail</label>
                                        <input type="text" name="email" onChange={this.handleRadio}/>
                                        </div>
                                        <div className="form-group">
                                        <label style={{width:"95px"}} className="p-2" for="team">Team</label>
                                        <input type="text" name="team" onChange={this.handleRadio}/>
                                        </div>
                                        <h6 className="mb-3">for eg. <strong>Marketing team, Web team</strong></h6>
                                        <div className="form-group">
                                        <label style={{width:"95px"}} className="p-2" for="designation">Designation</label>
                                        <input type="text" name="designation" onChange={this.handleRadio}/>
                                        </div>
                                        <h6 className="mb-3">for eg. <strong>Head of marketing team</strong></h6>
                                        <div className="form-group">
                                        <label style={{width:"95px"}} className="p-2" for="facebook">Facebook Id url</label>
                                        <input type="text" name="facebook" onChange={this.handleRadio}/>
                                        </div>
                                        <div className="form-group">
                                        <label style={{width:"95px"}} className="p-2" for="linkedin">Linked in Id url</label>
                                        <input type="text" name="linkedin" onChange={this.handleRadio}/>
                                        </div>
                                        <div className="form-group">
                                        <label style={{width:"95px"}} className="p-2" for="file">Profile Photo</label>
                                        <input name="file" type="file" className="form-control" onChange={this.handleRadio}/>
                                        </div>
                                    </form>  
                                    <button type="button" className="btn btn-primary btn-block" onClick={this.onClickHandlerTeam}>Submit form</button>

                                </div>
                            </div>
                            </div>
                        </div>
                        {/* team api section ends */}

                        <div className="row m-0">
                            <div className="col border rounded m-2">
                                {/*Speaker api form */}
                                <div className="container">
                                    <h3 className="text-center p-3">Speaker api</h3>
                                    <div className="row">
                                    <div className="">
                                        <div className="form-group files">
                                            <div className="form-group">
                                            <label style={{width:"95px"}} className="p-2" for="name">Name</label>
                                            <input type="text" name="name" onChange={this.handleRadio}/>
                                            </div>
                                            <div className="form-group">
                                            <label style={{width:"95px"}} className="p-2" for="description">Description</label>
                                            <input type="text" name="description" onChange={this.handleRadio}/>
                                            </div>
                                            <label className="p-2" for="file">Photo</label>
                                            <input name="file" type="file" className="form-control" onChange={this.handleRadio}/>
                                        </div>  
                                        <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandlerSpeaker}>Upload</button>

                                    </div>
                                </div>
                                </div>
                            </div>
                            {/* speaker api section ends */}


                            {/* works api section */}
                            <div className="col border rounded m-2 p-3">
                                <h3 className="text-center">Works api form</h3>
                            <div className="container">
                                    <div className="row">
                                    <div className="offset-md-3 col-md-6">
                                        <div className="form-group files d-flex flex-column">
                                            
                                            <label for="name">Title</label>
                                            <input type="text" name="title" onChange={this.handleRadio} />
                                            <label for="description">Description</label>
                                            <input type="text" name="description" onChange={this.handleRadio} />
                                            <label for="file">Photo</label>
                                            <input name="file" type="file" className="form-control" onChange={this.handleRadio}/>
                                        </div>  
                                        <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandlerWorks}>Upload</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            {/* works api section ends */}


                            {/*Sponsor api form */}
                            <div className="col border rounded m-2 p-3">
                                <h3 className="text-center">sponsors api form</h3>
                                <div className="container">
                                    <div className="row">
                                    <div className="">
                                        <div className="form-group files d-flex flex-column">
                                            <label for="name">Name</label>
                                            <input type="text" name="name" onChange={this.handleRadio} />
                                            <label for="file">Photo</label>
                                            <input name="file" type="file" className="form-control" onChange={this.handleRadio}/>
                                        </div>  
                                        <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandlerSponsor}>Upload</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* sponsor section ends */}


                    </div>
                </div>
            </div>
            </div>
            </div>
        );
    }
}

export default Dashboard;