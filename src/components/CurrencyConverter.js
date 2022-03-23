import { useState } from "react";

import ExchangeRate from "./ExchangeRate";

const CurrencyConverter = () => {
    const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA'];
    const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC');
    const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('BTC');
    const [amount, setAmount] = useState(1);

    return (
        <div className="currency-converter">
            <h2>Currency converter </h2>

            <div className="input-box">
                 <table>
                    <tbody>
                        <tr>
                            <td>Primary Currency:</td>
                            <td>
                                <input
                                    type="number"
                                    name="currency-ampunt-1"
                                    value={amount}
                                    onChange={e => setAmount(e.target.value)}
                                />
                            </td>
                            <td>
                                <select 
                                    value={chosenPrimaryCurrency} 
                                    name="currnecy-option-1" 
                                    className="currency-options"
                                    onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                                >
                                    {currencies.map((currency, _index) => (
                                        <option key={_index}>{currency}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td>Secondary Currency:</td>
                            <td>
                                <input
                                    type="number"
                                    name="currency-ampunt-2"
                                    value={""}
                                />
                            </td>
                            <td>
                                <select 
                                    value={chosenSecondaryCurrency} 
                                    name="currnecy-option-2" 
                                    className="currency-options"
                                    onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                                >
                                    {currencies.map((currency, _index) => (
                                        <option key={_index}>{currency}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <ExchangeRate />
        </div>
    );
};

export default CurrencyConverter;