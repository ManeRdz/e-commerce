import React from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { logeado: true };
    case "logout":
      return { logeado: false };
  }
};

export default reducer;
