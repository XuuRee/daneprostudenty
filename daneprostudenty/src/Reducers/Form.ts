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

    /* family - children */
    case "ADD_CHILDREN":
      return deepUpdate(state)
        .at("family")
        .at("children")
        .set(state.family.children.concat(action.child));
        
    /* bank account */
    case "SET_ACCOUNT_NUMBER":
      return deepUpdate(state)
        .at("account")
        .at("number")
        .set(action.number)
    case "SET_ACCOUNT_CODE":
      return deepUpdate(state)
        .at("account")
        .at("code")
        .set(action.code)
    case "SET_BANK_NAME":
      return deepUpdate(state)
        .at("account")
        .at("name")
        .set(action.name)

    /* tax office */
    case "SET_OFFICE_REGION":
      return deepUpdate(state)
        .at("office")
        .at("region")
        .set(action.region)
    case "SET_OFFICE_WORKPLACE":
      return deepUpdate(state)
        .at("office")
        .at("workplace")
        .set(action.workplace)

    /* income */
    case "SET_INCOME_TOTAL":
      return deepUpdate(state)
        .at("income")
        .at("total")
        .set(action.total)
    case "SET_INCOME_INSURANCE":
      return deepUpdate(state)
        .at("income")
        .at("insurance")
        .set(action.insurance)
    case "SET_INCOME_ADVANCES":
      return deepUpdate(state)
        .at("income")
        .at("advances")
        .set(action.advances)
    case "SET_INCOME_TAX":
      return deepUpdate(state)
        .at("income")
        .at("tax")
        .set(action.tax)

     /* markdown */
     case "SET_MARKDOWN_DISABILITY":
      return deepUpdate(state)
        .at("markdown")
        .at("disability")
        .set(action.disability)
    case "SET_MARKDOWN_EXTENDED_DISABILITY":
      return deepUpdate(state)
        .at("markdown")
        .at("extended_disability")
        .set(action.extended_disability)
    case "SET_MARKDOWN_BENEFIT_CARD":
      return deepUpdate(state)
        .at("markdown")
        .at("benefit_card")
        .set(action.benefit_card)
    case "SET_MARKDOWN_STUDENT":
      return deepUpdate(state)
        .at("markdown")
        .at("student")
        .set(action.student)
    case "SET_MARKDOWN_CHILDREN_PLACEMENT":
      return deepUpdate(state)
        .at("markdown")
        .at("children_placement")
        .set(action.children_placement)
    case "SET_MARKDOWN_GIFTS":
      return deepUpdate(state)
        .at("markdown")
        .at("gifts")
        .set(action.gifts)
    case "SET_MARKDOWN_INTERESTS":
      return deepUpdate(state)
        .at("markdown")
        .at("interests")
        .set(action.interests)
    case "SET_MARKDOWN_MONTHS_INTERESTS":
      return deepUpdate(state)
        .at("markdown")
        .at("months_interests")
        .set(action.months_interests)
    case "SET_MARKDOWN_PENSION_INSURANCE":
      return deepUpdate(state)
        .at("markdown")
        .at("pension_insurance")
        .set(action.pension_insurance)
    case "SET_MARKDOWN_PRIVATE_INSURANCE":
      return deepUpdate(state)
        .at("markdown")
        .at("private_insurance")
        .set(action.private_insurance)
    case "SET_MARKDOWN_CONTRIBUTIONS":
      return deepUpdate(state)
        .at("markdown")
        .at("contributions")
        .set(action.contributions)
    case "SET_MARKDOWN_EXAMS_PAYMENT":
      return deepUpdate(state)
        .at("markdown")
        .at("exams_payment")
        .set(action.exams_payment)
    
		default:
      return state
  }
}

export default form