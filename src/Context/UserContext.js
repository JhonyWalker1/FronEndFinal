import { createContext, useState } from "react";

export const UserContext = createContext();

// TODO Context necista un Provider el cual se encargue de poder
// guardar y retornar la informacion que guardemos en context
export const UserProvider = (props) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket")) ?? []
  );

  const storeUser = (dataUser) => {
    localStorage.setItem("user", JSON.stringify(dataUser));
    setUser(dataUser);
  };

   const storeBasketTour = (product) => {
    const dataToStorage = [...basket, product];
    setBasket(dataToStorage);
    localStorage.setItem("basket", JSON.stringify(dataToStorage));
};



  // vamos a guardar el objeto de cada producto
  const storeBasket = (product) => {
    // basket sera un array de objetos
    // vamos a darle la propiedad quantity a lo que es product
    product.quantity = 1;
    setBasket([...basket, product]);
    localStorage.setItem("basket", JSON.stringify([...basket, product]));
    // if (basket === null) {
    //   const dataToStorage = [product];
    //   setBasket(dataToStorage);
    //   localStorage.setItem("basket", JSON.stringify(dataToStorage));
    // } else {
    //   const dataToStorage = [...basket, product];
    //   setBasket(dataToStorage);
    //   localStorage.setItem("basket", JSON.stringify(dataToStorage));
    // }
  };

  const deleteElementFromBasket = (tour_id)=> {
    const products= basket.filter((bas)=> bas.tour_id !== tour_id);
    setBasket(products);
    localStorage.setItem("basket",JSON.stringify(products));
};

const addOrRemoveProduct = (tour_id,add) => {
  const products = basket.map((product)=> {
      if (product.tour_id ===tour_id){
          if(add){
              product.quantity += 1;
          } else {
            if (product.quantity > 1){
              product.quantity -= 1;
            }
          }
      }

      return {
        ...product,
    };
});
setBasket(products);
localStorage.setItem("basket",JSON.stringify(products));
};

  return (
    <UserContext.Provider
      value={{
        user,
        storeUser,
        basket,
        storeBasket,
        deleteElementFromBasket,
        addOrRemoveProduct,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
