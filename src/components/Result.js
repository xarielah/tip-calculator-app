import React, { useState } from 'react'
import store from '../redux/store'
import { reset } from '../redux/actions'

const Result = () => {
    const [tipAmount, setTipAmount] = useState(0)
    const [total, setTotal] = useState(0)

    store.subscribe(() => {
        const data = store.getState()
        console.log(data)
        const calculate = (data) => {
            const people = isNaN(data.people) ? 1 : data.people
            const bill = isNaN(data.bill) ? 0 : data.bill
            const percent = isNaN(data.percent) ? 0 : data.percent

            //  (bill * (percent / 100)) / people ~~~ tip per person
            //  (bill / people) + tip per person

            const tipPerPerson = (bill * (percent / 100))
            const totalPerPerson = (bill / people) + tipPerPerson
            setTipAmount(tipPerPerson)
            setTotal(totalPerPerson)
        }

        calculate(data)
    })

    const checkboxRadio = () => {
        const allCheckboxes = document.querySelectorAll(".checkbox")
        allCheckboxes.forEach(node => {
            node.checked = false
        })
    }

    const resetInputs = () => {
        const bill = document.querySelector('#bill')
        const people = document.querySelector('#people')
        const custom = document.querySelector('#custom')
        bill.value = ''
        people.value = ''
        custom.value = ''
    }

    const resetCalculator = () => {
        store.dispatch(reset())
        checkboxRadio()
        resetInputs()
    }

    return (
        <div className='results'>
            <div className='results-numbers'>
                <div className='results-display'>
                    <div className='results-title'>
                        <span className='tip'>Tip Amount</span>
                        <span className='per-person'>/ person</span>
                    </div>
                    <span className='results-amount'>${tipAmount.toFixed(2)}</span>
                </div>
                <div className='results-display'>
                    <div className='results-title'>
                        <span className='tip'>Total</span>
                        <span className='per-person'>/ person</span>
                    </div>
                    <span className='results-amount'>${total.toFixed(2)}</span>
                </div>
            </div>
            <button className='results-button' onClick={() => resetCalculator()}>reset</button>
        </div>
    )
}

export default Result