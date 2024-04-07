import {createBrowserRouter} from "react-router-dom";

import {Export} from "./page/export/Export.tsx";
import {ListCards} from "./page/listCards/ListCards.tsx";
import {CreateCards} from "./page/createCards/CreateCards.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ListCards/>,
    },
    {
        path: "/create",
        element: <CreateCards/>,
    },
    {
        path: "/create/export",
        element: <Export/>,
    },
]);
