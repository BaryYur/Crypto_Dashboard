const ExchangeRate = ({exchangeRate, chosenPrimaryCurrency, chosenSecondaryCurrency}) => {
    return (
        <div className="exchange-rate">
            <h3>Exchange Rate</h3>
            <p>{exchangeRate}</p>
            <p>{chosenPrimaryCurrency} to {chosenSecondaryCurrency}</p>
        </div>
    );
};

export default ExchangeRate;