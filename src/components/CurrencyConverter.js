import { useState } from "react";
import axios from 'axios';

import ExchangeRate from "./ExchangeRate";

const CurrencyConverter = () => {
    const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA'];
    const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC');
    const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('BTC');

    const [amount, setAmount] = useState(1);
    const [exchangeRate, setExchangeRate] = useState(0);
    const [result, setResult] = useState(0);

    const [primaryCurrencyExchanged, setPrimaryCurrencyExchanged] = useState('BTC');
    const [secondaryCurrencyExchanged, setSecondaryCurrencyExchanged] = useState('BTC'); 
 
    const convert = () => {
        const options = {
            method: 'GET',
            url: 'https://alpha-vantage.p.rapidapi.com/query',
            params: {from_currency: chosenPrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: chosenSecondaryCurrency},
            headers: {
              'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
              'X-RapidAPI-Key': '8688f6993emsh19a697e12dc4ea7p1051a9jsnfe30076e9c91'
            }
        };
          
        axios.request(options).then((response) => {
          console.log(response.data);
          setExchangeRate(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']);
          setResult(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'] * amount);
          setPrimaryCurrencyExchanged(chosenPrimaryCurrency); //important!
          setSecondaryCurrencyExchanged(chosenSecondaryCurrency);
        }).catch((error) => {
          console.error(error);
        });
    };

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
                                    name="currency-amount-1"
                                    value={amount}
                                    onChange={e => setAmount(e.target.value)}
                                    min="0"
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
                                    name="currency-amount-2"
                                    value={result}
                                    disabled={true}
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

                <button id="convert-button" onClick={convert}>Convert</button>
            </div>
            
            <ExchangeRate
                exchangeRate={exchangeRate}
                chosenPrimaryCurrency={primaryCurrencyExchanged}
                chosenSecondaryCurrency={secondaryCurrencyExchanged}
             />
        </div>
    );
};

export default CurrencyConverter;