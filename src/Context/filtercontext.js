import React, { createContext, useReducer, useContext, useEffect } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const initialState = {
    filters: {
      location: "",
      bath: 0,
      bed: 0,
      minPrice: 0,
      maxPrice: 0,
      homeType: [],
      additionalFilters: [],
    },
  };

  const filterReducer = (state, action) => {
    switch (action.type) {
      case "SET_FILTER":
        return {
          ...state,
          filters: {
            ...state.filters,
            [action.payload.filterName]: action.payload.value,
          },
        };
      default:
        return state;
    }
  };

  const [state, dispatchFilter] = useReducer(filterReducer, initialState);

  return (
    <FilterContext.Provider value={{ state, dispatchFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
