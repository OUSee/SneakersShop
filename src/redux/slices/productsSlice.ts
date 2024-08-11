import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosinstanse } from "../axiosInstance";
import { Endpoints, Filter, Sneaker, Status } from "../../types";

type ProductsState = {
    data: any[];
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
            size43: true
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
        filterData(state, { payload }) {
            const convertSizes = (payload: Filter) => {
                let sizes: number[] = [];
                if (payload.sizes.size35) sizes.push(35);
                if (payload.sizes.size36) sizes.push(36);
                if (payload.sizes.size37) sizes.push(37);
                if (payload.sizes.size38) sizes.push(38);
                if (payload.sizes.size39) sizes.push(39);
                if (payload.sizes.size40) sizes.push(40);
                if (payload.sizes.size41) sizes.push(41);
                if (payload.sizes.size42) sizes.push(42);
                if (payload.sizes.size43) sizes.push(43);
                return sizes
            };   

            const filter: Filter = payload;
            const filterSizes = convertSizes(filter)
            const filteredData = state.data.filter((item: Sneaker) => {
                (Number(item.price) < filter.end_price);
                (Number(item.price) > filter.start_price);
                (item.gender == "Женский" && filter.women);
                (item.gender == "Мужской" && filter.men);
                item.sizes.forEach((size) => {
                    if (filterSizes.includes(size)) return true
                });
            });
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
    const data = await axiosinstanse.get(Endpoints.GET_SNEAKERS);
    return data.data
});
