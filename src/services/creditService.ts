export async function assessCreditworthiness() {
	const apiUrl = 'https://novanightshade.pythonanywhere.com/predict';

	const userData = {
		// num of streaming subscriptions
		subscriptions: 10,
		// num of trips
		travel: 3,
		// social media positive engagement
		social_media: 5000,
		// current credit history
		credit_history: 600,
		age: 30,
		employment: 'Self-employed',
		loans: 1,
		transactions: 7000,
	};

	try {
		const response = await fetch(apiUrl, {
			method: 'POST',
			mode: 'cors', // Explicitly enable CORS mode
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userData),
		});

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(
				`Network response was not ok: ${response.status} ${response.statusText}. Details: ${errorText}`
			);
		}

		const result = await response.json();
		console.log('API Response:', result);

		await new Promise((resolve) => setTimeout(resolve, 3000));

		return {
			approved: true,
			newCreditLimit: 10000,
			predicted_score: result.predicted_score,
			improvements: result.suggestions,
			// featureImportance: result.feature_importance,
		};
	} catch (error) {
		console.error('Error in assessCreditworthiness:', error);
		throw error;
	}
}
