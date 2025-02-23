import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
	return (
		<div className='flex flex-col items-center justify-center min-h-[calc(100vh-100px)]'>
			<h1 className='text-center text-4xl font-bold mb-8 text-primary animate-in'>
				Welcome to NovaScore
			</h1>
			<div
				className='text-lg mb-8 text-center max-w-md animate-in'
				style={{ animationDelay: '0.1s' }}
			>
				Experience modern banking at your fingertips.{' '}
				<div className='pt-4'>
					AI-driven credit-building platform for people that what to increase their credit
					history by using behavioral patterns.
				</div>
			</div>
			<Link href='/login'>
				<Button className='animate-in' style={{ animationDelay: '0.2s' }}>
					Login
				</Button>
			</Link>
		</div>
	);
}
