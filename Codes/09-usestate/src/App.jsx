// import React, { useState } from 'react'

// const App = () => {
  
//   const [num, setNum] = useState(20)
//   const [userName, setUserName] = useState("Subhranil")
//   const [users, setUsers] = useState([10, 20, 30, 40])

//   function incrementNum() {
//     setNum(num + 10);
//     setUserName("John Doe");
//     setUsers([...users, num + 10]);
//   }

//   return (
//     <div>
//       <h1>Value of num is {num}</h1>
//       <button onClick={incrementNum}>Increment</button>
//       <h2>User Name is {userName}</h2>
//       <h3>Users List:</h3>
//       <ul>
//         {users.map((user, index) => (
//           <li key={index}>{user}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {

  const [numb, setNumb] = useState(0)

  return (
    
    <div>
      <h1>{numb}</h1>
      <button onClick={() => setNumb(numb + 1)}>Increment</button>
      <button onClick={() => setNumb(numb - 1)}>Decrement</button>
      <button onClick={() => setNumb(numb + 5)}>Increment by 5</button>
      <button onClick={() => setNumb(0)}>Reset</button>
    </div>
  )
}

export default App