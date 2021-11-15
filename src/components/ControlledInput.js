import { useState } from 'react';

function ControlledInput() {

  const [val, setValue] = useState('');
  const [valueEmail, setValueEmail] = useState('');
  const [people,setPeople] = useState([]);

  const newPerson = {
    id:new Date().getTime().toString(),
    name:val,
    email:valueEmail
  }

  function charger(e){
      e.preventDefault();
      setPeople(() =>{

        return([...people,newPerson])
  
    });

    setValueEmail("");
    setValue("");
  }

//   const onChangeEmail = (event) => {
//     // setValueEmail(event.target.valueEmail);
//     console.log(valueEmail)
//     setValueEmail((old,New) => {

//        console.log(old,New)
//     })
    
//   };
  console.log(valueEmail)
  console.log(val)
  return (
    <>
      <div>Name: {val}</div>
      <input value={val} onChange={(e) => setValue(e.target.value)} />
      <div>Email: {valueEmail}</div>
      <input value={valueEmail} onChange={(e) => setValueEmail(e.target.value)} />
      <button value="add" onClick={charger}>Add</button>
      {people.map(item => {
        return (
          <div key={item.id}>
                <h2>{item.name}</h2>
                <h2>{item.email}</h2>
          </div>
        )
      })}
    </>
  );
}

export default ControlledInput;