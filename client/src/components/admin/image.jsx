import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';
class Image extends React.Component {

      state ={
        data : {
          file: null,
        }
      };
      
      handleRadio = ({currentTarget:input}) => {
        const data = {...this.state.data};
        data[input.name] = input.value;
        if(input.name === 'file')data[input.name] = input.files[0]
        this.setState({ data });
    };
  onFormSubmit = async(e) => {
      e.preventDefault();
      const data = new FormData() 
    //   data.append('title', this.state.data.title)
      data.append('file', this.state.data.file)
    axios.post("http://localhost:1212/gallery", data, {
        })
        .then(res => { 
        // console.log(res.statusText)
    })
    //   console.log(response)
  }

  // onChangeHandler= e =>{
  //   let file = e.target.files[0]
  //   this.setState({ selectedFile: file})
  // }
  onClickHandler = () => {
    const data = new FormData() 
      data.append('file', this.state.data.file)
      const config = {
          headers: {
              'content-type': 'multipart/form-data'
          }
      };
    axios.post("http://localhost:1212/gallery", data, config)
      .then(res => { // then print response status
        console.log('upload success')
      })
      .catch(err => { // then print response status
          console.log('upload fail')
      })
    }

  render() {
    // console.log(this.state.data)
    if(!Cookies.get('admintoken')) {
      // this.setState({redirect:false})
      return <Redirect to="/admin_login"/>
  }
      return (
        <div className="container">
        <div className="row">
          <div className="offset-md-3 col-md-6">
             <div className="form-group files">
              {/* <input type="text" name="title" onChange={this.handleRadio}/> */}
              <input name="file" type="file" className="form-control" onChange={this.handleRadio}/>
            </div>  
            <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>

        </div>
    </div>
    
    </div>
      )
  }
}

export default Image;