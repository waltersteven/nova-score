import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Settings() {
	return (
		<div className='space-y-6 animate-in'>
			<h1 className='text-2xl font-bold'>Settings</h1>
			<Card>
				<CardHeader>
					<CardTitle>Preferences</CardTitle>
				</CardHeader>
				<CardContent className='space-y-6'>
					<div className='flex items-center justify-between'>
						<Label htmlFor='notifications'>Push Notifications</Label>
						<Switch id='notifications' />
					</div>
					<div className='flex items-center justify-between'>
						<Label htmlFor='darkMode'>Dark Mode</Label>
						<Switch id='darkMode' />
					</div>
					<Button variant='outline' className='w-full'>
						Change Password
					</Button>
					<Button variant='destructive' className='w-full'>
						Logout
					</Button>
				</CardContent>
			</Card>
		</div>
	);
}
