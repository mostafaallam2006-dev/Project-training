// import { createContext, useContext, useReducer } from "react";
// import { initialState, reducer } from "./Reducer";

// const CountContext = createContext();

// export const CountContextProvider = ({ children }) => {
//   const [count, dispatch] = useReducer(reducer, initialState);

//   return (
//     <CountContext.Provider value={{ count, dispatch }}>
//       {children}
//     </CountContext.Provider>
//   );
// };

// export const useCountContext = () => {
//   return useContext(CountContext);
// };
