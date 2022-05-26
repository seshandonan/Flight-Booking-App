import React from 'react'

import './cancelticket.css'
import jwt_decode from 'jwt-decode'



export default class App extends React.Component {
    state = {
        number: '',
        name: '',
        expiry: '',
        cvc: '',
        issuer: '',
        focused: '',
        formData: '',
        token: ''
    }

    componentDidMount() {
        const tok = sessionStorage.getItem('authToken')
        const decoded = jwt_decode(tok)
        this.setState({ token: decoded.user })
    }

    handleCallback = ({ issuer }, isValid) => {
        if (isValid) {
            this.setState({ issuer })
        }
    }

    handleInputFocus = ({ target }) => {
        this.setState({
            focused: target.name
        })
    }
   

    handleSubmit = e => {
        e.preventDefault()
        const { issuer } = this.state
        const formData = [...e.target.elements]
            .filter(d => d.name)
            .reduce((acc, d) => {
                acc[d.name] = d.value
                return acc
            }, {})

        this.setState({ formData })
        this.form.reset()
    }

    moveToCancelPage = e => {
        e.preventDefault()
        localStorage.setItem('paymentData', JSON.stringify(this.state.token))
        window.location.href = '/cancelPage'
    }

    renderNamesOfPassenger = () => {
        let passArray = localStorage.getItem('nameData')
        if (passArray) {
            let nameArray = JSON.parse(passArray)
            return nameArray.map((name, idx) => {
                return <p key={idx} > {name} </p>
            })
        }
    }

    renderSeatNumbers = () => {
        let seatArray = localStorage.getItem('reservedSeats')
        if (seatArray) {
            let seaArr = JSON.parse(seatArray)
            return seaArr.map((seat, idx) => {
                return <p key={idx} > {seat} </p>
            })
        }
    }

    getSumTotal = () => {
        let count = 0
        let tax = 150
        let seatArray = localStorage.getItem('reservedSeats')
        if (seatArray) {
            let seaArr = JSON.parse(seatArray)
            for (let i = 0; i < seaArr.length; i++) {
                count++
            }
            return (<div>
                <hr className='hr3' />
                <p> {1000 * count} </p> <p> +{tax} </p > < p > {1000 * count + tax} </p>{' '} </div>
            )
        }
    }

    render() {
        const {
            name,
            number,
            expiry,
            cvc,
            focused,
            issuer,
            formData,
            token
        } = this.state

        return (<div className='canc' >
            <div className='row' >
                
                <div className='columnThree' >
                    <h3 > SWADESHI AIRLINES </h3>{' '}
                    <div>
                        <p> BOOKED TICKET DETAILS </p>{' '}
                        <div className='row' >
                            <div className='col-6 pt' >
                                <hr className='hr3' />
                                <p className='hdng' > Date </p> <p className='hdng'> From </p >
                                <p className='hdng' > To </p> <hr className='hr3' />
                                <p className='hdng' > Passengers </p>{' '} {this.renderNamesOfPassenger()} < hr className='hr3' />
                                <p className='hdng' > Ticket price </p>{' '}
                                <p className='hdng' > Tax </p>{' '}
                                <p className='hdng' > Toal Sum </p>{' '} </div>{' '}
                            <div className='col-6' >
                                
                                <hr className='hr3' />
                                <p className='usrName' > {' '} {localStorage.getItem('date')} {' '} </p>{' '}
                                <p className='usrName' > {localStorage.getItem('start')} </p>{' '}
                                <p className='usrName' > {' '} {localStorage.getItem('destination')} {' '} </p>{' '}
                                <hr className='hr3' />
                                <p className='hdng' >Seat No {' '} </p> {this.renderSeatNumbers()}
                                <p> {this.getSumTotal()} </p >
                            </div>{' '}
                            
                                <button onClick={e => this.moveToCancelPage(e)}
                                    className='btn btn-light btCustoms' >
                                    CANCEL TICKET {' '}
                                </button>{' '}
                            
                        </div>{' '}
                    </div>{' '}
                </div>{' '}
            </div>{' '}
        </div>
        )
    }
}