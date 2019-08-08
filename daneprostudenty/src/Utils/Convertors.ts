export const convertNumberSizeToWidth = (size: number): string => {
  switch (size) {
		case 2:
			return 'two wide'
		case 4:
			return 'four wide'
		case 6:
			return 'six wide'
		default:
			return ''
	}
};