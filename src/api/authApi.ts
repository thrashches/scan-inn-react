import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
            baseUrl: 'https://gateway.scan-interfax.ru/api/v1/account/'
        }
    ),
    endpoints: (builder)=> ({
        login: builder.mutation()
    })
})