import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosinstanse } from "../axiosInstance";
import { Endpoints, Status } from "../../types";
import axios from "axios";

type ProductsState = {
    data: any[];
    filters: {
        size: string[];
        priceStart: string;
        priceEnd: string;
    };
    status: Status;
};

const initialState: ProductsState = {
    data: [],
    filters: {
        size: [],
        priceStart: "",
        priceEnd: "",
    },
    status: Status.IDLE,
};

export const ProductsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        filterData(state, { payload }) {
            const filteredData = state.data.filter(payload);
            state.data = filteredData;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.status = Status.LOADING;
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = Status.SUCSESS;
        });
        builder.addCase(getProducts.rejected, (state) => {
            state.status = Status.ERROR;
        });
    },
});

export const getProducts = createAsyncThunk("sneakers", async () => {
    const data = await axios.get("https://3afd4890a6a7c0d4.mokky.dev/sneakers");
    return data.data
});
