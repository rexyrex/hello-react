// src/main.tsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MsalProvider } from '@azure/msal-react'
import { PublicClientApplication } from '@azure/msal-browser' // ✅ from msal-browser
import App from './App'
import './index.css'

const msal = new PublicClientApplication({
  auth: {
    clientId: import.meta.env.VITE_MSAL_CLIENT_ID ?? 'dummy-client-id',
    authority: import.meta.env.VITE_MSAL_AUTHORITY ?? 'https://login.microsoftonline.com/common',
    redirectUri: import.meta.env.VITE_MSAL_REDIRECT_URI ?? '/'
  }
})

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MsalProvider instance={msal}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </MsalProvider>
  </React.StrictMode>
)
