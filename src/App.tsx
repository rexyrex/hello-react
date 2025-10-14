import { Suspense, useEffect, useRef } from 'react'
import { Route, Routes, Link, useLocation } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { useStore } from './store/provider'
import * as React from 'react'
import { AppBar, Toolbar, Typography, Container, Button as MButton, Box } from '@mui/material'
import { ReactComponent as Logo } from '@/assets/logo.svg'

const Home = React.lazy(() => import('./pages/Home'))
const Charts = React.lazy(() => import('./pages/Charts'))
const FormPage = React.lazy(() => import('./pages/FormPage'))
const Editor = React.lazy(() => import('./pages/Editor'))
const Diagram = React.lazy(() => import('./pages/Diagram'))
const Graph = React.lazy(() => import('./pages/Graph'))
const MathPage = React.lazy(() => import('./pages/MathPage'))
const Screenshot = React.lazy(() => import('./pages/Screenshot'))
const PowerBI = React.lazy(() => import('./pages/PowerBI'))
const Auth = React.lazy(() => import('./pages/Auth'))

const Nav = () => {
  const location = useLocation()
  const links = [
    ['/', 'Home'],
    ['/charts', 'Charts'],
    ['/form', 'Form'],
    ['/editor', 'Editor'],
    ['/diagram', 'Mermaid'],
    ['/graph', 'G6'],
    ['/math', 'KaTeX'],
    ['/screenshot', 'Screenshot'],
    ['/powerbi', 'PowerBI'],
    ['/auth', 'Auth'],
  ]
  return (
    <AppBar position="sticky" color="transparent" sx={{ backdropFilter: 'blur(6px)' }}>
      <Toolbar sx={{ display: 'flex', gap: 2 }}>
        <Logo width={28} height={28} />
        <Typography variant="h6" sx={{ flex: 1 }}>React Enterprise Starter</Typography>
        {links.map(([to, label]) => (
          <MButton key={to} component={Link} to={to} variant={location.pathname===to?'contained':'text'} size="small">
            {label}
          </MButton>
        ))}
      </Toolbar>
    </AppBar>
  )
}

const Footer = () => (
  <Box component="footer" sx={{ borderTop: '1px solid #222', py: 2, mt: 6, textAlign: 'center', color: '#9aa' }}>
    Starter ready for: MobX, React Query, Axios, MUI Confirm, Recharts, RHF, Router v6, Toastify, Quill, Mermaid, PowerBI, MSAL, G6, KaTeX, html2canvas.
  </Box>
)

const AppInner = observer(() => {
  const { counter } = useStore()
  const inc = () => counter.inc()

  return (
    <>
      <Nav />
      <Container sx={{ py: 4 }}>
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" color="#9aa">MobX counter:</Typography>
          <MButton variant="outlined" size="small" onClick={inc}>Count = {counter.value}</MButton>
        </Box>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/diagram" element={<Diagram />} />
            <Route path="/graph" element={<Graph />} />
            <Route path="/math" element={<MathPage />} />
            <Route path="/screenshot" element={<Screenshot />} />
            <Route path="/powerbi" element={<PowerBI />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </Suspense>
      </Container>
      <Footer />
    </>
  )
})

export default function App() {
  return <AppInner />
}
