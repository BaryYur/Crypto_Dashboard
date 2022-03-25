const ExchangeRate = ({exchangeRate, chosenPrimaryCurrency, chosenSecondaryCurrency}) => {
    let exString = exchangeRate.toString();
    let rate;
    if (Number(exString.split('.')[1]) === 0) {
        rate =  exString.split('.')[0];
    } else {
        rate = exString.split('.').join('.');
    };

    return (
        <div className="exchange-rate">
            <h3>Exchange Rate</h3>
            <p>{rate}</p>
            <p>{chosenPrimaryCurrency} to {chosenSecondaryCurrency}</p>
        </div>
    );
};

export default ExchangeRate;
