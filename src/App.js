import { ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App=()=>{
    return(
        <ChatEngine
        height="100vh"
        projectID="bc142d4c-43d0-497d-ad15-c6da7c6f365d"
        userName="Tirthraj"
        userSecret="12345"
        renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
        />
    )
}
export default App;