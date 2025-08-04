import { ButtonBase} from '@mui/material'
import type { SxProps, Theme } from "@mui/material";
interface PrimaryButtonProps {
  onClick: () => void
  label: string
  disabled?: boolean
  backgroundColor?: string
  color?: string
  border?: string
}

export default function PrimaryButton({
  onClick,
  label,
  disabled = false,
  backgroundColor = 'var(--primary-button-bg-color)',
  color = 'white',
  border = 'none',
}: PrimaryButtonProps) {
  return (
    <ButtonBase
      sx={{
        ...styles.button,
        backgroundColor: !disabled ? { backgroundColor } : 'gray',
        color: { color },
        border: { border },
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </ButtonBase>
  )
}

const styles: Record<string, SxProps<Theme>> = {
  button: {
    height: 'var(--button-height)',
    borderRadius: 'var(--button-radius)',
    fontSize: 'var(--button-font-size)',
    fontWeight: 'var(--button-font-weight)',
    boxSizing: 'border-box',
    width: '100%',
  },
}
