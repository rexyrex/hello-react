import * as React from 'react'
import ReactQuill from 'react-quill'
import { Paper } from '@mui/material'

export default function Editor() {
  const [value, setValue] = React.useState('Write something...')
  return (
    <Paper sx={{ p: 3, bgcolor: '#111', border: '1px solid #222' }}>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </Paper>
  )
}
