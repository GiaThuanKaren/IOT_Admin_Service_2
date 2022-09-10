import axios from "axios";
const GETALLFOLDER = "http://localhost:5000/client/listallfolder";
const GETALLFILE_INFOLDER = "http://localhost:5000/client/listallfile/";
export const GetAllFolder = async function(){
    let {data}=await axios.get(GETALLFOLDER);
    return data;
}

export const GetAllFileInFolder = async function(IdFolderParent){
    let { data} = await axios.get(`${GETALLFILE_INFOLDER}${IdFolderParent}`)
    return data;
}