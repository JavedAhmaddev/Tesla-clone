import { createSlice } from "@reduxjs/toolkit";

const initialState={
        cars:["Model Z" , "Model 3", " Model S", "Model Y"]
}

const carSlice=createSlice({
    name:"carssss",
    initialState,
    reducers:{}
})

export const selectCars=State=> State.car.cars
export default carSlice.reducer;