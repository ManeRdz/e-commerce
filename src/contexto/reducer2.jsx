import React from "react";

const reducer2 = (state = [], action) => {
  switch (action.type) {
    case "incart":
      return [
        ...state,
        {
          name: action.payload.name,
          price: action.payload.price,
          image: action.payload.image,
          cantidad: action.payload.cantidad,
          id: action.payload.id,
        },
      ];
    case "outcart":
      return state.filter((el) => el.name !== action.payload.name);
    case "modify":
      return state.map((item) =>
        item.name === action.payload.name
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
    case "minus":
      return state.map((item) =>
        item.name === action.payload.name
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      );
  }
};

export default reducer2;
