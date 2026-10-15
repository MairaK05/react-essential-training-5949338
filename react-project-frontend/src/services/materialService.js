import { data } from "react-router-dom";

const API_URL = "/api/machines";

export const getMaterials = async () => {
  const response = await fetch(API_URL);

  if (!response.ok){
    throw new Error("Failed to fetch products");
  }

  return response.json();
};

export const addMaterial = async (material) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(material)
  });

  if (!response.ok){
    throw new Error("Failed to add material");
  }
  
  return response.json();
}