import React from "react";

import NewsFeed from "./components/NewsFeed";
import CurrencyConverter from "./components/CurrencyConverter";

function App() {
  return (
    <React.Fragment>
        <h1>Crypoto Dashboard</h1>
        <div className="app">
            <CurrencyConverter />
            <NewsFeed />
        </div>
    </React.Fragment>
  );
}

export default App;
