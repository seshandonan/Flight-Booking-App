import React from 'react'
import './FeaturesPage.css'
export default function FeaturesPage({ history }) {
    const handleSignOut = e => {
        e.preventDefault()
        sessionStorage.removeItem('authToken')
        localStorage.removeItem('reservedSeats')
        localStorage.removeItem('nameData')
        localStorage.clear()
        history.push('/')
    }

    const handleBookAgainIcon = e => {
        e.preventDefault()
        localStorage.removeItem('reservedSeats')
        localStorage.removeItem('nameData')
        localStorage.clear()
        history.push('/routes')
    }
    const myStyle = {

        fontSize: '25px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    return (
        <div style={myStyle}>

            <div className="container">
                <div>
                    <nav className="mb-4 navbar navbar-expand-lg navbar-dark bg-unique hm-gradient">
                        <a href="/#" className="navbar-brand Company-Log">SA</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-3" aria-controls="navbarSupportedContent-3" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent-3">
                            <ul className="navbar-nav ml-auto nav-flex-icons ic">
                                <li className="nav-item">
                                    <a href="/#" className="nav-link waves-effect waves-light" onClick={e => handleBookAgainIcon(e)} style={{ color: "black" }}>Book Again</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/#" className="nav-link waves-effect waves-light" onClick={e => handleSignOut(e)}>Sign-Out</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div >
                    <h2>The Selected Features Are</h2>
                    <br></br>
                    <table>
                        <tr>
                            <th>Features</th>
                            <th>Economy</th>
                            <th>Business</th>
                            <th>First Class</th>
                        </tr>
                        <tr>
                            <td>Seat Pitch</td>
                            <td>{localStorage.getItem('EconomySP')}</td>
                            <td>{localStorage.getItem('BusinessSP')}</td>
                            <td>{localStorage.getItem('FirstClassSP')}</td>
                        </tr>
                        <tr>
                            <td>Seat Width</td>
                            <td>{localStorage.getItem('EconomySW')}</td>
                            <td>{localStorage.getItem('BusinessSW')}</td>
                            <td>{localStorage.getItem('FirstClassSW')}</td>
                        </tr>
                        <tr>
                            <td>Video Type</td>
                            <td>{localStorage.getItem('EconomyVT')}</td>
                            <td>{localStorage.getItem('BusinessVT')}</td>
                            <td>{localStorage.getItem('FirstClassVT')}</td>
                        </tr>
                        <tr>
                            <td>Power Type</td>
                            <td>{localStorage.getItem('EconomyPT')}</td>
                            <td>{localStorage.getItem('BusinessPT')}</td>
                            <td>{localStorage.getItem('FirstClassPT')}</td>
                        </tr>
                        <tr>
                            <td>Wi-fi</td>
                            <td>{localStorage.getItem('EconomyWF')}</td>
                            <td>{localStorage.getItem('BusinessWF')}</td>
                            <td>{localStorage.getItem('FirstClassWF')}</td>
                        </tr>
                        <tr>
                            <td>Seat Type</td>
                            <td>{localStorage.getItem('EconomyST')}</td>
                            <td>{localStorage.getItem('BusinessST')}</td>
                            <td>{localStorage.getItem('FirstClassST')}</td>
                        </tr>

                    </table>

                </div>

            </div>
        </div>

    )
}