import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { ChartBar } from 'lucide-react';
import { ChartContainer } from './ui/chart';

const LoginFormComponent: React.FC = () => {
    return (
        <>
            <Card className='w-full max-w-sm border-2 border-solid border-red-950 h-[120vh]   '>
                {/* Login form content goes here */}
                <CardHeader className='text-2xl' >
                    <CardTitle>Log In</CardTitle>
                    <CardDescription>Enter your email and password</CardDescription>
                </CardHeader>
                <CardContent className='grid gap-4 p-4' >
                    <div className="grid gap-2">
                        <Label htmlFor='email' >Email</Label>
                        <Input id='email' type='email' placeholder='Enter your email' required />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor='password' >Password</Label>
                        <Input id='password' type='password' placeholder='Enter your password' required />
                    </div>
                </CardContent>
                <CardFooter>
                    <button className='w-full bg-[#023047] hover:bg-[#011f3f] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
                        Log In
                    </button>
                </CardFooter>
            </Card>
            {/* 
        <ChartContainer>
              <BarChart accessibilityLayer data={chartData}>
    <CartesianGrid vertical={false} />
    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
  </BarChart>
</ChartContainer> */}





        </>
    );
};

export default LoginFormComponent;