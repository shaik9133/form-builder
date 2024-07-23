import * as React from 'react';
import { useRef, useEffect, useState } from 'react';

import { Button } from './components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './components/ui/card';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Textarea } from './components/ui/textarea';

export default function CreateForm({ onSave }) {
  const cardRef = useRef(null);
  const [formName, setFormName] = useState('');
  const [formDescription, setFormDescription] = useState('');

  // Handle clicks outside the card to close it
  useEffect(() => {
    function handleClickOutside(event) {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        onSave(); // Trigger closing the dialog
      }
    }

    // Add event listener on mount
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Remove event listener on unmount
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onSave]);

  const handleSave = () => {
    onSave(formName, formDescription);
    setFormName('');
    setFormDescription('');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <Card ref={cardRef} className="bg-white shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle>Create form</CardTitle>
          <CardDescription>
            Create a new form to start collecting responses
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Enter form name"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Enter form description"
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-black text-white" onClick={handleSave}>
            Save
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
