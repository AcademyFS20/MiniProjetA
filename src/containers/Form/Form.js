import React, {Component} from 'react';
// import Entree from '../../components/Entree/Entree';
// import ListeDeroulante from '../../components/ListeDeroulante/ListeDeroulante';
import Button from '../../components/Button/Button';
// import {dataBook} from '../../helpers/Data';



class Form extends React.Component {

    state={
            id :0,
            title :'',
            author:'',
            category:'',
            nbpages:0,
            errorTitle:'',
            errorAuthor:'',
            errorNbpages:0,
            errorCategory:''
        
    }

    setTitle = (event) =>{
        this.setState({title: event.target.value});
    }

    setAuthor = (event) =>{
        this.setState({author: event.target.value});
    }

    setPages = (event) =>{
        this.setState({nbpages: event.target.value});
    }

    setCategory = (event) =>{
        this.setState({category: event.target.value});

    }

    validate = (title,category,author,nbpages) => {
     
        let error = '';

        if(this.state.title === ''){

            error = 'can not be empty'
        }

        if(error){

            this.setState({errorTitle:error})
            return false;
        }

        return true;
           
    }

    handleSubmit =(e) =>{

        e.preventDefault();
         if(this.props.validate(this.state.title,this.state.category,this.state.author,this.state.nbpages)){
            
            this.setTitle();
            this.setCategory();
            this.setAuthor();
            this.setPages();
        }
    }

    render(){
        
        return (
            <form>
                <div className="form-group">
                    <input  type="inpput" 
                        className="form-control" 
                        id="exampleInputEmail1"
                        value={this.state.title}
                        onChange={this.setTitle}
                        placeholder="Book Name *">
                    </input>
                    <small  id="emailHelp" 
                            className="form-text text-muted">
                    </small>
                </div>

                <div className="form-group">
                    <input  type="input" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        value={this.state.author}
                        onChange={this.setAuthor}
                        placeholder="Author Name">
                    </input>
                    <small  id="emailHelp" 
                        className="form-text text-muted">
                    </small>
                </div>

                <div className="form-group">
                    <input  type="input" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        value={this.state.nbpages}
                        onChange={this.setPages}
                        placeholder="Nombre de pages default 0">
                    </input>
                    <small  id="emailHelp" 
                        className="form-text text-muted">
                    </small>
                </div>

                <div className="input-group mb-3">
                    <select value={this.state.category} onChange={this.setCategory}  className="custom-select" id="categories">
                        <option>Choose...</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="Classics">Classics</option>
                        <option value="Fiction">Literaly fiction</option>
                    </select>
                </div>

                <Button type='submit' 
                        value ='Validate' 
                        className="btn btn-outline-success"
                        click={this.handleSubmit} />

            </form>
        )
    }
}

export default Form


