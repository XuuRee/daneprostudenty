import State, { BankAccount, Income, Office, Markdown } from "../State/State"
import { Menu, Form, Personal, Residence, Family, Spouse } from "../State/State"

const menuProps: Menu = {
	page: "home",
}

const personalProps: Personal = {
	name: '',
	surname: '',
	native_surname: '',
	degree: '',
	personal_id: '',
	phone_number: '',
	email: '',
}

const residenceProps: Residence = {
	city: '',
	street: '',
	descriptive_number: '',
	orientation_number: '',
	zip_code: '',
}

const spouseProps: Spouse = {
	name: '',
	surname: '',
	degree: '',
	personal_id: '',
	months: 0,
	disability: false,
}

const familyProps: Family = {
	married: false,
	spouse: spouseProps,
	childless: true,
	children: [],
}

const accountProps: BankAccount = {
	number: '',
	code: '',
	name: ''
}

const officeProps: Office = {
	region: '',
	workplace: ''
}

const incomeProps: Income = {
	total: '',
	insurance: '',
	advances: '',
	tax: ''
}

const markdownProps: Markdown = {
	disability: '',
	extended_disability: '',
	benefit_card: '',
	student: '',
	children_placement: '',
	gifts: '',
	interests: '',
	months_interests: '',
	pension_insurance: '',
	private_insurance: '',
	contributions: '',
	exams_payment: '',
}

const formProps: Form = { 
	description: undefined,
	personal: personalProps,
	residence: residenceProps,
	family: familyProps,
	account: accountProps,
	office: officeProps,
	income: incomeProps,
	markdown: markdownProps,
}

const initialState: State = {
	menu: menuProps,
	form: formProps
}

export default initialState