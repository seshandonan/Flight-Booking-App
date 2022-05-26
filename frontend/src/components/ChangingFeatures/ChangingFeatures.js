import React from 'react'

import './ChangingFeatures.css'

export default function ChangingFeatures() {
    const moveToCancelPage = e => {
        e.preventDefault()

        window.location.href = './featuresPage'
    }
    const handleEconomySP = e => {
        e.preventDefault()
        localStorage.setItem("EconomySP", e.target.value)
    }
    const handleBSP = e => {
        e.preventDefault()
        localStorage.setItem("BusinessSP", e.target.value)
    }
    const handleFCSP = e => {
        e.preventDefault()
        localStorage.setItem("FirstClassSP", e.target.value)
    }
    const handleEconomySW = e => {
        e.preventDefault()
        localStorage.setItem("EconomySW", e.target.value)
    }
    const handleBSW = e => {
        e.preventDefault()
        localStorage.setItem("BusinessSW", e.target.value)
    }
    const handleFCSW = e => {
        e.preventDefault()
        localStorage.setItem("FirstClassSW", e.target.value)
    }
    const handleEconomyVT = e => {
        e.preventDefault()
        localStorage.setItem("EconomyVT", e.target.value)
    }
    const handleBVT = e => {
        e.preventDefault()
        localStorage.setItem("BusinessVT", e.target.value)
    }
    const handleFCVT = e => {
        e.preventDefault()
        localStorage.setItem("FirstClassVT", e.target.value)
    }
    const handleEconomyPT = e => {
        e.preventDefault()
        localStorage.setItem("EconomyPT", e.target.value)
    }
    const handleBPT = e => {
        e.preventDefault()
        localStorage.setItem("BusinessPT", e.target.value)
    }
    const handleFCPT = e => {
        e.preventDefault()
        localStorage.setItem("FirstClassPT", e.target.value)
    }
    const handleEconomyWF = e => {
        e.preventDefault()
        localStorage.setItem("EconomyWF", e.target.value)
    }
    const handleBWF = e => {
        e.preventDefault()
        localStorage.setItem("BusinessWF", e.target.value)
    }
    const handleFCWF = e => {
        e.preventDefault()
        localStorage.setItem("FirstClassWF", e.target.value)
    }
    const handleEconomyST = e => {
        e.preventDefault()
        localStorage.setItem("EconomyST", e.target.value)
    }
    const handleBST = e => {
        e.preventDefault()
        localStorage.setItem("BusinessST", e.target.value)
    }
    const handleFCST = e => {
        e.preventDefault()
        localStorage.setItem("FirstClassST", e.target.value)
    }

    return (
        <div>
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
                    <td>
                        <select onChange={e => { handleEconomySP(e) }}>
                            <option>20</option>
                            <option>25</option>
                            <option>30</option>
                        </select>
                    </td>
                    <td>
                        <select onChange={e => { handleBSP(e) }}>
                            <option>30</option>
                            <option>35</option>
                            <option>40</option>
                        </select>
                    </td>
                    <td>
                        <select onChange={e => { handleFCSP(e) }}>
                            <option>40</option>
                            <option>45</option>
                            <option>50</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Seat Width</td>
                    <td>
                        <select onChange={e => { handleEconomySW(e) }}>
                            <option>20</option>
                            <option>25</option>
                            <option>30</option>
                        </select>
                    </td>
                    <td>
                        <select onChange={e => { handleBSW(e) }}>
                            <option>30</option>
                            <option>35</option>
                            <option>40</option>
                        </select>
                    </td>
                    <td>
                        <select onChange={e => { handleFCSW(e) }}>
                            <option>40</option>
                            <option>45</option>
                            <option>50</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Video Type</td>
                    <td>
                        <select onChange={e => { handleEconomyVT(e) }}>
                            <option>SeatBackTV</option>
                            <option>Normal TV</option>
                            <option>IPAD</option>
                        </select>
                    </td>
                    <td>
                        <select onChange={e => { handleBVT(e) }}>
                            <option>Laid Back TV</option>
                            <option>LED TV</option>
                            <option>IMAC</option>
                        </select>
                    </td>
                    <td>
                        <select onChange={e => { handleFCVT(e) }}>
                            <option>FULL HD TV</option>
                            <option>ULTRA 4K TV</option>
                            <option>UHD TV</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Power Type</td>
                    <td>
                        <select onChange={e => { handleEconomyPT(e) }}>
                            <option>None</option>
                            <option>Small</option>
                            <option>Xsmall</option>
                        </select>
                    </td>
                    <td>
                        <select onChange={e => { handleBPT(e) }}>
                            <option>Medium</option>
                            <option>DC</option>
                            <option>XMedium</option>
                        </select>
                    </td>
                    <td>
                        <select onChange={e => { handleFCPT(e) }}>
                            <option>Large</option>
                            <option>AC</option>
                            <option>XLarge</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Wi-fi</td>
                    <td>
                        <select onChange={e => { handleEconomyWF(e) }}>
                            <option>None</option>

                        </select>
                    </td>
                    <td>
                        <select onChange={e => { handleBWF(e) }}>
                            <option>4G</option>

                        </select>
                    </td>
                    <td>
                        <select onChange={e => { handleFCWF(e) }}>
                            <option>4G</option>
                            <option>5G</option>

                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Seat Type</td>
                    <td>
                        <select onChange={e => { handleEconomyST(e) }}>
                            <option>None</option>
                            <option>Recliner</option>

                        </select>
                    </td>
                    <td>
                        <select onChange={e => { handleBST(e) }}>
                            <option>None</option>
                            <option>Flat Bed</option>

                        </select>
                    </td>
                    <td>
                        <select onChange={e => { handleFCST(e) }}>
                            <option>None</option>
                            <option>Closed Suite</option>

                        </select>
                    </td>
                </tr>

            </table>
            <br></br>
            <div style={{marginLeft: "27%" }}><input type="submit" onClick={e => { moveToCancelPage(e) }} className=" btn btn-primary btn-md getRoute" /></div>
        </div>

    )

}