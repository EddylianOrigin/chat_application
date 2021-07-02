//import logo from './logo.svg';
import {ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
  return (
    <ChatEngine
          height="100vh"
          projectID="e4a9a342-7824-4100-b6d7-581d937151b8"
          userName="Eddylian"
          userSecret="12345"
          renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps}/>}
          />
  );
}

export default App;
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/