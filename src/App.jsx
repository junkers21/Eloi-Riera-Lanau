import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import ViewNavigator from "./routes/ViewNavigator";
import './index.scss';

function App() {
    return (
        <>
            <div className="min-h-full">

                <NavBar />

                <main>

                    <ViewNavigator />

                </main>

                <Footer />
            </div>
        </>
    );
}

export default App;
