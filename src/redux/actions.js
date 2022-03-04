import * as action from './actionTypes'

export function reset() {
    return {
        type: action.RESET
    }
}

export function setPercent(n) {
    return {
        type: action.SET_PERCENT,
        payload: {
            percent: parseFloat(n)
        }
    }
}

export function setPeople(n) {
    return {
        type: action.SET_PEOPLE,
        payload: {
            people: parseInt(n)
        }
    }
}

export function setBill(n) {
    return {
        type: action.SET_BILL,
        payload: {
            bill: parseInt(n)
        }
    }
}