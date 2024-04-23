import React from "react";
import MyCounter from "./Components/mycounter/myCounter";

// First create context
export const MyContext = React.createContext();


function App() {
  return (
    <div className="App">
      <MyCounter />
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <MyContext.Provider value={"The data you want to pass"}>
//         <Component1 />
//       </MyContext.Provider>
//     </div>
//   );
// }

export default App;
