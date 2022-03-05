import React from 'react'
import store from '../redux/store'
import { setPercent, setBill, setPeople } from '../redux/actions'
import * as action from '../redux/actionTypes'

const Calculate = () => {

    const checkboxRadio = () => {
        const allCheckboxes = document.querySelectorAll(".checkbox")
        allCheckboxes.forEach(node => {
            node.checked = false
        })
    }

    const validateError = (type, num) => {
        switch (type) {
            case action.SET_PERCENT:
                if (num < 0 || num > 100) throw new Error()
                return true
            case action.SET_BILL:
                if (num < 0 || num > 9999) throw new Error()
                return true
            case action.SET_PEOPLE:
                if (num < 0) throw new Error()
                return true
            default:
                return null
        }
    }

    function handleData(type, num, event) {
        switch (type) {
            case action.SET_PERCENT:
                validateError(action.SET_PERCENT, num)
                store.dispatch(setPercent(parseInt(num)))
                checkboxRadio()
                event.target.checked = true

                return null
            case action.SET_BILL:
                validateError(action.SET_BILL, num)
                store.dispatch(setBill(parseInt(num)))
                return null
            case action.SET_PEOPLE:
                validateError(action.SET_PEOPLE, num)
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
                <input type="number" onChange={(e) => handleData(action.SET_BILL, e.target.value)} id="bill" placeholder="0" className='bill-input' min="0" max="100" />
            </div>
            <div className='input-wrapper'>
                <label>Select Tip %</label>
                <div className='percentage-wrapper'>
                    <div>
                        <input type="checkbox" id="p-5" className='checkbox' onClick={(event) => handleData(action.SET_PERCENT, 5, event)} />
                        <label htmlFor='p-5' className='option'>5%</label>
                    </div>
                    <div>
                        <input type="checkbox" id="p-10" className='checkbox' onClick={(event) => handleData(action.SET_PERCENT, 10, event)} />
                        <label htmlFor='p-10' className='option'>10%</label>
                    </div>
                    <div>
                        <input type="checkbox" id="p-15" className='checkbox' onClick={(event) => handleData(action.SET_PERCENT, 15, event)} />
                        <label htmlFor='p-15' className='option'>15%</label>
                    </div>
                    <div>
                        <input type="checkbox" id="p-25" className='checkbox' onClick={(event) => handleData(action.SET_PERCENT, 25, event)} />
                        <label htmlFor='p-25' className='option'>25%</label>
                    </div>
                    <div>
                        <input type="checkbox" id="p-50" className='checkbox' onClick={(event) => handleData(action.SET_PERCENT, 50, event)} />
                        <label htmlFor='p-50' className='option'>50%</label>
                    </div>
                    <input type="number" id="custom" placeholder="Custom" className="option custom" onChange={(event) => handleData(action.SET_PERCENT, event.target.value, event)} onFocus={() => checkboxRadio()} />
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