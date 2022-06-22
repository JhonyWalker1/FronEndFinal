import { URL_BACKEND } from "../enviroments/index";

const URL = "https://appbacktour.herokuapp.com/tour";
const URL_DETALLE_TOUR = "https://appbacktour.herokuapp.com/tourdetalle";



export const getDataFromTour = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getDataFromTourDetail = async (id) => {
  try {
    const reposnse = await fetch(`${URL_DETALLE_TOUR}/${id}`);
    const data = await reposnse.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const postCompraTourService = async (compra) => {
  const response = await fetch(`${URL_BACKEND}/rutanecesa`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(compra),
  });
  const data = await response.json();
  return data;
};
