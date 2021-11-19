import React, { Component } from 'react';
import {dataBook} from '../../helpers/Data';
import Book from '../../components/Book/Book';
import TableHeader from '../../components/TableHeader/TableHeader';
import Form from '../Form/Form';
import Button from '../../components/Button/Button';
import FormModify from '../Form/FormModify';

class Books extends Component {

    state = {

           dataBook,
           toggle:false,
           modify:false,
           idBook : 0
         
    }

    updateBook = (id,title,author,category,nbpages)=>{
        
        const index = this.state.dataBook.findIndex(item =>{

            return item.id === id;
        } )

        console.log(index);
        const newBook = {

            id,title,author,category,nbpages

        }

        // const newList = [...this.state.dataBook];
        // newList[index] = newBook;

        this.state.dataBook[index]=newBook;
        const newList=this.state.dataBook;

        this.setState({dataBook: newList,idBook:0})
    }

    addBook = (title,category,author,nbpages) => {

        const table={id:Math.floor(Math.random() * 10000000000),
            title,
            nbpages,
            author,
            category
            }
        
        this.state.dataBook.push(table)
        this.setState(this.state.dataBook);
    }

    render() {
        
        const change = this.state.toggle;
        let idBook = this.state.idBook;
        let modify=this.state.modify;
        

            return (
                <>
                    <h1>Admin Dashboard Books</h1>
                    <table className="table">
                        <TableHeader/>
                        <tbody>
                             {
                             
                             this.state.dataBook.map((item) =>{
                                if(this.state.idBook!==item.id){
                                    return(
                                    <tr key={item.id}> 
                                        <Book
                                        id={item.id}  
                                        title={item.title} 
                                        author={item.author} 
                                        category={item.category}
                                        nbpages={item.nbpages}
                                        modify={()=>this.setState({idBook: item.id})}
                                        supprimer={()=>
                                            this.setState(this.state.dataBook.splice(this.state.dataBook.indexOf(item),1))
                                        }
                                        />   
                                    </tr>
                                        
                                        ) 
                                }
                                else
                                    {
                                        return(
                                    <tr key={item.id}>
                                    <FormModify id={item.id} 
                                    title={item.title} 
                                    author={item.author}
                                    category={item.category} 
                                    nbpages={item.nbpages}
                                    handler={this.updateBook}/>
                                    </tr>
                                    )
                                        
                                        
                                    }
                                        
                             })}
                            
                        </tbody>  
                    </table>
    
                    {
                        change ? <Form validate={this.addBook}/> : null 
                    }
                    
                    <Button value ={    !this.state.toggle ? 'create' : 'close'} 
                                        className={ !this.state.toggle ? "btn btn-outline-success" : "btn btn-outline-danger"} 
                                        click={() => this.setState({toggle: !this.state.toggle})}/>
                    
                </>
            );
        }

}

export default Books;
