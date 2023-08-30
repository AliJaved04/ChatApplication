import './App.css';
import Login from './Components/Login';
import MainContainer from './Components/MainContainer';
import { Routes, Route } from 'react-router-dom'
import Welcome from './Components/Welcome';
import Groups from './Components/Groups'
import CreateGroups from './Components/CreateGroups';
import ChatArea from './Components/ChatArea';
import OnlineUsers from './Components/OnlineUsers';
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="app" element={<MainContainer />} >
          <Route path="" element={<Welcome />} />
          <Route path='createGroup' element={<CreateGroups />} />
          <Route path='chatArea' element={<ChatArea />} />
          <Route path='users' element={<OnlineUsers />} />
          <Route path='groups' element={<Groups />} />

        </Route>
      </Routes>

    </div >
  );
}

export default App;
