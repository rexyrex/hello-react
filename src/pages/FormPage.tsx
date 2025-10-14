import * as React from 'react'
import { useForm } from 'react-hook-form'
import { Paper, TextField, Button } from '@mui/material'
import { toast } from 'react-toastify'
import { useConfirm } from 'material-ui-confirm'

type FormVals = { name: string, email: string }

export default function FormPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormVals>()
  const confirm = useConfirm()

  const onSubmit = async (vals: FormVals) => {
    await confirm({ description: `Submit form for ${vals.name}?` })
    toast.success(`Submitted for ${vals.name}`)
  }

  return (
    <Paper sx={{ p: 3, bgcolor: '#111', border: '1px solid #222', maxWidth: 560 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Name" fullWidth margin="normal"
          variant="outlined" {...register('name', { required: true })}
          error={!!errors.name} helperText={errors.name && 'Name is required'}
        />
        <TextField
          label="Email" fullWidth margin="normal"
          variant="outlined" {...register('email', { required: true })}
          error={!!errors.email} helperText={errors.email && 'Email is required'}
        />
        <Button type="submit" variant="contained">Submit</Button>
      </form>
    </Paper>
  )
}
