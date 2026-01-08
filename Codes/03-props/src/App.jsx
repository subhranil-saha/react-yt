import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Subhranil Saha' role='Frontend Developer' img="https://images.unsplash.com/photo-1743105351262-3f9e6944920a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

      <Card user='Saheb Saha' role='Backend Developer' img="https://images.unsplash.com/photo-1764990189201-8025ff64d981?q=80&w=1100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

      <Card user='Sourav Saha' role='UI/UX Designer' img="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>
  )
}

export default App