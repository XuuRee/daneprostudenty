export type SetPage = {
	readonly type: "SET_PAGE"
	readonly page: string
};

export const setPage = (page: string): SetPage => ({
	type: "SET_PAGE",
	page
});

export type MenuActions = SetPage