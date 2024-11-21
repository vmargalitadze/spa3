import { TableRow, TableHead } from '@/components/ui/table'
import React from 'react'

function Row() {
  return (
    <TableRow>
    <TableHead>First Name</TableHead>
    <TableHead>Last Name</TableHead>
    <TableHead>Email</TableHead>
    <TableHead>Phone Number</TableHead>
    <TableHead>Date</TableHead>
    <TableHead>Time</TableHead>
  </TableRow>
  )
}

export default Row