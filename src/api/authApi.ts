import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";


export interface ICredentials {
    username: string;
    password: string;
}

export interface IToken {
    accessToken: string;
    expire: string;
}

export const authApi = createApi({
    // reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://gateway.scan-interfax.ru/api/v1/account/'
    }),
    endpoints: (builder) => ({
        login: builder.mutation<IToken, ICredentials>({
            query: (credentials) => ({
                url: 'login',
                method: 'POST',
                body: credentials,
            }),
        }),
    })
})


export const {useLoginMutation} = authApi;