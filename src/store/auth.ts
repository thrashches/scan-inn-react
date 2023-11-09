import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export interface IToken {
    accessToken: string,
    expire: string,
}

export interface IUserInfo {
    "eventFiltersInfo": {
        "usedCompanyCount": number,
        "companyLimit": number
    }
}

export interface IAuthState {
    token: IToken,
    userInfo: IUserInfo|null,
}

const initialState: IAuthState = {
    token: {
        accessToken: "",
        expire: "",
    },
    userInfo: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<IToken>) => {
            state.token = action.payload
        },
        setUserInfo: (state, action: PayloadAction<IUserInfo|null>) => {
            state.userInfo = action.payload
        },
    },
})

export default authSlice.reducer;

export const {setToken, setUserInfo} = authSlice.actions;