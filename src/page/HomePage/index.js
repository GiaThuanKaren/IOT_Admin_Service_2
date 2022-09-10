import { useEffect, useState } from "react";
import { SearchAppBar, SimpleCard } from "../../Components/index";
import axios from "axios";
import { Grid } from "@mui/material";
import { GetAllFolder } from "../../api";

function HomePage() {
  const [properties, SetProperties] = useState({
    dataListFolder: [],
  });
  let FetchApi = async function () {
    let result = await GetAllFolder();
    console.log(result.data);
    SetProperties({
      ...properties,
      dataListFolder: result.data,
    });
  };
  useEffect(() => {
    FetchApi();
  }, []);
  return (
    <>
      {/* <SearchAppBar /> */}
      <Grid container spacing={5}>
        {properties.dataListFolder.length > 0 &&
          properties.dataListFolder.map((item, index) => {
            return (
              <>
                <SimpleCard id={item.id} text={item.name} />
              </>
            );
          })}
      </Grid>
      {/* <img
        src="https://drive.google.com/uc?id=10PQls0hV0JMQ0wAEywtO69yDCtd0sJk0&export=download"
        width={"100px"}
        height={"100px"}
        alt="image"
      /> */}
    </>
  );
}

export default HomePage;
