import { useState } from 'react'
import languages from './data/languages.js'
import './App.css'

function App() {
  const [activeLanguage, setActiveLanguage] = useState(null)

  function handleClick(e) {
    const newActiveLanguage = Number(e.target.getAttribute('data-index'))

    setActiveLanguage(newActiveLanguage)

    console.log(newActiveLanguage);


  }





  return (
    <>
      <header>
        <h1>Learn Web development</h1>
      </header>
      <main>
        <div className="container">
          {languages.map((item, index) => (
            <div key={item.id} className="pill-container">
              <span className="pill-item">
                <button
                  className={`pill ${activeLanguage === index ? 'active' : ''}`}
                  onClick={handleClick}
                  data-index={index}
                >
                  {item.title}
                </button>
              </span>
              <div className={`border ${activeLanguage === index ? '' : 'hide'}`}>
                <h3 className="active-description">{item.title}</h3>
                <p className="active-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>



    </>
  )
}

export default App
