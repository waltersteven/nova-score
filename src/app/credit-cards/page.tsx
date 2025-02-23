import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const creditCards = [
	{
		id: 1,
		name: 'Platinum Rewards',
		limit: 10000,
		balance: 2500,
		image: '/images/platinum-card.jpeg',
	},
	{
		id: 2,
		name: 'Cash Back Mastercard',
		limit: 5000,
		balance: 4000,
		image: '/images/black-card.jpg',
	},
	{ id: 3, name: 'Travel Visa', limit: 7500, balance: 3000, image: '/images/gold-card.jpg' },
];

export default function CreditCards() {
	return (
		<div className='space-y-6 animate-in'>
			<h1 className='text-2xl font-bold'>Your Credit Cards</h1>
			{creditCards.map((card) => {
				const usagePercentage = (card.balance / card.limit) * 100;
				const isHighUsage = usagePercentage > 70;

				return (
					<Card key={card.id} className='overflow-hidden'>
						<div className='relative h-48 w-full'>
							<Image
								src={card.image || '/placeholder.svg'}
								alt={card.name}
								layout='fill'
								objectFit='cover'
								className='rounded-t-lg'
							/>
						</div>
						<CardContent className='space-y-4 pt-4'>
							<h3 className='text-xl font-semibold'>{card.name}</h3>
							<div className='flex justify-between items-center'>
								<p>
									Credit Limit:{' '}
									<span className='font-semibold'>
										${card.limit.toLocaleString()}
									</span>
								</p>
								<p>
									Balance:{' '}
									<span className='font-semibold'>
										${card.balance.toLocaleString()}
									</span>
								</p>
							</div>
							<div className='relative pt-1'>
								<div className='flex mb-2 items-center justify-between'>
									<div>
										<span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary bg-primary-foreground'>
											Credit Used
										</span>
									</div>
									<div className='text-right'>
										<span
											className={`text-xs font-semibold inline-block ${
												isHighUsage ? 'text-red-600' : 'text-primary'
											}`}
										>
											{Math.round(usagePercentage)}%
										</span>
									</div>
								</div>
								<div className='overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary-foreground'>
									<div
										style={{ width: `${usagePercentage}%` }}
										className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
											isHighUsage ? 'bg-red-600' : 'bg-primary'
										}`}
									></div>
								</div>
							</div>
							<Link href={{ pathname: '/credit-line', query: { cardId: card.id } }}>
								<Button className='w-full'>
									Request Credit Increase <ArrowRight className='ml-2 h-4 w-4' />
								</Button>
							</Link>
						</CardContent>
					</Card>
				);
			})}
		</div>
	);
}
