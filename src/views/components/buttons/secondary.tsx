import { JSX } from 'react';
import PrimaryButton from './primary';

interface SecondaryButtonProps {
    label: string
    onClick: () => void
}

export default function SecondaryButton ({ label, onClick }: SecondaryButtonProps) : JSX.Element {
    return (
    <PrimaryButton 
        onClick={onClick} 
        label={label} 
        backgroundColor='var(--secondary-button-bg-color)'
        color='black'
        border='1px solid rgba(0,0,0,0.3)'
    />)
}