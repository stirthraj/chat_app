import { ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const App=()=>{
    if(!localStorage.getItem('username')) return <LoginForm/>
    return(
        <ChatEngine
        height="100vh"
        projectID="bc142d4c-43d0-497d-ad15-c6da7c6f365d"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
        />
    )
}
export default App;