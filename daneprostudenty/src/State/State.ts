export type Menu = {
	page: string		// vybrana stranka
}

export type Personal = {
	readonly name: string		// jmeno
	readonly surname: string		// prijmeni
	readonly native_surname: string		// rodne prijemni
	readonly degree: string		// titul
	readonly personal_id: string		// rodne cislo
	readonly phone_number: string		// telefonni cislo
	readonly email: string		// e-mail
}

export type Residence = {
	readonly city: string		// mesto
	readonly street: string		// ulice
	readonly descriptive_number: string		// cislo popisne
	readonly orientation_number: string		// cislo orientacni
	readonly zip_code: string		// psc
}

export type Spouse = {
	readonly name: string		// jmeno
	readonly surname: string		// prijmeni
	readonly degree: string		// titul
	readonly personal_id: string		// rodne cislo
	readonly months: number		// pocet mesicu v manzelstvi za minuly rok
  readonly disability: boolean		// ztp
}

export type Children = {
	readonly name: string		// jmeno
	readonly surname: string		// prijmeni
	readonly personal_id: string		// rodne cislo
	readonly months: number		// pocet mesicu ???
}

export type Family = {
	readonly married: boolean 	// zenaty nebo vdana - ano nebo ne
	readonly spouse: Spouse		// udaje o manzelovi nebo manzelce
	readonly childless: boolean 	// bezdetnost - ano nebo ne
	readonly children: Children[]		// udaje o jednotlivych detech
}

export type Form = {
	readonly description: string | undefined		// popis pro konkretni vstup 
	readonly personal: Personal		// osobni udaje
	readonly residence: Residence		// bydliste
	readonly family: Family		// rodina
}

export type State = {
  readonly menu: Menu		// webova navigace
  readonly form: Form		// formular pro danove priznani
}

export default State