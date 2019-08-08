export type SetDescription = {
	readonly type: "SET_DESCRIPTION"
	readonly description: string
};

export const setDescription = (description: string): SetDescription => ({
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

export type PersonalActions = SetPersonalName

/* form actions */

export type FormActions = SetDescription | PersonalActions