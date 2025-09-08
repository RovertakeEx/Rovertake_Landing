import Index from './pages/Index'
import Header from './components/Header'
import Footer from './components/Footer'
//import Privacy from './pages/Privacy'
//import Terms from './pages/Terms'

function App() {

  return (
    <>
      <Header/>
      <main className='flex-1'>
        <Index/>
      </main>
      <Footer/>
    </>
  )
}

export default App
