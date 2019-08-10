import { Children } from "../State/State";

export type SetDescription = {
	readonly type: "SET_DESCRIPTION"
	readonly description: string | undefined
}

export const setDescription = (description: string | undefined): SetDescription => ({
	type: "SET_DESCRIPTION",
	description
})


/* personal actions */

export type SetPersonalName = {
	readonly type: "SET_PERSONAL_NAME"
	readonly name: string
}

export const setPersonalName = (name: string): SetPersonalName => ({
	type: "SET_PERSONAL_NAME",
	name
})

export type SetPersonalNativeSurname = {
	readonly type: "SET_PERSONAL_NATIVE_SURNAME"
	readonly native_surname: string
}

export const setPersonalNativeSurname = (native_surname: string): SetPersonalNativeSurname => ({
	type: "SET_PERSONAL_NATIVE_SURNAME",
	native_surname
})

export type SetPersonalSurname = {
	readonly type: "SET_PERSONAL_SURNAME"
	readonly surname: string
}

export const setPersonalSurname = (surname: string): SetPersonalSurname => ({
	type: "SET_PERSONAL_SURNAME",
	surname
})

export type SetPersonalDegree = {
	readonly type: "SET_PERSONAL_DEGREE"
	readonly degree: string
}

export const setPersonalDegree = (degree: string): SetPersonalDegree => ({
	type: "SET_PERSONAL_DEGREE",
	degree
})

export type SetPersonalId = {
	readonly type: "SET_PERSONAL_ID"
	readonly id: string
}

export const setPersonalId = (id: string): SetPersonalId => ({
	type: "SET_PERSONAL_ID",
	id
})

export type SetPersonalPhoneNumber = {
	readonly type: "SET_PERSONAL_PHONE_NUMBER"
	readonly phone_number: string
}

export const setPersonalPhoneNumber = (phone_number: string): SetPersonalPhoneNumber => ({
	type: "SET_PERSONAL_PHONE_NUMBER",
	phone_number
})

export type SetPersonalEmail = {
	readonly type: "SET_PERSONAL_EMAIL"
	readonly email: string
}

export const setPersonalEmail = (email: string): SetPersonalEmail => ({
	type: "SET_PERSONAL_EMAIL",
	email
})

export type PersonalActions = 
	SetPersonalName | 
	SetPersonalNativeSurname | 
	SetPersonalSurname | 
	SetPersonalDegree |
	SetPersonalId |
	SetPersonalPhoneNumber |
	SetPersonalEmail


/* residence actions */

export type SetResidenceCity = {
	readonly type: "SET_RESIDENCE_CITY"
	readonly city: string
}

export const setResidenceCity = (city: string): SetResidenceCity => ({
	type: "SET_RESIDENCE_CITY",
	city
})

export type SetResidenceStreet = {
	readonly type: "SET_RESIDENCE_STREET"
	readonly street: string
}

export const setResidenceStreet = (street: string): SetResidenceStreet => ({
	type: "SET_RESIDENCE_STREET",
	street
})

export type SetResidenceDescriptiveNumber = {
	readonly type: "SET_RESIDENCE_DESCRIPTIVE_NUMBER"
	readonly descriptive_number: string
}

export const setResidenceDescriptiveNumber = (descriptive_number: string): SetResidenceDescriptiveNumber => ({
	type: "SET_RESIDENCE_DESCRIPTIVE_NUMBER",
	descriptive_number
})

export type SetResidenceOrientationNumber = {
	readonly type: "SET_RESIDENCE_ORIENTATION_NUMBER"
	readonly orientation_number: string
}

export const setResidenceOrientationNumber = (orientation_number: string): SetResidenceOrientationNumber => ({
	type: "SET_RESIDENCE_ORIENTATION_NUMBER",
	orientation_number
})

export type SetResidenceZipCode = {
	readonly type: "SET_RESIDENCE_ZIP_CODE"
	readonly zip_code: string
}

export const setResidenceZipCode = (zip_code: string): SetResidenceZipCode => ({
	type: "SET_RESIDENCE_ZIP_CODE",
	zip_code
})

export type ResidenceActions = 
	SetResidenceCity | 
	SetResidenceStreet | 
	SetResidenceDescriptiveNumber |
	SetResidenceOrientationNumber |
	SetResidenceZipCode


/* family */

export type SetFamilyMarried = {
	readonly type: "SET_FAMILY_MARRIED"
}

export const setFamilyMarried = (): SetFamilyMarried => ({
	type: "SET_FAMILY_MARRIED",
})

export type SetFamilyChildless = {
	readonly type: "SET_FAMILY_CHILDLESS"
}

export const setFamilyChildless = (): SetFamilyChildless => ({
	type: "SET_FAMILY_CHILDLESS",
})

/* family - spouse */


export type SetSpouseName = {
	readonly type: "SET_SPOUSE_NAME"
	readonly name: string
}

export const setSpouseName = (name: string): SetSpouseName => ({
	type: "SET_SPOUSE_NAME",
	name
})

export type SetSpouseSurname = {
	readonly type: "SET_SPOUSE_SURNAME"
	readonly surname: string
}

export const setSpouseSurname = (surname: string): SetSpouseSurname => ({
	type: "SET_SPOUSE_SURNAME",
	surname
})

export type SetSpouseDegree = {
	readonly type: "SET_SPOUSE_DEGREE"
	readonly degree: string
}

export const setSpouseDegree = (degree: string): SetSpouseDegree => ({
	type: "SET_SPOUSE_DEGREE",
	degree
})

export type SetSpouseId = {
	readonly type: "SET_SPOUSE_ID"
	readonly id: string
}

export const setSpouseId = (id: string): SetSpouseId => ({
	type: "SET_SPOUSE_ID",
	id
})

export type SetSpouseMonths = {
	readonly type: "SET_SPOUSE_MONTHS"
	readonly months: number
}

export const setSpouseMonths = (months: number): SetSpouseMonths => ({
	type: "SET_SPOUSE_MONTHS",
	months
})

export type SetSpouseDisability = {
	readonly type: "SET_SPOUSE_DISABILITY"
}

export const setSpouseDisability = (): SetSpouseDisability => ({
	type: "SET_SPOUSE_DISABILITY"
})

export type SpouseActions = 
	SetSpouseName | 
	SetSpouseSurname | 
	SetSpouseDegree | 
	SetSpouseId | 
	SetSpouseMonths |
	SetSpouseDisability


/* family - children */

export type AddChildren = {
	readonly type: "ADD_CHILDREN"
	readonly child: Children
}

export const addChildren = (child: Children): AddChildren => ({
	type: "ADD_CHILDREN",
	child
})

export type ChildrenActions = AddChildren 

export type FamilyActions = SetFamilyMarried | SetFamilyChildless | SpouseActions | ChildrenActions


/* form actions */

export type FormActions = 
	SetDescription | 
	PersonalActions | 
	ResidenceActions | 
	FamilyActions