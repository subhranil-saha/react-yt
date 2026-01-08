import Card from "./components/Card";
import Navbar from "./components/Navbar";

const App = () => {
  const user = 'Harsh';
  const age = 22;
  return (
    // <div>
    //   <h1>Hello guys I am {user}</h1>
    //   <h2>I am {age} years old</h2>
    //   {second()}
    // </div>

    <div>
      <Navbar />
      <Card />
    </div>
  )
}

export default App