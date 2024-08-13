import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosinstanse } from "../axiosInstance";
import { Cart, Endpoints, Status } from "../../types";


type CartState = {
    data: Cart;
    status: Status;
};


const initialState: CartState = {
    data: { uid: "", items: [] },
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

        builder.addCase(getCart.fulfilled, (state, { payload }) => {
            if (payload) {
                state.status = Status.SUCSESS;
                state.data = payload as Cart;
            }
            else console.log('idk')
        });
           
        
        builder.addCase(getCart.rejected, (state) => {
            state.status = Status.ERROR;
            alert("ERROR GETTING CART" + state.status);
        });

        builder.addCase(updateCart.fulfilled, (state, {payload}) => {
            if (payload) {
                state.status = Status.SUCSESS;
                state.data = payload as Cart
            }
        });

        builder.addCase(updateCart.rejected, (state) => {
            state.status = Status.ERROR;
            alert("ERROR UPDATING CART :" + state.status);
        });

        builder.addCase(postCart.fulfilled, (state, {payload}) => {
            if (payload) {
                state.status = Status.SUCSESS;
                state.data = payload as Cart
            } else {
                alert('wrong data at post')
            }
        });

        builder.addCase(postCart.rejected, (state) => {
            state.status = Status.ERROR;
            alert("ERROR POSTING CART" + state.status);
        });

    },
});

export const updateCart = createAsyncThunk("updateCart", async (cart: Cart) => {
    const { data } = await axiosinstanse.patch(Endpoints.GET_CART_BY_UID + cart.uid, [cart]);
    const acseptableData: Cart = data[0];
    if (acseptableData != undefined) {
        return acseptableData;
    }
}); 

export const postCart = createAsyncThunk("postCart", async ({ uid, items }: Cart) => {
    const { data } = await axiosinstanse.post(Endpoints.CREATE_CART, {
        uid: uid,
        items: items,
    });
    const acseptableData: Cart = data;
    if (acseptableData != undefined) {
        return acseptableData;
    }
});

export const getCart = createAsyncThunk("getCart", async (uid: string) => {
    const { data } = await axiosinstanse.get(Endpoints.GET_CART_BY_UID + uid);
    const acseptableData : Cart = data[0];
    if (acseptableData != undefined) {
        return acseptableData
    }
});
