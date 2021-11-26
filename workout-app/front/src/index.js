import React from 'react'
import ReactDOM from 'react-dom'
import './scss/index.scss'
import reportWebVitals from './reportWebVitals'
import App from './Routes'

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)


reportWebVitals()