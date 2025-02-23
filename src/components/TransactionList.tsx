import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const transactions = [
	{ id: 1, description: 'Grocery Store', amount: -75.5, date: '2023-04-01' },
	{ id: 2, description: 'Salary Deposit', amount: 2500.0, date: '2023-03-31' },
	{ id: 3, description: 'Electric Bill', amount: -120.0, date: '2023-03-28' },
];

export default function TransactionList() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Recent Transactions</CardTitle>
			</CardHeader>
			<CardContent>
				<ul className='space-y-2'>
					{transactions.map((transaction) => (
						<li
							key={transaction.id}
							className='flex justify-between items-center p-2 hover:bg-muted rounded-md transition-colors'
						>
							<span>{transaction.description}</span>
							<span
								className={
									transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
								}
							>
								${Math.abs(transaction.amount).toFixed(2)}
							</span>
						</li>
					))}
				</ul>
			</CardContent>
		</Card>
	);
}
