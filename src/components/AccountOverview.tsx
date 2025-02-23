import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AccountOverview() {
	return (
		<Card className='bg-primary text-primary-foreground'>
			<CardHeader>
				<CardTitle>Account Balance</CardTitle>
			</CardHeader>
			<CardContent>
				<p className='text-3xl font-bold'>$5,234.56</p>
			</CardContent>
		</Card>
	);
}
