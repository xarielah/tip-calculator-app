import * as actions from './actionTypes'

const initialStore = {
    people: 0,
    bill: 0,
    percent: 0
}

export default function reducer(state = initialStore, action) {
    switch (action.type) {
        case actions.RESET:
            return {
                ...state,
                people: 0,
                bill: 0,
                percent: 0
            }
        case actions.SET_PERCENT:
            return {
                ...state,
                percent: action.payload.percent
            }
        case actions.SET_BILL:
            return {
                ...state,
                bill: action.payload.bill
            }
        case actions.SET_PEOPLE:
            return {
                ...state,
                people: action.payload.people
            }
        default:
            return state
    }
}