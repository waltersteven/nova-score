import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Logo from '@/components/Logo';
import BottomNav from '@/components/BottomNav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'NextBank - Modern Banking',
	description: 'A sleek and user-friendly mobile banking application',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`${inter.className} min-h-screen bg-background`}>
				<header className='bg-white shadow-sm'>
					<div className='container mx-auto px-4 py-4'>
						<Logo />
					</div>
				</header>
				<main className='container mx-auto px-4 py-8 mb-16'>{children}</main>
				<BottomNav />
			</body>
		</html>
	);
}
