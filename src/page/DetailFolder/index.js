import { ImageList, ImageListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetAllFileInFolder } from "../../api";

function DetailFolderPage() {
  const { id } = useParams();
  const [data, SetData] = useState([]);
  const FetchApi = async function () {
    let result = await GetAllFileInFolder(id);
    console.log(result.data);
    SetData(result.data);
  };
  useEffect(() => {
    FetchApi();
  }, []);
  return (
    <>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {data.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={`${item.webContentLink}`}
              // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.name}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}

export default DetailFolderPage;
