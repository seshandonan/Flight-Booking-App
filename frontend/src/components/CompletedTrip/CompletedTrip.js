import React from 'react'

import './completedtrip.css'
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
        
        <div  >
            <p style={{display: 'flex',  justifyContent:'center', alignItems:'center',fontSize:40}}> Completed Trips </p>{' '}
            <div className='row' >
                
                <div className='columnThree'>
                    
                        
                        <div className='row' style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} >
                        <div   >
                                <hr className='hr3' />
                                <p className='hdng' > Date </p> <p className='hdng'> From </p >
                                <p className='hdng' > To </p> 
                                < hr className='hr3' />
                                <p className='hdng' > Ticket price </p>{' '}
                                <p className='hdng' > ToTal Sum </p>{' '} </div>{' '}

                        <div className='col-5' >
                                
                                <hr className='hr3' />
                                <p className='hdng' > 10-01-2022 </p>{' '}
                                <p className='hdng' >Coimbatore  </p>{' '}
                                <p className='hdng' > Lucknow </p>{' '}
                                <hr className='hr3' />
                                <p className='hdng' >Seat No : 32E </p> 
                                <p> 17800</p >
                            </div>{' '} 
                            
                    

                        
                    </div>{' '}
                    
                </div>{' '}

                
                <div className='columnThree'  >
                    
                        
                        <div className='row' style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} >
                        <div  >
                                <hr className='hr3' />
                                <p className='hdng' > Date </p> <p className='hdng'> From </p >
                                <p className='hdng' > To </p> 
                                < hr className='hr3' />
                                <p className='hdng' > Ticket price </p>{' '}
                                <p className='hdng' > ToTal Sum </p>{' '} </div>{' '}

                        <div className='col-4' >
                                
                                <hr className='hr3' />
                                <p className='hdng' > 19-02-2022 </p>{' '}
                                <p className='hdng' >Delhi </p>{' '}
                                <p className='hdng' > Madurai </p>{' '}
                                <hr className='hr3' />
                                <p className='hdng' >Seat No : 21D </p> 
                                <p> 17800</p >
                            </div>{' '} 
                            
                    

                        
                    </div>{' '}
                    
                </div>{' '}

                <div className='columnThree'  >
                    
                        
                    <div className='row' style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} >
                    <div  >
                            <hr className='hr3' />
                            <p className='hdng' > Date </p> <p className='hdng'> From </p >
                            <p className='hdng' > To </p> 
                            < hr className='hr3' />
                            <p className='hdng' > Ticket price </p>{' '}
                            <p className='hdng' > ToTal Sum </p>{' '} </div>{' '}

                    <div className='col-4' >
                            
                            <hr className='hr3' />
                            <p className='hdng' > 21-03-2022 </p>{' '}
                            <p className='hdng' >Manali </p>{' '}
                            <p className='hdng' > Sikkhim </p>{' '}
                            <hr className='hr3' />
                            <p className='hdng' >Seat No : 11A </p> 
                            <p> 17800</p >
                        </div>{' '} 
                        
                

                    
                </div>{' '}
                
            </div>{' '}
            </div>{' '}
        </div>
        
        )
    }
}