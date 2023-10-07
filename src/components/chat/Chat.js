import React, { useContext } from 'react'
import { ChatContext } from '../../context/ChatContext';
import Input from './Input'
import Messages from './Messages'

function Chat() {
  
  const { data } = useContext(ChatContext);

  return (
    <div className='chat'>
        <div className="chatInfo">
        {data.user.photoURL && <img className='profileImg' src={data.user?.photoURL} alt="" />}
            <span>{data.user?.displayName}</span>
            <div className="chatIcons">
                <img src="https://github.com/safak/youtube2022/blob/react-chat/src/img/cam.png?raw=true" alt="" />
                <img src="https://github.com/safak/youtube2022/blob/react-chat/src/img/add.png?raw=true" alt="" />
                <img src="https://github.com/safak/youtube2022/blob/react-chat/src/img/more.png?raw=true" alt="" />
            </div>
        </div>
            <Messages/>
            <Input/>
    </div>
  )
}

export default Chat