
import { Button } from './components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from './components/ui/popover'
import React from 'react'
import CreateForm from './createform'

function Createnewform() {
  return (
    <Popover>
        <PopoverTrigger asChild>
        <Button>create new form</Button>
        </PopoverTrigger>
        <PopoverContent><CreateForm /></PopoverContent>
        
       
    </Popover>
  )
}

export default Createnewform