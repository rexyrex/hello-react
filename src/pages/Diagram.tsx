import * as React from 'react'
import mermaid from 'mermaid'
import { Paper } from '@mui/material'

export default function Diagram() {
  const ref = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    mermaid.initialize({ startOnLoad: false, theme: 'dark' })
    if (ref.current) {
      ref.current.innerHTML = `
      <pre class="mermaid">
      flowchart LR
        A[Client] -->|HTTP| B[Server]
        B --> C{Load Balancer}
        C -->|TLS| D[API 1]
        C -->|TLS| E[API 2]
      </pre>`
      mermaid.run({ nodes: [ref.current] })
    }
  }, [])
  return <Paper sx={{ p: 3, bgcolor: '#111', border: '1px solid #222' }}><div ref={ref} /></Paper>
}
