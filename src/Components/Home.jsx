import { Outlet, useLocation, useNavigation } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";

const Home = () => {

    let nevigation = useNavigation();
    let location = useLocation();

    useEffect(() => {
        console.log(location.pathname)
    },[location])
  
    return (
        <div> 
           <Header></Header>
            <div className="min-h-[600px]">
                {
                    nevigation.state === 'loading'?  
                 <div className="flex justify-center">
                        <span className="loading loading-spinner loading-xl "></span>
                 </div>: <Outlet/>
                }
               
            </div>
           <Footer ></Footer>
        </div>
    );
};

export default Home;