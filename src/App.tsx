import './App.scss'
import Layout from "./components/Layout/Layout.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Landing from "./pages/Landing/Landing.tsx";
import Authentication from "./pages/Authentication/Authentication.tsx";
import Search from "./pages/Search/Search.tsx";
import SearchResults from "./pages/SearchResults/SearchResults.tsx";
import store, {persistor} from "./store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    path: "/",
                    element: <Landing/>
                },
                {
                    path: "authentication",
                    element: <Authentication/>,
                },
                {
                    path: "search",
                    element: <Search/>,
                },
                {
                    path: "search-results",
                    element: <SearchResults/>,
                },
            ]
        }
    ]);


    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <RouterProvider router={router}/>
            </PersistGate>
        </Provider>
    )
}

export default App
