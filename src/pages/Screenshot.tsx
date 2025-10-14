import * as React from 'react'
import html2canvas from 'html2canvas'
import { Paper, Button } from '@mui/material'

export default function Screenshot() {
  const ref = React.useRef<HTMLDivElement>(null)

  const capture = async () => {
    if (!ref.current) return
    const canvas = await html2canvas(ref.current)
    const link = document.createElement('a')
    link.download = 'capture.png'
    link.href = canvas.toDataURL('image/png')
    link.click()
  }

  return (
    <>
      <Paper sx={{ p: 3, bgcolor: '#111', border: '1px solid #222', mb:2 }} ref={ref}>
        <h3>Capture this card</h3>
        <p>Click the button below to download a PNG.</p>
      </Paper>
      <Button variant="contained" onClick={capture}>Capture</Button>
    </>
  )
}
