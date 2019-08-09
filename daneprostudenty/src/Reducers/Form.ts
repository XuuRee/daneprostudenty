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
    /* description */
    case "SET_DESCRIPTION":
      return deepUpdate(state)
        .at("description")
        .set(action.description)

    /* personal */
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
    
    /* residence */
    case "SET_RESIDENCE_CITY":
      return deepUpdate(state)
        .at("residence")
        .at("city")
        .set(action.city)
    case "SET_RESIDENCE_STREET":
      return deepUpdate(state)
        .at("residence")
        .at("street")
        .set(action.street)
    case "SET_RESIDENCE_DESCRIPTIVE_NUMBER":
      return deepUpdate(state)
        .at("residence")
        .at("descriptive_number")
        .set(action.descriptive_number)
    case "SET_RESIDENCE_ORIENTATION_NUMBER":
      return deepUpdate(state)
        .at("residence")
        .at("orientation_number")
        .set(action.orientation_number)
    case "SET_RESIDENCE_ZIP_CODE":
      return deepUpdate(state)
        .at("residence")
        .at("zip_code")
        .set(action.zip_code)

    /* family */
    case "SET_FAMILY_MARRIED":
      return deepUpdate(state)
        .at("family")
        .at("married")
        .modify(married => !married)
    case "SET_FAMILY_CHILDLESS":
      return deepUpdate(state)
        .at("family")
        .at("childless")
        .modify(childless => !childless)

    /* family - spouse */
    case "SET_SPOUSE_NAME":
      return deepUpdate(state)
        .at("family")
        .at("spouse")
        .at("name")
        .set(action.name)
    case "SET_SPOUSE_SURNAME":
      return deepUpdate(state)
        .at("family")
        .at("spouse")
        .at("surname")
        .set(action.surname)
    case "SET_SPOUSE_DEGREE":
      return deepUpdate(state)
        .at("family")
        .at("spouse")
        .at("degree")
        .set(action.degree)
    case "SET_SPOUSE_ID":
      return deepUpdate(state)
        .at("family")
        .at("spouse")
        .at("personal_id")
        .set(action.id)
    case "SET_SPOUSE_MONTHS":
      return deepUpdate(state)
        .at("family")
        .at("spouse")
        .at("months")
        .set(action.months)
    case "SET_SPOUSE_DISABILITY":
      return deepUpdate(state)
        .at("family")
        .at("spouse")
        .at("disability")
        .modify(disability => !disability)

		default:
      return state
  }
}

export default form