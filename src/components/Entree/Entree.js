import React,{useState} from 'react'

function Entree(props) {

    const [entree,setEntree]=useState('');

    return (
        <div className="form-group">
            <label >{props.labelValue}</label>

            <input  type="email" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter email">
            </input>
            <small  id="emailHelp" 
                    className="form-text text-muted">{props.messageErreur}</small>
        </div>
    )
}

export default Entree
