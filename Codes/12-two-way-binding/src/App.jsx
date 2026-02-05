import React, {useState} from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()
    console.log('Form submitted by', title)

    setTitle('')
  }

  return (
    <div>
      <form onSubmit={(event) => {
        submitHandler(event)
      }}>
        <input type="text" placeholder="Enter your name" value={title} onChange={(e) => {
          setTitle(e.target.value);  
        }} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App