import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const [ selectedCurrency, setSelectedCurrency ] = useState("£ Pound");

    const handleChange = (newCurrency) => {
        setSelectedCurrency(newCurrency);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency[0]
        });
    };

    return (
        <div clasName="dropdown">
            <button type="button" className="btn btn-success  btn-lg dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{background: "#98FF98", border: "none"}}>
            Currency ({selectedCurrency})
            </button>
            <ul className="dropdown-menu dropdown-menu-start" style={{background: "#B2FFB2"}}>
                <li><button className="dropdown-item" type="button" onClick={() => handleChange("$ Dollar")}>$ Dollar</button></li>
                <li><button className="dropdown-item" type="button" onClick={() => handleChange("£ Pound")}>£ Pound</button></li>
                <li><button className="dropdown-item" type="button" onClick={() => handleChange("€ Euro")}>€ Euro</button></li>
                <li><button className="dropdown-item" type="button" onClick={() => handleChange("₹ Ruppee")}>₹ Ruppee</button></li>

            </ul>
        </div>
    )
}

export default Currency;