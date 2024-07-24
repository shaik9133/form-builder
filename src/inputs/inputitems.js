import React from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Check } from './checkbox';
import { Date } from './datefield';
import { NumberField } from './numberfield';
import { Selectfield } from './selectfield';
import { Textareafield } from './textareafield';
import { Textfield } from './textfield';

const ItemTypes = {
  FORM_ELEMENT: 'formElement',
};

const DraggableItem = ({ component: Component, type }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.FORM_ELEMENT,
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <Component />
    </div>
  );
};

const DroppableArea = ({ onDrop, droppedItems }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.FORM_ELEMENT,
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop} className={`w-full min-h-[100vh] bg-gray-100 rounded-lg p-4 space-y-2 ${isOver ? 'bg-green-100' : ''}`}>
      {isOver ? 'Release to drop' : 'Drag items here'}
      <div className='mt-4'>
        <h4>Dropped Items:</h4>
        <div className='grid grid-cols-1 gap-4'>
          {droppedItems.map((type, index) => {
            switch (type) {
              case 'Check':
                return <Check key={index} />;
              case 'Date':
                return <Date key={index} />;
              case 'NumberField':
                return <NumberField key={index} />;
              case 'Selectfield':
                return <Selectfield key={index} />;
              case 'Textareafield':
                return <Textareafield key={index} />;
              case 'Textfield':
                return <Textfield key={index} />;
              default:
                return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

const Inputitems = () => {
  const [droppedItems, setDroppedItems] = React.useState([]);

  const handleDrop = (item) => {
    setDroppedItems((prevItems) => [...prevItems, item.type]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-[100vh] md:w-[100%] mx-auto bg-white rounded-lg p-4 space-y-2 border-2">
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='order-2 md:order-1'>
            <h3>Drag and drop elements</h3>
            <h4>Form elements</h4>
            <div className='grid grid-cols-2 grid-rows-3 gap-y-1'>
              <DraggableItem component={Check} type="Check" />
              <DraggableItem component={Date} type="Date" />
              <DraggableItem component={NumberField} type="NumberField" />
              <DraggableItem component={Selectfield} type="Selectfield" />
              <DraggableItem component={Textareafield} type="Textareafield" />
              <DraggableItem component={Textfield} type="Textfield" />
            </div>
          </div>
          <DroppableArea onDrop={handleDrop} droppedItems={droppedItems} className='order-1 md:order-2'/>
        </div>
      </div>
    </DndProvider>
  );
};

export default Inputitems;
