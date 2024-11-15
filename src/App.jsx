import { useState } from 'react'
import languages from './data/languages.js'
import './App.css'

function App() {
  const [activeLanguage, setActiveLanguage] = useState(0)

  function handleClick(e) {
    const newActiveLanguage = Number(e.target.getAttribute('data-index'))

    setActiveLanguage(newActiveLanguage)
  }





  return (
    <>
      <header>
        <h1>Learn Web development</h1>
      </header>
      <main>
        <div className="container">
          {languages.map((item, index) => (
            <span className="pill-item" key={item.id}>
              <button
                className={`pill ${activeLanguage === index ? 'active' : ''}`}
                onClick={handleClick}
                data-index={index}>
                {item.title}
              </button>
              <div className={`border ${activeLanguage === index ? '' : 'hide'}`}>
                <h3 className={activeLanguage === index ? 'active-description' : 'hide'}>{item.title}</h3>
                <div className={activeLanguage === index ? 'active-description' : 'hide'}>
                  {item.description}
                </div>
              </div>

            </span>
          ))}
        </div>
      </main>



    </>
  )
}

export default App
