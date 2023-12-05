import React, { useContext, useEffect, useState, useRef } from "react";
import Modal from "react-modal";
import "./FilterModal.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { state, useFilter } from "../../Context/filtercontext";
import Slider from "react-slider";
import MultiRangeSlider from "./MultiRangeSlider";
const FilterModal = ({ isOpen, closeModal }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const homeTypeOptions = ["Room", "Apartment", "Duplex", "House", "Basement"];
  const additionalFilterOptions = [
    { id: "Utilities", name: "Utilities" },
    { id: "Pets", name: "Pets Allowed" },
    { id: "Smoking", name: "Smoking Allowed" },
  ];

  const { state, dispatchFilter } = useFilter();
  const [homeType, setHomeType] = useState([]);
  const [additionalFilters, setAdditionalFilters] = useState([]);

  //MinMax
  const [minPriceFilter, setMinPriceFilter] = useState();
  const [maxPriceFilter, setMaxPriceFilter] = useState();
  const maxDigits = 5;

  useEffect(() => {
    if (state.filters.maxPrice !== undefined && state.filters.maxPrice !== 0) {
      setMaxPriceFilter(state.filters.maxPrice);
    }

    if (state.filters.minPrice !== undefined && state.filters.minPrice !== 0) {
      setMinPriceFilter(state.filters.minPrice);
    }
  }, [state]);

  const handleHomeClick = (option) => {
    const isSelected = homeType.includes(option);
    if (isSelected) {
      setHomeType((prevSelected) =>
        prevSelected.filter((selectedOption) => selectedOption !== option)
      );
    } else {
      setHomeType((prevSelected) => [...prevSelected, option]);
    }
  };

  const handleAdditionalFiltersClick = (option) => {
    const isSelected = additionalFilters.includes(option);
    if (isSelected) {
      setAdditionalFilters((prevSelected) =>
        prevSelected.filter((selectedOption) => selectedOption !== option)
      );
    } else {
      setAdditionalFilters((prevSelected) => [...prevSelected, option]);
    }
  };

  const handleFilterChange = (filterName, value) => {
    dispatchFilter({ type: "SET_FILTER", payload: { filterName, value } });
  };

  const handleSeeProperties = () => {
    if (!isHome) {
      navigate("/");
    }
    handleFilterChange("homeType", homeType);
    handleFilterChange("additionalFilters", additionalFilters);
    handleFilterChange("minPrice", minPriceFilter);
    handleFilterChange("maxPrice", maxPriceFilter);

    closeModal();
  };

  const handleResetFilter = () => {
    window.location.reload(true);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="fdiv">
        <button onClick={closeModal}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f459c48c-e42c-4ef5-b713-2ebc581e5eaf?"
            className="img"
          />
        </button>
        <div className="fdiv-2">
          <div className="fdiv-3">Filters</div>
        </div>
        <div className="fdiv-4" />
        <div className="fdiv-5">
          <div className="fdiv-6">
            <b>Price Range</b>
          </div>
          <div className="fdiv-7">Before Fees & Taxes</div>
          <div>
            <MultiRangeSlider
              min={minPriceFilter}
              max={maxPriceFilter}
              onChange={({ min, max }) => {
                setMinPriceFilter(min);
                setMaxPriceFilter(max);
              }}
            ></MultiRangeSlider>
          </div>
          <div className="fdiv-24">
            <div className="fdiv-28">
              <div className="fdiv-29">Min Price</div>
              <label className="fdiv-30">
                $
                <input
                  className="number-input"
                  placeholder="10.00"
                  type="number"
                  value={minPriceFilter}
                  onChange={(e) =>
                    setMinPriceFilter(
                      parseInt(e.target.value.slice(0, maxDigits))
                    )
                  }
                />
              </label>{" "}
            </div>
            <div className="fdiv-28">
              <div className="fdiv-29">Max Price</div>
              <label className="fdiv-30">
                $
                <input
                  className="number-input"
                  placeholder="4000"
                  type="number"
                  value={maxPriceFilter}
                  onChange={(e) =>
                    setMaxPriceFilter(
                      parseInt(e.target.value.slice(0, maxDigits))
                    )
                  }
                />
              </label>
            </div>
          </div>
        </div>
        <div className="fdiv-40">
          <b>Type of Home</b>
        </div>
        <div className="fdiv-41">Select as many you want!</div>{" "}
        <div className="fdiv-42">
          {homeTypeOptions.map((option, index) => (
            <div
              key={index}
              className={`${
                homeType.includes(option.replace(/\s/g, ""))
                  ? "fdiv-45-selected"
                  : "fdiv-45"
              }`}
              onClick={() => handleHomeClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
        <div className="fdiv-40">
          <b>Additional Filters</b>
        </div>{" "}
        <div className="fdiv-41">Utilities & More!</div>{" "}
        <div className="fdiv-42">
          {additionalFilterOptions.map((option, index) => (
            <div
              key={index}
              className={`${
                additionalFilters.includes(option.id)
                  ? "fdiv-45-selected"
                  : "fdiv-45"
              }`}
              onClick={() => handleAdditionalFiltersClick(option.id)}
            >
              {option.name}
            </div>
          ))}
        </div>
        <div className="fdiv-101">
          <div className="fdiv-301">
            <button className="fdiv-button-reset" onClick={handleResetFilter}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/42f16edc-96ae-40cf-a630-0711b2ba6c66?"
                className="reset-button"
              />
              Reset Filters
            </button>
          </div>
          <div className="fdiv-301">
            <button className="fdiv-button" onClick={handleSeeProperties}>
              See Properties
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default FilterModal;
