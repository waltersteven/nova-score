'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, CheckCircle, AlertTriangle } from 'lucide-react';
import { assessCreditworthiness } from '@/services/creditService';

export default function AssessCreditworthiness() {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(true);
	const [assessmentResult, setAssessmentResult] = useState<{
		approved: boolean;
		newCreditLimit: number;
		improvements: string[];
	} | null>(null);

	useEffect(() => {
		const fetchAssessment = async () => {
			try {
				const result = await assessCreditworthiness();
				setAssessmentResult(result);
				setIsLoading(false);
			} catch (error) {
				console.error('Error assessing creditworthiness:', error);
				setIsLoading(false);
			}
		};

		fetchAssessment();
	}, []);

	return (
		<div className='space-y-6 animate-in min-h-[calc(100vh-140px)] flex flex-col justify-center items-center'>
			<Card className='w-full max-w-2xl'>
				<CardHeader>
					<CardTitle className='text-center text-2xl'>
						{isLoading ? 'Assessing Creditworthiness' : 'Credit Assessment Complete'}
					</CardTitle>
				</CardHeader>
				<CardContent className='space-y-4'>
					{isLoading ? (
						<div className='flex flex-col items-center space-y-4 py-8'>
							<Loader2 className='h-12 w-12 animate-spin text-primary' />
							<p className='text-lg'>Please wait while we assess your credit...</p>
						</div>
					) : assessmentResult ? (
						<div className='space-y-6'>
							{assessmentResult.approved ? (
								<>
									<div className='flex items-center justify-center space-x-2 text-green-600'>
										<CheckCircle className='h-8 w-8' />
										<p className='text-xl font-semibold'>
											Credit Line Increase Approved
										</p>
									</div>
									<div className='bg-primary/10 text-primary p-6 rounded-lg'>
										<p className='text-xl font-semibold mb-2'>
											New Credit Limit
										</p>
										<p className='text-4xl font-bold'>
											${assessmentResult.newCreditLimit.toLocaleString()}
										</p>
									</div>
								</>
							) : (
								<div className='flex items-center justify-center space-x-2 text-yellow-600'>
									<AlertTriangle className='h-8 w-8' />
									<p className='text-xl font-semibold'>
										Credit Line Increase Not Approved
									</p>
								</div>
							)}
							<div>
								<p className='text-lg font-semibold mb-2'>
									Improve your credit profile:
								</p>
								<ul className='list-disc list-inside space-y-1'>
									{assessmentResult.improvements.map((improvement, index) => (
										<li key={index}>{improvement}</li>
									))}
								</ul>
							</div>
							<Button onClick={() => router.push('/credit-cards')} className='w-full'>
								Return to Credit Cards
							</Button>
						</div>
					) : (
						<p className='text-center text-red-600'>
							An error occurred during the assessment. Please try again later.
						</p>
					)}
				</CardContent>
			</Card>
		</div>
	);
}
