import { Reducer } from "redux"
import initialState from "../Data/Data"
import { Menu } from "../State/State"
import { MenuActions } from "../Actions/MenuActions"

const menu: Reducer<Menu, MenuActions> = (
  state: Menu = initialState.menu,
  action: MenuActions
): Menu => {
  switch (action.type) {
    case "SET_PAGE":
			return { ...state, page: action.page }
    default:
      return state
  }
}

export default menu