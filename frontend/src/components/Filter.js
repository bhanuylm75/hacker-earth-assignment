import { useState } from "react";


const Filter = () => {
  const [filters, setFilters] = useState({
    title: '',
    description: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    minPrice: '',
    maxPrice: '',
    numBedrooms: '',
    numBathrooms: ''
  });
  return (
    <div className="filter-container">
      <div className="filter-group">
        <input
          type="text"
          name="city"
          placeholder="City"
          value={filters.city}
          className="filter-input"
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={filters.state}
          
          className="filter-input"
        />
        <input
          type="text"
          name="zipCode"
          placeholder="Zip Code"
          value={filters.zipCode}
          className="filter-input"
        />
      </div>
      
    </div>
  )
}

export default Filter
