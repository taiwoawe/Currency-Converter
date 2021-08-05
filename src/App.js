import React, { useState } from "react";
import data from "./data";

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [currencies, setCurrencies] = useState({});

  async function fetchData(e) {
    e.preventDefault();
    const res = await fetch(
      `https://api.currencyscoop.com/v1/convert?api_key=50708f39a8c3b7a92ffc1d1d9b97a46b&from=${from}&to=${to}&amount=${amount}`
    );
    let newData = await res.json();
    const { response } = newData;
    setCurrencies(response);
    console.log(currencies);
    setAmount("");
    setFrom("");
    setTo("");
  }

  return (
    <div className="container">
      <article className="content">
        <h1> Currency Converter</h1>
        <form className="form-control">
          <div>
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="from">From:</label>
            <select value={from} onChange={(e) => setFrom(e.target.value)}>
              {data.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
            <label htmlFor="to">To:</label>
            <select value={to} onChange={(e) => setTo(e.target.value)}>
              {data.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
          <button onClick={fetchData} type="submit" className="btn">
            Submit
          </button>
          {
            <div className="result">
              <h3>{currencies.value}</h3>
            </div>
          }
        </form>
      </article>
    </div>
  );
}

export default App;
