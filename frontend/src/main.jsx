import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import  Provider  from '@components/ui-provider.jsx'  // Correct alias usage
import {BrowserRouter} from  'react-router-dom' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
// calculator function 