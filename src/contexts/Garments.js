import React, { createContext, useEffect, useState } from 'react';

export const GarmentsContext = createContext();

export const GarmentsProvider = ({ children }) => {
  const initialState = () => JSON.parse(localStorage.getItem('garments')) || [];
  const [garments, setGarments] = useState(initialState);

  useEffect(() => localStorage.setItem('garments', JSON.stringify(garments)), [
    garments,
  ]);

  const addGarment = payload => {
    if (garments.findIndex(garment => garment.id === payload.id) >= 0) {
      const newGarments = [...garments];

      const index = newGarments.findIndex(garment => garment.id === payload.id);

      newGarments[index].quantity = newGarments[index].quantity + 1;

      setGarments(newGarments);
    } else {
      setGarments(garments.concat({ ...payload, quantity: 1 }));
    }
    console.log('Garment added!', garments);
  };

  const removeGarment = payload => {
    if (payload.quantity > 1) {
      const newGarments = [...garments];

      const index = newGarments.findIndex(garment => garment.id === payload.id);
      newGarments[index].quantity = newGarments[index].quantity - 1;

      setGarments(newGarments);
    } else {
      console.log(payload);
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
