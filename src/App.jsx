import { useState } from 'react'
import languages from './data/languages.js'
import './App.css'

function App() {
  const [active, setActive] = useState(0)

  function handleClick(e) {
    const newActive = Number(e.target.getAttribute('data-index'))

    setActive(newActive)
  }





  return (
    <>
      <h1>Learn Web development</h1>
      <div className="container">
        {languages.map((item, index) => (
          <div className="pill-item" key={item.id}>
            <button onClick={handleClick} data-index={index}>{item.title}</button>
            <div className={active == index ? 'active' : 'hide'}>
              {item.description}
            </div>
          </div>
        ))}
      </div>


    </>
  )
}

export default App
