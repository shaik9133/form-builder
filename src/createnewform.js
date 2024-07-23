import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './components/ui/button';
import CreateForm from './createform';
import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from './components/ui/alert-dialog';

function Createnewform() {
  const [savedForms, setSavedForms] = useState([]);
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate(); // Use the useNavigate hook

  const handleSave = (name, description) => {
    if (name && description) {
      setSavedForms([...savedForms, { name, description }]);
    }
    setOpenMenu(false); // Close the form after saving
  };

  const handleFormClick = () => {
    navigate('/inputitems'); // Navigate to Inputitems page
  };

  return (
    <div>
      <AlertDialog open={openMenu} onOpenChange={setOpenMenu}>
        <AlertDialogTrigger asChild>
          <div className="flex flex-col items-center p-4 rounded-lg cursor-pointer hover:bg-gray-100 w-48">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mb-2 w-8 h-8 text-gray-600"
            >
              <path d="M15 4H5V20H19V8H15V4ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H16L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918ZM11 11V8H13V11H16V13H13V16H11V13H8V11H11Z"></path>
            </svg>
            <Button className="mt-2 text-sm">Create new form</Button>
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent className="border-0">
          {openMenu && <CreateForm onSave={handleSave} />}
        </AlertDialogContent>
      </AlertDialog>

      <div className="mt-4 flex flex-wrap gap-4">
        {savedForms.map((form, index) => (
          <div 
            key={index} 
            className="flex-none w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 bg-gray-100 rounded cursor-pointer"
            onClick={handleFormClick}
          >
            <h3 className="font-bold">{form.name}</h3>
            <p>{form.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Createnewform;
