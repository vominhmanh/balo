const initState = {
	currentLocation: '',
	searching: {
		'searchInput': '',
		'province': 'ha-noi',
	},
	activePlaces: []
}

const rootReducer = ( state = initState, anAction ) => {
	switch ( anAction.type ) {
		case 'Createtour/addPlaceToList':
			return {
				...state,
				activePlaces: [
					...state.activePlaces,
					anAction.payload
					// {
					// 	'id': 123,
					// 	'name': "A New Place",
					// 	'startAt': '07:00',
					// 	'endAt': '09:00',
					// }
				]
			}
			default:
				return state;
	}
}

export default rootReducer
