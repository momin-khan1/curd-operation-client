
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser/AddUser';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import UserUpdate from './components/UserUpdate/UserUpdate';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="user/add" element={<AddUser />} />
        <Route path="/update/:id" element={<UserUpdate />} />
      </Routes>
    </div>
  );
}

export default App;
