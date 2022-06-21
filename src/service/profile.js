const URLPROFILE = 'http://localhost:8000/api/v1/tour/clientedetalle';
const URL_ORDER_USER = 'http://localhost:8000/api/v1/tour/cliente';

export const getUserDetail = async (id) => {
    try{
        const response = await fetch(`${URLPROFILE}/${id}`);
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error.message);
    }
};

export const getOrderUser = async (id) => {
    try{
        const response = await fetch(`${URL_ORDER_USER}/${id}/compra`);
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error.message);
    }
}