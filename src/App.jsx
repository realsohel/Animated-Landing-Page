import './App.css'
import LandingPage from './components/LandingPage'
import Home from './components/Home'
import { useEffect, useState } from 'react'

function App() {
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowHome(true);
    }, 3000); 

    return () => clearTimeout(timeout);
  }, []);

  
  return (
    <div className="w-full  overflow-hidden">
      {!showHome ? (
        <LandingPage />
      ) : (
          <Home />
      )}
    </div>
  )
}

export default App
