import { bankDict } from "./Dictionaries"

export const convertNumberSizeToWidth = (size: number): string => {
  switch (size) {
		case 2:
			return 'two wide'
		case 3:
			return 'three wide'
		case 4:
			return 'four wide'
		case 5:
			return 'five wide'
		case 6:
			return 'six wide'
		case 7:
			return 'seven wide'
		case 8:
			return 'eight wide'
		default:
			return ''
	}
}

export const convertBankAccountProperties = (input: string): { number: string, code: string, name: string } => {
	const accountParts = input.split('/');

	const number = accountParts[0]
	const code = accountParts[1]
	const name = bankDict[code]

	return { number, code, name };

}
