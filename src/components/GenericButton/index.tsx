import React from 'react'

import Button  from '@mui/material/Button';
import { IGenericButtonProps } from './interface';

export default function GenericButton({label,onClick,variant}:IGenericButtonProps) {
  return (
    <Button variant={variant} onClick={onClick}>{label}</Button>
  )
}
