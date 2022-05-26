import React from 'react'

import './travelhistory.css'
import jwt_decode from 'jwt-decode'
import KommunicateChat from '../Chat';


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
        window.location.href = '/cancelledPage'
    }

    moveToCompletedpage = e => {
        e.preventDefault()
        localStorage.setItem('paymentData', JSON.stringify(this.state.token))
        window.location.href = '/completedPage'
    }

    moveToupcomingpage = e => {
        e.preventDefault()
        localStorage.setItem('paymentData', JSON.stringify(this.state.token))
        window.location.href = '/upcomingPage'
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

        return (
        
        <div className='cancup' >
            <div className='row' >
                
                <div className='columnThree' >
                    <h3 > SWADESHI AIRLINES </h3>{' '}
                    <div>
                        <p> TRAVEL HISTORY DETAILS </p>{' '}
                        <div className='row' >
                            
                            
                                <button style={{marginRight:40}}onClick={e => this.moveToupcomingpage(e)}
                                    className='btn btn-light btCustoms' >
                                    Upcoming Flights {' '}
                                </button>{' '}
                                &nbsp;&nbsp;
                                <button style={{marginRight:40}} onClick={e => this.moveToCompletedpage(e)}
                                    className='btn btn-light btCustoms' >
                                    Completed Trips  {' '}
                                </button>{' '}
                                &nbsp;&nbsp;
                                <button style={{marginRight:40}} onClick={e => this.moveToCancelPage(e)}
                                    className='btn btn-light btCustoms' >
                                    Cancelled Flights {' '}
                                </button>{' '}

                        </div>{' '}
                    </div>{' '}
                </div>{' '}
            </div>{' '}
        </div>
        
        )
    }
}