import data from "../data/data.json";

export const loandingData =()=>{
    const dataTemp = localStorage.getItem('data');
    
    let dataReturn = JSON.parse(dataTemp);
    if(dataTemp === null){
        dataReturn = data;
        localStorage.setItem('data',JSON.stringify(data));
    }
    return dataReturn;
};