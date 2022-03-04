import React from 'react'
import store from '../redux/store'
import { setPercent, reset, setBill, setPeople } from '../redux/actions'
import * as action from '../redux/actionTypes'

const Calculate = () => {

    function handleData(type, num, event) {
        console.log(store.getState())
        switch (type) {
            case action.SET_PERCENT:
                store.dispatch(setPercent(parseInt(num)))
                return null
            case action.SET_BILL:
                store.dispatch(setBill(parseInt(num)))
                return null
            case action.SET_PEOPLE:
                store.dispatch(setPeople(parseInt(num)))
                return null
            default:
                return null
        }
    }

    return (
        <div className='dashboard'>
            <div className='input-wrapper'>
                <label htmlFor='bill'>Bill</label>
                <input type="number" onChange={(e) => handleData(action.SET_BILL, e.target.value)} id="bill" placeholder="0" className='bill-input' />
            </div>
            <div className='input-wrapper'>
                <label>Select Tip %</label>
                <div className='percentage-wrapper'>
                    <div className='option' onClick={(event) => handleData(action.SET_PERCENT, 5, event)}>5%</div>
                    <div className='option' onClick={(event) => handleData(action.SET_PERCENT, 10, event)}>10%</div>
                    <div className='option' onClick={(event) => handleData(action.SET_PERCENT, 15, event)}>15%</div>
                    <div className='option' onClick={(event) => handleData(action.SET_PERCENT, 25, event)}>25%</div>
                    <div className='option' onClick={(event) => handleData(action.SET_PERCENT, 50, event)}>50%</div>
                    <input type="number" placeholder="Custom" className="option custom" onChange={(event) => handleData(action.SET_PERCENT, event.target.value, event)} />
                    {/* <div className='option custom'>CUSTOM</div> custom */}
                </div>
            </div>
            <div className='input-wrapper'>
                <label htmlFor='people'>Number of People</label>
                <input type="number" onChange={(e) => handleData(action.SET_PEOPLE, e.target.value)} id="people" placeholder="0" className='bill-input' />
            </div>
        </div>
    )
}

export default Calculate