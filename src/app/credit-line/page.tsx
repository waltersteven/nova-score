'use client';

import type React from 'react';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Share2, Plane, PlayCircle, History, TrendingUp } from 'lucide-react';

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
		image: '/images/red-card.jpeg',
	},
	{ id: 3, name: 'Travel Visa', limit: 7500, balance: 3000, image: '/images/blue-card.jpeg' },
];

export default function CreditLine() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const cardId = searchParams.get('cardId');
	const [selectedCard, setSelectedCard] = useState(creditCards[0]);

	const [criteria, setCriteria] = useState({
		socialMedia: false,
		travelHistory: false,
		subscriptions: false,
		creditHistory: true,
	});

	useEffect(() => {
		if (cardId) {
			const card = creditCards.find((c) => c.id === Number.parseInt(cardId));
			if (card) setSelectedCard(card);
		}
	}, [cardId]);

	const handleSwitchChange = (criterionName: keyof typeof criteria) => {
		setCriteria((prev) => ({ ...prev, [criterionName]: !prev[criterionName] }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		router.push('/assess-creditworthiness');
	};

	return (
		<div className='space-y-6 animate-in min-h-[calc(100vh-140px)] flex flex-col justify-center'>
			<h1 className='text-2xl font-bold text-center'>Request Credit Line Increase</h1>
			<Card className='max-w-2xl mx-auto'>
				<CardHeader className='relative h-48 p-0'>
					<div
						className='absolute inset-0 bg-cover bg-center rounded-t-lg'
						style={{ backgroundImage: `url(${selectedCard.image})` }}
					/>
					<div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-t-lg'>
						<CardTitle className='text-white text-3xl font-bold'>
							{selectedCard.name}
						</CardTitle>
					</div>
				</CardHeader>
				<CardContent className='space-y-6 pt-6'>
					<div className='grid grid-cols-2 gap-4 text-sm'>
						<div>
							<p className='text-gray-500'>Current Credit Limit</p>
							<p className='text-2xl font-bold'>
								${selectedCard.limit.toLocaleString()}
							</p>
						</div>
						<div>
							<p className='text-gray-500'>Current Balance</p>
							<p className='text-2xl font-bold'>
								${selectedCard.balance.toLocaleString()}
							</p>
						</div>
						<div>
							<p className='text-gray-500'>Available Credit</p>
							<p className='text-2xl font-bold'>
								${(selectedCard.limit - selectedCard.balance).toLocaleString()}
							</p>
						</div>
						<div>
							<p className='text-gray-500'>Credit Utilization</p>
							<p className='text-2xl font-bold'>
								{Math.round((selectedCard.balance / selectedCard.limit) * 100)}%
							</p>
						</div>
					</div>
					<form onSubmit={handleSubmit} className='space-y-4'>
						<div className='text-lg font-semibold mb-2 flex items-center'>
							<TrendingUp className='mr-2' />
							Select Criteria to Improve Your Credit Line
						</div>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
							<div className='flex items-center justify-between'>
								<Label htmlFor='socialMedia' className='flex items-center'>
									<Share2 className='mr-2' />
									Share social media accounts
								</Label>
								<Switch
									id='socialMedia'
									checked={criteria.socialMedia}
									onCheckedChange={() => handleSwitchChange('socialMedia')}
								/>
							</div>
							<div className='flex items-center justify-between'>
								<Label htmlFor='travelHistory' className='flex items-center'>
									<Plane className='mr-2' />
									Travel history
								</Label>
								<Switch
									id='travelHistory'
									checked={criteria.travelHistory}
									onCheckedChange={() => handleSwitchChange('travelHistory')}
								/>
							</div>
							<div className='flex items-center justify-between'>
								<Label htmlFor='subscriptions' className='flex items-center'>
									<PlayCircle className='mr-2' />
									Subscription accounts
								</Label>
								<Switch
									id='subscriptions'
									checked={criteria.subscriptions}
									onCheckedChange={() => handleSwitchChange('subscriptions')}
								/>
							</div>
							<div className='flex items-center justify-between'>
								<Label htmlFor='creditHistory' className='flex items-center'>
									<History className='mr-2' />
									Credit history
								</Label>
								<Switch
									id='creditHistory'
									checked={criteria.creditHistory}
									onCheckedChange={() => handleSwitchChange('creditHistory')}
								/>
							</div>
						</div>
						<Button type='submit' className='w-full'>
							Request Increase
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
