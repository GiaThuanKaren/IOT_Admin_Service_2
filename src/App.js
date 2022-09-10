import { useEffect, useState } from "react";
import "./App.css";
import { SearchAppBar, SimpleCard } from "./Components";
import axios from "axios";
import { Grid } from "@mui/material";
import { GetAllFolder } from "./api";
import { Route, Routes } from "react-router-dom";
import { DetailFolderPage, HomePage } from "./page";
function App() {
  
  return (
    <>
      <SearchAppBar />
      <Routes>
        <Route path="/detail/:id" element={<DetailFolderPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      {/* <Grid container spacing={5}>
        {properties.dataListFolder.length > 0 &&
          properties.dataListFolder.map((item, index) => {
            return (
              <>
                <SimpleCard text={item.name} />
              </>
            );
          })}
      </Grid> */}
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
