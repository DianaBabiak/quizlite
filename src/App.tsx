import './App.css'
import {Container} from "./components/container/Container.tsx";
import {RouterProvider} from "react-router-dom";
import {router} from "./router.tsx";
import {Header} from "./featers/header/Header.tsx";


function App() {
    return (
        <>
            <Header/>
            <Container>
                <RouterProvider router={router} />
            </Container>
        </>


    )
}

export default App
