


import React from 'react'
import { Check } from './checkbox'
import { Date } from './datefield'
import { NumberField } from './numberfield'
import { Selectfield } from './selectfield'
import { Textareafield } from './textareafield'
import { Textfield } from './textfield'

function Inputitems() {
  return (
    <div className='flex justify-end'>
      <div>
        <h3>Drag and drop elements</h3>
        <h4>Form elements</h4>
        <div className='grid grid-cols-2 grid-rows-3 gap-x-8 gap-y-4'>
          <Check />
          <Date />
          <NumberField />
          <Selectfield />
          <Textareafield />
          <Textfield />
        </div>
      </div>
    </div>
  )
}

export default Inputitems