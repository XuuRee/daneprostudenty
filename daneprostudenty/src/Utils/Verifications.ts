export const verifyForm = (...inputs: any): 'success' | 'failure' => {
	// verify selected inputs
	for (let index = 0; index < inputs.length; index++) {
		if (typeof inputs[index] === 'string' && inputs[index] === '') {
			return 'failure'
		}
	}

	return 'success'
}

export const bankAccountVerification = (input: string): boolean => {
	const accountParts = input.split('/');

	// bank account has at least two parts
	if (accountParts.length !== 2) {
		return false
	}

	// checking for the first part - number
	const numberStr = accountParts[0]

	for (let index = 0; index < numberStr.length; index++) {
		const singleNum  = Number(numberStr[index])

		if (isNaN(singleNum) && numberStr[index] !== '-') {
			return false
		}
	}

	// checking for the second part - code
	const code = accountParts[1]

	if (code.length !== 4) {
		return false
	}

	return true
}