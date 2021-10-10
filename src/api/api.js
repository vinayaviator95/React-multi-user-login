import axios from "axios";
// import React from "react";

export const fetchData = async (userId) => {
  try {
    const value = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
    );
    return value.data;
  } catch (error) {
    console.log(error);
  }
};
