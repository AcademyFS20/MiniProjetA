import React from 'react';
import Button from '../Button/Button';
// import {dataBook} from '../../helpers/Data';

function Book(props) {

    
    return (
        <>
            
                <th scope="row">{props.id}</th>
                <td>{props.title}</td>
                <td>{props.author}</td>
                <td>{props.category}</td>
                <td>{props.nbpages}</td>
                <td>

                    <Button value='Update'
                    className="btn btn-outline-warning"/>
                    <Button value='Delete'
                    className="btn btn-outline-danger"/>

                </td>
           
        </>
    )
}

export default Book
