import { API_URL } from "../config.js";
const userData = JSON.parse(localStorage.getItem("userData"));

export const getProducts = async (endpoint) => {
  try {
    const rawResponse = await fetch(API_URL + endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const products = await rawResponse.json();
    localStorage.setItem("products", JSON.stringify(products));
  } catch (error) {
    console.error(error);
  }
};

export const sendSale = async (endpoint, data) => {
  try {
    const rawResponse = await fetch(API_URL + endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: data.user,
        total: data.total,
        products: data.products,
      }),
    });

    const response = await rawResponse.json();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

/**ADMINISTRACIÓN */

export const createProduct = async (data) => {
  try {
    const rawResponse = await fetch(API_URL+"products/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-access-token": userData.token,
      },
      body: JSON.stringify({
        name: data.name,
        price: data.price,
        availability: data.availability,
        category: data.category
      }),
    });
    return await rawResponse.json();
  } catch (error) {
    console.error(error);
  }
};


export const updateProduct = async (data) => {
  try {
    const rawResponse = await fetch(API_URL+"products/"+data.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-access-token": userData.token,
      },
      body: JSON.stringify({
        name: data.name,
        price: data.price,
        availability: data.availability,
        category: data.category
      }),
    });

    console.log(rawResponse)
    return await rawResponse.json();
  } catch (error) {
    console.error(error);
  }
};


export const deleteProduct = async (id) => {
  try {
    const rawResponse = await fetch(API_URL+"products/"+id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-access-token": userData.token,
      }
    });
    return await rawResponse.json();
  } catch (error) {
    console.error(error);
  }
};


/** GERENCIA */

export const getReport = async (dateRange) => {
  try {
    const rawResponse = await fetch("http://localhost:3000/api/sales/period", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-access-token": userData.token,
      },
      body: JSON.stringify({
        from: dateRange.from,
        to: dateRange.to
      }),
    });
    return await rawResponse.json();
  } catch (error) {
    console.error(error);
  }
};

export const getTopProducts = async () => {
  try {
    const rawResponse = await fetch(API_URL + "products/topProducts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-access-token": userData.token,
      },
    });
    return await rawResponse.json();
  } catch (error) {
    console.error(error);
  }
};

export const getProductSales = async (id) => {
  try {
    const rawResponse = await fetch(API_URL + "products/" + id + "/sales", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    return await rawResponse.json();
  } catch (error) {
    console.error(error);
  }
};
