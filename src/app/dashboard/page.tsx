import AccountOverview from '@/components/AccountOverview';
import TransactionList from '@/components/TransactionList';
// import { Button } from '@/components/ui/button';
// import Link from 'next/link';

export default function Dashboard() {
	return (
		<div className='space-y-6 animate-in'>
			<h1 className='text-2xl font-bold'>Welcome back, Walter!</h1>
			<AccountOverview />
			<TransactionList />
		</div>
	);
}

// export default function Dashboard() {
// 	return (
// 		<div className='space-y-6 animate-in'>
// 			<h1 className='text-2xl font-bold'>Welcome back, User!</h1>
// 			<AccountOverview />
// 			<TransactionList />
// 			<div className='flex space-x-4'>
// 				<Link href='/transfer'>
// 					<Button>Transfer Money</Button>
// 				</Link>
// 				<Link href='/settings'>
// 					<Button variant='outline'>Settings</Button>
// 				</Link>
// 			</div>
// 		</div>
// 	);
// }
