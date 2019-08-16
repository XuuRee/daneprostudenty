import React from 'react'
import { Office } from '../../State/State'
import { connect, MapDispatchToProps } from 'react-redux'
import { setOfficeRegion, setOfficeWorkplace } from '../../Actions/FormActions'

type OfficeProps = { 
  description: string | undefined 
} & Office

type DispatchOfficeProps = {
	onRegionChange: (region: string) => void
	onWorkplaceChange: (workplace: string) => void
}

const OfficeForm: React.SFC<OfficeProps & DispatchOfficeProps> = ({ 
	description, 
	region, 
	workplace, 
	onRegionChange, 
	onWorkplaceChange 
}) => {

	const handleRegionChange = (region: React.ChangeEvent<HTMLSelectElement>) => onRegionChange(region.target.value)

	const regionDescription = 
		<div className="ui info message">
			<div className="header">Pozor!</div>
			<p>Podstatné je tvé trvalé bydliště.</p>
		</div>

  return (
    <React.Fragment>
			{regionDescription}
			<select className="ui four wide field dropdown" value={region} onChange={handleRegionChange}>
				<option value="" disabled hidden>Zvol si kraj...</option>
				<option>Hlavní město Praha</option>
  			<option>Středočeský kraj</option>
				<option>Jihočeský kraj</option>
				<option>Plzeňský kraj</option>
				<option>Karlovarský kraj</option>
				<option>Ústecký kraj</option>
				<option>Liberecký kraj</option>
				<option>Královéhradecký kraj</option>
				<option>Pardubický kraj</option>
				<option>Kraj Vysočina</option>
				<option>Jihomoravský kraj</option>
				<option>Olomoucký kraj</option>
				<option>Zlínský kraj</option>
				<option>Moravskoslezský kraj</option>
			</select>
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