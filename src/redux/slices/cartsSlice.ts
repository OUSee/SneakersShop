import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosinstanse } from "../axiosInstance";
import { Cart, Endpoints, PostCart, Status } from "../../types";


type CartState = {
    data: Cart;
    status: Status;
};


const initialState: CartState = {
    data: { uid: "", items: [] , id: undefined},
    status: Status.LOADING,
};

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCart.pending, (state) => {
            state.status = Status.LOADING;
        });
        builder.addCase(getCart.fulfilled, (state, action) => {
            state.status = Status.SUCSESS;
            state.data = action.payload;  
        });
        builder.addCase(getCart.rejected, (state) => {
            state.status = Status.ERROR;
            alert("ERROR GETTING CART" + state.status);
        });
        builder.addCase(updateCart.fulfilled, (state, action) => {
            console.log(state.data)
            state.status = Status.SUCSESS;
            state.data = action.payload;
        })
        builder.addCase(updateCart.rejected, (state) => {
            state.status = Status.ERROR;
            alert("ERROR UPDATING CART :" + state.status);
        });
        builder.addCase(postCart.fulfilled, (state, action) => {
            state.status = Status.SUCSESS;
            state.data = action.payload;
        });
        builder.addCase(postCart.rejected, (state) => {
            state.status = Status.ERROR;
            alert("ERROR POSTING CART" + state.status);
        });

    },
});

export const updateCart = createAsyncThunk("updateCart", async (cart: Cart) => {
    const data = await axiosinstanse.patch(Endpoints.GET_CART_BY_UID + cart.uid, cart);
    return data.data;
}); 

export const postCart = createAsyncThunk("postCart", async (cart: PostCart) => {
    const data = await axiosinstanse.post(Endpoints.CREATE_CART, cart);
    return data.data;
});

export const getCart = createAsyncThunk("getCart", async (uid: string) => {
    const { data } = await axiosinstanse.get(Endpoints.GET_CART_BY_UID + uid);
    return data;
});
