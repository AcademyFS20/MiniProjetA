import React from 'react';
import TableHeader from './components/TableHeader/TableHeader';
import Book from './components/Book/Book';
import Button from './components/Button/Button';
import Entree from './components/Entree/Entree';
import {dataBook} from './helpers/Data';
import ListeDeroulante from './components/ListeDeroulante/ListeDeroulante';
import Form from './containers/Form/Form';
import Books from './containers/Books/Books';

class App extends React.Component {

    // state={dataBook}

    // handler = () => {

    //     this.setState({toggle:true})
    // }

    // cacher = () =>{

    //     this.setState({toggle:false})
    // }

    render(){
        // this.setState({toggle:true})
        //  console.log(this.state.toggle)

        // let data = this.state.dataBook;
        // const id=data.map(({id})=>id)
        // let {id,title, nbpages, author, category} = data;
        // console.log(id)
        
        return (
            <div>
                <Books/>
            </div>
        )
    }  
}

export default App

/******************** useReducer test ****************************/

// import React, {useState, useEffect, useReducer} from 'react'
/* import User from "./components/User"; */
// import ControlledInput from "./components/ControlledInput";

// const initialState = {count: 0};

/* function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
} */

/* function App(){
    const [state, dispatch] = useReducer(reducer, initialState);


    return(
        <div>
            <ControlledInput/>
            Total : {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
            

        </div>
    );
}

export default App */

/*********************** api app ******************************/

/* const API_URL=`https://api.github.com/users`;

function App() {
    const [user, setUser]= useState('');
    useEffect(() =>{
        fetch(API_URL)
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])

    return (
        <div>
            <h1>Afficher les users</h1>
            <div className="container">
            {user.length>0 && user.map(user=>(
                <User key={user.id} {...user}/>
            ))}
            </div>
        </div>
    ); 
}
export default App */


/* const API_URL = `http://api.icndb.com/jokes/random`;

function App() {
    const [joke, setJoke] = useState('');

    const generateJoke=() =>{
        fetch(API_URL)
        .then(res=>res.json())
        .then(data => setJoke(data.value.joke));
    }

    useEffect(() => {
        generateJoke();
    }, [])

    return (
        <div class="box">
            <h1>Chuck Norris jokes generator</h1>
            <p>{joke}</p>
            <button onClick={generateJoke}>Get new joke</button>
        </div>
    )
}



export default App
 */