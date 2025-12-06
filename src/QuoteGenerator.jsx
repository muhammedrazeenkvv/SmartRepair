import React, { useState } from 'react'

const QuoteGenerator = () => {

  const [quote, setQuote] = useState("")

  function quotes() {
    const quotesArray = ["Every moment matters", "Chase your dreams.", "Adventure awaits"];
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    setQuote(quotesArray[randomIndex]);
  }

  return (
    <div>
      <h1>{quote}</h1>
      <button onClick={quotes}>Generate Quote</button>
    </div>
  )
}

export default QuoteGenerator
