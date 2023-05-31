import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from './config/redux/store'
import { Provider } from 'react-redux'
import { AuthContextProvider } from './context/AuthContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
)
