import { styled, TextField } from '@mui/material'

export const StyledTextFieldInput = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
    backgroundColor: '#fff',
    borderRadius: '15px',
    '&.Mui-focused fieldset': {
      borderRadius: '15px',
      borderColor: 'var(--primary-txt-color)',
    },
    overflow: 'hidden',
  },

  '& .MuiFormHelperText-root.Mui-error': {
    backgroundColor: 'transparent',
    color: theme.palette.error.main,
  },
  '& .MuiFormHelperText-root': {
    backgroundColor: 'transparent',
    marginRight: 0,
  },

  '& .MuiOutlinedInput-root.Mui-disabled': {
    backgroundColor: 'var(--light-gray)',
    color: '#6b7280',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ccc',
    },
    '& input.Mui-disabled': {
      WebkitTextFillColor: 'rgb(107, 114, 128)',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#9ca3af',
    fontWeight: 500,
    transition: 'all 0.2s ease',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'var(--primary-txt-color)',
  },
  '& .MuiInputLabel-shrink': {
    fontSize: '1.025rem',
    color: 'rgb(107, 114, 128)',
    fontWeight: 600,
  },
}))
