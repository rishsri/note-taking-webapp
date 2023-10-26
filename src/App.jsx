import "./App.css";
import SignIn from "./components/signIn";
import Signup from "./components/signUp";
import Notes from "./components/notes";
import {  Routes, Route } from 'react-router-dom';
import { CustomBrowserRouter } from "./customRoute";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from "./components/homePage";
import { homePage, login, notes,signup } from "./utils/routes";



function App() {
  return (
    <CustomBrowserRouter>
      <Routes>
        <Route exact path={signup} element={<Signup />} />
        <Route exact path={login} element={<SignIn />} />
        <Route exact path={notes} element={<Notes />} />
        <Route exact path={homePage} element={<HomePage />} />
      </Routes>
      <ToastContainer />
      </CustomBrowserRouter>

  );
}

export default App;
