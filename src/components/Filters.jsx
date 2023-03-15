import { useState, useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export const Filters = () => {
  const { filters, setFilters } = useFilters()


  const minPriceFilteredId = useId()
  const categoryFilteredId = useId()

  const handleChangePrice = (event) => {


    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
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
          value={filters.minPrice}
        />
        <span>$ {filters.minPrice}</span>
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