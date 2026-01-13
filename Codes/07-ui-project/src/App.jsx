import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tag:'Satisfied',
      id: 1,
      color: 'royalblue'
    },
    {
      img:'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tag:'Underserved',
      id: 2,
      color: 'lightseagreen'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661610749980-8adf2af0bfe3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNvcnBvcmF0ZSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
      intro:'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tag:'Underbanked',
      id: 3,
      color: 'orange'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1683133457579-baf5689d4d73?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tag:'Promising',
      id: 4,
      color: 'coral'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661659230176-55573960b5c2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tag:'Loyal',
      id: 5,
      color: 'teal'
    }
  ]
  return (
    <div>
      <Section1 users={users} />
    </div>
  )
}

export default App