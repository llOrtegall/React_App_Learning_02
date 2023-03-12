import { useState, useId } from 'react'
import './Filters.css'

export const Filters = ({ onChange }) => {
  const [minPrice, setMinPrice] = useState(0)
  const minPriceFilteredId = useId()
  const categoryFilteredId = useId()

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
        <label htmlFor={minPriceFilteredId}> Precio a partir De: </label>
        <input
          type="range"
          id={minPriceFilteredId}
          min={'0'}
          max={'1000'}
          onChange={handleChangePrice}
        />
        <span>$ {minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilteredId}> Categoría </label>
        <select id={categoryFilteredId} onChange={handleChangeCategory}>
          <option value="All">Todas</option>
          <option value="lasptops">Portátiles</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  )
}