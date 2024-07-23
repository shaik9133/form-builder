import * as React from 'react';

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

export default function CreateForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create form</CardTitle>
        <CardDescription>
          Create a new form to start collecting responses
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter form name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Description</Label>

              <Textarea placeholder="enter form description" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="w-screen bg-black text-white">save</Button>
      </CardFooter>
    </Card>
  );
}