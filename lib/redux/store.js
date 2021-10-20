import { configureStore } from "@reduxjs/toolkit";
import missingPet from "./pet-reducer";

export default configureStore({
  reducer: { missingPet },
  devTools: process.env.NODE_ENV !== "production",
});
