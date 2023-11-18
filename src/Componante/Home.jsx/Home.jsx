import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Catagorys from "../Shared/Catagorys";


const Home = () => {
    return (
        <div>
            <h1 className="text-7xl mb-4 text-rose-600	">WELCOME TOYS WEBSITE</h1>
            <Header></Header>
            
            <Outlet></Outlet>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;