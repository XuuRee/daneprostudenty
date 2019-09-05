export type Dictionary = {
	[key: string]: string;
}


// empty 

export const emptyDict: Dictionary = {}


// banks

export const bankDict: Dictionary = {
	'3030': 'AirBank'
}


// regions

export const regionDict: Dictionary = {
	'Hlavní město Praha': '2000',
	'Středočeský kraj': '2100',
	'Jihočeský kraj': '2200',
	'Plzeňský kraj': '2300',
	'Karlovarský kraj': '2400',
	'Ústecký kraj': '2500',
	'Liberecký kraj': '2600',
	'Královehradecký': '2700',
	'Pardubický kraj': '2800',
	'Kraj Vysočina': '2900',
	'Jihomoravský kraj': '3000',
	'Olomoucký kraj': '3100',
	'Moravskoslezský kraj': '3200',
	'Zlínský kraj': '3300'
}


// workplaces

export const hlavniMestoPrahaDict: Dictionary = {
	'Praha 1': '2001', 
	'Praha 2': '2002', 
	'Praha 3': '2003', 
	'Praha 4': '2004', 
	'Praha 5': '2005', 
	'Praha 6': '2006', 
	'Praha 7': '2007', 
	'Praha 8': '2008', 
	'Praha 9': '2009', 
	'Praha 10': '2010', 
	'Praha - Jižní město': '2011', 
	'Praha - Modřany': '2012'
}

export const stredoceskyKrajDict = {
	'Praha - Východ': '2101', 
	'Praha Západ': '2102', 
	'Benešov': '2103', 
	'Beroun': '2104', 
	'Brandýs n. L. - St. Bol.': '2105', 
	'Čáslav': '2106', 
	'Český brod': '2107', 
	'Dobříš': '2108', 
	'Hořovice': '2109', 
	'Kladno': '2110', 
	'Kolín': '2111', 
	'Kralupy nad Vltavou': '2112',
	'Kutná hora': '2113',
	'Mělník': '2114',
	'Mladá Boleslav': '2115',
	'Mnichovo hradiště': '2116',
	'Neratovice': '2117',
	'Nymburk': '2118',
	'Poděbrady': '2119',
	'Příbram': '2120',
	'Rakovník': '2121',
	'Říčany': '2122',
	'Sedlčany': '2123',
	'Slaný': '2124',
	'Vlašim': '2125',
	'Votice': '2126',
}

export const jihoceskyKrajDict: Dictionary = {
	'České Budějovice': '2201',
	'Blatná': '2202',
	'Český Krumlov': '2203',
	'Dačice': '2204',
	'Jindřichův Hradec': '2205',
	'Kaplice': '2206',
	'Milevsko': '2207',
	'Písek': '2208',
	'Prachatice': '2209',
	'Soběslav': '2210',
	'Strakonice': '2211',
	'Tábor': '2212',
	'Trhové sviny': '2213',
	'Třeboň': '2214',
	'Týn nad Vltavou': '2215',
	'Vimperk': '2216',
	'Vodňany': '2217'
}

export const plzenskyKrajDict: Dictionary = {
	'Plzeň': '2301',
	'Plzeň - Sever': '2302',
	'Plzeň - Jih': '2303',
	'Blovice': '2304',
	'Domažlice': '2305',
	'Horažďovice': '2306',
	'Horšovský týn': '2307',
	'Klatovy': '2308',
	'Kralovice': '2309',
	'Nepomuk': '2310',
	'Přeštice': '2311',
	'Rokycany': '2312',
	'Tachov': '2213',
	'Stříbro': '2314',
	'Sušice': '2315',
}

export const karlovarskyKrajDict: Dictionary = {
	'Karlovy Vary': '2401',
	'Aš': '2402',
	'Cheb': '2403',
	'Kraslice': '2404',
	'Mariánské lázně': '2405',
	'Ostrov nad Ohří': '2406',
	'Sokolov': '2407',
}

export const usteckyKrajDict: Dictionary = {
	'Ústí nad Labem': '2501',
	'Bílina': '2502',
	'Děčín': '2503',
	'Chomutov': '2504',
	'Kadaň': '2505',
	'Libochovice': '2506',
	'Litoměřice': '2507',
	'Litvínov': '2508',
	'Louny': '2509',
	'Most': '2510',
	'Podbořany': '2511',
	'Roudnice nad Labem': '2512',
	'Rumburk': '2513',
	'Teplice': '2514',
	'Žatec': '2515',
}

