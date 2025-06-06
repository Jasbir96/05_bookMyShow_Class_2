import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';

import store from './redux/store';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';
import User from './pages/User';
import Admin from './pages/Admin';
import Partner from './pages/Partner';

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            {/* authenticated */}
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/profile" element={<User/>}></Route>
            <Route path="/admin" element={<Admin/>}></Route>
            <Route path="/partner" element={<Partner />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>


    </div>
  );
}

export default App;
