import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import { Provider } from 'react-redux'
import store from './redux/store/index.js'
import { BrowserRouter } from 'react-router-dom'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

const persistor = persistStore (store)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
<BrowserRouter>
<PersistGate persistor={persistor}>

  <App/>
</PersistGate>
</BrowserRouter>
  </Provider>
)
