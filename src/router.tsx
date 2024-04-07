import {createBrowserRouter} from "react-router-dom";
import {Cards} from "./page/cards/Cards.tsx";
import {Export} from "./page/export/Export.tsx";
import {ListCards} from "./page/listCards/ListCards.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ListCards/>,
    },
    {
        path: "/create",
        element: <Cards/>,
    },
    {
        path: "/create/export",
        element: <Export/>,
    },
]);
