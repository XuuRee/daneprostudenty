import React from 'react'
import { Office } from '../../State/State'
import { connect, MapDispatchToProps } from 'react-redux'
import { setOfficeRegion, setOfficeWorkplace } from '../../Actions/FormActions'
import { 
	regionDict, 
	jihoceskyKrajDict, 
	emptyDict, 
	hlavniMestoPrahaDict, 
	stredoceskyKrajDict, 
	Dictionary,
	plzenskyKrajDict,
	karlovarskyKrajDict,
	usteckyKrajDict,
	libereckyKrajDict,
	kralovehradeckyKrajDict,
	pardubickyKrajDict,
	krajVyoscinaDict,
	jihomoravskyKrajDict,
	olomouckyKrajDict,
	moravskoslezskyKrajDict,
	zlinskyKrajDict
} from '../../Utils/Dictionaries';


/* helper functions for office form */

const getWorkplaces = (region_code: string) => {
	switch (region_code) {
		case '2000':
			return hlavniMestoPrahaDict
		case '2100':
			return stredoceskyKrajDict
		case '2200':
			return jihoceskyKrajDict
		case '2300':
			return plzenskyKrajDict
		case '2400':
			return karlovarskyKrajDict
		case '2500':
			return usteckyKrajDict
		case '2600':
			return libereckyKrajDict
		case '2700':
			return kralovehradeckyKrajDict
		case '2800':
			return pardubickyKrajDict
		case '2900':
			return krajVyoscinaDict
		case '3000':
			return jihomoravskyKrajDict
		case '3100':
			return olomouckyKrajDict
		case '3200':
			return moravskoslezskyKrajDict
		case '3300':
			return zlinskyKrajDict
		case '':
			return emptyDict
		default:
			console.error("ERROR_02 [switch in OfficeForm.tsx is not consistent]")
			return emptyDict
	}	
}

const getNameByCode = (dict: Dictionary, code: string) => {
	let reversed: Dictionary = {}

	// reverse values and ids and save result to the new dictionary
	Object.entries(dict).map(([id, value]) => reversed[value] = id)

	// return empty string if code is undefined
	if (reversed[code] === undefined) {
		return ''
	}

	return reversed[code]
}


/* office form component */

type OfficeProps = { 
  description: string | undefined 
} & Office

type DispatchOfficeProps = {
	onRegionChange: (region: string) => void
	onWorkplaceChange: (workplace: string) => void
}

const OfficeForm: React.SFC<OfficeProps & DispatchOfficeProps> = ({ 
	description, 
	region_code, 
	workplace_code, 
	onRegionChange, 
	onWorkplaceChange 
}) => {
	const regionDescription = 
		<div className="ui info message">
			<div className="header">Pozor!</div>
			<p>
				- podstatné je tvé trvalé bydliště.<br />
				- pokud si nejsi jistý, jaké územní pracoviště máš vyplnit, můžeš využít <b><a href="https://www.financnisprava.cz/cs/financni-sprava/organy-financni-spravy/uzemni-pracoviste/vyhledavani-up" target="_blank" rel="noopener noreferrer">aplikaci</a></b> finanční správy. Jednoduše zadáš své PSČ a dozvíš se, jaký úřad máš vyplnit do svého formuláře.
			</p>
		</div>

	const workplacesDict = getWorkplaces(region_code)

	const handleRegionChange = (region: React.ChangeEvent<HTMLSelectElement>) => {
		onRegionChange(regionDict[region.target.value])
		onWorkplaceChange('')	// if region is changed, set workplace as not selected 
	}

	const handleWorkplaceChange = (workplace: React.ChangeEvent<HTMLSelectElement>) => onWorkplaceChange(workplacesDict[workplace.target.value])

	const region = getNameByCode(regionDict, region_code)
	const workplace = getNameByCode(workplacesDict, workplace_code)

	const workplacesInput = region !== '' 
		?	<select className="ui four wide field dropdown" value={workplace} onChange={handleWorkplaceChange}>
				<option value="" disabled hidden>Zvol uzemní pracoviště...</option>
				{Object.entries(workplacesDict).map(([place, code]) => <option key={code}>{place}</option>)}
			</select>
		: null

  return (
    <React.Fragment>
			{regionDescription}
			<select className="ui four wide field dropdown" value={region} onChange={handleRegionChange}>
				<option value="" disabled hidden>Zvol kraj...</option>
				{Object.entries(regionDict).map(([region, code]) => <option key={code}>{region}</option>)}
			</select>
			{workplacesInput}
    </React.Fragment>
  )
}

const mapDispatchToProps: MapDispatchToProps<DispatchOfficeProps, {}> = dispatch => ({
	onRegionChange: region => dispatch(setOfficeRegion(region)),
	onWorkplaceChange: workplace => dispatch(setOfficeWorkplace(workplace))
})

export default connect(
  undefined,
  mapDispatchToProps
)(OfficeForm)