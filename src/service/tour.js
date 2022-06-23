import { URL_BACKEND_POST_COMPRA , URL_ALL_TOUR , URL_DETALLE_TOUR , URL_TOUR_POR_REGION } from "../enviroments/index";

export const getDataFromTour = async () => {
  try {
    const response = await fetch(URL_ALL_TOUR);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getDataTourPorRegion = async (id) => {
  try{
    const response = await fetch(`${URL_TOUR_POR_REGION}/${id}/tour`);
    const data = await response.json();
    return data;
  }catch(error){
    console.log(error.message);
  }
}


export const getDataFromTourDetail = async (id) => {
  try {
    const response = await fetch(`${URL_DETALLE_TOUR}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};



export const postCompraTourService = async (compra) => {
  const response = await fetch(`${URL_BACKEND_POST_COMPRA}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(compra),
  });
  const data = await response.json();
  return data;
};