export const libereckyKrajDict: Dictionary = {
	'Liberec': '2601',
	'Česká Lípa': '2602',
	'Frýdlant': '2603',
	'Jablonec nad Nisou': '2604',
	'Jilemnice': '2605',
	'Nový Bor': '2606',
	'Semily': '2607',
	'Tanvald': '2608',
	'Turnov': '2609',
	'Železný Brod': '2610',
}

export const kralovehradeckyKrajDict: Dictionary = {
	'Hradec Králové': '2701',
	'Broumov': '2702',
	'Dobruška': '2703',
	'Dvůr Králové': '2704',
	'Hořice': '2705',
	'Jaroměr': '2706',
	'Jičín': '2707',
	'Kostelec nad Orlicí': '2708',
	'Náchod': '2709',
	'Nová Paka': '2710',
	'Nový Bydžov': '2711',
	'Rychnov nad Kněžnou': '2712',
	'Trutnov': '2713',
	'Vrchlabí': '2714',
}

export const pardubickyKrajDict: Dictionary = {
	'Pardubice': '2801',
	'Hlinsko': '2802',
	'Holice': '2803',
	'Chrudim': '2804',
	'Litomyšl': '2805',
	'Moravská Třebová': '2806',
	'Přelouč': '2807',
	'Svitavy': '2808',
	'Ústí nad Orlicí': '2809',
	'Vysoké mýto': '2810',
	'Žamberk': '2811',
}

export const krajVyoscinaDict: Dictionary = {
	'Jihlava': '2901',
	'Bystřice nad Pernštejnem': '2902',
	'Havlíčkův Brod': '2903',
	'Humpolec': '2904',
	'Chotěboř': '2905',
	'Ledeč nad Sázavou': '2906',
	'Moravské Budějovice': '2907',
	'Náměšt nad Oslavou': '2908',
	'Pacov': '2909',
	'Pelhřimov': '2910',
	'Telč': '2911',
	'Třebíč': '2912',
	'Velké Meziříčí': '2913',
	'Žďár nad Sázavou': '2914',
}

export const jihomoravskyKrajDict = {
	'Brno I': '3001', 
	'Brno II': '3002', 
	'Brno III': '3003', 
	'Brno IV': '3004', 
	'Brno - Venkov': '3005', 
	'Blansko': '3006', 
	'Boskovice': '3007', 
	'Břeclav': '3008', 
	'Bučovice': '3009', 
	'Hodonín': '3010', 
	'Hustopeče': '3011', 
	'Ivančice': '3012',
	'Kyjov': '3013',
	'Mikulov': '3014',
	'Moravský Krumlov': '3015',
	'Slavkov u Brna': '3016',
	'Tišnov': '3017',
	'Veselí nad Moravou': '3018',
	'Vyškov': '3019',
	'Znojmo': '3020',
}

export const olomouckyKrajDict = {
	'Olomouc': '3101', 
	'Hranice': '3102', 
	'Jeseník': '3103', 
	'Konice': '3104', 
	'Litovel': '3105', 
	'Prostějov': '3106', 
	'Přerov': '3107', 
	'Šternberk': '3108', 
	'Šumperk': '3109', 
	'Zábřeh': '3110',
}

export const moravskoslezskyKrajDict = {
	'Ostrava I': '3201', 
	'Ostrava II': '3202', 
	'Ostrava III': '3203', 
	'Bohumín': '3204', 
	'Bruntál': '3205', 
	'Český Těšín': '3206', 
	'Frýdek-Místek': '3207', 
	'Frýdlant nad Ostravicí': '3208', 
	'Fulnek': '3209', 
	'Havířov': '3210', 
	'Hlučín': '3211', 
	'Karviná': '3212',
	'Kopřivnice': '3213',
	'Krnov': '3214',
	'Nový Jičín': '3215',
	'Opava': '3216',
	'Orlová': '3217',
	'Třinec': '3218',
}

export const zlinskyKrajDict = {
	'Zlín': '3301', 
	'Bystřice pod Hostýnem': '3302', 
	'Holešov': '3303', 
	'Kroměříž': '3304', 
	'Luhačovice': '3305', 
	'Otrokovice': '3306', 
	'Rožnov pod Radhoštěm': '3307', 
	'Uherský Brod': '3308', 
	'Uherské Hradiště': '3309', 
	'Valašské Meziříčí': '3310', 
	'Valašské Klobouky': '3311', 
	'Vsetín': '3312',
}