import React, { useReducer } from "react";

const Intioalstate = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

const SumItems = (items) => {
  const itemsCounter = items.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const total = items.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  return { itemsCounter, total };
};

const Reducer = (state, action) => {
  console.log(state.checkout);
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems],
        ...SumItems(state.selectedItems),
        checkout: false,
      };

    case "REMOVE_ITEM":
      const newselecteditem = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: [...newselecteditem],
        ...SumItems(newselecteditem),
        checkout: false,
      };
    case "ICREASE":
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexI].quantity++;
      return {
        ...state,
        ...SumItems(state.selectedItems),
        checkout: false,
      };
    case "DECREASE":
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexD].quantity--;
      return {
        ...state,
        ...SumItems(state.selectedItems),
        checkout: false,
      };
    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true,
      };
    case "CLEAR":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: false,
      };
    default:
      return state;
  }
};
export const Betting = React.createContext();
const BettingContext = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, Intioalstate);
  return (
    <div>
      <Betting.Provider value={{ state, dispatch }}>
        {children}
      </Betting.Provider>
    </div>
  );
};

export default BettingContext;
