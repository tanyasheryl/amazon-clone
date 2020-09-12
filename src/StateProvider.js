import React, { createContext, useContext, useReducer } from "react";

// Prepares data layer

export const StateContext = createContext();

// Wrap our App and provide the Data Layer

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the adat layer
export const useStateValue = () => useContext(StateContext);
