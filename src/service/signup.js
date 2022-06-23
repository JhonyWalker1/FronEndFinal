import { URL_CREATE_USER , URL_IMAGE_PROFILE_USER } from '../enviroments/index';

export const createUser = async (user) => {
    try {
      const response = await fetch(URL_CREATE_USER, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      
      document.querySelector("form").reset();
  
      console.log("success");
      return await response.json();
       
      // Falta limpiar los inputs
      
    } catch (error) {
      console.log(error.message);
    }
};

 export const imageUser = async (image) => {
  try {
    let formData = new FormData();
    formData.append("image", image);
    const response = await fetch(URL_IMAGE_PROFILE_USER,{
      method: "POST",
      body: formData,
    })
    return await response.json();
  }catch(error){
    console.log(error.message);
  }
 }