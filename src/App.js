import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/register" element={<Register/>} />
                        {/*<Route index element={<Home/>}/>*/}
                        {/*<Route path="blogs" element={<Blogs/>}/>*/}
                        {/*<Route path="contact" element={<Contact/>}/>*/}
                        {/*<Route path="*" element={<NoPage/>}/>*/}

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
