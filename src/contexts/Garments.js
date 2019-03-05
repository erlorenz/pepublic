import React, { createContext, useEffect, useState } from 'react';

export const GarmentsContext = createContext();

export const GarmentsProvider = ({ children }) => {
  // Get initial state from local storage or empty array
  const initialState = () => JSON.parse(localStorage.getItem('garments')) || [];
  const [garments, setGarments] = useState(initialState);

  // Watch for changes in the garments array and save to local storage
  useEffect(() => localStorage.setItem('garments', JSON.stringify(garments)), [
    garments,
  ]);

  // Add a new garment, check if it exists and quantity++ or add new garment into array
  const addGarment = payload => {
    console.log('Adding ', payload);
    if (garments.find(g => g.id === payload.id)) {
      const newGarments = [...garments];

      const index = newGarments.findIndex(garment => garment.id === payload.id);

      newGarments[index].quantity = newGarments[index].quantity + 1;

      setGarments(newGarments);
    } else {
      setGarments(garments.concat({ ...payload, quantity: 1 }));
    }
  };

  // Remove garment, if quantity is > 1 decrement quantity, if 1 remove garment from array
  const removeGarment = payload => {
    if (payload.quantity > 1) {
      const newGarments = [...garments];

      const index = newGarments.findIndex(garment => garment.id === payload.id);
      newGarments[index].quantity = newGarments[index].quantity - 1;

      setGarments(newGarments);
    } else {
      const newGarments = garments.filter(garment => garment.id !== payload.id);

      setGarments(newGarments);
    }
  };

  const clearGarments = () => {
    setGarments([]);
  };

  const totalPrice = () => {
    const initialValue = 0;
    const callback = (acc, garment) => acc + garment.price * garment.quantity;

    return garments.reduce(callback, initialValue);
  };

  return (
    <GarmentsContext.Provider
      value={{
        garments,
        addGarment,
        removeGarment,
        totalPrice,
        clearGarments,
      }}>
      {children}
    </GarmentsContext.Provider>
  );
};
