import React from 'react'
import './App.css'

function App() {
  return (
    <div className="app" style={{ minHeight: '100vh', width: '100%' }}>
      <div className="coming-soon" style={{ 
        minHeight: '100vh', 
        width: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ 
          position: 'relative', 
          zIndex: 10, 
          textAlign: 'center', 
          padding: '2rem',
          color: 'white'
        }}>
          <div className="logo-circle" style={{
            width: '120px',
            height: '120px',
            margin: '0 auto 2rem',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '3px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
          }}>
            <div className="logo-inner" style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              color: 'white',
              letterSpacing: '2px'
            }}>IB</div>
          </div>
          <h1 className="main-title" style={{
            fontSize: '3.5rem',
            fontWeight: 700,
            color: 'white',
            marginBottom: '1.5rem',
            textShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)'
          }}>Itikela Bhaskar</h1>
          <div className="coming-soon-text" style={{
            fontSize: '4rem',
            fontWeight: 800,
            marginBottom: '1.5rem',
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <span className="coming" style={{ color: 'white', textShadow: '3px 3px 15px rgba(0, 0, 0, 0.3)' }}>Coming</span>
            <span className="soon" style={{ color: '#ffd700', textShadow: '3px 3px 15px rgba(255, 215, 0, 0.5)' }}>Soon</span>
          </div>
          <p className="message" style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '2rem',
            fontWeight: 300
          }}>
            Something amazing is on the way. Stay tuned!
          </p>
          <div className="dots" style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem'
          }}>
            <span className="dot" style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.8)',
              animation: 'bounce 1.4s ease-in-out infinite'
            }}></span>
            <span className="dot" style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.8)',
              animation: 'bounce 1.4s ease-in-out infinite 0.2s'
            }}></span>
            <span className="dot" style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.8)',
              animation: 'bounce 1.4s ease-in-out infinite 0.4s'
            }}></span>
          </div>
        </div>
        <div className="background-shapes" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          zIndex: 1
        }}>
          <div className="shape shape-1" style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            top: '-150px',
            left: '-150px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(5px)'
          }}></div>
          <div className="shape shape-2" style={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            bottom: '-100px',
            right: '-100px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(5px)'
          }}></div>
          <div className="shape shape-3" style={{
            position: 'absolute',
            width: '150px',
            height: '150px',
            top: '50%',
            right: '-75px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(5px)'
          }}></div>
        </div>
      </div>
    </div>
  )
}

export default App

