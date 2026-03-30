import { useEffect } from "react";
import "@/App.css";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function App() {
  useEffect(() => {
    // Redirect to the Bitcoin Growth mini app
    window.location.href = `${BACKEND_URL}/api/app`;
  }, []);

  return (
    <div className="App" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#0A0D14',
      color: '#F8FAFC',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{
          width: '48px',
          height: '48px',
          margin: '0 auto 16px',
          borderRadius: '50%',
          backgroundColor: '#F7931A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#fff'
        }}>₿</div>
        <p>Redirigiendo a Bitcoin Growth...</p>
      </div>
    </div>
  );
}

export default App;
