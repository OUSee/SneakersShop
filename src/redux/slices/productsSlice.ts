import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosinstanse } from "../axiosInstance";
import { Endpoints, Filter, Sneaker, Status } from "../../types";

type ProductsState = {
    data: Sneaker[];
    filters: Filter;
    status: Status;
};

const initialState: ProductsState = {
    data: [],
    filters: {
        men: true,
        women: true,
        sizes: {
            size35: true,
            size36: true,
            size37: true,
            size38: true,
            size39: true,
            size40: true,
            size41: true,
            size42: true,
            size43: true,
        },
        start_price: 0,
        end_price: 26000,
    },
    status: Status.IDLE,
};

export const ProductsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setData(state, action) {
            state.data = action.payload as Sneaker[]
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
    const data = await axiosinstanse.get(Endpoints.GET_SNEAKERS);
    return data.data;
});
