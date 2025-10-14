import * as React from 'react'
import { PowerBIEmbed } from 'powerbi-client-react'
import { models } from 'powerbi-client'
import { Paper, Typography } from '@mui/material'

export default function PowerBI() {
  const embedUrl = import.meta.env.VITE_POWERBI_EMBED_URL
  const reportId = import.meta.env.VITE_POWERBI_REPORT_ID
  const accessToken = import.meta.env.VITE_POWERBI_EMBED_TOKEN

  if (!embedUrl || !reportId || !accessToken) {
    return (
      <Paper sx={{ p: 3, bgcolor: '#111', border: '1px solid #222' }}>
        <Typography variant="body2" color="#9aa">
          Provide VITE_POWERBI_EMBED_URL, VITE_POWERBI_REPORT_ID, and VITE_POWERBI_EMBED_TOKEN in a `.env` file to render an embedded report.
        </Typography>
      </Paper>
    )
  }

  return (
    <Paper sx={{ p: 3, bgcolor: '#111', border: '1px solid #222' }}>
      <PowerBIEmbed
        embedConfig={{
          type: 'report',
          id: reportId,
          embedUrl,
          accessToken,
          tokenType: models.TokenType.Embed,
          settings: { panes: { filters: { visible: false } } }
        }}
        cssClassName="powerbi-embed"
      />
    </Paper>
  )
}
