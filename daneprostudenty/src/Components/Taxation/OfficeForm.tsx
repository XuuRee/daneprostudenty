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

const getWorkplaces = (region: string) => {
	switch (region) {
		case 'Hlavní město Praha':
			return [
				'Praha 1', 
				'Praha 2', 
				'Praha 3', 
				'Praha 4', 
				'Praha 5', 
				'Praha 6', 
				'Praha 7', 
				'Praha 8', 
				'Praha 9', 
				'Praha 10', 
				'Praha - Jižní město', 
				'Praha - Modřany'
			]
		case 'Středočeský kraj':
			return [
				'Praha - Východ', 
				'Praha Západ', 
				'Benešov', 
				'Beroun', 
				'Brandýs N.L. - ST.BOL.	', 
				'Čáslav', 
				'Český brod', 
				'Dobříš', 
				'Hořovice', 
				'Kladno', 
				'Kolín', 
				'Kralupy nad Vltavou',
				'Kutná hora',
				'Mělník',
				'Mladá Boleslav',
				'Mnichovo hradiště',
				'Neratovice',
				'Nymburk',
				'Poděbrady',
				'Příbram',
				'Říčany',
				'Sedlčany',
				'Slaný',
				'Vlašim',
				'Votice',
			]
		case 'Jihočeský kraj':
			return []
		case 'Plzeňský kraj':
			return []
		case 'Karlovarský kraj':
			return []
		case 'Ústecký kraj':
			return []
		case 'Liberecký kraj':
			return []
		case 'Kralovehradecký kraj':
			return []
		case 'Pardubický kraj':
			return []
		case 'Kraj Vysočina':
			return []
		case 'Jihomoravský kraj':
			return []
		case 'Olomoucký kraj':
			return []
		case 'Zlínský kraj':
			return []
		case 'Moravskoslezský kraj':
			return []
		default:
			console.error("Error")
			return []
	}	
}

const OfficeForm: React.SFC<OfficeProps & DispatchOfficeProps> = ({ 
	description, 
	region, 
	workplace, 
	onRegionChange, 
	onWorkplaceChange 
}) => {

	const handleRegionChange = (region: React.ChangeEvent<HTMLSelectElement>) => onRegionChange(region.target.value)

	const handleWorkplaceChange = (workplace: React.ChangeEvent<HTMLSelectElement>) => onWorkplaceChange(workplace.target.value)

	const regionDescription = 
		<div className="ui info message">
			<div className="header">Pozor!</div>
			<p>Podstatné je tvé trvalé bydliště.</p>
		</div>

	const workplaces = getWorkplaces(region)

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
			<select className="ui four wide field dropdown" value={workplace} onChange={handleWorkplaceChange}>
				<option value="" disabled hidden>Zvol si uzemní pracoviště...</option>
				{workplaces.map(place => <option>{place}</option>)}
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