import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar";
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search';
import PhoneOtpForm from './components/PhoneLogin';
import Home from './components/Home';
import KanbanBoard from './components/KanbanBoard';

function App() {
  return (
    <div className="App container">
      <Navbar />
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element=<Home /> />
            <Route path="/pagination" element=<Pagination />/>
            <Route path="/search" element=<Search />/>
            <Route path="/otp" element=<PhoneOtpForm />/>
            <Route path="/kanbanboard" element=<KanbanBoard />/>
        </Routes>
      </BrowserRouter>
  </div>
  ); 
}

export default App;