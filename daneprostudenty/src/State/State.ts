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

export type BankAccount = {
	readonly number: string		// cislo uctu
	readonly code: string		// kod banky
	readonly name: string		// jmeno banky
}

export type Office = {
	readonly region: string 	// financni urad 
	readonly workplace: string 	// uzemni pracoviste
}

export type Income = {
	readonly total: string		// celkovy prijem
	readonly insurance: string		// zdravotni a socialni pojisteni
	readonly advances: string		// srazene zalohy
	readonly tax: string 		// srazena dan	
}

export type Markdown = {
	readonly disability: string		// pocet mesicu invalidity
	readonly extended_disability: string		// pocet mesicu rozsirene invalidity
	readonly benefit_card: string		// pocet mesicu jako ztp
	readonly student: string		// pocet mesicu jako student
	readonly children_placement: string		// umisteni ditete
	readonly gifts: string 		// obdrzene dary
	readonly interests: string		// uroky
	readonly months_interests: string		// pocet mesicu v kterych se platily uroky
	readonly pension_insurance: string		// penzijni pojisteni
	readonly private_insurance: string		// soukrome pojisteni
	readonly contributions: string		// odborove prispevky
	readonly exams_payment: string		// uhrada za zkousky
}

export type Form = {
	readonly description: string | undefined		// popis pro konkretni vstup 
	readonly personal: Personal		// osobni udaje
	readonly residence: Residence		// bydliste
	readonly family: Family		// rodina
	readonly account: BankAccount	 // bankovni ucet
	readonly office: Office // financni urad
	readonly income: Income // prijem
	readonly markdown: Markdown //	slevy na dani a nezdanitelna cast dane
}

export type State = {
  readonly menu: Menu		// webova navigace
  readonly form: Form		// formular pro danove priznani
}

export default State