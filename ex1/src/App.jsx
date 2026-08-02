/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Form from "./components/Form";
import Header from "./components/Header/Header";
import Products from "./components/products/Products";
import Button from "./components/Button";
import { usestate, useEffect } from "react";
import "./App.css";

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

const products = [
  {
    title: "Pizza",
    desc: "this is a pizza",
    price: 10,
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Burger",
    desc: "this is a burger",
    price: 12,
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Sushi",
    desc: "this is a sushi",
    price: 15,
    image: "https://via.placeholder.com/150",
  },
];

const handleClick = (name) => console.log(`Hello, ${name}!`);

const App = () => {
  // fetch("https://jsonplaceholder.typicode.com/posts")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data))
  //   .catch((error) => console.log(error));

  const [isloading, setIsloading] = useState(false);
  const [fetchData, setFetchData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        setIsloading(true);
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/photos?_limit=10",
        );
        const data = await res.json();
        if (res.status === 200) {
          setFetchData(data);
          setIsloading(false);
        } else {
          setError("Failed to fetch data");
          setIsloading(false);
        }
      } catch (error) {
        setIsloading(false);
        setError("An error occurred while fetching data");
        console.log(error);
      }
    };
    getData();
  }, []);

  // const [count, setCount] = useState(0);
  // const [firstName, setFirstName] = useState("Mostafa");
  // const [lastName, setLastName] = useState("Allam");
  // const [user, setUser] = useState({ firstName: "Mostafa", lastName: "Allam" });
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState({ user: "", password: "" });
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   console.log(email);
  // };
  console.log(fetchData);
  return (
    <>
      <h1>Hello React</h1>
      {isloading && <p>Loading...</p>}
      {isloading && error && <p>{error}</p>}
      {!isloading && fetchData.length && (
        <ul>
          {fetchData.slice(0, 10).map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <img
                src={item.thumbnailUrl}
                alt={item.title}
                width="150"
                height="150"
              />
            </li>
          ))}
        </ul>
      )}

      {/* <form onSubmit={handleClick}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={email.user}
          onChange={(e) => setEmail({ ...email, user: e.target.value })}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={email.password}
          onChange={(e) => setEmail({ ...email, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form> */}

      {/* <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Hello {name}</h2> */}

      {/* <h1>
        Welcome to the App {user.firstName} {user.lastName}
      </h1>
      <button
        type="button"
        onClick={() =>
          setUser((prev) => {
            return { ...prev, firstName: "Ahmed" };
          })
        }
      >
        Change First Name
      </button>
      <button
        type="button"
        onClick={() =>
          setUser((prev) => {
            return { ...prev, lastName: "Fatouh" };
          })
        }
      >
        Change Last Name
      </button>
      <div>Count: {count}</div>
      <button
        onClick={() =>
          setCount((prev) => {
            return prev + 1;
          })
        }
      >
        Increment
      </button> */}

      {/* <Header />
      <Form />
      <Products products={products} />
      <button type="button" onClick={(e) => handleClick("John")}>
        Click me
      </button> */}

      {/* <Button onClick={() => console.log("Button 1 clicked!")}>
        <span style={{ color: "yellow" }}>Click me</span>
      </Button>
      <br />

      <Button onClick={() => console.log("Button 2 clicked!")}>
        <span style={{ color: "yellow" }}>Click me2</span>
      </Button> */}
    </>
  );
};

export default App;
