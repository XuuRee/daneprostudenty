export type SetDescription = {
	readonly type: "SET_DESCRIPTION"
	readonly description: string | undefined
};

export const setDescription = (description: string | undefined): SetDescription => ({
	type: "SET_DESCRIPTION",
	description
});

/* personal actions */

export type SetPersonalName = {
	readonly type: "SET_PERSONAL_NAME"
	readonly name: string
};

export const setPersonalName = (name: string): SetPersonalName => ({
	type: "SET_PERSONAL_NAME",
	name
});

export type SetPersonalNativeSurname = {
	readonly type: "SET_PERSONAL_NATIVE_SURNAME"
	readonly native_surname: string
};

export const setPersonalNativeSurname = (native_surname: string): SetPersonalNativeSurname => ({
	type: "SET_PERSONAL_NATIVE_SURNAME",
	native_surname
});

export type SetPersonalSurname = {
	readonly type: "SET_PERSONAL_SURNAME"
	readonly surname: string
};

export const setPersonalSurname = (surname: string): SetPersonalSurname => ({
	type: "SET_PERSONAL_SURNAME",
	surname
});

export type SetPersonalDegree = {
	readonly type: "SET_PERSONAL_DEGREE"
	readonly degree: string
};

export const setPersonalDegree = (degree: string): SetPersonalDegree => ({
	type: "SET_PERSONAL_DEGREE",
	degree
});

export type SetPersonalId = {
	readonly type: "SET_PERSONAL_ID"
	readonly id: string
};

export const setPersonalId = (id: string): SetPersonalId => ({
	type: "SET_PERSONAL_ID",
	id
});

export type SetPersonalPhoneNumber = {
	readonly type: "SET_PERSONAL_PHONE_NUMBER"
	readonly phone_number: string
};

export const setPersonalPhoneNumber = (phone_number: string): SetPersonalPhoneNumber => ({
	type: "SET_PERSONAL_PHONE_NUMBER",
	phone_number
});

export type SetPersonalEmail = {
	readonly type: "SET_PERSONAL_EMAIL"
	readonly email: string
};

export const setPersonalEmail = (email: string): SetPersonalEmail => ({
	type: "SET_PERSONAL_EMAIL",
	email
});

export type PersonalActions = 
	SetPersonalName | 
	SetPersonalNativeSurname | 
	SetPersonalSurname | 
	SetPersonalDegree |
	SetPersonalId |
	SetPersonalPhoneNumber |
	SetPersonalEmail

/* form actions */

export type FormActions = SetDescription | PersonalActions