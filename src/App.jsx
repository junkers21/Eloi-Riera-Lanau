import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import ViewNavigator from "./routes/ViewNavigator";
import './index.scss';
import { HelmetProvider } from "react-helmet-async";

function App() {
    return (
        <>
            <div className="min-h-full">

                <NavBar />

                <main>
                    <HelmetProvider>
                        <ViewNavigator />
                    </HelmetProvider>
                </main>

                <Footer />
            </div>
        </>
    );
}

export default App;
