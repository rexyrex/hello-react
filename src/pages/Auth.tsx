import * as React from 'react'
import { useMsal } from '@azure/msal-react'
import { Button, Paper, Typography } from '@mui/material'

export default function Auth() {
  const { instance, accounts } = useMsal()
  const login = () => instance.loginPopup({ scopes: ['User.Read'] })
  const logout = () => instance.logoutPopup()

  return (
    <Paper sx={{ p: 3, bgcolor: '#111', border: '1px solid #222' }}>
      <Typography gutterBottom>MSAL Authentication demo</Typography>
      {accounts[0] ? (
        <>
          <Typography>Signed in as: {accounts[0].username}</Typography>
          <Button onClick={logout} variant="outlined">Logout</Button>
        </>
      ) : (
        <Button onClick={login} variant="contained">Login with Microsoft</Button>
      )}
    </Paper>
  )
}
