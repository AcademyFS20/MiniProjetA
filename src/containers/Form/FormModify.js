import React, { Component } from 'react';
import Button from '../../components/Button/Button';

class FormModify extends React.Component {

  state = {
      modifyTitle:'',
      modifyAuthor:'',
      modifyNbpages:0,
      modifyCategory:''
  }

  setTitle =(event) =>{
    this.setState({modifyTitle: event.target.value});
  }

  setAuthor =(event) =>{
    this.setState({modifyAuthor: event.target.value});
  }

  setPages =(event) =>{
    this.setState({modifyNbpages: event.target.value});
  }

  setCategory =(event) =>{
    this.setState({modifyCategory: event.target.value});
  }

  componentDidMount(){

      this.setState({
        modifyTitle:this.props.title,
        modifyAuthor:this.props.author,
        modifyCategory:this.props.category,
        
        modifyNbpages:this.props.nbpages

      })
      console.log("component is ready to be updated")
  }

  valider = () =>{

    this.props.handler(

      this.props.id,
      this.state.modifyTitle,
      this.state.modifyAuthor,
      this.state.modifyCategory,
      this.state.modifyNbpages
    )
  }

  render() {

    return (
      <>


      <td><h2>{this.props.id}</h2></td>
      
        <td>
          <div className="form-group">
            <input  type="inpput" 
                    className="form-control" 
                    id="exampleInputEmail1"
                    value={this.state.modifyTitle}
                    onChange={this.setTitle}
                    placeholder="Book Name *">
            </input>
            <small  id="emailHelp" 
                    className="form-text text-muted">
            </small>
          </div>
        </td>
        
        <td>
                <div className="form-group">
                    <input  type="input" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        value={this.state.modifyAuthor}
                        onChange={this.setAuthor}
                        placeholder="Author Name">
                    </input>
                    <small  id="emailHelp" 
                        className="form-text text-muted">
                    </small>
                </div> 
        </td>

        <td>
        <div className="input-group mb-3">
                    <select value={this.state.modifyCategory} onChange={this.setCategory}  className="custom-select" id="categories">
                        
                        <option value="fantasy">Fantasy</option>
                        <option value="Classics">Classics</option>
                        <option value="Fiction">Literaly fiction</option>
                    </select>
                </div>

        </td>

        <td>
        <div className="form-group">
                    <input  type="input" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        value={this.state.modifyNbpages}
                        onChange={this.setPages}
                        placeholder="Nombre de pages default 0">
                    </input>
                    <small  id="emailHelp" 
                        className="form-text text-muted">
                    </small>
                </div>
        </td>

        

        <td>
          <Button type='submit' value='validate' className='btn btn-outline-success' click={this.valider}/>
        </td>
      </>
    )
  }
}

export default FormModify;
