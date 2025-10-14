import * as React from 'react'
import 'katex/dist/katex.min.css'
import { BlockMath, InlineMath } from 'react-katex'
import { Paper, Typography } from '@mui/material'

export default function MathPage() {
  return (
    <Paper sx={{ p: 3, bgcolor: '#111', border: '1px solid #222' }}>
      <Typography gutterBottom>Inline: <InlineMath math={'e^{i\\pi} + 1 = 0'} /></Typography>
      <BlockMath math={'\\int_0^1 x^2 \\ dx = 1/3'} />
    </Paper>
  )
}
