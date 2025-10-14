import * as React from 'react'
import G6 from '@antv/g6'
import { Paper } from '@mui/material'

export default function Graph() {
  const ref = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    if (!ref.current) return
    const graph = new G6.Graph({
      container: ref.current,
      width: ref.current.clientWidth,
      height: 300,
      modes: { default: ['drag-canvas', 'zoom-canvas', 'drag-node'] }
    })
    graph.data({
      nodes: [{ id: 'A' }, { id: 'B' }, { id: 'C' }],
      edges: [{ source: 'A', target: 'B' }, { source: 'B', target: 'C' }]
    })
    graph.render()
    return () => graph.destroy()
  }, [])
  return <Paper sx={{ p: 3, bgcolor: '#111', border: '1px solid #222' }}><div ref={ref} /></Paper>
}
