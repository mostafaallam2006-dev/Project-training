import { useEffect, useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import axios from "axios";
import "./App.css";
// import { useCountContext } from "./context/CountContext";
// import { initialState } from "./context/Reducer";
// import ComponentA from "./components/ComponentA";
// import ComponentB from "./components/ComponentB";
// import ComponentC from "./components/ComponentC";

// const reducer = (state, action) => {
//   if (action === "increment") {
//     return state + 1;
//   } else if (action === "decrement") {
//     return state - 1;
//   } else {
//     return (state = 0);
//   }
// };
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return state + action.value;
//     case "decrement":
//       return state - action.value;
//     case "reset":
//       return action.value;
//     default:
//       return state;
//   }
// };
const initialState = {
  loading: false,
  posts: [],
  error: "",
};
// const initialCountOneState = 0;
// const initialCountTwoState = 2;
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PENDING":
      return {
        loading: true,
        error: "",
        posts: [],
      };
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: "",
        posts: action.payload,
      };
    case "FETCH_ERROR":
      return {
        loading: true,
        error: JSON.stringify(action.payload) | "something went wrong!",
        posts: [],
      };
  }
};

const App = () => {
  // const [Count, dispatch] = useReducer(reducer, initialState);
  // const [countOne, dispatch] = useReducer(reducer, initialCountOneState);
  // const [countTwo, dispatchCountTwo] = useReducer(
  //   reducer,
  //   initialCountTwoState,
  // );
  // const { count } = useCountContext();
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const getPost = async () => {
      try {
        dispatch({ type: "FETCH_PENDING" });
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
        );
        if (res.status === 200) {
          dispatch({ type: "FETCH_SUCCESS", payload: res.data });
        } else {
          dispatch({ type: "FETCH_ERROR" });
        }

        console.log(res.data);
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", payload: error });

        console.log(error);
      }
    };
    getPost();
  }, []);

  return (
    <>
      <div>
        <h1>Hello React</h1>
        {state.loading && <p>Loading...</p>}
        {!state.loading && state.error && <p>Error{state.error}</p>}
        {!state.loading && state.posts && (
          <ul>
            {state.posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        )}
      </div>

      {/* <h1>Hello React</h1>
      <div>
        <h1>Count {count} </h1>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div> */}

      {/* <div>
        <h1> Count One {countOne}</h1>
        <button
          type="button"
          onClick={() => dispatch({ type: "increment", value: 1 })}
        >
          Increment
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: "decrement", value: 1 })}
        >
          Decrement
        </button>
        <button
          type="button"
          onClick={() =>
            dispatch({ type: "reset", value: initialCountOneState })
          }
        >
          Reset
        </button>
      </div>

      <div>
        <h1> Count Two {countTwo}</h1>
        <button
          type="button"
          onClick={() => dispatchCountTwo({ type: "increment", value: 1 })}
        >
          Increment
        </button>
        <button
          type="button"
          onClick={() => dispatchCountTwo({ type: "decrement", value: 1 })}
        >
          Decrement
        </button>
        <button
          type="button"
          onClick={() =>
            dispatchCountTwo({ type: "reset", value: initialCountTwoState })
          }
        >
          Reset
        </button>
      </div> */}

      {/* <h1>Count ={count}</h1>
      <button type="button" onClick={() => dispatch("increment")}>
        Increment
      </button>

      <button type="button" onClick={() => dispatch("decrement")}>
        Decrement
      </button>
      <button type="button" onClick={() => dispatch("")}>
        Recet
      </button> */}
    </>
  );
};

export default App;
