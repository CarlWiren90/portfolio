import './App.css'
import Navbar from './modules/navbar'

const App = () => {

  return (
    <>
      <Navbar/>
        <main className='main'>
          <video className='video-background'
          autoPlay
          muted
          loop
          playsInline>
          <source src="/video/site-video-1028.mp4" type="video/mp4"/>
        </video>
      </main>
    </>
  )
}

export default App
