import React from 'react';
import axios from 'axios';
class Team extends React.Component {

      state ={
        data : {
          category:"",
          name:"",
          email:"",
          designation:"",
          facebook:"",
          linkedin:"",
          instagram:"",
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
        data.append('category', this.state.data.category)
        data.append('name', this.state.data.name)
        data.append('email', this.state.data.email)
        data.append('designation', this.state.data.designation)
        data.append('facebook', this.state.data.facebook)
        data.append('linkedin', this.state.data.linkedin)
        data.append('instagram', this.state.data.instagram)
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
      return (
        <div className="container">
        <div className="row">
          <div className="offset-md-3 col-md-6">
             <div className="form-group files d-flex flex-column">
                <label for="category">Category</label>
                <input type="text" name="category" onChange={this.handleRadio}/>
                <label for="name">Name</label>
                <input type="text" name="name" onChange={this.handleRadio}/>
                <label for="email">E-Mail</label>
                <input type="text" name="email" onChange={this.handleRadio}/>
                <label for="designation">Designation</label>
                <input type="text" name="designation" onChange={this.handleRadio}/>
                <label for="facebook">Facebook</label>
                <input type="text" name="facebook" onChange={this.handleRadio}/>
                <label for="instagram">Instagram</label>
                <input type="text" name="instagram" onChange={this.handleRadio}/>
                <label for="linkedin">Linkedin</label>
                <input type="text" name="linkedin" onChange={this.handleRadio}/>
                <label for="file">Photo</label>
                <input name="file" type="file" className="form-control" onChange={this.handleRadio}/>
            </div>  
            <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>

        </div>
    </div>
    
    </div>
      )
  }
}

export default Team;