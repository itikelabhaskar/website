import './App.css'

function App() {
  return (
    <div className="app">
      <div className="coming-soon">
        <div className="container">
          <div className="logo-circle">
            <div className="logo-inner">IL</div>
          </div>
          <h1 className="main-title">Itika Labhaskar</h1>
          <div className="coming-soon-text">
            <span className="coming">Coming</span>
            <span className="soon">Soon</span>
          </div>
          <p className="message">
            Something amazing is on the way. Stay tuned!
          </p>
          <div className="dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
        <div className="background-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
    </div>
  )
}

export default App

