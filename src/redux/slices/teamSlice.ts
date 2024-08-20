import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosinstanse } from "../axiosInstance";
import { Endpoints, Status, TeamMember } from "../../types";

type TeamState = {
    data: TeamMember[];
    status: Status;
};

const initialState: TeamState = {
    data: [],
    status: Status.LOADING,
};

export const TeamSlice = createSlice({
    name: "teamMembers",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTeamMembers.pending, (state) => {
            state.status = Status.LOADING;
        });
        builder.addCase(getTeamMembers.fulfilled, (state, action) => {
            state.status = Status.SUCSESS;
            state.data = action.payload;
        });
        builder.addCase(getTeamMembers.rejected, (state) => {
            state.status = Status.ERROR;
            alert("ERROR" + state.status);
        });
    },
});

export const getTeamMembers = createAsyncThunk("members", async () => {
    const { data } = await axiosinstanse.get(Endpoints.GET_TEAM);

    return data;
});
