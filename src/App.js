import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () =>{

    if(!localStorage.getItem('username')) return <LoginForm/>
    return (
        <ChatEngine
            height="100vh"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            projectID='e8ba02f8-66ab-4a67-a948-baa87bb52da8'
            renderChatFeed={(chatAppsProps)=> <ChatFeed {... chatAppsProps}/>}
        />
    )
}

export default App;