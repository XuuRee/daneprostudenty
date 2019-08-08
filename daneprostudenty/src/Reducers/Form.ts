import { Reducer } from "redux"
import initialState from "../Data/Data"
import { Form } from "../State/State"
import { FormActions } from "../Actions/FormActions"

const form: Reducer<Form, FormActions> = (
  state: Form = initialState.form,
  action: FormActions
): Form => {
  switch (action.type) {
    case "SET_LABEL":
			return { ...state, label: action.label }
		default:
      return state
  }
}

export default form