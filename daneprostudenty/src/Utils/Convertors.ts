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
		default:
			return ''
	}
};