import { useEffect, useState } from 'react'

import github1Logo from "./assets/icon/icon1.svg"
import github2Logo from "./assets/icon/icon2.svg"
import github3Logo from "./assets/icon/icon3.svg"

import './App.css'
import Quote from './components/Quote'
import { useLoadingContext } from './providers/LoadingProvider'

function App() {
  const [footer, setFooter] = useState()

  const isLoading = useLoadingContext();

  return (
      <div>
        <div className="header container-fluid">
          <div className='container'>
            <img src={github1Logo} className="logo" alt='Icon 1'/>
            <img src={github2Logo} className="logo" alt='Icon 2'/>
            <img src={github3Logo} className="logo" alt='Icon 3'/>
          <h2>GRACE</h2>
          </div>
        </div>
        <div className="title">Example Quote</div>
        <Quote />
        <footer className={`footer ${isLoading && "footerFixed"}`}>
          <p>Copy right &copy;&nbsp; 2023&trade;</p>
        </footer>
      </div>
  )
}

export default App;
