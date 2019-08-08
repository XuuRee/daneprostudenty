import State from "../State/State"
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

const formProps: Form = { 
	label: null,
	personal: personalProps,
	residence: residenceProps,
	family: familyProps,
}

const initialState: State = {
	menu: menuProps,
	form: formProps
}

export default initialState