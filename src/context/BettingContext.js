import React, { useReducer } from "react";
const Intioalstate = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.paload.id)) {
        state.selectedItems.push({
          ...action.paload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems],
      };

    case "REMOVE_ITEM":
      const newselecteditem = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: [...newselecteditem],
      };
    case "ICREASE":
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexI].quantity++;
      return {
        ...state,
      };
    case "DECREASE":
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexI].quantity--;
      return {
        ...state,
      };
    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: false,
      };
    case "CLEAR":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true,
      };
    default:
      return state;
  }
};
export const Betting = React.createContext();
const BettingContext = () => {
  const [state, dispatch] = useReducer(Reducer, Intioalstate);
  return (
    <div>
      <Betting.Provider value={{ state, dispatch }}></Betting.Provider>
    </div>
  );
};

export default BettingContext;
