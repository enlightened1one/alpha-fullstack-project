import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';

const LoginFormComponent: React.FC = () => {
    return (
        <>
            <Card className='w-full max-w-sm border-2 border-solid border-red-950 '>
                {/* Login form content goes here */}
                <CardHeader className='text-2xl' >
                    <CardTitle>Log In</CardTitle>
                    <CardDescription>Enter your email and password</CardDescription>
                </CardHeader>
                <CardContent className='grid gap-4 p-4' >
                    <div className="grid gap-2">
                        <Label htmlFor='email' >Email</Label>
                        <Input id='email' type='email' placeholder='Enter your email' />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor='password' >Password</Label>
                        <Input id='password' type='password' placeholder='Enter your password' />
                    </div>
                </CardContent>
                
            </Card>
        </>
    );
};

export default LoginFormComponent;