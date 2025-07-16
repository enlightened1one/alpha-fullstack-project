import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from './ui/button';
import { Form } from 'react-router-dom';
import { FormInput } from 'lucide-react';

const CardComponent: React.FC = () => {
    return (
        <>
        <AlertDialog>
  <AlertDialogTrigger>  <Button className="bg-[#023047]  hover:bg-[#011f3f] cursor-pointer">Open Alert</Button></AlertDialogTrigger>
  <AlertDialogContent className='bg-[#023047] text-white'>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel className='text-[red] cursor-pointer'>Cancel</AlertDialogCancel>
      <AlertDialogAction className='cursor-pointer ' >Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
        </>

    );
};

export default CardComponent;