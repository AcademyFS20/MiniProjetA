import React, { Component } from 'react';
import {dataBook} from '../../helpers/Data';
import Book from '../../components/Book/Book';
import TableHeader from '../../components/TableHeader/TableHeader';
import Form from '../Form/Form';
import Button from '../../components/Button/Button';

class Books extends Component {

    state = {

           dataBook,
           toggle:false
         
    }

    addBook = (title,category) => {

        console.log(title,category);
    }

    render() {
        // console.log(this.state.dataBook)
        const change = this.state.toggle;
        return (
            <>

                <h1>Admin Dashboard Books</h1>
                <table className="table">
                    <TableHeader/>
                    <tbody>
                        {dataBook.map(item =>(
                            <tr key={item.id}> 
                            <Book
                            id={item.id}  
                            title={item.title} 
                            author={item.author} 
                            category={item.category}
                            nbpages={item.nbpages}/></tr>
                        ))}
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
