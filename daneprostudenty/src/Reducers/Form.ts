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
    case "SET_PERSONAL_NATIVE_SURNAME":
      return deepUpdate(state)
        .at("personal")
        .at("native_surname")
        .set(action.native_surname)
    case "SET_PERSONAL_SURNAME":
      return deepUpdate(state)
        .at("personal")
        .at("surname")
        .set(action.surname)
    case "SET_PERSONAL_DEGREE":
      return deepUpdate(state)
        .at("personal")
        .at("degree")
        .set(action.degree)
    case "SET_PERSONAL_ID":
      return deepUpdate(state)
        .at("personal")
        .at("personal_id")
        .set(action.id)
    case "SET_PERSONAL_PHONE_NUMBER":
      return deepUpdate(state)
        .at("personal")
        .at("phone_number")
        .set(action.phone_number)
    case "SET_PERSONAL_EMAIL":
      return deepUpdate(state)
        .at("personal")
        .at("email")
        .set(action.email)
		default:
      return state
  }
}

export default form