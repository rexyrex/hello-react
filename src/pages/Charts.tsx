import * as React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { Paper, Typography } from '@mui/material'

const data = Array.from({length: 12}).map((_, i) => ({ month: i+1, value: Math.round(50 + 30*Math.sin(i)) }))

export default function Charts() {
  return (
    <Paper sx={{ p: 3, bgcolor: '#111', border: '1px solid #222', height: 360 }}>
      <Typography variant="h6" gutterBottom>Recharts example</Typography>
      <div style={{ width: '100%', height: 280 }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#5856D6" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  )
}
