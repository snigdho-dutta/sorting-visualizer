import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import SortingContextProvider from './context/sortingContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SortingContextProvider>
      <App />
    </SortingContextProvider>
  </React.StrictMode>
)
