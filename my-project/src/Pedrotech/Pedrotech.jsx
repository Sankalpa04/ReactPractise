import React from 'react'
import User from './user';


const Pedrotech = () => {
  const names = [
    {name : "Sankalpa", age : 21},
    {name : "Salman", age : 55},
    {name : "Varun", age : 32},
  ];
  
  return (
    <div>
      {names.map((naam, key) =>(
        <User key={key} name = {naam.name} age = {naam.age} />
      ))}
    </div>
  )
}

export default Pedrotech


//Ternary Operator
// import React from 'react'

// const Pedrotech = () => {

//   const age = 20;
//   const isDone = false;

//   return(
//     <div>
//       {age >= 18 ? <h1>Over Age</h1> : <h1>Under Age</h1>}
//       <h1>style = {{color: isDone?  }}</h1>
//       </div>
//   )
// }
// export default Pedrotech;

