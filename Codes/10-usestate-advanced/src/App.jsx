import React, { useState} from 'react'

// const App = () => {

//   const [num, setNum] = useState({user: "John", age: 30})

  
//   const btnClicked = () => {
//     const newNum ={...num};
//     newNum.user = "Jane";
//     newNum.age = 25;
//     setNum(newNum);
//   }
//   return (
//     <div>
//       <h1>{num.user} is {num.age} years old.</h1>
//       <button onClick={btnClicked}>Click</button>
//     </div>
//   )
// }

// const App = () => {
//   const [num, setNum] = useState([1, 2, 3, 4, 5])

//   const btnClicked = () => {
//     const newNum = [...num];
//     newNum.push(6);
//     setNum(newNum);
//   }
//   return (
//     <div>
//       <h1>{num.join(", ")}</h1>
//       <button onClick={btnClicked}>Click</button>
//     </div>
//   )
// }

const App = () => {
  const [num, setNum] = useState({user: "John", age: 30});

  const btnClicked = () => {
    setNum(prevNum => {
      return {...prevNum, user: "Jane", age: 25}
    });
  }
  return (
    <div>
      <h1>{num.user} is {num.age} years old.</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}
export default App