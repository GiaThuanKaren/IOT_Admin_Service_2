import axios from "axios";
const NetWork = "https://iot-service-1.vercel.app";
const GETALLFOLDER = `${NetWork}/client/listallfolder`;
const GETALLFILE_INFOLDER = `${NetWork}/client/listallfile/`;
export const GetAllFolder = async function(){
    let {data}=await axios.get(GETALLFOLDER);
    return data;
}

export const GetAllFileInFolder = async function(IdFolderParent){
    let { data} = await axios.get(`${GETALLFILE_INFOLDER}${IdFolderParent}`)
    return data;
}