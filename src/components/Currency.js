import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency } = useContext(AppContext);
    const { selectedCurrency, setSelectedCurrency } = useState(currency);

    return (
        <div>
            <select className="selectpicker" data-style="btn-success" onChange={(e) => setSelectedCurrency(e.target.value)}>
                <option defaultValue>Currency ({selectedCurrency})</option>
                <option value="Dollars" name="dollars" title="Currency ($ Dollar)">$ Dollar</option>
                <option value="Pounds" name="pounds" title="Currency (£ Pound)">£ Pound</option>
                <option value="Euros" name="euros" title="Currency (€ Euro)">€ Euro</option>
                <option value="Ruppees" name="ruppees" title="Currency (₹ Ruppee)">₹ Ruppee</option>
            </select>
        </div>
    )
}

export default Currency;