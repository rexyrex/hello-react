import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MsalProvider, PublicClientApplication } from '@azure/msal-react'
import { ConfirmProvider } from 'material-ui-confirm'
import { ToastContainer } from 'react-toastify'
import App from './App'
import { StoreProvider } from './store/provider'

const queryClient = new QueryClient()

const msalInstance = new PublicClientApplication({
  auth: {
    clientId: import.meta.env.VITE_AZURE_AD_CLIENT_ID || 'YOUR_AZURE_AD_CLIENT_ID',
    authority: import.meta.env.VITE_AZURE_AD_AUTHORITY || undefined,
    redirectUri: '/'
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <BrowserRouter>
            <ConfirmProvider>
              <App />
              <ToastContainer position="bottom-right" />
            </ConfirmProvider>
          </BrowserRouter>
        </StoreProvider>
      </QueryClientProvider>
    </MsalProvider>
  </React.StrictMode>
)
