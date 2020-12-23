import React from 'react';
import axios from 'axios';
class Speaker extends React.Component {

      state ={
        data : {
          name:"",
          description:"",
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
        
        data.append('name', this.state.data.name)
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
  

  render() {
      return (
        <div className="container">
        <div className="row">
          <div className="offset-md-3 col-md-6">
             <div className="form-group files d-flex flex-column">
                
                <label for="name">Name</label>
                <input type="text" name="name" onChange={this.handleRadio}/>
                <label for="description">Description</label>
                <input type="text" name="description" onChange={this.handleRadio}/>
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

export default Speaker;