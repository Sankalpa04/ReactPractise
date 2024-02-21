// React routerDOM
//This is done by UseContext hook
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import Home from './ExampleWebsite/Home'
import Profile from './ExampleWebsite/Profile'
import Contact from './ExampleWebsite/Contact'
import { useState, createContext } from 'react'

export const AppContext = createContext();

const App = () => {
  const [username, setUsername] = useState("Sankalpa")
  return (
    <div>
      <AppContext.Provider value={{username, setUsername}}>
        <Router>
          <div>
            <Link to="/"> Home</Link>
            <Link to="/profile"> Profile</Link>
            <Link to="/contact"> Contact</Link>
          </div>
          <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  )
}

export default App

// import React from 'react'
// import Form from './Pedrotech/form'
// import ChangeProfile from './ExampleWebsite/ChangeProfile'



// const App = () => {
//   return (
//     <div>
//       {/* <Form/> */}
//       <ChangeProfile/>
//     </div>
//   )
// }              

// export default App





















// REACT QUERY

// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
  // import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
  // import ReactQuery from './Pedrotech/ReactQuery'

  // const App = () => {
  //   const client = new QueryClient();   
  //   return (
  //     <div>
  //       <QueryClientProvider client={client}>
  //         <Router>
  //           <div>
  //             <Link to="/"> ReactQuery</Link>
  //           </div>
  //           <Routes>
  //             <Route path="/" element = {<ReactQuery/>}/>
  //           </Routes>
  //         </Router>
  //       </QueryClientProvider>
  //     </div>
  //   )
  // }

  // export default App












// // React routerDOM
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// // import { Link } from 'react-router-dom'
// import Home from './ExampleWebsite/Home'
// import Profile from './ExampleWebsite/Profile'
// import Contact from './ExampleWebsite/Contact'
// import { useState, createContext } from 'react'

// export const AppContext = createContext();

// const App = () => {
//   const [username, setUsername] = useState("Sankalpa")
//   return (
//     <div>
//       <AppContext.Provider value={{username, setUsername}}>
//         <Router>
//           <div>
//             <Link to="/"> Home</Link>
//             <Link to="/profile"> Profile</Link>
//             <Link to="/contact"> Contact</Link>
//           </div>
//           <Routes>
//             <Route path="/" element = {<Home/>}/>
//             <Route path="/profile" element={<Profile/>}/>
//             <Route path="/contact" element={<Contact/>}/>
//           </Routes>
//         </Router>
//       </AppContext.Provider>
//     </div>
//   )
// }

// export default App














//fetching data from the api
// import React from 'react'
// import ApiFetch from './Pedrotech/ApiFetch'

// const App = () => {
//   return (
//     <ApiFetch/>
//   )
// }

// export default App




// fetching API using UseEffect and axios
// import React from 'react'
// import { useState, useEffect } from 'react'
// import Axios from 'axios';

// const App = () => {

//   const[catFact, setCatFact] = useState("")

//   const fetchCatFact = ()=>{
//     Axios.get("https://catfact.ninja/fact").then((response)=>{
//       setCatFact(response.data.fact)
//     })
//   };
//   useEffect(()=>{
//     fetchCatFact();
//   },[]);
  
//   return (
//     <div>
//       <button onClick={fetchCatFact}>Generate Cat facts</button>
//       <p>{catFact}</p>
//     </div>
//   )
// }

// export default App













// useeffect uses 
// import Text from './Pedrotech/Text'
// import { useState, useEffect } from 'react'

// const App = () => {
//   const [showText, setShowText] = useState(false)

//   return(
//     <div>
//       <button onClick={()=>{
//         setShowText(!showText)
//       }}>
//         Show / Hide
//       </button>
//       { showText && <Text/>}
//     </div>
//   )

// }

// export default App






// import React from 'react'
// // import styles from ".Sankalpa.module.css"
// import ToDoList from './Pedrotech/ToDoList'

// const App = () => {
//   return (
//     <ToDoList/>
//   )
// }

// export default ToDoList






// import React from 'react'
// import ExerciseThree from './Pedrotech/ExerciseThree'

// const App = () => {
//   return (
//     <ExerciseThree/>
//   )
// }

// export default App

// import React from 'react'
// import ExerciseTwo from './Pedrotech/ExerciseTwo'
// import { useState } from 'react';

// const App = () => {

//   const[textColor, setTextColor] = useState("black")

//   const colorChange = ()=>{
//       setTextColor(textColor === "black"? "red": "black")
//   }

//   return(
//     <div>
//       <button onClick={colorChange}>
//         Change Color
//       </button>
//       <h1 style={{color: textColor}}>Hi I'm Sankalpa</h1>
//     </div>
//   )



  //To show or hide the text on the browser
  // const[showText, setShowText] = useState(true)

  // return(
  //   <div>
  //     <button onClick={()=>{
  //       setShowText(!showText)
  //     }}>
  //       show/Hide
  //     </button>
  //     {showText && <h1>Hi I am Sankalpa Dahal</h1> }
  //   </div>
  // )


  // const [inputValue, setInputValue] = useState("");
  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // };
  
  // return (
  //   <div>
  //     <input type="text" onChange={handleInputChange}/>
  //     {inputValue}
  //   </div>
  // )
// }

// export default App