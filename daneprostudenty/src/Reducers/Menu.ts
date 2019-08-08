import { Reducer } from "redux"
import initialState from "../Data/Data"
import { Menu } from "../State/State"
import { MenuActions } from "../Actions/MenuActions"
import { deepUpdate } from "immupdate"

const menu: Reducer<Menu, MenuActions> = (
  state: Menu = initialState.menu,
  action: MenuActions
): Menu => {
  switch (action.type) {
    case "SET_PAGE":
      return deepUpdate(state)
        .at("page")
        .set(action.page)
    default:
      return state
  }
}

export default menu