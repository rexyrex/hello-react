import * as React from 'react'
import { Typography, Paper } from '@mui/material'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ['hello'],
    queryFn: async () => {
      const res = await axios.get('https://api.github.com/rate_limit')
      return res.data
    }
  })
  return (
    <Paper sx={{ p: 3, bgcolor: '#111', border: '1px solid #222' }}>
      <Typography variant="h5" gutterBottom>Welcome</Typography>
      <Typography variant="body2" color="#9aa">
        This page fetches (with React Query + Axios) GitHub rate limit just to prove wiring.
      </Typography>
      <pre style={{ marginTop: 12, overflowX: 'auto', background: '#0b0b0c', padding: 12, borderRadius: 8 }}>
        {isLoading ? 'Loading...' : JSON.stringify(data, null, 2)}
      </pre>
    </Paper>
  )
}
