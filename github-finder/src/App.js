import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import NotFound from './Components/Pages/NotFound';
import { GithubProvider } from './Components/Context/GithubContext';
import { AlertProvider } from './Components/Context/AlertContext';
import Alert from './Components/Alert';


function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar/>
              <main className='container mx-auto px-3 pb-12'>
                <Alert/>
                 <Routes>
                   <Route path='/' element={<Home/>} />
                   <Route path='/about' element={<About/>} />
                   <Route path='/notfound' element={<NotFound/>} />
                   <Route path='/*' element={<NotFound/>} />
                 </Routes>
              </main>
            <Footer/>
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
