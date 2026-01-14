import React from 'react'

const App = () => {

  function btnClicked() {
    console.log('Button clicked')
  }

  return (
    <div>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App