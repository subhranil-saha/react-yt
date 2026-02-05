import React, {useState} from 'react'

const App = () => {

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("")

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({title, details});
    setTask(copyTask);

    setTitle("");
    setDetails("");
  }

  const deleteNote = (index) => {
    const copyTask = [...task];
    copyTask.splice(index, 1);
    setTask(copyTask);
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>

      <form className='flex items-start gap-4 lg:w-1/2 flex-col p-10' onSubmit={(e) => submitHandler(e)}>

        <h1 className='text-4xl font-bold mb-4'>Notes App</h1>

        {/* HEADING INPUT */}
        <input type="text" placeholder='Enter Notes Heading' className='px-5 font-medium py-2 border-2 rounded w-full outline-none ' value={title} onChange={(e) => setTitle(e.target.value)} />

        {/* DETAILED INPUT */}
        <textarea type="text" placeholder='Enter Notes Description' className='px-5 h-30 py-2 font-medium border-2 rounded w-full outline-none flex items-start flex-row' value={details} onChange={(e) => setDetails(e.target.value)} />

        <button className='bg-blue-500 px-5 py-2 rounded hover:bg-blue-700 transition w-full outline-none font-medium active:bg-blue-900 active:scale-95'>Add Note</button>

      </form>

      <div className='p-10 lg:border-l-2 lg:w-1/2'>

        <h1 className='text-4xl font-bold mb-4'>Recent Notes</h1>

        <div className='flex gap-5 flex-wrap items-start justify-start mt-6 h-[90%] overflow-auto'>

          {task.map(function(elem, index){

            return <div key={index} className='flex flex-col justify-between items-start shadow-lg pt-9 pb-4 px-4 relative h-52 w-40 rounded-xl bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")] bg-cover bg-center '>

              <div>

                <h3 className='leading-tight text-black font-bold text-xl'>{elem.title}</h3>

                <p className='leading-tight mt-3 font-medium text-black'>{elem.details}</p>

              </div>

              <button onClick={() => deleteNote(index)} className='w-full cursor-pointer active:scale-95 bg-red-500 text-white py-1 text-xs rounded font-bold'>Delete</button>

            </div>

          })}
          

        </div>

      </div>

    </div>
  )
}

export default App