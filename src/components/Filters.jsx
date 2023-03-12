import { useState } from 'react'
import './Filters.css'

export const Filters = ({ onChange }) => {
  const [minPrice, setMinPrice] = useState(0)

  const handleChangePrice = (event) => {
    setMinPrice(event.target.value)
    onChange(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    onChange(prevState => ({
      ...prevState, minPrice: event.target.value
    }))
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor="price"> Precio a partir De: </label>
        <input
          type="range"
          id="price"
          min={'0'}
          max={'1000'}
          onChange={handleChangePrice}
        />
        <span>$ {minPrice}</span>
      </div>

      <div>
        <label htmlFor="category"> Categoría </label>
        <select id="category" onChange={handleChangeCategory}>
          <option value="All">Todas</option>
          <option value="lasptops">Portátiles</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  )
}