import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Laboratory from './Pages/laboratory.jsx'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

const store = configureStore({
  reducer: {},
});

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <Provider store={store}>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/laboratory" element={<Laboratory />} />
  </Routes>
  </BrowserRouter>
  </Provider>
)

