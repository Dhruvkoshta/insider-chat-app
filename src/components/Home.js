import React from 'react'
import Chat from './chat/Chat'
import Sidebar from './chat/Sidebar'

function Home() {
  return (
    <div className="home">
        <div className="container">
            <Sidebar/>
            <Chat/>
        </div>
    </div>
  )
}

export default Home