import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    state={
        redirect:true,
        show:[],
        data : {
            team:"",
            name:"",
            speakerName:"",
            speakerTitle:"",
            workTitle:"",
            workDescription:"",
            speakerDescription:"",
            email:"",
            designation:"",
            facebook:"",
            linkedin:"",
            file: null,
            sponsorName:"",
            sponsorlink:"",
            cite:"",
            carouseldescription:""
          },
          showApi:false,
          hideForms:false
    }

    // handle radio for input change
    handleRadio = ({currentTarget:input}) => {
        const data = {...this.state.data};
        data[input.name] = input.value;
        if(input.name === 'file')data[input.name] = input.files[0]
        this.setState({ data });
    };

    // speaker showcase onclick handler
    onClickHandler = () => {
        const data = new FormData() 
          data.append('file', this.state.data.file)
          const config = {
              headers: {
                  'content-type': 'multipart/form-data'
              }
          };
        axios.post("http://localhost:1212/ispeaker", data, config)
          .then(res => { // then print response status
            console.log('upload success')
          })
          .catch(err => { // then print response status
              console.log('upload fail')
          })
    }

    // team onclick handler
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

        // speaker onclick handler
    onClickHandlerSpeaker = () => {
            const data = new FormData() 
              
              data.append('name', this.state.data.speakerName)
              data.append('title', this.state.data.speakerTitle)
              data.append('description', this.state.data.speakerDescription)
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

        // sponsor onclick handler
    onClickHandlerSponsor = () => {
                const data = new FormData() 
                  
                  data.append('name', this.state.data.sponsorName)
                  data.append('sponsorlink', this.state.data.sponsorlink)
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

        // works onclick handler
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

        // carousel data onclick handler
    onClickHandlercarousel=()=>{
            const data = new FormData() 
                      
                      data.append('cite', this.state.data.cite)
                      data.append('description', this.state.data.carouseldescription)
                      data.append('file', this.state.data.file)
                      console.log(this.state.data.carouseldescription)
                      const config = {
                          headers: {
                              'content-type': 'multipart/form-data'
                          }
                      };
                    axios.post("http://localhost:1212/carousel", data, config)
                      .then(res => { // then print response status
                        console.log('upload success')
                      })
                      .catch(err => { // then print response status
                          console.log('upload fail')
                      })
        }

        // onclick handler for retriving apis and displaying them
    handleclick_getapi=async(route)=>{
        const data= await axios.get(`http://localhost:1212/${route}/`);
        this.setState({show:data.data, showApi:true, hideForms:true});
        }

        // onclick handler for deleting apis
     handledelete=async(id,route)=>{
        await axios.put(`http://localhost:1212/${route}/delete/${id}`);
        const data = axios.get(`/${route}`);
        }

        loadForms = () => {
            this.setState({ showApi:false })
        }

    render() {
        // redirect if not logged in as admin
        if(!Cookies.get('admintoken')) {
            this.setState({redirect:false})
            return <Redirect to="/admin_login"/>
        }
        // element for displaying either api list or the API forms
        const el = this.state.showApi === true ?  
            // API list element starts
            <div className="container">
                <div className="row">
                <ul className="list-group m-3">
                    {this.state.show.map(m=>
                        <li className="d-flex list-group-item">
                            <span>{m.name != undefined ? m.name : (m.title != undefined ? m.title : m.filename)}</span>
                            <button className="ml-2 btn btn-danger" onClick={()=>this.handledelete(m._id,m.route)}>Delete</button>
                        </li>
                    )}
                </ul>
            </div>
            <button onClick={this.loadForms} className="btn m-3 btn-info">Back to forms</button>
            </div>
            // API list element ends
        :
        // form elements begins
        <div className="row">
        <div className="col m-2 border rounded p-3">

            {/* Front Image Upload form*/}
            <h3 className="text-center">Speaker showcase Image upload</h3>
            <div className="container">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="form-group mt-3 mr-2 border p-2 rounded files">
                        <label htmlFor="file" className="d-flex align-items-center">
                            <svg className="file_upload_button" width="34" height="27" viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.9218 8.71697C26.373 2.54679 20.1156 -1.19951 13.9454 0.34935C9.12353 1.55979 5.62233 5.72723 5.26159 10.6855C1.83788 11.2501 -0.479912 14.4833 0.0846966 17.907C0.586607 20.9507 3.22398 23.1798 6.30874 23.1675H11.5445V21.0732H6.30874C3.99546 21.0732 2.12015 19.1979 2.12015 16.8846C2.12015 14.5714 3.99546 12.6961 6.30874 12.6961C6.88709 12.6961 7.35588 12.2273 7.35588 11.6489C7.35065 6.444 11.5659 2.22034 16.7708 2.21517C21.2764 2.21065 25.155 5.39594 26.0265 9.8164C26.1126 10.2578 26.4708 10.595 26.9166 10.6541C29.7793 11.0618 31.7695 13.713 31.3619 16.5757C30.9959 19.1463 28.8011 21.0603 26.2045 21.0732H22.0159V23.1675H26.2045C30.2528 23.1553 33.5246 19.8636 33.5123 15.8153C33.5021 12.4455 31.1955 9.51666 27.9218 8.71697Z" fill="#686868"/>
                                <path d="M16.0362 12.9998L11.8477 17.1884L13.3241 18.6649L15.7326 16.2669V26.3091H17.8269V16.2669L20.2248 18.6649L21.7013 17.1884L17.5127 12.9998C17.1043 12.5938 16.4447 12.5938 16.0362 12.9998Z" fill="#686868"/>
                            </svg>
                            <span className="m-2">Upload Photo</span>
                        </label>
                        <input name="file" id="file" type="file" className="form-control" onChange={this.handleRadio}/>
                    </div>  
                    <button type="button" className="btn btn-success" onClick={this.onClickHandler}>Upload</button>
                </div>
            </div>
        </div>
        {/* image upload section ends */}

        {/* carousel upload section */}
        <div className="col border rounded m-2 p-3">
                <h3 className="text-center">Carousel api form</h3>
            <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="form-group files d-flex flex-column">                                        
                            <label htmlFor="cite">Citation</label>
                            <input type="text" id="cite" name="cite" onChange={this.handleRadio} />
                        </div> 
                        <div className="form-group files d-flex flex-column">                        
                            <label htmlFor="carouseldescription">Message</label>
                            <input type="text" id="carouseldescription" name="carouseldescription" onChange={this.handleRadio} />                                      
                        </div>                                     
                        <div className="form-group mt-3 mr-2 border p-2 rounded files">                                        
                            <label for="file">
                                <svg className="file_upload_button" width="34" height="27" viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27.9218 8.71697C26.373 2.54679 20.1156 -1.19951 13.9454 0.34935C9.12353 1.55979 5.62233 5.72723 5.26159 10.6855C1.83788 11.2501 -0.479912 14.4833 0.0846966 17.907C0.586607 20.9507 3.22398 23.1798 6.30874 23.1675H11.5445V21.0732H6.30874C3.99546 21.0732 2.12015 19.1979 2.12015 16.8846C2.12015 14.5714 3.99546 12.6961 6.30874 12.6961C6.88709 12.6961 7.35588 12.2273 7.35588 11.6489C7.35065 6.444 11.5659 2.22034 16.7708 2.21517C21.2764 2.21065 25.155 5.39594 26.0265 9.8164C26.1126 10.2578 26.4708 10.595 26.9166 10.6541C29.7793 11.0618 31.7695 13.713 31.3619 16.5757C30.9959 19.1463 28.8011 21.0603 26.2045 21.0732H22.0159V23.1675H26.2045C30.2528 23.1553 33.5246 19.8636 33.5123 15.8153C33.5021 12.4455 31.1955 9.51666 27.9218 8.71697Z" fill="#686868"/>
                                    <path d="M16.0362 12.9998L11.8477 17.1884L13.3241 18.6649L15.7326 16.2669V26.3091H17.8269V16.2669L20.2248 18.6649L21.7013 17.1884L17.5127 12.9998C17.1043 12.5938 16.4447 12.5938 16.0362 12.9998Z" fill="#686868"/>
                                </svg>
                                <span className="m-2">Upload Photo</span>
                            </label>
                            <input name="file" id="file" type="file" className="form-control" onChange={this.handleRadio}/>
                            <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandlercarousel}>Upload</button>
                        </div>  
                        
                    </div>
                </div>
                </div>
            </div>
        {/* carousel upload section ends */}


        <div className="col border rounded m-2 p-3">

            {/*Team upload form*/}
            <h3 className="text-center">Teams api form</h3>
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <form className="files">
                        <div className="form-group">
                            <label className="p-2" for="name">Name</label>
                            <input type="text" name="name" onChange={this.handleRadio}/>
                        </div>
                        <div className="form-group">
                            <label className="p-2" for="email">E-Mail</label>
                            <input type="text" name="email" onChange={this.handleRadio}/>
                        </div>
                        <div className="form-group">
                            <label className="p-2" for="team">Team</label>
                            <input type="text" name="team" onChange={this.handleRadio}/>
                        </div>
                        <h6 className="mb-3">for eg. <strong>Marketing team, Web team</strong></h6>
                        <div className="form-group">
                            <label className="p-2" for="designation">Designation</label>
                            <input type="text" name="designation" onChange={this.handleRadio}/>
                        </div>
                        <h6 className="mb-3">for eg. <strong>Head of marketing team</strong></h6>
                        <div className="form-group">
                            <label className="p-2" for="facebook">Facebook Id url</label>
                            <input type="text" name="facebook" onChange={this.handleRadio}/>
                        </div>
                        <div className="form-group">
                            <label className="p-2" for="linkedin">Linked in Id url</label>
                            <input type="text" name="linkedin" onChange={this.handleRadio}/>
                        </div>
                        <div className="form-group border mt-2 rounded form-inline">
                        <label className="p-2" for="file">
                            <svg className="file_upload_button" width="34" height="27" viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.9218 8.71697C26.373 2.54679 20.1156 -1.19951 13.9454 0.34935C9.12353 1.55979 5.62233 5.72723 5.26159 10.6855C1.83788 11.2501 -0.479912 14.4833 0.0846966 17.907C0.586607 20.9507 3.22398 23.1798 6.30874 23.1675H11.5445V21.0732H6.30874C3.99546 21.0732 2.12015 19.1979 2.12015 16.8846C2.12015 14.5714 3.99546 12.6961 6.30874 12.6961C6.88709 12.6961 7.35588 12.2273 7.35588 11.6489C7.35065 6.444 11.5659 2.22034 16.7708 2.21517C21.2764 2.21065 25.155 5.39594 26.0265 9.8164C26.1126 10.2578 26.4708 10.595 26.9166 10.6541C29.7793 11.0618 31.7695 13.713 31.3619 16.5757C30.9959 19.1463 28.8011 21.0603 26.2045 21.0732H22.0159V23.1675H26.2045C30.2528 23.1553 33.5246 19.8636 33.5123 15.8153C33.5021 12.4455 31.1955 9.51666 27.9218 8.71697Z" fill="#686868"/>
                                <path d="M16.0362 12.9998L11.8477 17.1884L13.3241 18.6649L15.7326 16.2669V26.3091H17.8269V16.2669L20.2248 18.6649L21.7013 17.1884L17.5127 12.9998C17.1043 12.5938 16.4447 12.5938 16.0362 12.9998Z" fill="#686868"/>
                            </svg>
                            <span className="m-2">Profile photo</span>
                        </label>
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
                    <div className="col-md-12">
                        <div className="form-group files">
                            <div className="form-group">
                            <label style={{width:"95px"}} className="p-2" for="speakerName">Name</label>
                            <input type="text" name="speakerName" onChange={this.handleRadio}/>
                            </div>
                            <div className="form-group">
                            <label style={{width:"95px"}} className="p-2" for="speakerTitle">Speaker Title</label>
                            <input type="text" name="speakerTitle" onChange={this.handleRadio}/>
                            </div>
                            <div className="form-group">
                            <label style={{width:"95px"}} className="p-2" for="speakerDescription">Description</label>
                            <input type="text" name="speakerDescription" onChange={this.handleRadio}/>
                            </div>
                            <label className="p-2 border rounded" for="file">
                                <svg className="file_upload_button" width="34" height="27" viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27.9218 8.71697C26.373 2.54679 20.1156 -1.19951 13.9454 0.34935C9.12353 1.55979 5.62233 5.72723 5.26159 10.6855C1.83788 11.2501 -0.479912 14.4833 0.0846966 17.907C0.586607 20.9507 3.22398 23.1798 6.30874 23.1675H11.5445V21.0732H6.30874C3.99546 21.0732 2.12015 19.1979 2.12015 16.8846C2.12015 14.5714 3.99546 12.6961 6.30874 12.6961C6.88709 12.6961 7.35588 12.2273 7.35588 11.6489C7.35065 6.444 11.5659 2.22034 16.7708 2.21517C21.2764 2.21065 25.155 5.39594 26.0265 9.8164C26.1126 10.2578 26.4708 10.595 26.9166 10.6541C29.7793 11.0618 31.7695 13.713 31.3619 16.5757C30.9959 19.1463 28.8011 21.0603 26.2045 21.0732H22.0159V23.1675H26.2045C30.2528 23.1553 33.5246 19.8636 33.5123 15.8153C33.5021 12.4455 31.1955 9.51666 27.9218 8.71697Z" fill="#686868"/>
                                    <path d="M16.0362 12.9998L11.8477 17.1884L13.3241 18.6649L15.7326 16.2669V26.3091H17.8269V16.2669L20.2248 18.6649L21.7013 17.1884L17.5127 12.9998C17.1043 12.5938 16.4447 12.5938 16.0362 12.9998Z" fill="#686868"/>
                                </svg>
                                <span className="m-2">Upload Speaker Photo</span>
                            </label>
                            <input name="file" id="file" type="file" className="form-control" onChange={this.handleRadio}/>
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
                    <div className="col-md-12">
                        <div className="form-group files d-flex flex-column">
                            
                            <label for="workTitle">Title</label>
                            <input type="text" name="workTitle" onChange={this.handleRadio} />
                            <label for="workDescription">Description</label>
                            <input type="text" name="workDescription" onChange={this.handleRadio} />
                            <label className="mt-3 border rounded p-1" for="file">
                                <svg className="file_upload_button" width="34" height="27" viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M27.9218 8.71697C26.373 2.54679 20.1156 -1.19951 13.9454 0.34935C9.12353 1.55979 5.62233 5.72723 5.26159 10.6855C1.83788 11.2501 -0.479912 14.4833 0.0846966 17.907C0.586607 20.9507 3.22398 23.1798 6.30874 23.1675H11.5445V21.0732H6.30874C3.99546 21.0732 2.12015 19.1979 2.12015 16.8846C2.12015 14.5714 3.99546 12.6961 6.30874 12.6961C6.88709 12.6961 7.35588 12.2273 7.35588 11.6489C7.35065 6.444 11.5659 2.22034 16.7708 2.21517C21.2764 2.21065 25.155 5.39594 26.0265 9.8164C26.1126 10.2578 26.4708 10.595 26.9166 10.6541C29.7793 11.0618 31.7695 13.713 31.3619 16.5757C30.9959 19.1463 28.8011 21.0603 26.2045 21.0732H22.0159V23.1675H26.2045C30.2528 23.1553 33.5246 19.8636 33.5123 15.8153C33.5021 12.4455 31.1955 9.51666 27.9218 8.71697Z" fill="#686868"/>
                                        <path d="M16.0362 12.9998L11.8477 17.1884L13.3241 18.6649L15.7326 16.2669V26.3091H17.8269V16.2669L20.2248 18.6649L21.7013 17.1884L17.5127 12.9998C17.1043 12.5938 16.4447 12.5938 16.0362 12.9998Z" fill="#686868"/>
                                    </svg>
                                    <span className="m-2">Upload Photo</span>
                            </label>
                            <input name="file" id="file" type="file" className="form-control" onChange={this.handleRadio}/>
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
                    <div className="col-md-12">
                        <div className="form-group files d-flex flex-column">
                            <label for="sponsorName">Name</label>
                            <input type="text" name="sponsorName" onChange={this.handleRadio} />

                            <label for="sponsorlink">Sponsor URL</label>
                            <input type="text" name="sponsorlink" onChange={this.handleRadio} />


                            <label className="mt-3 border rounded p-1" for="file">
                                <svg className="file_upload_button" width="34" height="27" viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M27.9218 8.71697C26.373 2.54679 20.1156 -1.19951 13.9454 0.34935C9.12353 1.55979 5.62233 5.72723 5.26159 10.6855C1.83788 11.2501 -0.479912 14.4833 0.0846966 17.907C0.586607 20.9507 3.22398 23.1798 6.30874 23.1675H11.5445V21.0732H6.30874C3.99546 21.0732 2.12015 19.1979 2.12015 16.8846C2.12015 14.5714 3.99546 12.6961 6.30874 12.6961C6.88709 12.6961 7.35588 12.2273 7.35588 11.6489C7.35065 6.444 11.5659 2.22034 16.7708 2.21517C21.2764 2.21065 25.155 5.39594 26.0265 9.8164C26.1126 10.2578 26.4708 10.595 26.9166 10.6541C29.7793 11.0618 31.7695 13.713 31.3619 16.5757C30.9959 19.1463 28.8011 21.0603 26.2045 21.0732H22.0159V23.1675H26.2045C30.2528 23.1553 33.5246 19.8636 33.5123 15.8153C33.5021 12.4455 31.1955 9.51666 27.9218 8.71697Z" fill="#686868"/>
                                        <path d="M16.0362 12.9998L11.8477 17.1884L13.3241 18.6649L15.7326 16.2669V26.3091H17.8269V16.2669L20.2248 18.6649L21.7013 17.1884L17.5127 12.9998C17.1043 12.5938 16.4447 12.5938 16.0362 12.9998Z" fill="#686868"/>
                                    </svg>
                                    <span className="m-2">Upload Sponsor logo</span>
                            </label>
                            <input name="file" id="file" type="file" className="form-control" onChange={this.handleRadio}/>
                        </div>  
                        <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandlerSponsor}>Upload</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* sponsor section ends */}


    </div>
    // API form element ends


        return (
            <div className="admin_dashboard container-fluid p-0 bg-white">
            <div className="container">
            <div className="row">
                <div className="col-md-2 mt-3 p-0 api_list">
                    <h3 className="text-center">API</h3>
                    {/* List displaying Api Including delete feature */}
                    <ul className="admin_dashboard_api_list list-group">
                        <li onClick={()=>this.handleclick_getapi("ispeaker")} className="list-group-item dashboard_Link">Speaker Showcase</li>
                        {/* <li onClick={()=>this.handleclick_getapi("front")} className="list-group-item dashboard_Link">Front Section</li> */}
                        <li onClick={()=>this.handleclick_getapi("carousel")} className="list-group-item dashboard_Link">Carousel</li>
                        <li onClick={()=>this.handleclick_getapi("team")} className="list-group-item dashboard_Link">Team API</li>
                        <li onClick={()=>this.handleclick_getapi("speaker")} className="list-group-item dashboard_Link">Speaker API</li>
                        <li onClick={()=>this.handleclick_getapi("works")} className="list-group-item dashboard_Link">Works API</li>
                        <li onClick={()=>this.handleclick_getapi("sponsor")} className="list-group-item dashboard_Link">Sponsors API</li>
                        <li onclick={()=>this.handleclick_getapi("contact")} className="list-group-item dashboard_Link"> Get Email subs</li>
                    </ul>
                    <Link style={{ color:"black", textDecoration:"none" }} to="/">Back to Home</Link>
                </div>
                {/* displaying element */}
                
                <div className="col-md-10">
                    {el}
                </div>
            </div>
            </div>
            </div>
        );
    }
}

export default Dashboard;