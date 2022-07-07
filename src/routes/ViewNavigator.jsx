import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import { Suspense } from "react"
import Home from "../pages/Home/Home"


export default function ViewNavigator(){
    return (
        <Suspense>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                    </Routes>
                </Router>
        </Suspense>
    )
}