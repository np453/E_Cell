import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';
class Team extends React.Component {

      state ={
        data : {
          team:"",
          name:"",
          email:"",
          designation:"",
          facebook:"",
          linkedin:"",
          file: null,
        }
      };
      
      handleRadio = ({currentTarget:input}) => {
        const data = {...this.state.data};
        data[input.name] = input.value;
        if(input.name === 'file')data[input.name] = input.files[0]
        this.setState({ data });
    };

  onClickHandler = () => {
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
  

  render() {
    if(!Cookies.get('admintoken')) {
      // this.setState({redirect:false})
      return <Redirect to="/admin_login"/>
  }
      return (
        <div className="container">
        <div className="row m-3">
          <div className="">
             <form className="form-group form-inline files d-flex flex-column">
                <div className="form-group">
                  <label for="name">Name</label>
                  <input type="text" name="name" onChange={this.handleRadio}/>
                </div>
                <div className="form-group">
                  <label for="email">E-Mail</label>
                  <input type="text" name="email" onChange={this.handleRadio}/>
                </div>
                <div className="form-group">
                  <label for="team">Team</label>
                  <input type="text" name="team" onChange={this.handleRadio}/>
                </div>
                <h6 className="mb-3">for eg. <strong>Marketing team, Web team</strong></h6>
                <div className="form-group">
                  <label for="designation">Designation</label>
                  <input type="text" name="designation" onChange={this.handleRadio}/>
                </div>
                <h6 className="mb-3">for eg. <strong>Head of marketing team</strong></h6>
                <div className="form-group">
                  <label for="facebook">Facebook Id url</label>
                  <input type="text" name="facebook" onChange={this.handleRadio}/>
                </div>
                <div className="form-group">
                  <label for="linkedin">Linked in Id url</label>
                  <input type="text" name="linkedin" onChange={this.handleRadio}/>
                </div>
                <div className="form-group">
                  <label for="file">Profile Photo</label>
                  <input name="file" type="file" className="form-control" onChange={this.handleRadio}/>
                </div>
            </form>  
            <button type="button" className="btn btn-primary btn-block" onClick={this.onClickHandler}>Submit form</button>

        </div>
    </div>
    </div>
      )
  }
}

export default Team;