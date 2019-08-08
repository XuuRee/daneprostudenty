export type SetLabel = {
	readonly type: "SET_LABEL"
	readonly label: string
};

export const setLabel = (label: string): SetLabel => ({
	type: "SET_LABEL",
	label
});

export type FormActions = SetLabel