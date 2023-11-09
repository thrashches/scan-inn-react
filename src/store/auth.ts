import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export interface IUserInfo {
    "eventFiltersInfo": {
        "usedCompanyCount": number,
        "companyLimit": number
    }
}

export interface IAuthState {
    accessToken: string;
    userInfo: IUserInfo|null,
}

const initialState: IAuthState = {
    accessToken: "",
    userInfo: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAccessToken: (state, action: PayloadAction<string>) => {
            state.accessToken = action.payload
        },
        setUserInfo: (state, action: PayloadAction<IUserInfo|null>) => {
            state.userInfo = action.payload
        },
    },
})

export default authSlice.reducer;

export const {setAccessToken, setUserInfo} = authSlice.actions;