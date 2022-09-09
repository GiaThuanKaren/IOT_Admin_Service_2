import { useEffect, useState } from "react";
import "./App.css";
import { SearchAppBar } from "./Components";

function App() {
  const [properties , SetProperties ]= useState({
    dataListFolder:[]
  })
  
  useEffect(()=>{

  },[])
  return (
    <>
      <SearchAppBar />
      {/* <img
        src="https://drive.google.com/uc?id=10PQls0hV0JMQ0wAEywtO69yDCtd0sJk0&export=download"
        width={"100px"}
        height={"100px"}
        alt="image"
      /> */}
    </>
  );
}

export default App;
