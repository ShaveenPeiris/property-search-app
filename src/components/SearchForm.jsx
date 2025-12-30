import { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import Slider from "rc-slider";
import "react-datepicker/dist/react-datepicker.css";
import "rc-slider/assets/index.css";
import "../styles/SearchForm.css";

export default function SearchForm({ onSearch }) {
  const [formData, setFormData] = useState({
    type: null,
    priceRange: [0, 1000000],
    bedroomRange: [0, 5],
    dateFrom: null,
    dateTo: null,
    postcode: ""
  });

  const propertyTypeOptions = [
    { value: "", label: "Any Type" },
    { value: "house", label: "House" },
    { value: "flat", label: "Flat" },
    { value: "apartment", label: "Apartment" },
    { value: "cottage", label: "Cottage" },
    { value: "bungalow", label: "Bungalow" }
  ];

  const postcodeOptions = [
    { value: "BR1", label: "BR1 - Bromley" },
    { value: "NW1", label: "NW1 - North West London" },
    { value: "SE1", label: "SE1 - South East London" },
    { value: "E14", label: "E14 - Canary Wharf" },
    { value: "KT3", label: "KT3 - New Malden" },
    { value: "HA2", label: "HA2 - Harrow" },
    { value: "RH5", label: "RH5 - Dorking" },
    { value: "SW1", label: "SW1 - Westminster" },
    { value: "W1", label: "W1 - West End" },
    { value: "EC1", label: "EC1 - Clerkenwell" }
  ];

  const handleTypeChange = (selectedOption) => {
    setFormData(prev => ({ ...prev, type: selectedOption }));
  };

  const handlePriceChange = (value) => {
    setFormData(prev => ({ ...prev, priceRange: value }));
  };

  const handleBedroomChange = (value) => {
    setFormData(prev => ({ ...prev, bedroomRange: value }));
  };

  const handleDateFromChange = (date) => {
    setFormData(prev => ({ ...prev, dateFrom: date }));
  };

  const handleDateToChange = (date) => {
    setFormData(prev => ({ ...prev, dateTo: date }));
  };

  const handlePostcodeChange = (selected) => {
    setFormData(prev => ({
      ...prev,
      postcode: selected ? selected.value : ""
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchParams = {
      type: formData.type ? formData.type.value : "",
      minPrice: formData.priceRange[0] > 0 ? formData.priceRange[0] : "",
      maxPrice: formData.priceRange[1] < 1000000 ? formData.priceRange[1] : "",
      minBedrooms:
        formData.bedroomRange[0] > 0 ? formData.bedroomRange[0] : "",
      maxBedrooms:
        formData.bedroomRange[1] < 5 ? formData.bedroomRange[1] : "",
      dateFrom: formData.dateFrom
        ? formData.dateFrom.toISOString().split("T")[0]
        : "",
      dateTo: formData.dateTo
        ? formData.dateTo.toISOString().split("T")[0]
        : "",
      postcode: formData.postcode
    };

    onSearch?.(searchParams);
  };

  const handleReset = () => {
    setFormData({
      type: null,
      priceRange: [0, 1000000],
      bedroomRange: [0, 5],
      dateFrom: null,
      dateTo: null,
      postcode: ""
    });
  };

  const customSelectStyles = {
    control: (base, state) => ({
      ...base,
      padding: "0.5rem",
      borderRadius: "12px",
      border: state.isFocused ? "2px solid #3d7a5f" : "2px solid #e0e6ed",
      boxShadow: state.isFocused
        ? "0 0 0 4px rgba(61, 122, 95, 0.1)"
        : "none",
      "&:hover": { borderColor: "#3d7a5f" },
      backgroundColor: "white",
      minHeight: "52px"
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? "#3d7a5f"
        : state.isFocused
        ? "rgba(61, 122, 95, 0.1)"
        : "white",
      color: state.isSelected ? "white" : "#2c3e50",
      padding: "12px",
      cursor: "pointer",
      "&:active": { backgroundColor: "#2c5f4e" }
    }),
    menu: (base) => ({
      ...base,
      borderRadius: "12px",
      boxShadow: "0 4px 20px rgba(0,0,0,.15)",
      overflow: "hidden"
    })
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="form-group full-width">
        <label>
          <span>Property Type</span>
          <Select
            value={formData.type}
            onChange={handleTypeChange}
            options={propertyTypeOptions}
            styles={customSelectStyles}
            placeholder="Select property type..."
            isClearable
            className="react-select-container"
            classNamePrefix="react-select"
          />
        </label>
      </div>

      <div className="form-group full-width">
        <label>
          <span>
            Price Range: £
            {formData.priceRange[0].toLocaleString()} – £
            {formData.priceRange[1].toLocaleString()}
          </span>

          <div className="slider-container">
            <Slider
              range
              min={0}
              max={1000000}
              step={10000}
              value={formData.priceRange}
              onChange={handlePriceChange}
              styles={{
                track: { backgroundColor: "#3d7a5f", height: 8 },
                rail: { backgroundColor: "#e0e6ed", height: 8 },
                handle: {
                  borderColor: "#3d7a5f",
                  backgroundColor: "white",
                  boxShadow: "0 2px 8px rgba(61,122,95,.3)",
                  width: 24,
                  height: 24,
                  marginTop: -8
                }
              }}
            />

            <div className="slider-labels">
              <span>£0</span>
              <span>£1,000,000</span>
            </div>
          </div>
        </label>
      </div>

      <div className="form-group full-width">
        <label>
          <span>
            Bedrooms: {formData.bedroomRange[0]} – {formData.bedroomRange[1]}
          </span>

          <div className="slider-container">
            <Slider
              range
              min={0}
              max={5}
              step={1}
              value={formData.bedroomRange}
              onChange={handleBedroomChange}
              marks={{
                0: "0",
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5+"
              }}
              styles={{
                track: { backgroundColor: "#3d7a5f", height: 8 },
                rail: { backgroundColor: "#e0e6ed", height: 8 },
                handle: {
                  borderColor: "#3d7a5f",
                  backgroundColor: "white",
                  boxShadow: "0 2px 8px rgba(61,122,95,.3)",
                  width: 24,
                  height: 24,
                  marginTop: -8
                },
                dot: {
                  borderColor: "#e0e6ed",
                  backgroundColor: "white",
                  width: 12,
                  height: 12,
                  bottom: -2
                }
              }}
            />
          </div>
        </label>
      </div>

      <div className="form-group">
        <label>
          <span>Date Added From</span>
          <DatePicker
            selected={formData.dateFrom}
            onChange={handleDateFromChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select start date..."
            maxDate={formData.dateTo || new Date()}
            isClearable
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            className="date-picker-input"
          />
        </label>
      </div>

      <div className="form-group">
        <label>
          <span>Date Added To</span>
          <DatePicker
            selected={formData.dateTo}
            onChange={handleDateToChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select end date..."
            minDate={formData.dateFrom}
            maxDate={new Date()}
            isClearable
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            className="date-picker-input"
          />
        </label>
      </div>

      <div className="form-group full-width">
        <label>
          <span>Postcode Area</span>
          <Select
            value={
              postcodeOptions.find(
                (opt) => opt.value === formData.postcode
              ) || null
            }
            onChange={handlePostcodeChange}
            options={postcodeOptions}
            styles={customSelectStyles}
            placeholder="Search or select postcode..."
            isClearable
            isSearchable
            className="react-select-container"
            classNamePrefix="react-select"
          />
        </label>
      </div>

      <div className="form-actions">
        <button type="submit" className="submit-btn">
          🔍 Search Properties
        </button>
        <button type="button" className="reset-btn" onClick={handleReset}>
          🔄 Reset Filters
        </button>
      </div>
    </form>
  );
}