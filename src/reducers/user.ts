const initialState = {
    name: 'KK',
    user: {}
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload.user
            }
        default:
            return state
    }
}

export default user