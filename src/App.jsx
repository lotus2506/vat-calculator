import { useState } from 'react'
import './App.css'

function App() {
  const [price, setPrice] = useState(0)
  const [discount, setDiscount] = useState(0)
  const VATRATE = 0.07

  const vat = price * VATRATE
  const discountAmount = price * (discount / 100)
  const total = (price + vat - discountAmount).toFixed(2)

  function handlePriceChange(event) {
    const p = parseFloat(event.target.value) || 0
    setPrice(p)
  }

  function handleDiscountChange(event) {
    const d = parseFloat(event.target.value) || 0
    setDiscount(d)
  }

  return (
    <>
      <h2>VAT Calculator</h2>
      <div className="card">
        <label>
          Price:
          <input
            type="number"
            placeholder="Enter price"
            onChange={handlePriceChange}
          />
        </label>
        <br />

        <label>
          Discount:
          <input
            type="number"
            placeholder="Enter discount"
            onChange={handleDiscountChange}
          />
        </label>
        <br />

        <p>Price: {price}</p>
        <p>VAT Rate: {(VATRATE * 100).toFixed(2)}%</p>
        <p>VAT: {vat.toFixed(2)}</p>
        <p>Discount: {discount}%</p>
        <p><strong>Total Amount: {total}</strong></p>
      </div>
    </>
  )
}

export default App
