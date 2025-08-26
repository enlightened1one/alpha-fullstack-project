import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from './ui/dialog';
import LoginFormComponent from './LoginFormComponent';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Heading1 } from 'lucide-react';
import { Label } from './ui/label';
import axios from 'axios';
import { AuthProvider, Descope } from '@descope/react-sdk';



const CardComponent = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5173/users', formData);
      console.log( 'User created successfully:', response.data )
    }catch(err){
      console.error(`error creating user because: ${err} `)
    }
    
    finally{
      setLoading(false);
    }
  }



    return (
        <>
          <Dialog modal={false}  >
            <DialogTrigger>
              <Button className='' >
                Sign Up
              </Button>
            </DialogTrigger>
            
{/* -------------This is the DialogContent that will contain my `Sign up/create account headings` and the form------------ */}
            <DialogContent className='w-full h-full overflow-y-scroll  border-2 border-solid border-red-950 max-md:max-w-[425px] '>
              <DialogHeader>
              <h1 className='text-3xl font-bold' >Sign Up</h1>
            </DialogHeader>
              {/* <LoginFormComponent/> */}
              <form onSubmit={handleSubmit} className='py-2'>

              
              <div className='flex flex-col gap-4'>
              <div className='grid gap-4'>
              <Label htmlFor='name'>
                Name
              </Label>
                <Input onChange={handleChange} value={formData.name} type='text' id='name' name='name' placeholder='full name' required/>
              </div>
              <div className='grid gap-4'>
              <Label htmlFor='email'>
                Email
              </Label>
                <Input onChange={handleChange} value={formData.email} type='email' id='email' name='email' placeholder='email' required/>
              </div>
              <div className='grid gap-4'>
              <Label htmlFor='password'>
                Password
              </Label>
                <Input onChange={handleChange} value={formData.password} type='password' id='password' name='password' placeholder='password' required/>
              </div>




            
                <Button disabled={loading} type='submit'  variant={'secondary'} className='bg-[#1e3a8a] text-[#f7f7f7] hover:bg-[#1f409c] '>
                   {/* { {isSubmitting ? 'Submitting...' : 'Submit'} ? 'Submitting...' : 'Submit'} */}
                   {loading ? 'Submitting...' : 'Submit'}
                </Button>
              </div>
              {/* <AuthProvider  projectId="P30AuTnrbgGhImmVaVp7ITaivqB8">

	          <Descope
            children
	            	flowId="sign-up-or-in"
		            theme="light"
		            onSuccess={(e) => {
                console.log(e.detail.user?.name)
                console.log(e.detail.user?.email)
                console.log(e.detail.user?.phone)
                console.log(e.detail.user?.picture)
		            }}
		            onError={(err) => {
			          console.log("Error!", err)
		            }}
	              />
                </AuthProvider> */}

                {/* The code below includes your Project ID (P30AuTnrbgGhImmVaVp7ITaivqB8) */}

              </form> 
              
              </DialogContent>
            </Dialog>
        </>

    );



    // 661109890937-l74tvmbe8vqujpcf0phdd75rrmbjn32l.apps.googleusercontent.com
};

export default CardComponent; 