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

/* !!! TODO - remove children */

export type ChildrenActions = AddChildren 

export type FamilyActions = SetFamilyMarried | SetFamilyChildless | SpouseActions | ChildrenActions


/* account actions */

export type SetAccountNumber = {
	readonly type: "SET_ACCOUNT_NUMBER"
	readonly number: string
}

export const setAccountNumber = (number: string): SetAccountNumber => ({
	type: "SET_ACCOUNT_NUMBER",
	number
})

export type SetAccountCode = {
	readonly type: "SET_ACCOUNT_CODE"
	readonly code: string
}

export const setAccountCode = (code: string): SetAccountCode => ({
	type: "SET_ACCOUNT_CODE",
	code
})

export type SetBankName = {
	readonly type: "SET_BANK_NAME"
	readonly name: string
}

export const setBankName = (name: string): SetBankName => ({
	type: "SET_BANK_NAME",
	name
})

export type AccountActions = SetAccountNumber | SetAccountCode | SetBankName


/* office actions */

export type SetOfficeRegion = {
	readonly type: "SET_OFFICE_REGION"
	readonly region: string
}

export const setOfficeRegion = (region: string): SetOfficeRegion => ({
	type: "SET_OFFICE_REGION",
	region
})

export type SetOfficeWorkplace = {
	readonly type: "SET_OFFICE_WORKPLACE"
	readonly workplace: string
}

export const setOfficeWorkplace = (workplace: string): SetOfficeWorkplace => ({
	type: "SET_OFFICE_WORKPLACE",
	workplace
})

export type OfficeActions = SetOfficeRegion | SetOfficeWorkplace


/* income actions */

export type SetIncomeTotal = {
	readonly type: "SET_INCOME_TOTAL"
	readonly total: string
}

export const setIncomeTotal = (total: string): SetIncomeTotal => ({
	type: "SET_INCOME_TOTAL",
	total
})

export type SetIncomeInsurance = {
	readonly type: "SET_INCOME_INSURANCE"
	readonly insurance: string
}

export const setIncomeInsurance = (insurance: string): SetIncomeInsurance => ({
	type: "SET_INCOME_INSURANCE",
	insurance
})

export type SetIncomeAdvances = {
	readonly type: "SET_INCOME_ADVANCES"
	readonly advances: string
}

export const setIncomeAdvances = (advances: string): SetIncomeAdvances => ({
	type: "SET_INCOME_ADVANCES",
	advances
})

export type SetIncomeTax = {
	readonly type: "SET_INCOME_TAX"
	readonly tax: string
}

export const setIncomeTax = (tax: string): SetIncomeTax => ({
	type: "SET_INCOME_TAX",
	tax
})

export type IncomeActions = SetIncomeTotal | SetIncomeInsurance | SetIncomeAdvances | SetIncomeTax


/* markdown actions */

export type SetMarkdownDisability = {
	readonly type: "SET_MARKDOWN_DISABILITY"
	readonly disability: string
}

export const setMarkdownDisability = (disability: string): SetMarkdownDisability => ({
	type: "SET_MARKDOWN_DISABILITY",
	disability
})

export type SetMarkdownExtendedDisability = {
	readonly type: "SET_MARKDOWN_EXTENDED_DISABILITY"
	readonly extended_disability: string
}

export const setMarkdownExtendedDisability = (extended_disability: string): SetMarkdownExtendedDisability => ({
	type: "SET_MARKDOWN_EXTENDED_DISABILITY",
	extended_disability
})

export type SetMarkdownBenefitCard = {
	readonly type: "SET_MARKDOWN_BENEFIT_CARD"
	readonly benefit_card: string
}

export const setMarkdownBenefitCard = (benefit_card: string): SetMarkdownBenefitCard => ({
	type: "SET_MARKDOWN_BENEFIT_CARD",
	benefit_card
})

export type SetMarkdownStudent = {
	readonly type: "SET_MARKDOWN_STUDENT"
	readonly student: string
}

export const setMarkdownStudent = (student: string): SetMarkdownStudent => ({
	type: "SET_MARKDOWN_STUDENT",
	student
})

export type SetMarkdownChildrenPlacement = {
	readonly type: "SET_MARKDOWN_CHILDREN_PLACEMENT"
	readonly children_placement: string
}

export const setMarkdownChildrenPlacement = (children_placement: string): SetMarkdownChildrenPlacement => ({
	type: "SET_MARKDOWN_CHILDREN_PLACEMENT",
	children_placement
})

export type SetMarkdownGifts = {
	readonly type: "SET_MARKDOWN_GIFTS"
	readonly gifts: string
}

export const setMarkdownGifts = (gifts: string): SetMarkdownGifts => ({
	type: "SET_MARKDOWN_GIFTS",
	gifts
})

export type SetMarkdownInterests = {
	readonly type: "SET_MARKDOWN_INTERESTS"
	readonly interests: string
}

export const setMarkdownInterests = (interests: string): SetMarkdownInterests => ({
	type: "SET_MARKDOWN_INTERESTS",
	interests
})

export type SetMarkdownMonthsInterests = {
	readonly type: "SET_MARKDOWN_MONTHS_INTERESTS"
	readonly months_interests: string
}

export const setMarkdownMonthsInterests = (months_interests: string): SetMarkdownMonthsInterests => ({
	type: "SET_MARKDOWN_MONTHS_INTERESTS",
	months_interests
})

export type SetMarkdownPensionInsurance = {
	readonly type: "SET_MARKDOWN_PENSION_INSURANCE"
	readonly pension_insurance: string
}

export const setMarkdownPensionInsurance = (pension_insurance: string): SetMarkdownPensionInsurance => ({
	type: "SET_MARKDOWN_PENSION_INSURANCE",
	pension_insurance
})

export type SetMarkdownPrivateInsurance = {
	readonly type: "SET_MARKDOWN_PRIVATE_INSURANCE"
	readonly private_insurance: string
}

export const setMarkdownPrivateInsurance = (private_insurance: string): SetMarkdownPrivateInsurance => ({
	type: "SET_MARKDOWN_PRIVATE_INSURANCE",
	private_insurance
})

export type SetMarkdownContributions = {
	readonly type: "SET_MARKDOWN_CONTRIBUTIONS"
	readonly contributions: string
}

export const setMarkdownContributions = (contributions: string): SetMarkdownContributions => ({
	type: "SET_MARKDOWN_CONTRIBUTIONS",
	contributions
})

export type SetMarkdownExamsPayment = {
	readonly type: "SET_MARKDOWN_EXAMS_PAYMENT"
	readonly exams_payment: string
}

export const setMarkdownExamsPayment = (exams_payment: string): SetMarkdownExamsPayment => ({
	type: "SET_MARKDOWN_EXAMS_PAYMENT",
	exams_payment
})

export type MarkdownActions = 
	SetMarkdownDisability | 
	SetMarkdownExtendedDisability |
	SetMarkdownBenefitCard |
	SetMarkdownStudent |
	SetMarkdownChildrenPlacement |
	SetMarkdownGifts |
	SetMarkdownInterests |
	SetMarkdownMonthsInterests |
	SetMarkdownPensionInsurance |
	SetMarkdownPrivateInsurance |
	SetMarkdownContributions |
	SetMarkdownExamsPayment


/* form actions */

export type FormActions = 
	SetDescription | 
	PersonalActions | 
	ResidenceActions | 
	FamilyActions | 
	AccountActions |
	OfficeActions |
	IncomeActions |
	MarkdownActions
