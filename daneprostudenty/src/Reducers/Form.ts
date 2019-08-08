import { Reducer } from "redux"
import initialState from "../Data/Data"
import { Form } from "../State/State"
import { FormActions } from "../Actions/FormActions"
import { deepUpdate } from "immupdate"

const form: Reducer<Form, FormActions> = (
  state: Form = initialState.form,
  action: FormActions
): Form => {
  switch (action.type) {
    case "SET_DESCRIPTION":
      return deepUpdate(state)
        .at("description")
        .set(action.description)
    case "SET_PERSONAL_NAME":
      return deepUpdate(state)
        .at("personal")
        .at("name")
        .set(action.name)
		default:
      return state
  }
}

export default form