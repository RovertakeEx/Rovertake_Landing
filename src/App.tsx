import Index from './pages/Index'
import Header from './components/Header'
import Footer from './components/Footer'
//import Privacy from './pages/Privacy'
//import Terms from './pages/Terms'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
      <Header/>
      <main className='flex-1'>
        <Index/>
        <div className='p-3'>
         <ToastContainer position="top-right" autoClose={3000} theme="light" />
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default App
