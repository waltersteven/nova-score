'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();
		// Here you would typically handle authentication
		console.log('Login attempted with:', username, password);
		router.push('/dashboard');
	};

	return (
		<div className='flex justify-center items-center min-h-[calc(100vh-100px)]'>
			<Card className='w-full max-w-md animate-in'>
				<CardHeader>
					<CardTitle className='text-2xl font-bold text-center'>
						Login to Your Account
					</CardTitle>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleLogin} className='space-y-4'>
						<div className='space-y-2'>
							<label htmlFor='username' className='text-sm font-medium'>
								Username
							</label>
							<Input
								id='username'
								type='text'
								placeholder='Enter your username'
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								required
							/>
						</div>
						<div className='space-y-2'>
							<label htmlFor='password' className='text-sm font-medium'>
								Password
							</label>
							<Input
								id='password'
								type='password'
								placeholder='Enter your password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
						<Button type='submit' className='w-full'>
							Login
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
