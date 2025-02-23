'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CreditCard, Settings, DollarSign, BarChart3 } from 'lucide-react';

const navItems = [
	{ label: 'Transactions', href: '/dashboard', icon: BarChart3 },
	{ label: 'Credit Cards', href: '/credit-cards', icon: CreditCard },
	{ label: 'Credit Line', href: '/credit-line', icon: DollarSign },
	{ label: 'Settings', href: '/settings', icon: Settings },
];

export default function BottomNav() {
	const pathname = usePathname();

	return (
		<nav className='fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200'>
			<div className='flex justify-around'>
				{navItems.map((item) => {
					const isActive = pathname === item.href;
					return (
						<Link
							key={item.href}
							href={item.href}
							className={`flex flex-col items-center p-2 ${
								isActive ? 'text-primary' : 'text-gray-500'
							}`}
						>
							<item.icon className='w-6 h-6' />
							<span className='text-xs mt-1'>{item.label}</span>
						</Link>
					);
				})}
			</div>
		</nav>
	);
}
