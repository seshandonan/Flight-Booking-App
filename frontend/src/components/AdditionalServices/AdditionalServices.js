import React from 'react'
import idli from './idli.jpg'
import naan from './naan.jpg'
import poori from './poori.jpg'
import vada from './vada.jpg'
import pulav from './pulav.jpg'
import curd from './curd.jpg'
import aparts from './aparts.jpg'
import cocktail from './cocktail.jpg'
import cola from './cola.jpg'
import lime from './lime.jpg'
import luxury from './luxury.jpg'
import mocktail from './mocktail.jpg'
import modern from './modern.jpg'
import resort from './resort.jpg'
import suite from './suite.jpg'

import './additionalservices.css'
export default class App extends React.Component {
    render() {
        return (

            <><br></br>
            <div>
            <h1>Hotels</h1>
                <div class="polaroid">
                    <a href='/cancelPage'><img src={aparts} alt="5 Terre" className="photo" /></a>
                        <div class="hello">
                            <p>Apartments</p>
                        </div>
                </div>
                <div class="polaroid">
                <a href='/cancelPage'><img src={luxury} alt="5 Terre" className="photo" /></a>
                        <div class="hello">
                            <p>Luxury Hotels</p>
                        </div>
                </div>
                <div class="polaroid">
                <a href='/cancelPage'> <img src={modern} alt="5 Terre" className="photo" /></a>
                        <div class="hello">
                            <p>Modern House</p>
                        </div>
                </div>
                <div class="polaroid">
                <a href='/cancelPage'> <img src={resort} alt="5 Terre" className="photo" /></a>
                        <div class="hello">
                            <p>Resort</p>
                        </div>
                </div>
                <div class="polaroid">
                <a href='/cancelPage'> <img src={suite} alt="5 Terre" className="photo" /></a>
                        <div class="hello">
                            <p>suite</p>
                        </div>
                </div>
                
                <h1>Food Items</h1>
                <div class="polaroid">
                <a href='/cancelPage'> <img src={idli} alt="5 Terre" className="photo" /></a>
                        <div class="hello">
                            <p>IDLI</p>
                        </div>
                </div>
                <div class="polaroid">
                <a href='/cancelPage'>  <img src={naan} alt="5 Terre" className="photo" /></a>
                        <div class="hello">
                            <p>TANDOORI NAAN</p>
                        </div>
                </div>
                <div class="polaroid">
                <a href='/cancelPage'>   <img src={poori} alt="5 Terre" className="photo" /></a>
                        <div class="hello">
                            <p>POORI</p>
                        </div>
                </div>
                <div class="polaroid">
                <a href='/cancelPage'>   <img src={pulav} alt="5 Terre" className="photo" /></a>
                        <div class="hello">
                            <p>PULAV</p>
                        </div>
                </div>
                <div class="polaroid">
                <a href='/cancelPage'>   <img src={vada} alt="5 Terre" className="photo" /></a>
                        <div class="hello">
                            <p>VADA</p>
                        </div>
                </div>
                <div class="polaroid">
                <a href='/cancelPage'>   <img src={curd} alt="5 Terre" className="photo" /></a>
                        <div class="hello">
                            <p>CURD</p>
                        </div>
                </div>
                <h1>Beverages</h1>
                <div class="polaroid">
                <a href='/cancelPage'>   <img src={cola} alt="5 Terre" className="photo" /></a>
                        <div class="hello">
                            <p>Cola</p>
                        </div>
                </div>
                <div class="polaroid">
                <a href='/cancelPage'>   <img src={lime} alt="5 Terre" className="photo" /></a>
                        <div class="hello">
                            <p>Lime</p>
                        </div>
                </div>
                <div class="polaroid">
                <a href='/cancelPage'>  <img src={mocktail} alt="5 Terre" className="photo" /></a>
                        <div class="hello">
                            <p>Mocktail</p>
                        </div>
                </div>
                <div class="polaroid">
                <a href='/cancelPage'> <img src={cocktail} alt="5 Terre" className="photo" /></a>
                        <div class="hello">
                            <p>Cocktail</p>
                        </div>
                </div>
                
                
                </div></>
                

        )
    }
}